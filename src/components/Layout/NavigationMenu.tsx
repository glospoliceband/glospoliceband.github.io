import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { FaBars } from "react-icons/fa";
import { classNames } from "./utils";
import Link from "next/link";

import type { NavigationInfo } from "./NavigationInfo";

export const NavigationMenu = ({
  navigation,
}: {
  navigation: NavigationInfo[];
}) => (
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
