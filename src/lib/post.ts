import db from "@/lib/db";

const getAvailableSlug = async (
  originalSlug: string,
  numberDuplicates: number = 0
) => {
  const nowSlug =
    originalSlug + (numberDuplicates ? `_${numberDuplicates}` : "");

  console.log();

  const post = await db.post.findUnique({
    select: { id: true, slug: true },
    where: { slug: nowSlug },
  });

  if (post) {
    return await getAvailableSlug(originalSlug, numberDuplicates + 1);
  } else {
    return nowSlug;
  }
};

export async function makePostSlug(title: string) {
  return await getAvailableSlug(encodeURI(title));
}
