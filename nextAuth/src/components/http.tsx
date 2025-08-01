// for http testing, can delete after testing

"use client";

import {
  useEffect,
  useState,
} from 'react';

export function HttpComponent() {
  const [posts, setPosts] = useState<any[]>();
  //GET
  const getData = async () => {
    const data = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    ).then((data) => data.json());

    const gePosts = await data.slice(0, 3);
    setPosts(gePosts);
  };

  // CREATE
  const createData = async (event: any) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const title = (form.querySelector("#title") as HTMLInputElement).value;
    const body = (form.querySelector("#body") as HTMLTextAreaElement)
      .value;

    console.log("Titel:", title);
    console.log("Inhalt:", body);

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          body,
          userId: 1,
        }),
      }
    );
    const result = await response.json();
    console.log("Created:", result);
  };

  // delete
  const deleteData = async (id: number) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) alert("Post konnte nicht gelöscht werden");
    setPosts(posts!.filter((post: any) => post.id !== id));
    alert("gelöscht");
  };

  return (
    <>
      <h1>HTTP Shit</h1>
      <button
        className={"btn bg-blue-400 p-2 m-2 rounded-full"}
        onClick={getData}
      >
        Get Data
      </button>
      {posts &&
        posts.map((post: any) => (
          <div
            key={post.id}
            className={"border-b-red"}
          >
            <h3>TITLE: {post.title}</h3>
            <p>BODY: {post.body}</p>
            <button
              className={"bg-red-500"}
              onClick={() => deleteData(post.id)}
            >
              löschen
            </button>
          </div>
        ))}

      <h2>Neuen Post anlegen</h2>
      <form
        id="post-form"
        onSubmit={createData}
      >
        <input
          type="text"
          id="title"
          placeholder="Titel"
          required
        />
        <br />
        <textarea
          id="body"
          placeholder="Inhalt"
          required
        ></textarea>
        <br />
        <button
          type="submit"
          className={"btn bg-blue-400 p-2 m-2 rounded-full"}
        >
          Create Data
        </button>
      </form>
    </>
  );
}
