import { FormEventHandler } from "react";

export interface FileUploadModuleProps {
  onChange: React.FormEventHandler<HTMLLabelElement> | undefined;
}
