import { Gallery } from "react-grid-gallery";

const images = [
    {
        src: "https://via.placeholder.com/400x300",
        width: 400,
        height: 300,
        caption: "Project 1: A description of the project or artwork.",
    },
    {
        src: "https://via.placeholder.com/300x400",
        width: 300,
        height: 400,
        caption: "Project 2: A description of the project or artwork.",
    },
    {
        src: "https://via.placeholder.com/500x300",
        width: 500,
        height: 300,
        caption: "Project 3: A description of the project or artwork.",
    },
    {
        src: "https://via.placeholder.com/400x400",
        width: 400,
        height: 400,
        caption: "Project 4: A description of the project or artwork.",
    },
    {
        src: "https://via.placeholder.com/300x500",
        width: 300,
        height: 500,
        caption: "Project 5: A description of the project or artwork.",
    },
    {
        src: "https://via.placeholder.com/600x400",
        width: 600,
        height: 400,
        caption: "Project 6: A description of the project or artwork.",
    },
    {
      src: "https://via.placeholder.com/400x300",
      width: 400,
      height: 300,
      caption: "Project 1: A description of the project or artwork.",
  },
  {
      src: "https://via.placeholder.com/300x400",
      width: 300,
      height: 400,
      caption: "Project 2: A description of the project or artwork.",
  },
  {
      src: "https://via.placeholder.com/500x300",
      width: 500,
      height: 300,
      caption: "Project 3: A description of the project or artwork.",
  },
  {
      src: "https://via.placeholder.com/400x400",
      width: 400,
      height: 400,
      caption: "Project 4: A description of the project or artwork.",
  },
  {
      src: "https://via.placeholder.com/300x500",
      width: 300,
      height: 500,
      caption: "Project 5: A description of the project or artwork.",
  },
  {
      src: "https://via.placeholder.com/600x400",
      width: 600,
      height: 400,
      caption: "Project 6: A description of the project or artwork.",
  },
  {
    src: "https://via.placeholder.com/600x400",
    width: 620,
    height: 400,
    caption: "Project 6: A description of the project or artwork.",
},
];

function ImageGallery() {
    return (
        <div className="container mt-5">
            <h2>Portfolio Gallery</h2>
            <Gallery images={images} />
        </div>
    );
}

export default ImageGallery;
