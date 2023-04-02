import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react"
import { FaSun, FaMoon } from 'react-icons/fa';
import useDarkMode from '../hooks/useDarkMode';
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import Link from "next/link";

interface Menu {
    name: string,
    href: string,
}

const guestNavigation: Array<Menu> = [
    { name: 'About', href: '/about' },
    { name: 'Support', href: '/support' },
    // { name: 'Vendor', href: '/api/auth/signin' }
]

const userNavigation: Array<Menu> = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Settings', href: '/settings' },
    { name: 'Support', href: '/support' },
]

export default function Navigation() {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [menu, setMenu] = useState(guestNavigation);
    const { data: session, status } = useSession();
    const router = useRouter();

    // if (session) {
    //     const navigation: Array<Menu> = [
    //         { name: 'About', href: '/about' },
    //         { name: 'Support', href: '/support' },
    //         { name: 'Vendor', href: '/api/auth/signin' }
    //     ]
    //     setMenu(navigation)
    // }

    return (
        <nav className="sticky top-0 z-10 bg-primary dark:bg-secondary backdrop-filter backdrop-blur-[6px] bg-opacity-10 dark:bg-opacity-10 border-b border-gray-200 dark:border-slate-800">
            <div className="container mx-auto px-4 pt-6 pb-6">
                <div>
                    <nav className="flex h-9 items-center justify-between" aria-label="Global">
                        <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
                            <a href="/" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img className="h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                            </a>
                        </div>
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
                            {/* {menu.map((item) => (
                                item.href === router.pathname
                                    ? (<a key={item.name} href={item.href} className="font-semibold text-secondary dark:text-primary hover:text-secondary dark:hover:text-primary">{item.name}</a>)
                                    : <a key={item.name} href={item.href} className="font-semibold text-trinary hover:text-secondary dark:hover:text-primary">{item.name}</a>
                            ))} */}


                            {session ? (
                                userNavigation.map((item) => (
                                    item.href === router.pathname
                                        ? (<Link key={item.name} href={item.href} className="font-semibold text-secondary dark:text-primary hover:text-secondary dark:hover:text-primary">{item.name}</Link>)
                                        : <Link key={item.name} href={item.href} className="font-semibold text-trinary hover:text-secondary dark:hover:text-primary">{item.name}</Link>
                                ))
                            ) : (
                                guestNavigation.map((item) => (
                                    item.href === router.pathname
                                        ? (<Link key={item.name} href={item.href} className="font-semibold text-secondary dark:text-primary hover:text-secondary dark:hover:text-primary">{item.name}</Link>)
                                        : <Link key={item.name} href={item.href} className="font-semibold text-trinary hover:text-secondary dark:hover:text-primary">{item.name}</Link>
                                ))
                            )}
                        </div>
                        <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
                            {session ? (
                                <button
                                    onClick={() => signOut({
                                        callbackUrl: `//`
                                    })}
                                    className="inline-block rounded-lg px-3 mr-5 py-1.5 text-sm font-semibold leading-6 text-secondary dark:text-primary shadow-sm ring-1 ring-black dark:ring-primary hover:bg-secondary dark:hover:bg-primary hover:text-primary dark:hover:text-secondary"
                                >
                                    Sign out
                                </button>
                            ) : (
                                <button
                                    onClick={() => signIn('cognito', {
                                        callbackUrl: `/dashboard`
                                    })}
                                    className="inline-block rounded-lg px-3 mr-5 py-1.5 text-sm font-semibold leading-6 text-secondary dark:text-primary shadow-sm ring-1 ring-black dark:ring-primary hover:bg-secondary dark:hover:bg-primary hover:text-primary dark:hover:text-secondary"
                                >
                                    Sign in
                                </button>
                            )}
                            <button className="text-trinary" onClick={handleMode}>
                                {/* <span onClick={handleMode}> */}
                                    {darkTheme ? (
                                        <FaSun size='24' className='top-navigation-icon' />
                                    ) : (                           
                                                <FaMoon size='24' className='top-navigation-icon' />
                                    )}
                                {/* </span> */}
                            </button>
                        </div>
                    </nav>
                    <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                        <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
                            <div className="flex h-9 items-center justify-between">
                                <div className="flex">
                                    <a href="#" className="-m-1.5 p-1.5">
                                        <span className="sr-only">Your Company</span>
                                        <img
                                            className="h-8"
                                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div className="flex">
                                    <button
                                        type="button"
                                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        {menu.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-400/10"
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                    <div className="py-6">
                                        <a
                                            href="#"
                                            className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6"
                                        >
                                            Log in
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Dialog>
                </div>
            </div>
        </nav >
    );
}
