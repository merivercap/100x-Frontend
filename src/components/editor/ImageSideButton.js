import React from 'react';
import PropTypes from 'prop-types';

import {
  addNewBlock,
  Block,
} from 'medium-draft';

import {
  EditorState,
  AtomicBlockUtils,
} from 'draft-js';

// import Camera from 'react-icons/lib/fa/camera';
// import Chain from 'react-icons/lib/fa/chain';

export class ImageSideButton extends React.Component {

  static propTypes = {
    setEditorState: PropTypes.func,
    getEditorState: PropTypes.func,
    close: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onClick() {
    this.input.value = null;
    this.input.click();
  }

  /*
  This is an example of how an image button can be added
  on the side control. This Button handles the image addition locally
  by creating an object url. You can override this method to upload
  images to your server first, then get the image url in return and then
  add to the editor.
  */
  onChange(e) {
    // e.preventDefault();
    const file = e.target.files[0];
    if (file.type.indexOf('image/') === 0) {
      // console.log(this.props.getEditorState());
      // eslint-disable-next-line no-undef
      const src = URL.createObjectURL(file);
      this.props.setEditorState(addNewBlock(
        this.props.getEditorState(),
        Block.IMAGE, {
          src,
        }
      ));
    }
    this.props.close();
  }

  render() {
    return (
      <button
        className="md-sb-button md-sb-img-button"
        type="button"
        onClick={this.onClick}
        title="Add an Image"
      >
        <div className='full flex-center'>
          {/* <Camera size={20}/> */}
        </div>

        <input
          type="file"
          accept="image/*"
          ref={(c) => { this.input = c; }}
          onChange={this.onChange}
          style={{ display: 'none' }}
        />
      </button>
    );
  }
}



export class EmbedSideButton extends React.Component {
  static propTypes = {
    setEditorState: PropTypes.func,
    getEditorState: PropTypes.func,
    close: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.addEmbedURL = this.addEmbedURL.bind(this);
  }

  onClick() {
    const url = window.prompt('Enter a URL', 'https://www.google.com');
    this.props.close();
    if (!url) {
      return;
    }
    this.addEmbedURL(url);
  }

  addEmbedURL(url) {
    let editorState = this.props.getEditorState();
    const content = editorState.getCurrentContent();
    const contentWithEntity = content.createEntity('embed', 'IMMUTABLE', {url});
    const entityKey = contentWithEntity.getLastCreatedEntityKey();
    editorState = EditorState.push(editorState, contentWithEntity, 'create-entity');
    this.props.setEditorState(
      AtomicBlockUtils.insertAtomicBlock(
        editorState,
        entityKey,
        'E'
      )
    );
  }

  render() {
    // return (
    //   <button
    //     className="md-sb-button md-sb-img-button"
    //     type="button"
    //     title="Add an Embed"
    //     onClick={this.onClick}
    //   >
    //     <i className="fa fa-code" />
    //   </button>
    // );

    return (
      <button
        className="md-sb-button md-sb-img-button"
        type="button"
        title="Add an Embed"
        onClick={this.onClick}
      >
        <div className='full flex-center'>
          {/* <Chain size={20}/> */}
        </div>
      </button>
    );
  }

}




/////////////
//
//
// class AtomicEmbedComponent extends React.Component {
//
//   static propTypes = {
//     data: PropTypes.object.isRequired,
//   }
//
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       showIframe: false,
//     };
//
//     this.enablePreview = this.enablePreview.bind(this);
//   }
//
//   componentDidMount() {
//     this.renderEmbedly();
//   }
//
//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.showIframe !== this.state.showIframe && this.state.showIframe === true) {
//       this.renderEmbedly();
//     }
//   }
//
//   getScript() {
//     const script = document.createElement('script');
//     script.async = 1;
//     script.src = '//cdn.embedly.com/widgets/platform.js';
//     script.onload = () => {
//       window.embedly();
//     };
//     document.body.appendChild(script);
//   }
//
//   renderEmbedly() {
//     if (window.embedly) {
//       window.embedly();
//     } else {
//       this.getScript();
//     }
//   }
//
//   enablePreview() {
//     this.setState({
//       showIframe: true,
//     });
//   }
//
//   render() {
//     const { url } = this.props.data;
//     const innerHTML = `<div><a class="embedly-card" href="${url}" data-card-controls="0" data-card-theme="dark">Embedded ― ${url}</a></div>`;
//     return (
//       <div className="md-block-atomic-embed">
//         <div dangerouslySetInnerHTML={{ __html: innerHTML }} />
//       </div>
//     );
//   }
// }
//
// const AtomicBlock = (props) => {
//   const { blockProps, block } = props;
//   const content = blockProps.getEditorState().getCurrentContent();
//   const entity = content.getEntity(block.getEntityAt(0));
//   const data = entity.getData();
//   const type = entity.getType();
//   if (blockProps.components[type]) {
//     const AtComponent = blockProps.components[type];
//     return (
//       <div className={`md-block-atomic-wrapper md-block-atomic-wrapper-${type}`}>
//         <AtComponent data={data} />
//       </div>
//     );
//   }
//   return <p>Block of type <b>{type}</b> is not supported.</p>;
// };
