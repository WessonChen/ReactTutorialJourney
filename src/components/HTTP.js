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

class PostExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            title: '',
            body: ''
        }
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleUserIdChange = this.handleUserIdChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleBodyChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleTitleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleUserIdChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        Axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(response => (
                console.log(response)
            ))
            .catch(error => (
                console.log(error)
            ));
    }

    render() {
        const { userId, title, body } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor='userId'>User Id</label>
                    <input
                        type='number'
                        value={userId}
                        onChange={this.handleUserIdChange} 
                        id='userId' 
                        name='userId'
                    />
                </div>
                <div>
                    <label htmlFor='title'>Title</label>
                    <input
                        type='text'
                        value={title}
                        onChange={this.handleTitleChange}
                        id='title'
                        name='title'
                    />
                </div>
                <div>
                    <label htmlFor='body'>Body</label>
                    <textarea
                        value={body}
                        onChange={this.handleBodyChange}
                        id='body' 
                        name='body'
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export { GetExample, PostExample }