"use client";

import { usePathname } from "next/navigation";
import type { NavigationInfo } from "./NavigationInfo";
import Link from "next/link";
import { NavigationMenu } from "./NavigationMenu";
import { NavigationBar } from "./NavigationBar";

const navigation: NavigationInfo[] = [
  { key: 1, name: "Home", href: "/" },
  { key: 2, name: "Engagements", href: "/engagements" },
  { key: 3, name: "CD Info", href: "/cdinfo" },
  { key: 4, name: "Vacancies", href: "/vacancies" },
  // { name: 'Gallery', href: '/gallery' },
  // { name: 'Music', href: '/music' },
  // { name: 'Documents', href: '/documents' },
];

export const Navigation = () => {
  const currentPathname = usePathname();

  return (
    <nav className="w-full flex items-center justify-between">
      <Link href="/" className="font-small text-xl md:font-medium md:text-2xl">
        Gloucestershire Police Band
      </Link>
      <div className="md:hidden">
        <NavigationMenu navigation={navigation} />
      </div>
      <div className="hidden md:flex">
        <NavigationBar
          currentPathname={currentPathname}
          navigation={navigation}
        />
      </div>
    </nav>
  );
};
