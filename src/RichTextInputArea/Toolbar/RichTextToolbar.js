import React from 'react';
import classNames from 'classnames';

import styles from './RichTextToolbar.scss';
import RichTextToolbarButton from './RichTextToolbarButton';
import RichTextToolbarLinkButton from './RichTextToolbarLinkButton';
import { RichTextInputAreaContext } from '../RichTextInputAreaContext';
import EditorUtilities from '../EditorUtilities';
import {
  inlineStyleTypes,
  blockTypes,
  entityTypes,
} from '../RichTextInputAreaTypes';
import TextAreaBold from '../../new-icons/system/TextAreaBold';
import TextAreaItalic from '../../new-icons/system/TextAreaItalic';
import TextAreaUnderline from '../../new-icons/system/TextAreaUnderline';
import TextAreaLink from '../../new-icons/system/TextAreaLink';
import TextAreaBulletList from '../../new-icons/system/TextAreaBulletList';
import TextAreaNumberedList from '../../new-icons/system/TextAreaNumberedList';

const toggleStyle = (editorState, onClick, toggledStyle) => {
  onClick(EditorUtilities.toggleStyle(editorState, toggledStyle));
};

const toggleBlockType = (editorState, onClick, toggledBlockType) => {
  onClick(EditorUtilities.toggleBlockType(editorState, toggledBlockType));
};

const toggleEntity = (editorState, onClick, linkData) => {
  onClick(EditorUtilities.toggleEntity(editorState, linkData));
};

const renderButton = (
  index,
  { type, iconComponent: Icon, isDisabled, isActive, ...buttonData },
) => (
  <RichTextToolbarButton
    key={`${index}-${type}`}
    dataHook={`richtextarea-button-${type.toLowerCase()}`}
    isDisabled={isDisabled}
    isActive={!isDisabled && isActive()}
    {...buttonData}
  >
    <Icon />
  </RichTextToolbarButton>
);

const renderLinkButton = (
  index,
  { type, iconComponent: Icon, isDisabled, isActive, ...buttonData },
) => (
  <RichTextToolbarLinkButton
    key={`${index}-${type}`}
    dataHook={`richtextarea-button-${type.toLowerCase()}`}
    isDisabled={isDisabled}
    isActive={!isDisabled && isActive()}
    {...buttonData}
  >
    <Icon />
  </RichTextToolbarLinkButton>
);

const RichTextToolbar = ({
  dataHook,
  className,
  isDisabled,
  editorState,
  onBold,
  onItalic,
  onUnderline,
  onLink,
  onBulletedList,
  onNumberedList,
}) => {
  return (
    <RichTextInputAreaContext.Consumer>
      {({ texts }) => {
        const buttons = [
          {
            type: inlineStyleTypes.bold,
            onClick: () =>
              toggleStyle(editorState, onBold, inlineStyleTypes.bold),
            iconComponent: TextAreaBold,
            isDisabled,
            isActive: () =>
              EditorUtilities.isEditorFocused(editorState) &&
              EditorUtilities.hasStyle(editorState, inlineStyleTypes.bold),
            tooltipText: texts.toolbarButtons.boldButtonLabel,
            render: (index, data) => renderButton(index, data),
          },
          {
            type: inlineStyleTypes.italic,
            onClick: () =>
              toggleStyle(editorState, onItalic, inlineStyleTypes.italic),
            iconComponent: TextAreaItalic,
            isDisabled,
            isActive: () =>
              EditorUtilities.isEditorFocused(editorState) &&
              EditorUtilities.hasStyle(editorState, inlineStyleTypes.italic),
            tooltipText: texts.toolbarButtons.italicButtonLabel,
            render: (index, data) => renderButton(index, data),
          },
          {
            type: inlineStyleTypes.underline,
            onClick: () =>
              toggleStyle(editorState, onUnderline, inlineStyleTypes.underline),
            iconComponent: TextAreaUnderline,
            isDisabled,
            isActive: () =>
              EditorUtilities.isEditorFocused(editorState) &&
              EditorUtilities.hasStyle(editorState, inlineStyleTypes.underline),
            tooltipText: texts.toolbarButtons.underlineButtonLabel,
            render: (index, data) => renderButton(index, data),
          },
          {
            type: entityTypes.link,
            onSubmit: (event, linkData) =>
              toggleEntity(editorState, onLink, linkData),
            data: {
              text: EditorUtilities.getSelectedText(editorState),
            },
            isDisabled,
            iconComponent: TextAreaLink,
            isActive: () =>
              EditorUtilities.isEditorFocused(editorState) &&
              EditorUtilities.hasEntity(editorState, entityTypes.link),
            tooltipText: texts.toolbarButtons.linkButtonLabel,
            render: (index, data) => renderLinkButton(index, data),
          },
          {
            type: blockTypes.bulletedList,
            onClick: () =>
              toggleBlockType(
                editorState,
                onBulletedList,
                blockTypes.bulletedList,
              ),
            iconComponent: TextAreaBulletList,
            isDisabled,
            isActive: () =>
              EditorUtilities.isEditorFocused(editorState) &&
              EditorUtilities.hasBlockType(
                editorState,
                blockTypes.bulletedList,
              ),
            tooltipText: texts.toolbarButtons.bulletedListButtonLabel,
            render: (index, data) => renderButton(index, data),
          },
          {
            type: blockTypes.numberedList,
            onClick: () =>
              toggleBlockType(
                editorState,
                onNumberedList,
                blockTypes.numberedList,
              ),
            iconComponent: TextAreaNumberedList,
            isDisabled,
            isActive: () =>
              EditorUtilities.isEditorFocused(editorState) &&
              EditorUtilities.hasBlockType(
                editorState,
                blockTypes.numberedList,
              ),
            tooltipText: texts.toolbarButtons.numberedListButtonLabel,
            render: (index, data) => renderButton(index, data),
          },
        ];

        return (
          <div
            data-hook={dataHook}
            className={classNames(className, styles.root)}
          >
            {buttons.map(({ render, ...data }, index) => render(index, data))}
          </div>
        );
      }}
    </RichTextInputAreaContext.Consumer>
  );
};

export default RichTextToolbar;
