"use server";

import db from "@/lib/db";
import "server-only";

/**
 * DB를 조회하며 slug 문자열이 사용가능한지 확인합니다.
 *
 * 사용 불가능한 slug일 경우 <original_slug>_1 처럼 sequence를 1씩 증가시키고
 * `_<sequence>`를 suffix로 추가하여 DB에 존재하는지 반복 확인합니다.
 *
 * 사용 가능한 slug를 찾을 경우 반환합니다.
 */
async function getAvailableSlug(
  originalSlug: string,
  sequence: number = 0,
): Promise<string> {
  const nowSlug = originalSlug + (sequence ? `_${sequence}` : "");

  const post = await db.post.findUnique({
    select: { id: true, slug: true },
    where: { slug: nowSlug },
  });

  if (post) {
    return getAvailableSlug(originalSlug, sequence + 1);
  } else {
    return nowSlug;
  }
}

/**
 * 게시글 제목(title)을 slug로 변환합니다.
 *
 * 중복된 slug일 경우 suffix를 추가해서 중복되지 않는 slug를 반환합니다.
 */
export async function makePostSlug(title: string) {
  return getAvailableSlug(encodeURI(title));
}

export async function getPostDetail(slug: string) {
  return db.post.findUnique({
    where: { slug },
  });
}

export async function updatePost(postId: number, post: PostFillable) {
  return db.post.update({
    where: { id: postId },
    data: post,
    select: { id: true, slug: true },
  });
}

export async function isUserAuthorOfPost(postId: number, userId: number) {
  const postExists = await db.post.count({
    where: {
      id: postId,
      userId: userId,
    },
  });

  return postExists > 0;
}
