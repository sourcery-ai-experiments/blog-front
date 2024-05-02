import Link from "next/link";

const Item = ({
  title,
  description,
  date,
  href = "#",
}: {
  title?: string;
  description?: string;
  date?: string;
  href?: string;
}) => {
  return (
    <div>
      <h2 className="mb-2 mt-8 text-lg font-bold text-gray-950 dark:text-gray-50">
        <Link href={href}>{title}</Link>
      </h2>
      <p className="mb-4 font-medium text-gray-700 dark:text-gray-300">
        {description}
        <Link
          href={href}
          className="ml-2 text-sm font-bold text-gray-950 underline dark:text-gray-50"
        >
          더보기 →
        </Link>
      </p>
      <div className="text-sm text-gray-700 dark:text-gray-300">{date}</div>
    </div>
  );
};

export default Item;
