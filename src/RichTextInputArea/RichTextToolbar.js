import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { EditorState, RichUtils } from '@wix/draft-js';

import styles from './RichTextToolbar.scss';
import RichTextToolbarButton from './RichTextToolbarButton';
import TextAreaBold from '../new-icons/system/TextAreaBold';
import TextAreaItalic from '../new-icons/system/TextAreaItalic';
import TextAreaUnderline from '../new-icons/system/TextAreaUnderline';
import TextAreaBulletList from '../new-icons/system/TextAreaBulletList';
import TextAreaNumberedList from '../new-icons/system/TextAreaNumberedList';

const RichTextToolbar = ({
  className,
  editorState,
  onBold,
  onItalic,
  onUnderline,
  onBulletedList,
  onNumberedList,
}) => {
  const toggleStyle = (event, onClick, toggledStyle) => {
    event.preventDefault();

    onClick(
      RichUtils.toggleInlineStyle(
        EditorState.forceSelection(editorState, editorState.getSelection()),
        toggledStyle,
      ),
    );
  };

  const toggleBlockType = (event, onClick, toggledBlockType) => {
    event.preventDefault();

    onClick(
      RichUtils.toggleBlockType(
        EditorState.forceSelection(editorState, editorState.getSelection()),
        toggledBlockType,
      ),
    );
  };

  const isActive = style => {
    return editorState && editorState.getCurrentInlineStyle().has(style);
  };

  const buttons = [
    {
      key: 'bold',
      onClick: event => toggleStyle(event, onBold, 'BOLD'),
      icon: TextAreaBold,
      tooltipText: 'Bold',
    },
    {
      key: 'italic',
      onClick: event => toggleStyle(event, onItalic, 'ITALIC'),
      icon: TextAreaItalic,
      tooltipText: 'Italic',
    },
    {
      key: 'underline',
      onClick: event => toggleStyle(event, onUnderline, 'UNDERLINE'),
      icon: TextAreaUnderline,
      tooltipText: 'Underline',
    },
    {
      key: 'unordered-list-item',
      onClick: event =>
        toggleBlockType(event, onBulletedList, 'unordered-list-item'),
      icon: TextAreaBulletList,
      tooltipText: 'Bulleted List',
    },
    {
      key: 'ordered-list-item',
      onClick: event =>
        toggleBlockType(event, onNumberedList, 'ordered-list-item'),
      icon: TextAreaNumberedList,
      tooltipText: 'Numbered List',
    },
  ];

  return (
    <div className={classNames(className, styles.root)}>
      {buttons.map((button, index) => {
        const { key, onClick, toggledStyle, tooltipText, icon: Icon } = button;

        return (
          <RichTextToolbarButton
            key={`${index}-${key}`}
            onClick={onClick}
            toggledStyle={toggledStyle}
            tooltipText={tooltipText}
            isActive={isActive(toggledStyle)}
          >
            <Icon />
          </RichTextToolbarButton>
        );
      })}
    </div>
  );
};

export default RichTextToolbar;
