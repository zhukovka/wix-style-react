import React from 'react';
import styles from './AutoCompleteInput.scss';
import classNames from 'classnames';
import Input from '../Input/Input.js';
import defer from 'lodash.defer';
import isEqual from 'lodash.isequal';

class AutoCompleteInput extends React.Component {
  constructor(params) {
    super(params);

    this.state = {
      selectedSuggestion: -1,
      shouldHideSuggestions: true,
      isMouseDownOnWrapper: false
    };

    this.onMouseClickSuggestion = this.onMouseClickSuggestion.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
  }

  render() {

    const hidden = (this.state.shouldHideSuggestions && !this.state.isMouseDownOnWrapper) || !this.props.suggestions || this.props.suggestions.length === 0;

    if (hidden) {
      // Make sure the event listener is not connected when we're hidden
      document.removeEventListener('mouseup', this.onMouseUp);
    }

    const autoSuggestionsWrapperClass = classNames({
      [styles.auto_suggestions_wrapper]: true,
      [styles.hidden]: hidden,
      [styles.bottomnode]: !!this.props.bottomNode
    });

    return (
      <div className={styles.wrapper}>
        <Input
          ref={'input'}
          {...this.props}

          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          />

        <div className={autoSuggestionsWrapperClass} onMouseDown={this.onMouseDown} >
          {this.props.header}
          {this.renderSuggestions()}
          {this.renderBottomNode()}
        </div>
      </div>
    );
  }

  componentWillUnmount() {
    // Make sure the event listener is not connected when we're unmounting
    document.removeEventListener('mouseup', this.onMouseUp);
  }

  renderSuggestions() {
    if (!this.props.suggestions) {
      return null;
    }

    return this.props.suggestions.map((suggestion, index) => {

      if (!suggestion) {
        return null;
      }

      const classname = classNames({
        [styles.suggestion]: true,
        [styles.selected]: index === this.state.selectedSuggestion,
        [styles.selectable]: !suggestion.unselectable
      });

      const key = suggestion.key || index;

      if (suggestion.unselectable) {
        return (
          <div key={key} className={classname} >
            {suggestion.text}
          </div>
        );
      } else {
        return (
          <div
            key={key}
            className={classname}
            onMouseDown={() => (this.onMouseClickSuggestion(index))}
            >
            {suggestion.node || suggestion.text || suggestion}
          </div>
        );
      }
    });
  }

  renderBottomNode() {
    const {bottomNode} = this.props;

    if (bottomNode) {
      return <div className={styles.bottommessage}>{bottomNode}</div>;
    }

    return null;
  }

  onMouseClickSuggestion(index) {
    const {suggestions, onSet = () => { }} = this.props;

    const selectedSuggestion = suggestions[index];

    if (selectedSuggestion && !selectedSuggestion.disabled) {
      defer(() => onSet(suggestions[index]));
    }
  }

  onBlur(event) {

    this.setState({
      shouldHideSuggestions: true
    });

    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  }

  onFocus(event) {
    this.setState({
      shouldHideSuggestions: false
    });

    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  }

  onChange(event) {
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  }

  onKeyDown(event) {
    if (this._onKeyDown(event)) {
      return;
    }

    if (this.props.onKeyDown) {
      this.props.onKeyDown(event);
    }
  }

  onMouseDown() {
    this.setState({
      isMouseDownOnWrapper: true
    });

    document.addEventListener('mouseup', this.onMouseUp);
  }

  onMouseUp() {

    document.removeEventListener('mouseup', this.onMouseUp);

    this.setState({
      isMouseDownOnWrapper: false
    });
  }

  _onKeyDown(event) {
    const {suggestions, onSet = () => { }, value} = this.props;

    let selectedSuggestion = this.state.selectedSuggestion;
    const defaultSelection = null;

    switch (event.keyCode) {
      case 9:  // tab (skip preventDefault for the focus change)
        if (!suggestions || suggestions.length === 0 ||
          selectedSuggestion === -1) {

          return false;
        }

        if (suggestions[selectedSuggestion]) {
          onSet(suggestions[selectedSuggestion]);
        } else {
          onSet(value);
        }

        onSet(suggestions[selectedSuggestion]);
        return false;

      case 13: // enter
        if (!suggestions || suggestions.length === 0 || selectedSuggestion === -1) {
          break;
        }

        if (suggestions[selectedSuggestion]) {
          onSet(suggestions[selectedSuggestion]);
        } else {
          onSet(value);
        }

        this.setState({
          selectedSuggestion: defaultSelection
        });

        return true;

      case 27: // escape
        this.setState({
          shouldHideSuggestions: true,
          value,
          selectedSuggestion: defaultSelection
        });

        break;

      case 38: // up
        if (!suggestions) {
          return false;
        }

        do {
          selectedSuggestion--;
        } while ((suggestions[selectedSuggestion] || {}).unselectable);

        this.handleUpDownKeys(selectedSuggestion);
        break;

      case 40: // down
        if (!suggestions) {
          return false;
        }

        do {
          selectedSuggestion++;
        } while ((suggestions[selectedSuggestion] || {}).unselectable);

        this.handleUpDownKeys(selectedSuggestion);
        break;

      default: return false;
    }

    event.preventDefault();
    return false;
  }

  handleUpDownKeys(selectedSuggestion) {
    if (!this.props.suggestions) {
      return false;
    }

    if (this.props.suggestions.length !== 0) {
      if (this.state.shouldHideSuggestions) {

        this.setState({
          shouldHideSuggestions: false,
          selectedSuggestion: this.defaultSelection
        });

      } else {
        if (selectedSuggestion < 0) {
          selectedSuggestion = this.props.suggestions.length - 1;
        }

        if (selectedSuggestion === this.props.suggestions.length) {
          selectedSuggestion = 0;
        }

        const newState = {selectedSuggestion};

        this.setState(newState);
      }

      return true;
    }

    return false;
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(this.props.suggestions, nextProps.suggestions)) {
      this.setState({selectedSuggestion: -1});
    }
  }

  focus() {
    this.refs.input.focus();
  }

  blur() {
    this.refs.input.blur();
  }

  select() {
    this.refs.input.select();
  }
}

AutoCompleteInput.displayName = 'AutoCompleteInput';

AutoCompleteInput.defaultProps = Input.defaultProps;
AutoCompleteInput.propTypes = Input.propTypes;

export default AutoCompleteInput;
