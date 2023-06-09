import React from "react";

class ImgCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.ImageRef = React.createRef();
  }

  componentDidMount() {
    this.ImageRef.current.addEventListener("load", this.ImageSpan);
  }

  ImageSpan = () => {
    const height = this.ImageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };

  render() {
    const { urls, alt_description } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.ImageRef} src={urls.regular} alt={alt_description} />
      </div>
    );
  }
}

export default ImgCard;
