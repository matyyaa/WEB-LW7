import React from "react";
import "./css/App.css";
import Content from "./Content";
import Image from "./Image";
import Galery from "./Galery";
import Header from "./Header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstTask: true,
    };
  }

  render() {
    return this.state.firstTask ? (
      <div align={"center"} className="App">
        <button class="button" onClick={(e) => this.setState({ firstTask: false })}>
          Task 2
        </button>
        <Header />
        <Content />
        <Image />
      </div>
    ) : (
      <div align={"center"} className="App">
        <button class="button" onClick={(e) => this.setState({ firstTask: true })}>
          Task 1
        </button>
        <Galery />
      </div>
    );
  }
}

export default App;
