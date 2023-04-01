import { dummyBlogStuff } from "../dummyData";

const BlogComponent = ({ id, title, createdAt, author, content }) => {
  return(
    <section style={{ whiteSpace: 'pre-line' }}>
      <h1 id={`blog-id-${id}`}>{title}</h1>
      <h3>{createdAt} | <span>{author}</span></h3>
      <p>{content}</p>
    </section>
  );
};

const Blog = () => {
  return(
    <>
      <div id="section-and-aside">
      {/* this sections holds our blog poast with everything inside of it 
          <span> is what changes the font color
      */}

        { dummyBlogStuff.map(blog => (
          <BlogComponent
            key={blog.id}
            id={blog.id}
            title={blog.title}
            createdAt={blog.createdAt}
            author={blog.author}
            content={blog.content}
          />
        ))}

      </div>

      <aside>
        <ul>
          <li><a href="#blog-id-1">onyx spring - The tale of Blog</a></li>
          <li><a href="#blog-id-2">onyx spring - salamander ashes</a></li>
          <li><a href="#blog-id-3">Storm's Fury</a></li>
          <li><a href="#blog-id-4">The Storm's Brew</a></li>

        </ul>
      </aside>
    </>
  );
};

export default Blog;
