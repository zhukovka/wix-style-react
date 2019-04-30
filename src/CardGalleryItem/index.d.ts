import * as React from 'react';

export interface CardGalleryItemProps {
  primaryActionProps: {
    label?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLElement>;
  };
  secondaryActionProps: {
    label?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLElement>;
  };
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  backgroundImageUrl?: string;
  className?: string;
  dataHook?: string;
}

export default class CardGalleryItem extends React.Component<CardGalleryItemProps> {}
