import Link from "next/link";

const NAV_ITEMS = [
  { href: "/", label: "Index" },
  { href: "/posts", label: "Posts" },
  { href: "/users", label: "Users" },
  { href: "/comments", label: "Comments" },
  { href: "/comments", label: "CommentsTest" },
];

export const Header = () => {
  return (
    <header className="flex justify-center items-center border-b w-full h-24 mb-4">
      {NAV_ITEMS.map((item) => {
        return (
          <Link key={item.href} href={item.href}>
            <a className="inline-block py-2 px-6 text-xl hover:text-blue-400 focus:text-blue-400 active:text-blue-400">{item.label}</a>
          </Link>
        );
      })}
    </header>
  );
};
