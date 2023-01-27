import './App.css';
import Card from './Card';
import React, { useState } from "react";

function App(props) {

  const [videos, setVideos] = useState(props.videos);

  function toggleCompleted(id){
    const updatedList = videos.map((video) => {
      if(id === video.id) {
        return {...video, completed: !video.completed}
      }
      return video;
    });
    
    setVideos(updatedList);
  }

  function toggleFavourite(id){
    const updatedList = videos.map((video) => {
      if(id === video.id) {
        return {...video, favourite: !video.favourite}
      }
      return video;
    });

    setVideos(updatedList);
  }

  const videoList = props.videos.map((video) => (
    <Card 
      id = {video.id}
      description = {video.description}
      completed = {video.completed}
      favourite = {video.favourite}
      key = {video.id}
      toggleCompleted={toggleCompleted}
      toggleFavourite={toggleFavourite}
    />
  ));

  return (
    <div>
      <header className="bold">SWE Flix</header>
      <main>
        {videoList}
      </main>
      <footer>(C) 2023</footer>
    </div>
  );
}

export default App;
