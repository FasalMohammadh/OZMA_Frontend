declare module "react-s3/lib/ReactS3" {
  function uploadFile(
    x: File,
    y: {
      bucketName: string;
      dirName: string;
      ACL: string;
      region: string;
      accessKeyId: any;
      secretAccessKey: any;
    }
  ): Promise<{ location: string }>;
}
