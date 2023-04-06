import React, { useState, useEffect } from "react";
import axios from 'axios';
// style sheet
import './index.css';

export const Metrics = () => {
    const [tags, setTags] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/tags')
            .then(response => {
                setTags(response.data)
            })
            .catch(error => console.error(error));
    }, []);
    // filter out tags with 0 posts
    const tagsWithPosts = tags.filter(tag => tag.posts.length > 0);
    console.log(tagsWithPosts[0], "test")

    return (
        (tags.length > 0)
        ?
        <main id="tags-container">
            {tags && tags.map(tag => {
                return (
                    <div className="tag-card" key={tag.id}>
                        <h1>{tag.name}</h1>
                        {tag.posts.length > 0 ? <p>Total posts with tags {tag.posts.length}</p> : <p>This tag has no posts</p>}
                    </div>
                )
            })}
        </main>
        :
        <h1>No tags exist!</h1>
    )
}