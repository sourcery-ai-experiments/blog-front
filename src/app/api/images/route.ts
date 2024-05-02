"use server";

import r2ImageLoader from "@/app/loader";
import {
  HeadObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import md5 from "md5";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const formData = await request.formData();

  const image = formData.get("image") as File;

  const imageExtension = image.name.split(".").pop();

  const hash = md5(await image.text());

  const keyName = `images/${hash[0]}/${hash[1]}/${hash}.${imageExtension}`;

  const S3 = new S3Client({
    region: "auto",
    endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: process.env.R2_ACCESS_KEY_ID!,
      secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
    },
  });

  try {
    await S3.send(
      new HeadObjectCommand({
        Bucket: "blog",
        Key: keyName,
      }),
    );

    return NextResponse.json({
      path: r2ImageLoader({ src: keyName, width: 100 }),
      real_upload: false,
    });
  } catch (e) {}

  try {
    await S3.send(
      new PutObjectCommand({
        Bucket: "blog",
        Key: keyName,
        Body: (await image.arrayBuffer()) as any,
        ContentType: image.type,
      }),
    );

    return NextResponse.json({
      path: r2ImageLoader({ src: keyName, width: 100 }),
      real_upload: true,
    });
  } catch (e) {
    return NextResponse.json({ error: e });
  } finally {
    S3.destroy();
  }
};
