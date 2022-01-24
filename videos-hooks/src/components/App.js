import React, { useState } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";
import { useEffect } from "react/cjs/react.development";

const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos("buildings");

    useEffect(() => {setSelectedVideo(videos[0])}, [videos]);

    if (selectedVideo != null) {
        return (
            <div className="ui container">
                <SearchBar onTermSubmit={search} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={selectedVideo} /> 
                        </div>
                        <div className="five wide column">
                            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
                        </div>
                    </div>
                </div>
            </div>
        );
    } 

    return (
        <div className="ui container">
            <SearchBar onTermSubmit={search} />
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
        </div>
    );
}

export default App;