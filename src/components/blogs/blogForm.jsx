import { useState } from "react";

export default function BlogForm() {
  const [title, setTitle] = useState();

  const [blogData, setBlogData] = useState({
    title: "",
    description: "",
    author: "",
    dateposted: new Date(),
  });

  return (
    <div>
      <h1>Blog title</h1>
      <form action="">
        <label htmlFor="blogTitle">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="blogDescription">Description</label>
        <input type="text" />

        <label htmlFor="authorName">Author</label>
        <input type="text" />

        <label htmlFor="datePosted">DatePosted</label>
        <input type="date" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
