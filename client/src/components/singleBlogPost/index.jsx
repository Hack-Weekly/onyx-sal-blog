// Module Imports
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// CSS
import "./index.css";

// Global State
import { useUserStore } from "../../stores/userStore";

const SingleBlogPost = () => {
  const { id } = useParams();

  const [isAdmin, userId] = useUserStore((state) => [state.user.isAdmin, state.user.id]);

  const [blogPost, setBlogPost] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/posts/${id}`)
      .then(response => setBlogPost(response.data))
      .catch(error => console.log(error));
  }, [id]);

  return (
    <>
      <section>
        <h1>{ blogPost.title && blogPost.title }</h1>
        <div>
          { blogPost.content && blogPost.content.split("\\n").map((paragraph, index) => (
            <p key={index}>{ paragraph }</p>
          )) }
        </div>
      </section>
      <div>
        <h1>Comments</h1>
          { blogPost.comments && blogPost.comments.map(comment => (
            <section className="commentWrapper" key={comment.id}>
              {/* <div>{comment.author.name && comment.author.name}</div> */}
              <div className="headerWrapper">
                <img
                  className="userLogo"
                  src={blogPost.author.avatar && blogPost.author.avatar}
                  alt="GitHub Logo"
                />
                <div className="userInfoWrapper">
                  <div><span>{blogPost.author.name && blogPost.author.name}</span></div>
                  <div>{blogPost.author.url && blogPost.author.url}</div>
                </div>
              </div>
              <div className="commentContent">
                {comment.content && comment.content}
              </div>
              { isAdmin || comment.author.id === userId ? 
                <div className="commentFooter">
                  <button className="editCommentBtn">Edit</button>
                  <button className="deleteCommentBtn">Delete</button>
                </div> :
                null }
            </section>
          ))}
      </div>
    </>
  )
};

export default SingleBlogPost;