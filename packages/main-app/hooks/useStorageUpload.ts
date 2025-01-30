import { trpcAsync } from "@/trpc/client";
import { useState } from "react";

export const useStorageUpload = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);

  const uploadFile = async (
    file: File,
    objectKey: string
  ): Promise<string | undefined> => {
    setIsUploading(true);

    setError(null);

    try {
      const uploadUrl = await trpcAsync.storage.getUploadUrl.query({
        objectKey,
      });

      const uploadResponse = await fetch(uploadUrl, {
        method: "PUT",
        body: file,
        headers: {
          "Content-Type": file.type,
        },
      });

      if (!uploadResponse.ok) {
        throw new Error("Failed to upload file");
      }

      const url = `https://${process.env.NEXT_PUBLIC_BUCKET}.s3.amazonaws.com/${objectKey}`;

      setUploadedUrl(url);

      return url;
    } catch (err) {
      console.error(err);
      setError(
        err instanceof Error ? err : new Error("An unknown error occurred")
      );
    } finally {
      setIsUploading(false);
    }
  };

  return { uploadFile, isUploading, error, uploadedUrl };
};
