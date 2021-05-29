import React from 'react';
import './Container.css'

const Container = ({ bgColor = 'grey', type = 'section', children}) => {

    return (
        <div className={'main-container ' + bgColor }>{children}</div>
    )
} 

export default Container;
