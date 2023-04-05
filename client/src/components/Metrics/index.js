import React, { useState, useEffect } from "react";
import axios from 'axios';

export const Metrics = () => {
    const [tags, setTags] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/tags')
            .then(response => {
                setTags(response.data)
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <>
            <h1>Metrics</h1>
            {tags && tags.map(tag => {
                return (
                    <h1>{tag.name}</h1>
                )
            })}
            <p>This is where we will track the metrics of various projects by the onyx-salamander crew</p>
            <p>This is where we can utilize the github api</p>
        </>
    )
}