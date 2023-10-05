import React, { useCallback } from "react";

const Massage = React.memo(({ message }) => {
  return <p>{message}</p>;
});

const ListItem = React.memo(({ post }) => {
  return (
    <li key={post.id}>
      <p>{post.title}</p>
    </li>
  );
});

const List = React.memo(({ posts, testfuction }) => {
  console.log("LIST component is rendering ");
  return (
    <ul>
      {posts.map((post) => (
        <ListItem key={post.id} post={post} />
      ))}
    </ul>
  );
});

const B = ({ message, posts }) => {
  console.log("b component is rendering");
  const testfuction = useCallback(() => {}, []);
  return (
    <div>
      <h1>B COMPONENT</h1>
      <Massage message={message} />
      <List posts={posts} testfuction={testfuction} />
    </div>
  );
};

export default B;
