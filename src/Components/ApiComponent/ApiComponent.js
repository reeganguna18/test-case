import React, { useEffect, useState } from "react";

function Async() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resonse) => resonse.json())
      .then((data) => {
        setPost(data);
      });
  }, []);

  return (
    <div>
      {post.map((pos) => (
        <li key={pos.id}>{pos.title}</li>
      ))}
    </div>
  );
}

export default Async;
