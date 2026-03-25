import { v2 as cloudinary } from "cloudinary";

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];
const MAX_SIZE = 2 * 1024 * 1024; // 2MB

export const getSignature = async (req, res) => {
  try {
    const { fileType, fileSize } = req.body;

    if (!fileType || !fileSize) {
      return res.status(400).json({
        message: "File type and file size are required",
      });
    }

    if (!ALLOWED_TYPES.includes(fileType)) {
      return res.status(415).json({
        message: "Unsupported image format",
      });
    }

    if (fileSize > MAX_SIZE) {
      return res
        .status(413)
        .json({ message: "Image size exceeds the maximum limit (2MB)" });
    }

    const timestamp = Math.round(Date.now() / 1000);
    const folder = `avatars/users/${req.user._id}`;

    const signature = cloudinary.utils.api_sign_request(
      { timestamp, folder },
      process.env.CLOUDINARY_API_SECRET,
    );

    res.status(200).json({
      timestamp,
      signature,
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
      apiKey: process.env.CLOUDINARY_API_KEY,
      folder,
    });
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
};
