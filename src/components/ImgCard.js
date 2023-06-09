import React from "react";

class ImgCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { span: 0 };

    this.ImageRef = React.createRef();
  }

  componentDidMount() {
    this.ImageRef.current.addEventListener("load", this.ImageSpan);
  }

  ImageSpan = () => {
    this.setState({ span: span });
  };

  render() {
    const { urls, alt_description } = this.props.image;

    return <img ref={this.ImageRef} src={urls.regular} alt={alt_description} />;
  }
}

export default ImgCard;
