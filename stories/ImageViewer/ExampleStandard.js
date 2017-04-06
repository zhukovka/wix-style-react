import React from 'react';
import Input from 'wix-style-react/Input';
import ImageViewer from '../../src/ImageViewer';

const style = {
  display: 'inline-block',
  padding: '0 25px 25px',
};

const Example = ({theme}) =>
  <div>
    <div className="ltr" style={style}>Without image<br/><br/><ImageViewer dataHook="empty-image-viewer" onAddImage={() => {}}/></div>
    <div className="ltr" style={style}>With image<br/><br/><ImageViewer onRemoveImage={() => {}} onUpdateImage={() => {}} imageUrl="https://upload.wikimedia.org/wikipedia/commons/d/dd/New_Mela_Ramanputhur_Holy_Family_Church.jpg"/></div>
  </div>;

Example.propTypes = {
  theme: React.PropTypes.string
};

export default Example;
