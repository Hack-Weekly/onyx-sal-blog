// Module Imports
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

// Global State
import { useUserStore } from '../stores/userStore';

// Components
import SearchBar from '../components/SearchBar';

const FormatBlogPostContent = ({ content }) => {
  // Cut off text after a certain amount of characters
  const maxLength = 500;
  let truncatedContent = content;

  if (content && content.length > maxLength) {
    truncatedContent = content.substring(0, maxLength) + "..."
  };

  const formattedContent = truncatedContent.split("\\n").map((paragraph, index) => (
    <p key={index}>{ paragraph }</p>
  ));

  return formattedContent;
};

const BlogComponent = ({ id, title, createdAt, author, content, tags, isAdmin }) => {
  return(
    <section>
      <h1 id={`blog-id-${id}`}>{title}</h1>
      <h3>{new Date(createdAt).toLocaleDateString()} | <span>{author}</span></h3>
      <FormatBlogPostContent content={content} />
      <div className="blogFooter">
        <div>
          <span>Tags</span> | { tags.map(tag => <span key={tag.id}>{ tag.name }{" "}</span>)}
        </div>
        <div className="btnWrappers">
          { isAdmin ?
            <button className="editPostBtn">Edit</button> :
            null }
          <button className="readMoreBtn">
            <Link className="readMoreLink" to={`/posts/${id}`}>Read More</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

const Blog = () => {
  const isAdmin = useUserStore((state) => state.user.isAdmin);

  const [blogPosts, setBlogPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        fetchBlogData();
    }, []);

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
          { searchResults.length > 0
            ? searchResults.map((post) => (
                <BlogComponent
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  createdAt={post.createdAt}
                  author={post.author.name}
                  content={post.content}
                  tags={post.tags}
                  isAdmin={isAdmin}
                />
              ))
            : blogPosts.map((post) => (
                <BlogComponent
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  createdAt={post.createdAt}
                  author={post.author.name}
                  content={post.content}
                  tags={post.tags}
                  isAdmin={isAdmin}
                />
              ))}
      </div>
    );
  };

export default Blog;