import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            comments: '',
            topic: 'react',
            topics: ['react'],
        };

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleCommentsChange = this.handleCommentsChange.bind(this);
        this.handleTopicChange = this.handleTopicChange.bind(this);
        this.handleTopicsChange = this.handleTopicsChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsernameChange(event) {
        this.setState({
            username: event.target.value,
        });
    }

    handleCommentsChange(event) {
        this.setState({
            comments: event.target.value,
        });
    }

    handleTopicChange(event) {
        this.setState({
            topic: event.target.value,
        });
    }

    handleTopicsChange(event) {
        this.setState({
            topics: Array.from(event.target.selectedOptions, (item) => item.value),
        });
    }

    handleSubmit(event) {
        alert(`
            Username: ${this.state.username} \n 
            Comments: ${this.state.comments} \n
            Topic: ${this.state.topic} \n
            Topics: ${this.state.topics}
        `);
        event.preventDefault();
    }

    render() {
        const { username, comments, topic, topics } = this.state;
        const skills = ['Angular', 'React', 'Vue'];
        const skillsOptions = skills.map(s => <Options key={s.toLowerCase()} skill={s} />);

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input
                        type='text'
                        value={username}
                        onChange={this.handleUsernameChange}
                    />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea
                        value={comments}
                        onChange={this.handleCommentsChange}
                    />
                </div>
                <div>
                    <label>Topic</label>
                    <select
                        value={topic}
                        onChange={this.handleTopicChange}
                    >
                        {skillsOptions}
                    </select>
                </div>
                <div>
                    <label>Topics</label>
                    <select
                        multiple={true}
                        value={topics}
                        onChange={this.handleTopicsChange}
                    >
                        {skillsOptions}
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

function Options(props) {
    return <option value={props.skill.toLowerCase()}>{props.skill}</option>
}

Options.propTypes = {
    skill: PropTypes.string,
}

export { Form }