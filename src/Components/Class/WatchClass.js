import React from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";

function WatchClass() {
  const urlParams = useParams();

  return (
    <>
      {/* kelas webdev */}
      <div className="container rounded px-5">
        <h3 className="text-center pt-5 mb-4 fw-bold">Kelas Web-Developer</h3>
        <ReactPlayer url={"https://www.youtube.com/watch?v=InCaBT5OeIQ"} width={"100%"} height={"480px"} />
        <br />
        {/* Nav tabs  */}
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item">
            <a className="nav-link active text-success" data-bs-toggle="tab" href="#home">
              Prerequisite
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-success" data-bs-toggle="tab" href="#menu1">
              Tools
            </a>
          </li>
        </ul>

        {/* Tab panes  */}
        <div className="tab-content">
          <div id="home" className="container tab-pane active fade">
            <br />
            <h3>Prerequisite</h3>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, itaque!</li>
              <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, itaque!</li>
              <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, itaque!</li>
            </ul>
          </div>
          <div id="menu1" className="container tab-pane fade">
            <br />
            <h3>Tools</h3>
            <ul className="pb-5">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default WatchClass;
