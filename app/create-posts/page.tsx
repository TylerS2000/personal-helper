"use client";
import PocketBase from "pocketbase"
export default async function CreatePosts() {
    function handleClick() {
        const pb = new PocketBase("http://127.0.0.1:8090");
        pb.collection("posts").create({Hello_World:"message"})
    }
    return (
        <div>
            <h1>Create Posts</h1>
            <button onClick={handleClick}>Create a new post</button>
        </div>
    );
}