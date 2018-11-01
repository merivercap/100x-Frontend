import React from 'react';
import { compose, graphql } from 'react-apollo';

import Layout from '../../../../HOCs/Layout';
import Textarea from '../../../shared/Textarea';

import { BROADCAST_POST, GET_ALL_POSTS } from '../../../../graphql/blogs_api';
import {
  FieldValidation,
  isFileUnderLimit,
  isNotEmpty,
} from '../../../../utils/validators';

class StoryForm extends React.Component {
  state = generateDefaultState();

  render() {
    return (
      <section className="blog-form story-form">
        <form onSubmit={this.handleSubmit}>
          <div className="title-container input-container blog-form--item">
            <input
              placeholder="Title"
              name="title"
              onChange={this.handleInput}
              type="text"
              value={this.state.form.title} />
            {/* <p className="title-error error-message">
              Your blog must have a title.
              {/* error.title.message
            </p> */}
          </div>
          <div className="body-container input-container blog-form--item">
            <Textarea onChange={this.handleTextareaInput} />
          </div>
          <button className="blog-form--item submit-button" type="submit">Publish</button>
        </form>
      </section>
    );
  }

  handleInput = (event) => {
    const { form, validation } = this.state;
    const { name, value } = event.target;
    switch (name) {
      case 'cover_image_url':
        return this.setState({
          form: { ...form, cover_image_url: value },
          validation: {
            ...validation,
            cover_image_url: isFileUnderLimit(value),
            submitError: FieldValidation.PRISTINE
          }
        });
      default:
        this.setState({
          form: { ...form, [name]: value },
          validation: {
            ...validation,
            [name]: isNotEmpty(value),
            submitError: FieldValidation.PRISTINE,
          }
        });
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log('this.state: ', this.state);
    // TODO: make query to create blog here    
    this.props.broadcastPost(this.state.form);
  }

  handleTextareaInput = event => {
    sessionStorage.setItem('draftail:content', JSON.stringify(event));
    const { form } = this.state;
    this.setState({
      form: { ...form, body: event, }
    });
  }
}


export default compose(
  graphql(BROADCAST_POST, {
    props: (props) => ({
      broadcastPost: post => {
        // debugger;
        return props.mutate({
          variables: { post },
          refetchQueries: [{ query: GET_ALL_POSTS }],
          update: (store, { data: { broadcastPost } }) => {
            // ignore writing cache if we don't have access
            // see https://github.com/apollographql/apollo-client/issues/1701#issuecomment-380213533
            if (!store.data.data.ROOT_QUERY) return;
            const { getAllPosts } = store.readQuery({ query: GET_ALL_POSTS });
            getAllPosts.push(broadcastPost);
            store.writeQuery({ query: GET_ALL_POSTS, data: { getAllPosts } });
          },
        });
      },
    }),
  })
)(StoryForm);


/** Helper Functions */

function generateDefaultState() {
  return {
    author: {
      author: {},
      author_id: '',
      author_image_url: '',
    },
    form: {
      body: '',
      permLink: '',
      postType: 'BLOG_POST',
      tags: '',
      title: '',
    },
    errors: {
      body: FieldValidation.PRISTINE,
      submitError: FieldValidation.PRISTINE,
      title: FieldValidation.PRISTINE,
    },
  };
}

