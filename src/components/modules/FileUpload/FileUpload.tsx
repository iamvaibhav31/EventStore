import React from "react";
import { FileUploadIcon } from "./constant/Icon";
import "./FileUpload.css";
import { FileUploadModuleProps } from "./FileUpload.type";
const FileUpload = ({ onChange }: FileUploadModuleProps) => {
  return (
    <label htmlFor="images" className="drop-container" onChange={onChange}>
      <span className="drop-title">Drop files here</span>
      or
      <input type="file" id="images" accept="image/*" required />
    </label>
  );
};

export default FileUpload;
