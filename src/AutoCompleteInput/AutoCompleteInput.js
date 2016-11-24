import React           from 'react';
import styles          from './AutoCompleteInput.scss';
import classNames      from 'classnames';
import _               from 'lodash';
import Input           from '../Input/Input.js';
import MagnifyingGlass from '../svg/MagnifyingGlass.js';

class AutoCompleteInput extends React.Component {
    constructor(params) {
        super(params);

        this.state = {
            selectedSuggestion: -1,
            shouldHideSuggestions: true
        };

        this.onMouseClickSuggestion = this.onMouseClickSuggestion.bind(this);
        this.onFocus=this.onFocus.bind(this);
        this.onBlur=this.onBlur.bind(this);
        this.onChange=this.onChange.bind(this);
        this.onKeyDown=this.onKeyDown.bind(this);
    }

    render() {

        const autoSuggestionsWrapperClass = classNames({
            [styles.auto_suggestions_wrapper] : true,
            [styles.hidden] : this.state.shouldHideSuggestions || _.isEmpty(this.props.suggestions)
        });

        return (
            <div className={styles.wrapper}>
                <Input 
                    {...this.props} 

                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onChange={this.onChange}
                    onKeyDown={this.onKeyDown}
                />

                <div className={autoSuggestionsWrapperClass}>

                    {this.props.header}

                    {_.map(this.props.suggestions, (suggestion, index) => {

                            if (!suggestion) return;

                            const classname = classNames({
                                [styles.suggestion] : true,
                                [styles.selected]   : index == this.state.selectedSuggestion
                            });

                            let key = suggestion.key || index;

                            if (suggestion.unselectable) {
                                return (
                                    <div key={key} className={classname} >
                                        {suggestion.text}
                                    </div>
                                );
                            } else {
                                return (
                                    <div key={key}
                                         className={classname}
                                         onMouseDown={_.partial(this.onMouseClickSuggestion, index)}
                                    >
                                        {suggestion.node || suggestion.text || suggestion}
                                    </div>
                                );
                            }
                        })
                    }
                </div>
            </div>
        );
    }

    onMouseClickSuggestion(index) {
        const {suggestions, onSet = ()=>{}} = this.props;

        const selectedSuggestion = suggestions[index];

        if (selectedSuggestion && !selectedSuggestion.disabled) {
            _.defer(() => onSet(suggestions[index]));
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
        this._onKeyDown(event); 

        if (this.props.onKeyDown) {
            this.props.onKeyDown(event);
        }
    }

    _onKeyDown(event) {
        const {suggestions, onSet = ()=>{}, value} = this.props;

        let selectedSuggestion = this.state.selectedSuggestion;
        const defaultSelection = null;

        switch (event.keyCode) {
            case 9:  // tab (skip preventDefault for the focus change)
                if (!suggestions || suggestions.length == 0 ||
                    selectedSuggestion == -1) {

                    return;
                }

                if (suggestions[selectedSuggestion]) {
                    onSet(suggestions[selectedSuggestion]);
                } else {
                    onSet(value);
                }

                onSet(suggestions[selectedSuggestion]);
                return;

            case 13: // enter
                if (!suggestions || suggestions.length == 0 ||
                    selectedSuggestion == -1) {

                    break;
                }

                if (suggestions.length == 0) {
                    return;
                }

                if (suggestions[selectedSuggestion]) {
                    onSet(suggestions[selectedSuggestion]);
                } else {
                    onSet(value);
                }

                this.setState({
                    shouldHideSuggestions : true,
                    selectedSuggestion    : defaultSelection
                });

                break;

            case 27: // escape
                this.setState({
                    shouldHideSuggestions : true,
                    value                 : value,
                    selectedSuggestion    : defaultSelection
                });

                break;

            case 38: // up
                if (!suggestions) return;

                do {
                    selectedSuggestion--;
                } while ((suggestions[selectedSuggestion] || {}).unselectable);

                this.handleUpDownKeys(selectedSuggestion);
                break;

            case 40: // down
                if (!suggestions) return;

                do {
                    selectedSuggestion++;
                } while ((suggestions[selectedSuggestion] || {}).unselectable);

                this.handleUpDownKeys(selectedSuggestion);
                break;

            default: return;
        }

        event.preventDefault();
    }

    handleUpDownKeys(selectedSuggestion) {
        if (!this.props.suggestions) return;

        if (this.props.suggestions.length !== 0) {
            if (this.state.shouldHideSuggestions) {

                this.setState({
                    shouldHideSuggestions : false,
                    selectedSuggestion    : this.defaultSelection
                });

            } else {

                if (selectedSuggestion < 0) {
                    selectedSuggestion = this.props.suggestions.length - 1;
                }

                if (selectedSuggestion === this.props.suggestions.length) {
                    selectedSuggestion = 0;
                }

                var newState = {
                    selectedSuggestion: selectedSuggestion
                };

                if (_.isString(this.props.suggestions[selectedSuggestion])) {
                    newState.value = this.props.suggestions[selectedSuggestion];
                }

                this.setState(newState);
            }
        }
    }
}

AutoCompleteInput.displayName = 'AutoCompleteInput';

AutoCompleteInput.propTypes = _.extend({
}, Input.propTypes);

export default AutoCompleteInput;

