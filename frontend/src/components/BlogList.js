import axios from 'axios';
import React, { useEffect, useState } from 'react';

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            const response = await axios.get('/api/blogs');
            setBlogs(response.data);
        };
        fetchBlogs();
    }, []);

    return (
        <div>
            <h2>Blogs</h2>
            <ul>
                {blogs.map((blog) => (
                    <li key={blog._id}>{blog.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default BlogList;