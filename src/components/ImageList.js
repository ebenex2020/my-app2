import "./ImageList.css";
import ImgCard from "./ImgCard";

const ImageList = ({ images }) => {
  const renderedImages = images.map((image) => {
    return <ImgCard key={image.id} image={image} />;
  });

  return <div className="image-list">{renderedImages}</div>;
};

export default ImageList;
