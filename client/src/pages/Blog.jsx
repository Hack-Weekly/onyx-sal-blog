import React, { useState, useEffect } from 'react';
import axios from "axios";
import SearchBar from '../components/SearchBar';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        fetchBlogData();
    }, []);

    // useEffect(() => {
    //     setFilteredPosts(posts.filter(post => post.title.toLowerCase().includes(searchText) || post.content.toLowerCase().includes(searchText)));
    // }, [searchText, posts]);

    const fetchBlogData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/posts');
        setBlogPosts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const handleSearch = (searchText) => {
      const searchResults = blogPosts.filter((post) =>
        post.title.toLowerCase().includes(searchText) ||
        post.content.toLowerCase().includes(searchText)
      );
      setSearchResults(searchResults);
    };

    return (
      <div>
        <SearchBar onSearch={handleSearch} />
        {searchResults.length > 0
          ? searchResults.map((post) => (
              <section key={post.id} style={{ whiteSpace: 'pre-line' }}>
                <h1 id={`blog-id-${post.id}`}>{post.title}</h1>
                <h3>
                {new Date(post.createdAt).toLocaleDateString()} | <span>{post.author.name}</span>
                </h3>
                <p>{post.content}</p>
              </section>
            ))
          : blogPosts.map((post) => (
              <section key={post.id} style={{ whiteSpace: 'pre-line' }}>
                <h1 id={`blog-id-${post.id}`}>{post.title}</h1>
                <h3>
                {new Date(post.createdAt).toLocaleDateString()} | <span>{post.author.name}</span>
                </h3>
                <p>{post.content}</p>
              </section>
            ))}
      </div>
    );
  };

export default Blog;