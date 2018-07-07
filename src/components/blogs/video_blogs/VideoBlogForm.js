import React from 'react';
import PropTypes from 'prop-types';

import { Query } from 'react-apollo';

// Editor libraries
import { Editor, createEditorState } from 'medium-draft';
import mediumDraftImporter from 'medium-draft/lib/importer';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';

// HOCs
import Layout from '../../../HOCs/Layout';

// Utils
import { createVideoBlog } from '../../graphql/video_blogs_api';
import { handleInputChange } from '../../utils/helper';

class BlogForm extends React.Component {
  static state = {
    title: '',
    intro: '',
    video_link: '',
    body: '',
    cover_image_url: '',
    author_id: '',
    author_image_url: '',
    author: {},
    updatedAt: '',
    error: {},
  };

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
          <form onSubmit={this._handleSubmit}>
            <div className="title-container input-container">
              <label>Title
                <input
                  type="text"
                  placeholder="Crypto world domination by 2030!"
                  onChange={this._handleInputChange('title')}
                  value={this.state.title} />
              </label>
              <p className="title-error error-message">
                Your blog must have a title.
                {/* error.title.message */}
              </p>
            </div>
            <div className="intro-container input-container">
              <label>Intro
                <input
                  type="text"
                  placeholder="Crypto 100x Steem Bitcoin EOS Ethereum LiteCoin Crypto 100x Steem Bitcoin EOS Ethereum LiteCoin"
                  onChange={this._handleInputChange('intro')}
                  value={this.state.intro} />
              </label>
              <p className="intro-error error-message">
                {/* { error.intro.message } */}
              </p>
            </div>
            <div className="news-link-container input-container">
              <input
                type="text"
                placeholder="https://www.steemtube.com/videos/10"
                onChange={this._handleInputChange('video_link')}
                value={this.state.video_link} />
              <p className="news-link-error error-message">
                You must provide a video link.
                {/* { error.video_link.message } */}
              </p>
            </div>
            <div className="body-container input-container">
              <textarea
                placeholder="Brief summary or comment about article"
                onChange={this._handleInputChange('body')}
                value={this.state.body}>
              </textarea>
            </div>
            <div className="cover-image-container input-container">
              <label>Cover Image
                <input
                  type="file"
                  onChange={this._handleInputChange('cover_image_url')}
                  value={this.state.cover_image_url} />
              </label>
              <p className="photo-error error-message">
                Photo size is too large / incorrect file type
                {/* { error.photo.message } */}
              </p>
            </div>
            <button type="submit">Publish</button>
          </form>
        </section>
      </Layout>
    );
  }
}

export default BlogForm;