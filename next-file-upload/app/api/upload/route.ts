import cloudinary from "@/lib/cloudinary";
import { UploadApiOptions } from "cloudinary";
import { Readable } from "stream";

const options: UploadApiOptions = {
  resource_type: "image",
};

// Source: https://cloudinary.com/blog/guest_post/media-uploads-with-cloudinarys-upload-functions
export async function uploadStream(buffer: Buffer) {
  return new Promise((res, rej) => {
    const theTransformStream = cloudinary.uploader.upload_stream(options, (err, result) => {
      if (err) return rej(err);
      res(result);
    });
    let str = Readable.from(buffer);
    str.pipe(theTransformStream);
  });
}

export async function POST(req: Request) {
  // TODO: Validate form data
  const data = await req.formData();
  const image = data.get("file") as File;
  console.log(image);

  if (image.name !== "undefined") {
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const result = await uploadStream(buffer);
    return new Response(JSON.stringify(result));
  }
  return new Response("Error", { status: 400 });
}
