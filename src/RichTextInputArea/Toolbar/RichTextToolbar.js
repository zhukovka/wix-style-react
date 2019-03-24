import React from 'react';
import classNames from 'classnames';

import styles from './RichTextToolbar.scss';
import RichTextToolbarButton from './RichTextToolbarButton';
import RichTextToolbarLinkButton from './RichTextToolbarLinkButton';
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
  { type, iconComponent: Icon, isActive, ...buttonData },
) => (
  <RichTextToolbarButton
    key={`${index}-${type}`}
    dataHook={`richtextarea-button-${type.toLowerCase()}`}
    isActive={isActive()}
    {...buttonData}
  >
    <Icon />
  </RichTextToolbarButton>
);

const renderLinkButton = (
  index,
  { type, iconComponent: Icon, isActive, ...buttonData },
) => (
  <RichTextToolbarLinkButton
    key={`${index}-${type}`}
    dataHook={`richtextarea-button-${type.toLowerCase()}`}
    isActive={isActive()}
    {...buttonData}
  >
    <Icon />
  </RichTextToolbarLinkButton>
);

const RichTextToolbar = ({
  dataHook,
  className,
  editorState,
  onBold,
  onItalic,
  onUnderline,
  onLink,
  onBulletedList,
  onNumberedList,
}) => {
  const buttons = [
    {
      type: inlineStyleTypes.bold,
      onClick: () => toggleStyle(editorState, onBold, inlineStyleTypes.bold),
      iconComponent: TextAreaBold,
      isActive: () =>
        EditorUtilities.hasStyle(editorState, inlineStyleTypes.bold),
      tooltipText: 'Bold',
      render: (index, data) => renderButton(index, data),
    },
    {
      type: inlineStyleTypes.italic,
      onClick: () =>
        toggleStyle(editorState, onItalic, inlineStyleTypes.italic),
      iconComponent: TextAreaItalic,
      isActive: () =>
        EditorUtilities.hasStyle(editorState, inlineStyleTypes.italic),
      tooltipText: 'Italic',
      render: (index, data) => renderButton(index, data),
    },
    {
      type: inlineStyleTypes.underline,
      onClick: () =>
        toggleStyle(editorState, onUnderline, inlineStyleTypes.underline),
      iconComponent: TextAreaUnderline,
      isActive: () =>
        EditorUtilities.hasStyle(editorState, inlineStyleTypes.underline),
      tooltipText: 'Underline',
      render: (index, data) => renderButton(index, data),
    },
    {
      type: entityTypes.link,
      onSubmit: (event, linkData) =>
        toggleEntity(editorState, onLink, linkData),
      data: {
        text: EditorUtilities.getSelectedText(editorState),
      },
      iconComponent: TextAreaLink,
      isActive: () => EditorUtilities.hasEntity(editorState, entityTypes.link),
      tooltipText: 'Insert link',
      render: (index, data) => renderLinkButton(index, data),
    },
    {
      type: blockTypes.bulletedList,
      onClick: () =>
        toggleBlockType(editorState, onBulletedList, blockTypes.bulletedList),
      iconComponent: TextAreaBulletList,
      isActive: () =>
        EditorUtilities.hasBlockType(editorState, blockTypes.bulletedList),

      tooltipText: 'Bulleted List',
      render: (index, data) => renderButton(index, data),
    },
    {
      type: blockTypes.numberedList,
      onClick: () =>
        toggleBlockType(editorState, onNumberedList, blockTypes.numberedList),
      iconComponent: TextAreaNumberedList,
      isActive: () =>
        EditorUtilities.hasBlockType(editorState, blockTypes.numberedList),
      tooltipText: 'Numbered List',
      render: (index, data) => renderButton(index, data),
    },
  ];

  return (
    <div data-hook={dataHook} className={classNames(className, styles.root)}>
      {buttons.map(({ render, ...data }, index) => render(index, data))}
    </div>
  );
};

export default RichTextToolbar;
