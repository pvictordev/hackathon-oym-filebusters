import { useState } from "react";
import { PanViewer } from "react-image-pan-zoom-rotate";
import { Document, Page } from "react-pdf";

import "./test.css";

interface FileType {
  type: "image" | "pdf";
  src: string;
  alt?: string;
}

interface ImagePanZoomProps {
  file: FileType;
}

const ImagePanZoom = ({ file }: ImagePanZoomProps) => {
  console.log(file);
  const [dx, setDx] = useState<number>(0);
  const [dy, setDy] = useState<number>(0);
  const [zoom, setZoom] = useState<number>(1);
  const [rotation, setRotation] = useState<number>(0);
  // const [flip, setFlip] = useState<boolean>(false);

  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const isPdf = file.type === "pdf"; // Check if the file is a PDF

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }): void => {
    setNumPages(numPages);
  };
  const resetAll = (): void => {
    setDx(0);
    setDy(0);
    setZoom(1);
    setRotation(0);
    // setFlip(false);
  };
  const zoomIn = (): void => {
    setZoom(zoom + 0.2);
  };
  const zoomOut = (): void => {
    if (zoom >= 1) {
      setZoom(zoom - 0.2);
    }
  };
  const rotateLeft = (): void => {
    if (rotation === -3) {
      setRotation(0);
    } else {
      setRotation(rotation - 1);
    }
  };
  const onPan = (dx: number, dy: number): void => {
    setDx(dx);
    setDy(dy);
  };

  return (
    <div className="react-pan-zoom">
      <div className="controls">
        <div onClick={zoomIn} className="control-button">
          zoom in
        </div>
        <div onClick={zoomOut} className="control-button">
          zoom out
        </div>
        <div onClick={rotateLeft} className="control-button">
          rotate
        </div>
        {/* <div onClick={flipImage} className="control-button">
         flip
        </div> */}
        <div onClick={resetAll} className="control-button reset-button">
          reset
        </div>
      </div>

      <PanViewer
        className="pan-viewer"
        zoom={zoom}
        setZoom={setZoom}
        pandx={dx}
        pandy={dy}
        onPan={onPan}
        rotation={rotation}
        key={dx}
      >
        {file.type === "image" ? (
          <img
            // className={`pan-image ${flip ? "flipped" : ""}`}
            src={file.src}
            alt={file.alt || ""}
            style={{ transform: `rotate(${rotation * 90}deg)` }} // Rotation handled inline
          />
        ) : (
          <Document
            // className={`pan-image ${flip ? "flipped" : ""}`}
            file={file.content}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={console.error}
          >
            <Page pageNumber={pageNumber} scale={zoom} rotate={rotation * 90} />
          </Document>
        )}
      </PanViewer>
    </div>
  );
};

export default ImagePanZoom;
