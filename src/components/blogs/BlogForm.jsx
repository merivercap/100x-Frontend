import React from 'react';
// import PropTypes from 'prop-types';
import { compose, graphql } from 'react-apollo';

// Editor libraries
// import { Editor, createEditorState } from 'medium-draft';
// import mediumDraftImporter from 'medium-draft/lib/importer';
// import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';

// HOCs
import Layout from '../../HOCs/Layout';

// Components
import Textarea from '../shared/Textarea';

// Utils
import { createBlog, fetchBlogs } from '../../graphql/blogs_api';
import {
  // errorMessages,
  FieldValidation,
  // getFieldValidationStatus,
  // getInputValidationClass,
  // getInputErrorClass,
  isFileUnderLimit,
  isNotEmpty,
} from '../../utils/validators';

class BlogForm extends React.Component {
  state = generateDefaultState();

  componentDidMount() {
    // TODO: check if user is authenticated - redirect if not
  }

  render() {
    // const { errors } = this.state;
    const {
      title,
      // body,
      // cover_image_url
    } = this.state.form;
    return (
      <Layout>
        <section className="blog-form">
          <form onSubmit={ this.handleSubmit }>
            <div className="title-container input-container blog-form--item">
              <h4>Title</h4>
              <input
                placeholder="Post Title"
                name="title"
                onChange={ this.handleInput }
                type="text"
                value={ title } />
              {/* <p className="title-error error-message">
                Your blog must have a title.
                {/* error.title.message
              </p> */}
            </div>
            <div className="body-container input-container blog-form--item">
              <Textarea onChange={ this.handleTextareaInput } />
            </div>
            <button className="blog-form--item submit-button" type="submit">Publish</button>
          </form>
        </section>
      </Layout>
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
  graphql(createBlog, {
    props: (props) => ({
      broadcastPost: post => {
        debugger;
        return props.mutate({
          variables: { post },
          refetchQueries: [{ query: fetchBlogs }],
          update: (store, { data: { broadcastPost } }) => {
            // ignore writing cache if we don't have access
            // see https://github.com/apollographql/apollo-client/issues/1701#issuecomment-380213533
            if (!store.data.data.ROOT_QUERY) return;
            const { getAllPosts } = store.readQuery({ query: fetchBlogs });
            getAllPosts.push(broadcastPost);
            store.writeQuery({ query: fetchBlogs, data: { getAllPosts } });
          },
        });
      },
    }),
  })
)(BlogForm);


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
