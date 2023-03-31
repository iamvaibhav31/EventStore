import "./FileUpload.css";
import { FileUploadModuleProps } from "./FileUpload.type";
const FileUpload = ({ onChange }: FileUploadModuleProps) => {
  return (
    <label htmlFor="images" className="drop-container">
      <span className="drop-title">Drop files here</span>
      or
      <input
        type="file"
        id="images"
        accept="image/*"
        required
        onChange={onChange}
      />
    </label>
  );
};

export default FileUpload;
