import { useEffect, useState } from "react";
import axios from "axios";

const BlogComponent = ({ id, title, createdAt, author, content }) => {

  return(
    <section style={{ whiteSpace: 'pre-line' }}>
      <h1 id={`blog-id-${id}`}>{title}</h1>
      <h3>{new Date(createdAt).toLocaleDateString()} | <span>{author}</span></h3>
      <p>{content}</p>
    </section>
  );
};

// We're going to be only the sections/divs that return a True match for any search query. By default, as there is no search, we're going to be displaying the whole blog page. 
// As a user enters a string in the search from, we're going to be hiding any sections/divs that do not contain the searched string.
// Therefore, going forward, any new blog post/section will have to have the section/div nested in the isVisible function as well as contain data-id as an attribute in the section/div itself. 

const Blog = () => {

  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/posts")
      .then(response => setBlogPosts(response.data))
      .catch(error => console.log(error));
  }, []);

  return(
    <>
      <div id="section-and-aside">
      {/* this sections holds our blog poast with everything inside of it 
          <span> is what changes the font color
      */}

        { blogPosts && blogPosts.map(blogPost => (
          <BlogComponent
            key={blogPost.id}
            id={blogPost.id}
            title={blogPost.title}
            createdAt={blogPost.createdAt}
            author={blogPost.author.name}
            content={blogPost.content}
          />
        ))}

        {/* If we have no blog posts, display a message */}
        { blogPosts.length === 0 ? <section>Apparently we have nothing interesting to write about!</section> : null}

      </div>

      {/* <aside>
        <ul>
          <li><a href="#blog-id-1">onyx spring - The tale of Blog</a></li>
          <li><a href="#blog-id-2">onyx spring - salamander ashes</a></li>
          <li><a href="#blog-id-3">Storm's Fury</a></li>
          <li><a href="#blog-id-4">The Storm's Brew</a></li>

        </ul>
      </aside> */}
      
    </>
  );
};

export default Blog;
