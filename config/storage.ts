import multer from "multer";

export const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, "uploads");
  },
  filename(req, file, callback) {
    callback(null, `${new Date().getTime()}_${file.originalname}`);
  },
});
