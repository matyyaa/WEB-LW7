import React from "react";

function deleteImage() {
  let img = document.getElementById("image");
  img.remove();
}

function biggerImage() {
  let myImg = document.getElementById("image");
  let currWidth = myImg.clientWidth;
  let currHeight = myImg.clientHeight;
  if (currWidth >= 1200) {
    alert("You have reached the maximum size!");
  } else {
    myImg.style.width = currWidth + 20 + "px";
    myImg.style.height = currHeight + 20 + "px";
  }
}

function smallerImage() {
  let myImg2 = document.getElementById("image");
  let currWidth2 = myImg2.clientWidth;
  let currHeight2 = myImg2.clientHeight;
  if (currHeight2 <= 160) {
    alert("You have reached the minimum size!");
  } else {
    myImg2.style.width = currWidth2 - 20 + "px";
    myImg2.style.height = currHeight2 - 20 + "px";
  }
}

function addImage() {
  let img = document.getElementById("image-container");
  if (document.getElementById("image") === null) {
    img.insertAdjacentHTML(
      "beforeend",
      `<img id="image"
                                                src="https://coworker.imgix.net/pictures/C282/edit/lviv-resize.jpg?auto=format,compress&fit=clamp"
                                                alt="Lviv"
                                                style= "width: 700px"/>`
    );
  }
}

class Image extends React.Component {
  render() {
    return (
      <div>
        <p>
          <button class="img_btn" onClick={addImage}>Add</button>
          <button class="img_btn" onClick={biggerImage}>Increase</button>
          <button class="img_btn" onClick={smallerImage}>Reduce</button>
          <button class="img_btn" onClick={deleteImage}>Delete</button>
        </p>
        <a href="https://en.wikipedia.org/wiki/Lviv">
          <div id="image-container"></div>
          <img
            id="image"
            src="https://coworker.imgix.net/pictures/C282/edit/lviv-resize.jpg?auto=format,compress&fit=clamp"
            alt="Lviv"
            style={{width: "700px"}}
          />
        </a>
      </div>
    );
  }
}

export default Image;
