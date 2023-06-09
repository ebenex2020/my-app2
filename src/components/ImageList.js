import "./ImageList.css";
import ImgCard from "./ImgCard";

const ImageList = ({ images }) => {
  const renderedImages = images.map((image) => {
    return (
      <div key={image.id}>
        <ImgCard image={image} />
      </div>
    );
  });

  return <div className="image-list">{renderedImages}</div>;
};

export default ImageList;
