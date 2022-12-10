import React from "react";

function changeStyleById(id, style) {
  let el = document.getElementById(id);
  if (el.className === "normal") {
    el.className = style;
  } else {
    el.className = "normal";
  }
}

function changeStyleBySelector(selector, style) {
  let el = document.querySelector("#" + selector);
  if (el.className === "normal") {
    el.className = style;
  } else {
    el.className = "normal";
  }
}

class Content extends React.Component {
  render() {
    return (
      <div>
        <p>
          15.07.2002, м. Київ
        </p>
        <p>
          СШ №64 в місті Києві, НТУУ КПІ ім. Ігоря Сікорського
        </p>
        <h3>
          Хобі:
        </h3>
        <ul className="normal"
          id="hobbies"
          onClick={() => changeStyleById("hobbies", "style1")}
          style={{alignContent: "center"}} >
          <li>Великий теніс</li>
          <li>Кастом одягу</li>
          <li>Фотографія</li>
          <li>Фортепіано</li>
        </ul>
        <h3
          className="normal"
          id="films"
          onClick={() => changeStyleBySelector("films", "style2")}
        >
          Улюблені книги / фільми:
        </h3>
        <ol style={{ display: "inline-block" }}>
          <li>Артур Конан Дойл, серія книг про Шерлока Холмса</li>
          <li>"Світ Юрського періоду", 2017-2023</li>
          <li>"Льодовиковий період", 2002-2012</li>
          <li>"Ілюзія обману", 2013-2016</li>
        </ol>
        <h3>Львів</h3>
        <p
          style={{ display: "inline-block", width: "80%", textAlign: "center" }}
        >
          Декілька разів за своє життя я відвідувала місто Львів. Воно мене приголомшило своїм колоритом, 
          старовинною архітектурою та найсмачнішим у світі шоколадом.
          Особливо цінними моментами у візиті
          Львова були прогулянки ще не прокинувшимся містом, коли повітря насичене ароматом кави та прохолодою ранку.
        </p>
      </div>
    );
  }
}

export default Content;
