import React from 'react';
import styles from './Button.scss';
import classNames from 'classnames';

export default function Button(props) {

    const {style ='fullblue', hover, active, disabled, height, onClick} = props;

    const className = classNames({
        [styles.button]:true,
        [styles[style]]:true,
        [styles.hover]: hover,
        [styles.active]:active,
        [styles.disabled]:disabled,
        [styles[`height${height}`]]: height !== 'medium'
    });

    const _style = {
        height
    };

    return (
        <button className={className} onClick={onClick} style={_style} >
            <div className={styles.inner}>
                {props.children}
            </div>
        </button>
    );
}

Button.displayName = 'Button';
Button.defaultProps = {
    style: 'fullblue',
    height: 'medium'
}
Button.propTypes = {
    style: React.PropTypes.oneOf(['fullblue', 'emptyblue', 'fullpurple', 'emptypurple', 'fullgreen', 'emptygreen', 'fullred', 'emptyred']).isRequired,
    height: React.PropTypes.oneOf(['small', 'medium', 'large']),
    hover: React.PropTypes.bool,
    active: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    children: React.PropTypes.any
}
