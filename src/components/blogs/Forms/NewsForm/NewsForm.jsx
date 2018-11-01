import React from 'react';
import { compose, graphql } from 'react-apollo';

import { BROADCAST_POST, GET_ALL_POSTS } from '../../../../graphql/blogs_api';
import {
  FieldValidation,
  isFileUnderLimit,
  isNotEmpty,
} from '../../../../utils/validators';

class NewsForm extends React.Component {
  state = generateDefaultState();

  render() {
    const { body, title } = this.state.form;
    return (
      <section className="blog-form news-form">
        <form onSubmit={ this.handleSubmit }>
          <div className="title-container input-container blog-form--item">
            <input
              placeholder="Title"
              name="title"
              onChange={this.handleInput}
              type="text"
              value={title} />
            {/* <p className="title-error error-message">
              Your blog must have a title.
              {/* error.title.message
            </p> */}
          </div>
          <div className="body-container input-container blog-form--item">
            <textarea 
              className="news-link-input"
              placeholder="Link"
              name="body"
              onChange={this.handleInput}
              type="text"
              value={body} />
            {/* <p className="title-error error-message">
              Your blog must have a title.
              {/* error.title.message
            </p> */}
          </div>
          <button className="blog-form--item submit-button" type="submit">Publish</button>
        </form>
      </section>
    );
  }

  handleInput = event => {
    const { form, validation } = this.state;
    const { name, value } = event.target;
    this.setState({
      form: { ...form, [name]: value },
      validation: {
        ...validation,
        [name]: isNotEmpty(value),
        submitError: FieldValidation.PRISTINE,
      }
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log('this.state: ', this.state);
    // TODO: make query to create blog here    
    this.props.broadcastPost(this.state.form);
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
)(NewsForm);


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
      postType: 'NEWS_POST',
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

