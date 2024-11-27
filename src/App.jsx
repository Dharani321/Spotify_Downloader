import React from 'react';
import { PiSpotifyLogoBold } from "react-icons/pi";
import axios from 'axios';
import { useState } from 'react';

export default function App(){

  const [url1,seturl]=useState("");

  const change=(e)=>{
    e.preventDefault();
    seturl(e.target.value);
    // console.log(e.target.value);
    
  }
  // let sty={
  //   color:"red",
  //console.log(url);

  const download= async ()=>{
    seturl("");
    const options = {
      method: 'GET', 
      url: 'https://spotify-downloader9.p.rapidapi.com/downloadSong',
      params: {
        songId: `${url1}`
      },
      headers: {
        'x-rapidapi-key': import.meta.env.VITE_API_KEY,
        'x-rapidapi-host': 'spotify-downloader9.p.rapidapi.com'
      }
    };


    try {
      
      const res=await axios.request(options);
      console.log(res.data.data.downloadLink);
      window.location.href=res.data.data.downloadLink;
      alert("Download has Started");
      
    } 
    catch (error) 
    {

      console.log(error);
    }

  }
  // download();

  // }
  return(
    <>
    <div className="h-screen w-screen bg-yellow-200 text-red-500 flex flex-col items-center justify-center gap-y-10">
      <div className="flex items-center justify-center gap-x-6">
       <h3 className='text-xl font-bold'>Spotify Downloader</h3> 
       <PiSpotifyLogoBold size={40}/>
     </div>

     <div className="flex gap-x-3">
      <input type="url" className="h-10 w-[500px] outline-none border-none rounded-lg text-black" onChange={change} value={url1} placeholder="Enter a valid spotify url"/>
      <button className='bg-green-500 rounded-lg px-6 text-white font-bold hover:bg-red-500 hover:text-black' onClick={download}>Download</button>
     </div>
     </div>
    </>
  )
}