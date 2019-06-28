import React, { Component } from 'react';

const Nav = (props) => {
    return (
        <ul className="navigation-toolbar">
            <li>{props.question}</li>
        </ul>
    )
}

export default Nav;