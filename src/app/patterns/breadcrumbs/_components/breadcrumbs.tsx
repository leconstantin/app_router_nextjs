import Link from "next/link";

import { HiChevronRight } from "react-icons/hi2";

export function Breadcrumbs({
  items,
}: {
  items: { text: string; href: string }[];
}) {
  return (
    <div className="flex gap-1.5 text-sm">
      {items.map((item, i) => {
        return (
          <span key={item.href} className="flex  items-center justify-center">
            {i === 0 ? null : <HiChevronRight className="w-4 text-gray-400" />}

            <Link
              key={item.href}
              href={item.href}
              className="capitalize text-white hover:text-gray-500"
            >
              {item.text}
            </Link>
          </span>
        );
      })}
    </div>
  );
}
