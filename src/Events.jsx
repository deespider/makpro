import React from "react";
import "./event.scss";

let Events = () => {
  return (
    <>
      <div className="row ">
        <div className="col-4">
          <div className="event-menu">
            <ul>
              <li>
                <a href="#">Workshops</a>
              </li>
              <li>
                <a href="#">Tech Talks</a>
              </li>
              <li>
                <a href="#">Career Guidance</a>
              </li>
              <li>
                <a href="#">Null</a>
              </li>
              <li>
                <a href="#">Null</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-8">
          <div className="">
            <div className="recent">
              <h3>Recently Added</h3>
              <div className="vid_recent">
                <iframe
                  width="270"
                  height="150"
                  src="https://www.youtube.com/embed/UAxeP4Kca78?controls=0"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <iframe
                  width="270"
                  height="150"
                  src="https://www.youtube.com/embed/fqKhAeMMdvg"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <iframe
                  width="270"
                  height="150"
                  src="https://www.youtube.com/embed/Jph_dc7Uomw"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="evnt">
        <div className="evnt1">
          <div className="list1">
            <div className="thumb" id="vdoo" onClick={vdo}>
              <iframe
                src="https://www.youtube.com/embed/UAxeP4Kca78?controls=0"
                title="YouTube video player"
                frameborder="0"
                id="vda"
              ></iframe>
            </div>
            <div className="titl">this is the title of this video.</div>
          </div>
          <div className="list1">
            <div className="thumb">
              <iframe
                src="https://www.youtube.com/embed/UAxeP4Kca78?controls=0"
                title="YouTube video player"
                frameborder="0"
              ></iframe>
            </div>
            <div className="titl">this is the title of this video.</div>
          </div>
          <div className="list1">
            <div className="thumb">
              <iframe
                src="https://www.youtube.com/embed/UAxeP4Kca78?controls=0"
                title="YouTube video player"
                frameborder="0"
              ></iframe>
            </div>
            <div className="titl">this is the title of this video.</div>
          </div>
        </div>
        <div className="evnt2">
          <div id="vdo"></div>
        </div>
      </div> */}
    </>
  );
};

export default Events;
let a = document.getElementById("vda");

let vdo = () => {
  return (document.getElementById("vdo").innerHTML = a);
};
