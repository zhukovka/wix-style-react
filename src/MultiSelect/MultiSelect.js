import React from 'react';
import Autosuggest from 'react-autosuggest';
import style from './multiSelect.scss';
import ButtonsBar from './ButtonsBar';
import TagsComponent from './TagsComponent';


const noop = () => {
};

const DELETE_KEY_CODE = 46;
const BACKSPACE_KEY_CODE = 8;

class MultiSelect extends React.Component {
  static propTypes = {
    onAddTag: React.PropTypes.func.isRequired,
    onRemoveTag: React.PropTypes.func.isRequired,
    displayNameProp: React.PropTypes.string,
    tags: React.PropTypes.array.isRequired,
    suggestions: React.PropTypes.array.isRequired,
    onChangeInput: React.PropTypes.func.isRequired,
    inputPlaceholder: React.PropTypes.string,
    renderTag: React.PropTypes.func,
    renderSuggestion: React.PropTypes.func.isRequired,
    onDone: React.PropTypes.func.isRequired,
    onCancel: React.PropTypes.func.isRequired,
    theme: React.PropTypes.object,
    multiSection: React.PropTypes.bool,
    renderSectionTitle: React.PropTypes.func,
    getSectionSuggestions: React.PropTypes.func
  };

  static defaultProps = {
    displayNameProp: 'id',
    inputPlaceholder: 'Add tag',
    theme: style,
    multiSection: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  componentDidMount() {
    this.autosuggestRef.input.focus();
  }

  renderSuggestionsContainer = ({children, ...rest}) => {
    const {theme} = this.props;
    if (children) {
      return (
        <div {...rest}>
          <div className={theme.shadeSeparatorTop}/>
          <div className={style.scrollArea}>
            {children}
          </div>
        </div>
      );
    } else {
      return (<div data-hook="no-suggestions-message" className={theme.noSuggestions}>No search results</div>);
    }
  };

  renderTagInputComponent = inputProps => {
    const {renderTag, inputPlaceholder, theme, displayNameProp, tags} = this.props;
    const shouldShowInputPlaceHolder = () => tags.length === 0;
    return (
      <div>
        <div className={theme.flexContainer}>
          <div className={theme.searchIcon}/>
          <div
            data-hook="tagsAndInputContainer"
            className={theme.tagsAndInputContainer}
            onKeyDown={this.handleOnKeyDown}
            >
            <TagsComponent
              renderTag={renderTag}
              tags={tags}
              onRemove={this.handleOnRemoveTag}
              tagDisplayProp={displayNameProp}
              theme={theme}
              />
            <input
              {...inputProps}
              className={theme.inputField}
              data-hook="autosuggest-input"
              placeholder={shouldShowInputPlaceHolder() ? inputPlaceholder : ''}
              />
          </div>
        </div>
        <div className={theme.lineSeparator}/>
      </div>
    );
  };

  removeLastTag = () => {
    const {tags} = this.props;
    const removedTag = tags[tags.length - 1];
    this.handleOnRemoveTag(removedTag);
  };

  handleOnDone = () => {
    this.props.onDone();
  };

  handleOnCancel = () => {
    this.props.onCancel();
  };

  onChangeAutoSuggest = (event, {newValue, method}) => {
    const newState = {inputValue: newValue};
    if (method === 'type') {
      this.props.onChangeInput(newValue);
    }
    this.setState(newState);
  };

  handleOnKeyDown = e => {
    const {inputValue} = this.state;

    if ((e.keyCode === DELETE_KEY_CODE || e.keyCode === BACKSPACE_KEY_CODE) && inputValue.length === 0) {
      this.removeLastTag();
    }
  };

  handleOnRemoveTag = removedTag => {
    this.props.onRemoveTag(removedTag);
    this.autosuggestRef.input.focus();
  };

  handleOnSuggestionSelected = (event, {suggestion}) => {
    this.props.onAddTag(suggestion);
    this.setState({
      inputValue: ''
    });
  };

  setAutosuggestRef = autosuggestRef => {
    this.autosuggestRef = autosuggestRef;
  };

  getSuggestionValue = suggestion => suggestion[this.props.displayNameProp];


  render() {
    const {inputValue} = this.state;
    const {theme, suggestions} = this.props;
    const inputProps = {
      value: inputValue,
      onChange: this.onChangeAutoSuggest
    };

    return (
      <div className={theme.multiSelectContainer}>
        <Autosuggest
          {...this.props}
          data-hook="autosuggest-component"
          ref={this.setAutosuggestRef}
          suggestions={suggestions}
          getSuggestionValue={this.getSuggestionValue}
          onSuggestionsFetchRequested={noop}
          renderSuggestionsContainer={this.renderSuggestionsContainer}
          renderInputComponent={this.renderTagInputComponent}
          inputProps={inputProps}
          onSuggestionSelected={this.handleOnSuggestionSelected}
          alwaysRenderSuggestions
          focusInputOnSuggestionClick
          />
        <div className={theme.shadeSeparatorBottom}/>
        <ButtonsBar onDone={this.handleOnDone} onCancel={this.handleOnCancel} theme={theme}/>
      </div>
    );
  }
}

export default MultiSelect;
