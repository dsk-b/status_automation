"use client";
import Image from 'next/image'

export default function Home() {
  async function handleOAUTH() {
    console.log(`${process.env.APPLICATION_CLIENT_ID}`);
    alert("asdf");
    const r = await fetch("https://login.microsoftonline.com/da464968-10f5-4b7b-8217-d6ab822e3949/oauth2/v2.0/authorize", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"client_id":"acb4a0b6-d923-4a4e-a6cf-38475558128d"})
    }
    );
    const res = r.json();
    console.log(res);
  }
  return (
    <>
      <div
        className=' w-2/3 h-screen flex flex-col items-center justify-evenly border-dashed border-r-2 border-indigo-200 '>
        <span
          className='text-5xl font-extrabold text-slate-600'>
          {/* STATUS AUTOMATION */}
        </span>
        <Image
          src="./undraw_ideas.svg"
          height="400"
          width="400"
          // priority
          alt="image" />
      </div>
      <div
        className='w-1/3 h-screen flex flex-col items-center justify-center '>
        <span
          className='text-slate-500 mb-2'>
          Please sign-in to continue.
        </span>
        <button
          onClick={handleOAUTH}
          className='w-1/2 bg-gradient-to-br from-blue-500 to-blue-400 p-4 rounded-lg hover:bg-gradient-to-br hover:from-blue-300 hover:to-blue-500 text-white'>Sign-in with Microsoft</button>
      </div>
    </>
  )
}
