import React, { Component } from 'react';
import './Button.css'

class Button extends Component {

    componentDidUpdate() {
        console.log('btn: did update')
    }


    render() {
        const { children, title, type = '', disabled, myOnClick } = this.props;

        return (
            <button
                disabled={disabled}
                type="button"
                className={"btn " + type}
                onClick={myOnClick}>
               {title} {children}
            </button>
        )
    }
}

export default Button;
