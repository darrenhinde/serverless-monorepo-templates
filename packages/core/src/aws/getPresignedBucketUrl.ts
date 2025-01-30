import {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { Resource } from "sst";

const s3Client = new S3Client({
  region: Resource.REGION.value,
});

type GetPresignedUrlArgs = {
  objectKey: string;
  expiresIn?: number;
  type: "upload" | "download";
};

/**
 * @description
 * Generates a pre-signed URL for uploading or downloading files from S3.
 *
 * Pre-signed URLs provide temporary, secure access to S3 objects without requiring AWS credentials.
 * They work by encoding authentication information and expiration time into the URL itself.
 *
 * How it works:
 * 1. The application requests a pre-signed URL from AWS, specifying the operation (upload/download) and expiration time.
 * 2. AWS generates a URL containing a signature based on the requester's credentials and the specified parameters.
 * 3. The URL is returned to the application, which can then be used to perform the authorized operation (upload/download of a specific S3 object)
 *
 * Examples:
 * - Allowing users to upload files directly to S3 from a web browser without exposing AWS credentials.
 * - Providing temporary download links for private S3 objects.
 */
export const getPresignedUrl = async ({
  objectKey,
  expiresIn = 3600,
  type,
}: GetPresignedUrlArgs): Promise<string> => {
  const command =
    type === "upload"
      ? new PutObjectCommand({
          Bucket: Resource.Assets.name,
          Key: objectKey,
        })
      : new GetObjectCommand({
          Bucket: Resource.Assets.name,
          Key: objectKey,
        });

  try {
    const url = await getSignedUrl(s3Client, command, { expiresIn });
    console.log(`Pre-signed URL generated for ${type}:`, url);
    return url;
  } catch (error) {
    console.error(`Error generating pre-signed URL for ${type}:`, error);
    throw error;
  }
};
