import React from 'react';
import PropTypes from 'prop-types';

import { Query } from 'react-apollo';

// Editor libraries
import { Editor, createEditorState } from 'medium-draft';
import mediumDraftImporter from 'medium-draft/lib/importer';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';

// HOCs
import Layout from '../../HOCs/Layout';

// Components
import MediumEditor from '../editor/MediumEditor';

// Utils
import { createBlog } from '../../graphql/blogs_api';
import { handleInputChange } from '../../utils/formHelper';

class BlogForm extends React.Component {
  state = generateDefaultState();

  componentDidMount() {
    // TODO: check if user is authenticated - redirect if not
  }

  _updateEditorState = editorState => {
    this.setState({ body: editorState });
  }
  
  _handleInputChange = field => handleInputChange(this, field)

  _handleSubmit = event => {
    event.preventDefault();
    // TODO: make query to craete blog here
  }

  render() {
    const error = this.state.error;
    return (
      <Layout>
        <section className="blog-form">
          <form onSubmit={ this._handleSubmit }>
            <div className="title-container input-container blog-form--item">
              <h4>Title</h4>
              <input
                className="blog-form--input title"
                type="text"
                placeholder="Post Title"
                onChange={ this._handleInputChange('title') }
                value={ this.state.title } />
              {/* <p className="title-error error-message">
                Your blog must have a title.
                {/* error.title.message
              </p> */}
            </div>
            <div className="body-container input-container blog-form--item">
              {/* <MediumEditor editorState={ this.state.body } updateEditorState={ this.updateEditorState } /> */}
              <textarea
                className="blog-form--input body"
                value={ this.state.body }
                onChange={ this._handleInputChange('body') }>
              </textarea>
              {/* <p className="body-error error-message">
                Blog body cannot be blank.
                {/* { error.body.message }
              </p> */}
            </div>
            <div className="cover-image-container input-container blog-form--item">
              <h4>Cover Image</h4>
              <input
                className="blog-form--input photo"
                type="file"
                onChange={ this._handleInputChange('cover_image_url') }
                value={ this.state.cover_image_url } />
              {/* <p className="photo-error error-message">
                Photo size is too large / incorrect file type
                { error.photo.message }
              </p> */}
            </div>
            <button className="blog-form--item" type="submit">Publish</button>
          </form>
        </section>
      </Layout>
    );
  }
}

export default BlogForm;


/** Helper Functions */

function generateDefaultState() {
  return {
    author: {},
    author_id: '',
    author_image_url: '',
    body: '',
    cover_image_url: '',
    error: {},
    intro: '',
    title: '',
    updatedAt: '',
  };
}
