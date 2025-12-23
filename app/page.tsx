import PocketBase from 'pocketbase';

export default async function Home() {
  const pb = new PocketBase('http://127.0.0.1:8090');

  const results = await pb.collection('posts').getFullList({ sort: '-created' });
  console.log(results);
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div>Hello World</div>
        <p>This is my personal helper app. I hope to make tools here that help me in daily life.</p>
      </main>
    </div>
  );
}
