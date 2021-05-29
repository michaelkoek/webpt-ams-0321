import React, { Component } from 'react';
import Container from './Container'

class School extends Component {

    componentDidMount() {
        console.log('School: did mount')
    }
    
    componentDidUpdate() {
        console.log('School: did update')
    }

    render() {
        return (
            <Container bgColor="yellow" width="25rem">
                <h1>hi {this.props.children}</h1>
            </Container>
        )
    }
}

export default School
