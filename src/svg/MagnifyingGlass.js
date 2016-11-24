import React from 'react';

export default function MagnifyingGlass(props) {
    let directionStyle = {};

    if (props.alignLeft) {
        directionStyle = {
            MozTransform: 'scaleX(-1)',
            OTransform: 'scaleX(-1)',
            Webkit: 'scaleX(-1)',
            transform: 'scaleX(-1)'
        };
    }

    return (
        <svg width='18px' height='18px' viewBox='0 0 18 18' style={directionStyle} >
            <g>
                <path d='M7.5,1C11.1,1,14,3.9,14,7.5S11.1,14,7.5,14S1,11.1,1,7.5S3.9,1,7.5,1 M7.5,0C3.4,0,0,3.4,0,7.5 S3.4,15,7.5,15S15,11.6,15,7.5S11.6,0,7.5,0L7.5,0z'/>
            </g>
            <line strokeLinecap='round' strokeMiterlimit='10' x1='12.6' y1='12.5' x2='17.5' y2='17.4'/>
        </svg>
    );
}

MagnifyingGlass.displayName = 'MagnifyingGlass';

MagnifyingGlass.propTypes = {
    alignLeft: React.PropTypes.bool
};
