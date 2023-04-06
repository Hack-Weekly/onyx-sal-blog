import React, { useState, useEffect } from "react";
import axios from 'axios';
// style sheet
import './index.css';
// recharts imports
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';
export const Metrics = () => {
    // SET STATE
    const [tags, setTags] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/posts')
            .then(response => {
                setPosts(response.data)
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
        totalPosts_PerTag: tag.posts.length
    }));
    // calcualte total words in each post with associated post title
    const postData = posts.map(post => ({
        name: post.title,
        totalWords: post.content.split(" ").length
    }))
    // calculate total words in existence
    const totalWords = postData.reduce((accumulator, post) => {
        return accumulator + post.totalWords;
    }, 0)
    // simple calc average function / might be cleaner way to do this
    const calculateAverage = (total, length) => {
        if (length === 0) { // this removed NaN warning
            return 0;
        }
        const avg = total / length;
        return avg;
    }
    // calculate averages for things
    const averageWordsPerPost = calculateAverage(totalWords, postData.length)
    const averageTagsPerPost = calculateAverage(tags.length, posts.length)

    // first check and make sure data is there, if so render all methods
    // SIDE NOTE: might add an issue to modularize this data and extact it so we can resuse a bargraph component instead of rendering multiples
    return (
        (tags.length <= 0 || posts.length <= 0)
            ?
            <main id="tags-container">
                {/**Can remove tags since we already checking tags length above */}
                <h1>There seems to be a connection error. Please try again later.</h1>
            </main>
            :
            <main>
                <div id="post-bar-graph">
                    <h1>Posts Metrics</h1>
                    <p>Total Posts: <span>{posts.length}</span></p>
                    <p style={{ opacity: 0.5 }}>Hover over data for full information</p>

                    <ResponsiveContainer height={230}>
                        <BarChart
                            data={postData}
                            margin={{
                                top: 15,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis label={{ value: "Total Words", angle: -90, position: "insideLeft" }} />
                            <Tooltip
                                wrapperStyle={{ color: "black" }}
                            />
                            <Legend verticalAlign="top" height={36} iconType="square" iconSize={25} />
                            <Bar dataKey="totalWords" fill="#467799">
                                <LabelList dataKey="totalWords" position={"top"}></LabelList>
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                    <p>Total Words in existence: <span>{totalWords}</span></p>
                    <p>Average words per post: <span>{averageWordsPerPost}</span></p>
                </div>
                <div id="tag-bar-graph">
                    <h1>Tag Metrics</h1>
                    <p>Total Tags: <span>{tags.length}</span></p>
                    <p style={{ opacity: 0.5 }}>Hover over data for full information</p>

                    <ResponsiveContainer height={230}>
                        <BarChart
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
                            <YAxis label={{ value: "Total Posts", angle: -90, position: "insideLeft" }} />
                            <Tooltip
                                wrapperStyle={{ color: "black" }}

                            />
                            <Legend verticalAlign="top" height={36} iconType="square" iconSize={25} />
                            <Bar dataKey="totalPosts_PerTag" fill="#467799" />
                        </BarChart>
                    </ResponsiveContainer>
                    <p>Total Tags in existence: <span>{tags.length}</span> </p>
                    <p>Average Tags Per Post: <span>{averageTagsPerPost}</span> </p>
                </div>
            </main>
    )
}