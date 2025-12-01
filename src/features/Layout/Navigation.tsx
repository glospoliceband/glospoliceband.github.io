"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavigationBar } from "./NavigationBar";
import type { NavigationInfo } from "./NavigationInfo";
import { NavigationMenu } from "./NavigationMenu";

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
      <div className="lg:hidden">
        <NavigationMenu navigation={navigation} />
      </div>
      <div className="hidden lg:flex">
        <NavigationBar
          currentPathname={currentPathname}
          navigation={navigation}
        />
      </div>
    </nav>
  );
};
