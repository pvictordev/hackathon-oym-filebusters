import { useState } from "react";
import ImagePanZoom from "@/shared/components/ImagePanZoom";

const IdentityExtraction = () => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(null); // Error state for page validation

  const handleFilesUpload = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const fileArray = [];

    setError(null); // Reset error message

    selectedFiles.forEach((file) => {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.readAsDataURL(file); // Convert image file to base64 URL

        reader.onloadend = () => {
          fileArray.push({ type: "image", content: reader.result });
          if (fileArray.length === selectedFiles.length) {
            setFiles(fileArray);
          }
        };
      } else if (file.type.startsWith("application/pdf")) {
        const reader = new FileReader();
        reader.readAsDataURL(file); // Convert image file to base64 URL

        reader.onloadend = () => {
          fileArray.push({ type: "pdf", content: file });
          if (fileArray.length === selectedFiles.length) {
            setFiles(fileArray);
          }
        };
      }
    });
  };

  return (
    <div>
      <h1>Test</h1>

      <h3>Upload images</h3>
      <input
        type="file"
        multiple
        accept=".pdf,image/*"
        onChange={handleFilesUpload}
      />

      <div>
        {files.map((file, index) => (
          <ImagePanZoom key={file.content + "_" + index} file={file} />
        ))}
      </div>
    </div>
  );
};

export default IdentityExtraction;
