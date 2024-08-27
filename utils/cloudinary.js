import cloudinary from "cloudinary";
import fs from "fs";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

//==========  upload the file on cloudinary  ===========//

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
      folder: process.env.CLOUDINARY_FOLDER_NAME,
    });

    return response;
  } catch (error) {
    fs.unlink(localFilePath);
    return null;
  }
};

//==========  delete file from cloudinary  ===========//

const deleteFromCloudinary = async (image) => {
  try {
    const imageUrl = image;
    const imageName = imageUrl.split("/").pop().split(".")[0];
    const deleteImage = await cloudinary.uploader.destroy(
      `${process.env.CLOUDINARY_FOLDER_NAME}/${imageName}`
    );
    return deleteImage ? true : false;
  } catch (error) {
    fs.unlink(image);
    return null;
  }
};

export { uploadOnCloudinary, deleteFromCloudinary };
