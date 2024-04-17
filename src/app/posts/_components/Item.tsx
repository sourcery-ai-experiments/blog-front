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
      <h2 className="text-gray-950 dark:text-gray-50 text-lg font-bold mt-8 mb-2">
        <Link href={href}>{title}</Link>
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4 font-medium">
        {description}
        <Link
          href={href}
          className="ml-2 text-gray-950 dark:text-gray-50 font-bold underline text-sm"
        >
          더보기 →
        </Link>
      </p>
      <div className="text-gray-700 dark:text-gray-300 text-sm">{date}</div>
    </div>
  );
};

export default Item;
