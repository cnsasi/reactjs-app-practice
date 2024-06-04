import React from 'react';
import './BlogList.css';

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2 class="s-title">{ title }</h2>
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <h2>{ blog.title }</h2>
          <p class="tech-text">{ blog.body }</p>
          <p>Category as { blog.author }</p>
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;