// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';

function Mock() {
    const [posts, setPosts] = useState([]);
    const [Data, setData] = useState([]);


    //   useEffect(() => {
    //     fetchPosts();
    //   }, []);

    const [loading, setLoading] = useState(false);
    const [loading1, setLoading1] = useState(true);
    const [loading2, setLoading2] = useState(true);

    const fetchPosts = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:3001/posts');
            setPosts(response.data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        } finally {
            // setLoading(false);
        }
    };


    const getData = async () => {
        const response = await axios.get('https://reqres.in/api/users?page=2');
        setData(response.data);
        console.log('getting data ', response);
    };

    const addPost = async (newPost) => {
        await axios.post('http://localhost:3001/posts', newPost);
        fetchPosts();
    };

    const updatePost = async (id, updatedPost) => {
        await axios.put(`http://localhost:3001/posts/${id}`, updatedPost);
        fetchPosts();
    };

    const deletePost = async (id) => {
        await axios.delete(`http://localhost:3001/posts/${id}`);
        fetchPosts();
    };

    useEffect(() => {
        const timeout1 = setTimeout(() => {
            setLoading1(false);
        }, 10000); // Show loader for 10 seconds

        const interval = setInterval(() => {
            setLoading2(prevLoading => !prevLoading); // Toggle loader
        }, 5000); // Repeat every 10 seconds

        const timeout2 = setTimeout(() => {
            clearInterval(interval);
            setLoading2(false); // Ensure loader is hidden after 20 seconds
        }, 50000); // Stop after 20 seconds

        return () => {
            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearInterval(interval);
        };
    }, []); // Run once when the component mounts

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        {post.title} - {post.body}
                        <button onClick={() => deletePost(post.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            {/* <button onClick={() => addPost({ title: 'New Post', body: 'New post body' })}>Add Post</button> */}
            <Button variant="contained"
                color="secondary"
                // onClick={handleClick1}
                sx={{ marginRight: '2%' }} onClick={fetchPosts} disabled={loading}>
                {loading ? 'Loading...' : 'Fetch Posts'}
            </Button>
            <Button variant="contained" sx={{ marginRight: '2%' }} onClick={() => addPost({ title: 'New Post', body: 'Lorem ipsum' })}>
                Add Post
            </Button>
            <Button
                variant="contained" sx={{ marginRight: '2%' }}
                onClick={() => updatePost(1, { title: 'Updated Post', body: 'Updated body' })}
            >
                Update Post
            </Button>
            <Button
                variant="contained" sx={{ marginRight: '2%' }}
                onClick={() => deletePost(1)}
            >
                Delete Post
            </Button>
            {loading && (
                <>
                    <Button
                        variant="contained"
                        color="secondary"
                        // onClick={handleClick1}
                        sx={{ marginRight: '2%' }}
                        disabled={loading1}
                    >
                        Loader 1
                        {loading1 && <div className="loader"></div>}
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        // onClick={handleClick1}
                        sx={{ marginRight: '2%' }}
                        disabled={loading2}
                    >
                        Loader 2
                        {loading2 && <div className="loader"></div>}
                    </Button>
                </>
            )}
            <button onClick={getData}>Get Data</button>
            {Data && (
                <div>
                    <h2>Data</h2>
                    <ul>
                        {Data.data?.map(user => (
                            <li key={user.id}>
                                <img src={user.avatar} alt={user.first_name} />
                                <div>
                                    <p>Name: {user.first_name} {user.last_name}</p>
                                    <p>Email: {user.email}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Mock;
