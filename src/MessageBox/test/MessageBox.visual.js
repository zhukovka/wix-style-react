import React from 'react';
import { storiesOf } from '@storybook/react';

const alertStories = {
  EmptyState: require('../docs/AlertExamples/EmptyState').default,
  Standard: require('../docs/AlertExamples/Standard').default,
  Secondary: require('../docs/AlertExamples/Secondary').default,
  ImageWithSideAction: require('../docs/AlertExamples/ImageWithSideAction')
    .default,
  Scrollable: require('../docs/AlertExamples/Scrollable').default,
  Image: require('../docs/AlertExamples/Image').default,
  FootNote: require('../docs/AlertExamples/FootNote').default,
  Actions: require('../docs/AlertExamples/Actions').default,
};

const desctructiveStories = {
  Standard: require('../docs/DestructiveAlertExamples/Standard').default,
  Secondary: require('../docs/DestructiveAlertExamples/Secondary').default,
};

const announcementStories = {
  Standard: require('../docs/AnnouncementExamples/Standard').default,
  Footnote: require('../docs/AnnouncementExamples/Footnote').default,
  DisabledAction: require('../docs/AnnouncementExamples/DisabledAction')
    .default,
  PremiumAction: require('../docs/AnnouncementExamples/PremiumAction').default,
};

Object.entries(alertStories).forEach(([name, story]) =>
  storiesOf(`MessageBox/Alert`).add(name, () => React.createElement(story)),
);

storiesOf(`MessageBox/AlertRTL`).add('Actions', () => (
  <div dir="rtl">{React.createElement(alertStories.Actions)}</div>
));

Object.entries(desctructiveStories).forEach(([name, story]) =>
  storiesOf(`MessageBox/Destructive`).add(name, () =>
    React.createElement(story),
  ),
);

Object.entries(announcementStories).forEach(([name, story]) =>
  storiesOf(`MessageBox/Announcement`).add(name, () =>
    React.createElement(story),
  ),
);

Object.entries(announcementStories).forEach(([name, story]) =>
  storiesOf(`MessageBox/AnnouncementRTL`).add(name, () => (
    <div dir="rtl">{React.createElement(story)}</div>
  )),
);
