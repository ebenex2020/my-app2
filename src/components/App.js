import React from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import unsplashApi from "../api/unsplashApi";

class App extends React.Component {
  state = { images: [] };

  onFormSubmit = async (term) => {
    const { data } = await unsplashApi.get("search/photos", {
      params: {
        query: term,
      },
    });

    this.setState({ images: data.results });
  };

  render() {
    return (
      <div className="ui">
        <SearchBar onFormSubmit={this.onFormSubmit} />
        {/* <div>Found : {this.state.images.length} images</div> */}
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
