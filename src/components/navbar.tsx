import React, { Fragment } from "react";

import { Link } from "gatsby";

import { Menu, Transition } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Home', href: '/', slug: 'homepage' },
    { name: 'Engagements', href: '/engagements', slug: 'downloads' },
    { name: 'CD Info', href: '/cdinfo', slug: 'eltern' },
    { name: 'Music', href: '/music', slug: 'impressum' },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
};

const NarbarMenu = () => (
    <Menu as="div" className="relative ml-3">
        <div>
            <Menu.Button className="flex text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-1 focus:ring-offset-gray-500">
                <span className="sr-only">Open navigation menu</span>
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
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
                    <Menu.Item>
                        {({ active, close }) => (
                            <div>
                                <Link
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                    to={item.href}
                                    onClick={close}
                                >
                                    {item.name}
                                </Link>
                            </div>
                        )}
                    </Menu.Item>))}
            </Menu.Items>
        </Transition>
    </Menu>
);

export const Navbar = ({slug}) => (
    <nav className="w-full flex items-center justify-between">
        <Link to="/" className="font-medium text-xl md:text-2xl">The Band of the Gloucestershire Constabulary</Link>
        <div className="hidden sm:block">
            {navigation.map((item) => (
                <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                        slug === item.slug ? 'bg-sky-300 text-gray-100' : 'text-gray-100 hover:bg-sky-300 hover:text-gray-700',
                        'px-3 py-2 rounded-md text-sm'
                    )}
                    aria-current={slug === item.slug ? 'page' : undefined}
                >
                    {item.name}
                </Link>
            ))}
        </div>
        <div className="block sm:hidden">
            <NarbarMenu />
        </div>
    </nav>
);
