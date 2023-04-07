import React from 'react';

const Button = (props) => {
    const styles = {
        backgroundColor: '#0097ce',
        color: 'white',
        fontSize: '35px',
        height: '60px',
        width: '60px',
        borderRadius: '6px',
        border: '0',
        display: 'flex',
        alignItems: 'center',
        padding: '0',
        fontFamily: 'Arial, Helvetica',
        justifyContent: 'center',
        cursor: 'pointer',
    };
	return (
		<button onClick={props.action} style={styles}>{props.label}</button>
	);
};

Button.defaultProps = {
    label: 'buttonLabel',
    action: () => {}
}

export default Button;