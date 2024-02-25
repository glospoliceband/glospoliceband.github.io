"use client";

import React, { Fragment, useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { Menu, Transition } from "@headlessui/react";

const classNames = (...classNames: string[]) => {
  return classNames.join(" ");
};

const navigation = [
  { key: 1, name: "Home", href: "/" },
  { key: 2, name: "Engagements", href: "/engagements" },
  { key: 3, name: <span>CD&nbsp;Info</span>, href: "/cdinfo" },
  { key: 4, name: "Vacancies", href: "/vacancies" },
  // { name: 'Gallery', href: '/gallery' },
  // { name: 'Music', href: '/music' },
  // { name: 'Documents', href: '/documents' },
];

const NavigationMenu = () => (
  <Menu as="div" className="relative ml-3">
    <div>
      <Menu.Button className="flex text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-1 focus:ring-offset-gray-500">
        <span className="sr-only">Open navigation menu</span>
        <FaBars className="block h-6 w-6" aria-hidden="true" />
      </Menu.Button>
    </div>
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        {navigation.map((item) => (
          <Menu.Item key={item.key}>
            {({ active, close }) => (
              <div>
                <Link
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700",
                  )}
                  key={item.key}
                  href={item.href}
                  onClick={close}
                >
                  {item.name}
                </Link>
              </div>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Transition>
  </Menu>
);

const NavigationBar = ({ currentPathname }: { currentPathname: string }) => (
  <ul className="w-auto font-medium flex p-4 p-0 mt-4 border border-gray-100 rounded-lg flex-row space-x-8 mt-0 border-0">
    {navigation.map((item) => (
      <li key={item.key}>
        <Link
          href={item.href}
          className={classNames(
            currentPathname === item.href
              ? "border-2"
              : "hover:border-2 hover:border-dashed",
            "px-3 py-2 rounded-md text-sm text-gray-100",
          )}
          aria-current={currentPathname === item.href ? "page" : undefined}
        >
          {item.name}
        </Link>
      </li>
    ))}
  </ul>
);

export const Navigation = () => {
  const currentPathname = usePathname();

  return (
    <nav className="w-full flex items-center justify-between">
      <Link href="/" className="font-small text-xl md:font-medium md:text-2xl">
        The Band of the Gloucestershire Constabulary
      </Link>
      <div className="md:hidden">
        <NavigationMenu />
      </div>
      <div className="hidden md:flex">
        <NavigationBar currentPathname={currentPathname} />
      </div>
    </nav>
  );
};
