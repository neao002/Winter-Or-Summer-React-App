import React from "react";
import ReactDOM from "react-dom";
import Seasons from "./components/SeasonsDisplay";
import Loading from "./components/loading";
class App extends React.Component {
  state = {
    lat: null,
    errorMessage: "",
  };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        this.setState({
          lat: position.coords.latitude,
        }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  componentDidUpdate() {
    console.log("my component was just updated");
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <Seasons lat={this.state.lat} />;
    }
    return <Loading message="Please accept Location request!" />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
