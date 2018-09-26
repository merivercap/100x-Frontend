import * as React from 'react';
import { Editor, EditorState, convertFromHTML, ContentState } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';

function createEditorState(html) {
  if (!html) return EditorState.createEmpty();

  const blocksFromHtml = convertFromHTML(html);
  const contentState = ContentState.createFromBlockArray(
    blocksFromHTML.contentBlocks,
    blocksFromHTML.entityMap
  );

  return EditorState.createWithContent(contentState);
}


class Textarea extends React.Component {
  state = {
    editorState: createEditorState(this.props.html || ''),
    hasError: false,
    isFocused: false,
    isPristine: true,
    isSuccessful: false,
    value: this.props.value || '',
  };

  render() {
    const { label, placeholder } = this.props;
    return (
      <div className="textarea-container">
        <div className="textarea-wrapper">
          <div className="textarea-content">
            <label className="textarea-label">
              {!!label && <span>{label}</span>}
            </label>
            <div className="textarea-text">
              <Editor
                editorState={this.state.editorState}
                placeholder={placeholder}
                onChange={this.handleTextareaOnChange}
                onFocus={this.toggleTextareaFocus}
                onBlur={this.toggleTextareaFocus} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  toggleTextareaFocus = () => this.setState({ isFocuse: !this.state.isFocuse });

  handleTextareaOnChange = event => {
    const { onValidity, notPlainText } = this.props;
    const contentState = event.getCurrentContext();
    const plainText = contentState.getPlainText();
    const html = stateToHTML(contentState);
    const outputString = notPlainText && contentState.hasTeoxt() ? html : plainText;
    if (onValidity) {
      const { error, success } = onValidity(outputString);
      this.setState({
        editorState: event,
        value: outputString,
        isSuccessful: success,
        hasError: error,
        isPristine: false,
      });
    }
  }
}
