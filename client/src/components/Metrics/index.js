import React, { useState, useEffect } from "react";
import axios from 'axios';
// style sheet
import './index.css';
// recharts imports
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const Metrics = () => {
    const [tags, setTags] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/posts')
            .then(response => {
                setPosts(response.data)
                console.log(response.data)
            })
            .catch(error => console.error(error))
        axios.get('http://localhost:8000/api/tags')
            .then(response => {
                setTags(response.data)
            })
            .catch(error => console.error(error));
    }, []);

    // data for bar chart, we should extract to its own module
    const tagData = tags.map(tag => ({
        name: tag.name,
        posts: tag.posts.length
    }));

    return (
        // (tags.length < 0)
        //     ?
        //     <main id="tags-container">
        //         {/**Can remove tags since we already checking tags length above */}
        //         {tags.map(tag => {
        //             return (
        //                 <div className="tag-card" key={tag.id}>
        //                     <h1>{tag.name}</h1>
        //                     {tag.posts.length > 0 ? <p>Total posts with tags {tag.posts.length}</p> : <p>This tag has no posts</p>}
        //                 </div>
        //             )
        //         })}
        //     </main>
        //     :
        <div id="tag-bar-graph">

            <ResponsiveContainer>
                <BarChart
                    width={500}
                    height={300}
                    data={tagData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="posts" fill="#8884d8" />
                    {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}