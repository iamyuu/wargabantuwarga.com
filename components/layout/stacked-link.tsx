import React from "react";

import { ExternalLinkIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import Link from "next/link";

interface StackedListProps {
  links: [
    {
      title: string;
      url: string;
    },
  ];
}

const LinkClasses = (i: number) => {
  return [i > 0 ? "border-t" : undefined, "mx-2 py-4 flex justify-between"];
};

export default function StackedLink(list: StackedListProps) {
  const { links } = list;
  return (
    <div>
      {links.map((link, i) => (
        <Link key={i} href={link.url}>
          <a target="_blank">
            <div className={clsx(LinkClasses(i))}>
              <div className="text-base text-gray-900">{link.title}</div>

              <span className="text-brand-500 ml-4">
                <ExternalLinkIcon className="h-6 w-6" />
              </span>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}
