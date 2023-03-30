import axios from "axios";

interface ImageUploadResponse {
  secure_url: string;
  public_id: string;
}
async function ImageUrlGenerator(file: string) {
  if (!file)
    return {
      success: false,
      error: "please select the file",
    };

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "AllEvent");
  formData.append("cloud_name", "dunvsvnwq");
  try {
    const response = await axios.post<ImageUploadResponse>(
      "https://api.cloudinary.com/v1_1/dunvsvnwq/image/upload",
      formData,
    );

    return {
      success: true,
      imgURL: response.data.secure_url,
    };
  } catch (error) {
    return {
      success: false,
      error: error?.message,
    };
  }
}

export default ImageUrlGenerator;
