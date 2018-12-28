import React from 'react';
import queryString from 'query-string';

export const RTLWrapper = ({ rtl, children }) => {
  return rtl ? (
    <div dir="rtl" className="rtl">
      {children}
    </div>
  ) : (
    children
  );
};
RTLWrapper.defaultProps = {
  rtl: queryString.parse(window.location.search).rtl !== undefined,
};
