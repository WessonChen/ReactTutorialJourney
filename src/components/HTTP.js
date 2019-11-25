import React, { Component } from 'react';
import Axios from 'axios';

class GetExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({
                    posts: response.data
                })
            })
            .catch(error => {
                console.log(error)
            });
    }

    render() {
        return (
            <>
            </>
        );
    }
}

export { GetExample }