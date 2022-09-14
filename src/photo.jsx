import React from "react";

import "./index.css";
import "./App";

const Photo = (props) => {
  return (
    <div classname="divHome">
      {props.photo.map((photo) => (
        <div className="divEyemDark ">
          <div className="image" key={photo.id}>
            <div className="eyemtextDark">{photo.name}</div>

            <img className="image-img" src={photo.imageUrl} alt="Photo" />
            <div className="imageOverlay">
              <iframe
                width="400"
                height="230"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src={photo.location}
              ></iframe>
            </div>
          </div>
          <p className="altDark">{photo.overview}</p>
        </div>
      ))}
    </div>
  );
};

export default Photo;
