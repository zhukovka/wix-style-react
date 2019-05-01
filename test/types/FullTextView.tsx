import * as React from 'react';
import FullTextView from '../../src/FullTextView';

function FullTextViewWithMandatoryProps() {
  return <FullTextView />;
}

function FullTextViewWithAllProps() {
  return <FullTextView maxWidth="10" />;
}
