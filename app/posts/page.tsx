import PocketBase from 'pocketbase';
export default async function Posts() {

  const pb = new PocketBase('http://127.0.0.1:8090');
  const results = await pb.collection('posts').getFullList({ sort: '-created' });

  console.log(results);
    return (
        <div>
            <h1>Posts</h1>
            {results.map((post)=>{return <div key={post.id}>{post.Hello_World}</div>})}
        </div>
    );
}