import React, { useState, useEffect, useReducer } from 'react';
import Axios from 'axios';

function DataFetching() {
    const [post, setPost] = useState({});
    const [id, setId] = useState('0');
    const [idToFetch, setIdToFetch] = useState('0');

    const handleClick = () => {
        setIdToFetch(id);
    };

    useEffect(() => {
        Axios.get(`https://jsonplaceholder.typicode.com/posts/${idToFetch === '0' ? '' : idToFetch}`)
            .then(res => setPost(res.data))
            .catch(error => console.log(error));
        console.log(`Done. ${idToFetch === '0' ? 'All' : idToFetch}`);
    }, [idToFetch]);

    return (
        <>
            <input type='number' min='0' max='100' value={id}
                onChange={e => setId(e.target.value)} />
            <button type='button' onClick={handleClick}>Fetch Post</button>
            <p>{post.title}</p>
        </>
    )
}

// ---------------------------------------------

const initialState = {
    loading: true,
    error: '',
    post: {}
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'SUCCESS':
            return {
                loading: false,
                error: '',
                post: action.payload
            }
        case 'ERROR':
            return {
                loading: false,
                error: 'Something went wrong!',
                post: {}
            }
        default:
            return state;
    }
};

function DataFetchingTwo() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => {
                dispatch({ type: 'SUCCESS', payload: res.data })
            })
            .catch(() => {
                dispatch({ type: 'ERROR' })
            });
    });
    return (
        <>
            {state.loading ? 'Loading......' : state.post.title}
            {state.error ? state.error : null}
        </>
    )
}

export { DataFetching, DataFetchingTwo }