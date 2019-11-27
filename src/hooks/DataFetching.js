import React, { useState, useEffect } from 'react';
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

export { DataFetching }