import { procedure, router } from "..";
import { z } from "zod";
import { getPresignedUrl } from "../../aws/getPresignedBucketUrl";

export const storageRouter = router({
  getUploadUrl: procedure
    .input(z.object({ objectKey: z.string() }))
    .query(async ({ input }) =>
      getPresignedUrl({
        objectKey: input.objectKey,
        type: "upload",
      })
    ),

  getDownloadUrl: procedure
    .input(z.object({ objectKey: z.string() }))
    .query(async ({ input }) =>
      getPresignedUrl({
        objectKey: input.objectKey,
        type: "download",
      })
    ),
});
