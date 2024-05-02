import db from "@/lib/db";

/**
 * DB를 조회하며 slug 문자열이 사용가능한지 확인합니다.
 *
 * 사용 불가능한 slug일 경우 <original_slug>_1 처럼 sequence를 1씩 증가시키고
 * `_<sequence>`를 suffix로 추가하여 DB에 존재하는지 반복 확인합니다.
 *
 * 사용 가능한 slug를 찾을 경우 반환합니다.
 */
const getAvailableSlug = async (
  originalSlug: string,
  sequence: number = 0,
): Promise<string> => {
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
};

/**
 * 게시글 제목(title)을 slug로 변환합니다.
 *
 * 중복된 slug일 경우 suffix를 추가해서 중복되지 않는 slug를 반환합니다.
 */
export async function makePostSlug(title: string) {
  return getAvailableSlug(encodeURI(title));
}
