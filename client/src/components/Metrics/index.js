import React, { useState, useEffect } from "react";
import axios from 'axios';
// style sheet
import './index.css';
// recharts imports
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
export const Metrics = () => {
    const [tags, setTags] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/posts')
            .then(response => {
                setPosts(response.data)
                // console.log(response.data)
            })
            .catch(error => console.error(error))
        axios.get('http://localhost:8000/api/tags')
            .then(response => {
                setTags(response.data)
            })
            .catch(error => console.error(error));
    }, []);
    // map through our posts and create a new array
    const wordCountData = posts.map(post => {
        // split the content by its spaces and use reduce to get the counts for each word
        const wordCounts = post.content.split(" ").reduce((counts, word) => {
            // will initialize new word to 0 before adding 1, if word exists, will add 1 to it
            counts[word] = (counts[word] || 0) + 1; // word being what we are 
            return counts;
        }, {});

        // remove words with low counts 
        Object.keys(wordCounts).forEach(key => {
            if (wordCounts[key] < 5) { // currently removing words with coutn < value on right side
                delete wordCounts[key]
            }
        })
        return {
            post: post.title,
            wordCounts: wordCounts
        }
    })


    // data for bar chart, we should extract to its own module
    const tagData = tags.map(tag => ({
        name: tag.name,
        totalPosts: tag.posts.length
    }));

    const postData = posts.map(post => ({
        name: post.title,
        totalWords: post.content.split(" ").length
    }))

    
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
            <h1>Total Posts for Each Tag</h1>
            <ResponsiveContainer height={230}>
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
                    <Legend iconSize={30} />
                    <Bar dataKey="totalPosts" fill="#467799" />
                </BarChart>
            </ResponsiveContainer>
            <h1>Total Words in each post</h1>
            <ResponsiveContainer height={230}>
                <LineChart
                    width={500}
                    height={300}
                    data={postData}
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
                    <Legend iconSize={30} />
                    <Line dataKey="totalWords" fill="#467799" />
                </LineChart>
            </ResponsiveContainer>
            <h1>High word counts for each post</h1>


        </div>
    )
}