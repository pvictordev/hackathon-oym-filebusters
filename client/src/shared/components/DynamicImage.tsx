import { useState } from "react";
import { Document, Page } from "react-pdf";

interface DynamicImageProps {
  file: File; // This can be either an image URL or a PDF file path
}

const DynamicImage = ({ file }: DynamicImageProps) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const isPdf = file.type === "pdf"; // Check if the file is a PDF

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }): void => {
    setNumPages(numPages);
  };

  return (
    <div>
      {isPdf ? (
        <div>
          <Document
            file={file.content}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={console.error}
          >
            <Page pageNumber={pageNumber} />
          </Document>
          <p>
            Page {pageNumber} of {numPages}
          </p>
        </div>
      ) : (
        <img
          src={file.content}
          alt="Rendered content"
          style={{ maxWidth: "100%", height: "auto" }} // Ensuring the image is responsive
        />
      )}
    </div>
  );
};

export default DynamicImage;
