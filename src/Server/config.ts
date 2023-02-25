export const SHOUTOUT_URL = "https://api.getshoutout.com/otpservice/";
export const SERVER_URL = "https://api.ozma.dottechsoftware.net";
export const S3_CONFIG = {
  bucketName: "respect",
  dirName: "ozma/",
  ACL: "public-read",
  region: "ap-south-1",
  accessKeyId: import.meta.env.VITE_S3_ACCESS_KEY_ID,
  secretAccessKey: import.meta.env.VITE_S3_SECRET_ACCESS_KEY,
};
