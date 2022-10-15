import React from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";

function WatchClass() {
  const urlParams = useParams();

  return (
    <>
      <div className="container">
        <h1 className="my-5">My Class</h1>
        <h3 className="text-center mb-4 fw-bold">Kelas Web-Developer</h3>

        <div className="">
          <ReactPlayer className="justify-content-center" url={"https://www.youtube.com/watch?v=InCaBT5OeIQ"} width={"1092px"} height={"480px"} />
        </div>
      </div>
      <br />
      <h4 className="mt-5 pt-3 fw-bold">Prerequisite : </h4>
      <ul>
        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, itaque!</li>
        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, itaque!</li>
        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, itaque!</li>
      </ul>
      <h4 className="mt-5 pt-3 fw-bold">Tools :</h4>
      <ul className="">
        <li>VSCode</li>
        <li>Browser (Google, Safari, Mozilla, etc)</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>ReactJS</li>
        <li>NodeJS</li>
        <li>ExpressJS</li>
        <li>MongoDB</li>
      </ul>
    </>
  );
}

export default WatchClass;
