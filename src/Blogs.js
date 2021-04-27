import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Blogs = (props) => {
  const [blogs, setBlogs] = useState(null);

  const handleDelete = (id) => {
    setBlogs((prev) => prev.filter(blog => blog.id !== id));
  };

  useEffect(() => {
    fetch('http://localhost:8001/blogs')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setBlogs(data);
      })
  }, []);

  return (
    <div className="home">
      { blogs && <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} /> }
    </div>
  );
}

export default Blogs;


// FILTER BLOGS THROUGH AUTHOR
// <BlogList blogs={blogs.filter(blog => blog.author === 'mario')} title={"Mario's blogs"} handleDelete={handleDelete} />
