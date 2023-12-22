import React, { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { LanguageSelector, Translate, TranslateLink, useTranslateContext } from 'gatsby-plugin-translate'

const collections = [
    { page: "collection_alice", name: "layout.ss_alice_name", to: '/collection/ss-alice' },
    { page: "collection_roz", name: "layout.fw_roz_name", to: '/collection/fw-roz' },
    { page: "collection_boudoir", name: 'layout.ss_boudoir_name', to: '/collection/ss-boudoir' },
    { page: "collection_hime", name: 'layout.fw_hime_name', to: '/collection/fw-hime' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const navigation = [
    {
        name: 'Facebook',
        href: 'https://www.facebook.com/amilodzareg',
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/amilodzareg',
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
            </svg>
        ),
    },
    {
        name: 'Etsy',
        href: 'https://amilodzareg.etsy.com',
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 384 512" {...props}>
                <path d="M384 348c-1.8 10.8-13.8 110-15.5 132-117.9-4.3-219.9-4.7-368.5 0v-25.5c45.5-8.9 60.6-8 61-35.3 1.8-72.3 3.5-244.1 0-322-1-28.5-12.1-26.8-61-36v-25.5c73.9 2.4 255.9 8.6 363-3.8-3.5 38.3-7.8 126.5-7.8 126.5H332C320.9 115.7 313.2 68 277.3 68h-137c-10.3 0-10.8 3.5-10.8 9.8V241.5c58 .5 88.5-2.5 88.5-2.5 29.8-1 27.6-8.5 40.8-65.3h25.8c-4.4 101.4-3.9 61.8-1.8 160.3H257c-9.2-40.1-9.1-61-39.5-61.5 0 0-21.5-2-88-2v139c0 26 14.3 38.3 44.3 38.3H263c63.6 0 66.6-25 98.8-99.8H384z" />
            </svg>
        ),
    },
    {
        name: 'Pinterest',
        href: 'https://www.pinterest.com/amilodzareg',
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 496 512" {...props}>
                <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3 .8-3.4 5-20.3 6.9-28.1 .6-2.5 .3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z" />
            </svg>
        ),
    },
    {
        name: 'Tumblr',
        href: 'https://amilodzareg.tumblr.com/',
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 320 512" {...props}>
                <path d="M309.8 480.3c-13.6 14.5-50 31.7-97.4 31.7-120.8 0-147-88.8-147-140.6v-144H17.9c-5.5 0-10-4.5-10-10v-68c0-7.2 4.5-13.6 11.3-16 62-21.8 81.5-76 84.3-117.1 .8-11 6.5-16.3 16.1-16.3h70.9c5.5 0 10 4.5 10 10v115.2h83c5.5 0 10 4.4 10 9.9v81.7c0 5.5-4.5 10-10 10h-83.4V360c0 34.2 23.7 53.6 68 35.8 4.8-1.9 9-3.2 12.7-2.2 3.5 .9 5.8 3.4 7.4 7.9l22 64.3c1.8 5 3.3 10.6-.4 14.5z" />
            </svg>
        ),
    },
]


const Layout = ({ children, currentPage }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { language } = useTranslateContext()

    return (
        <>
            <header className="bg-white">
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <TranslateLink to="/" className={`-m-1.5 p-1.5 ${currentPage === "index" ? "text-amber-600" : "text-gray-900"} hover:text-amber-500`}>
                            <span className="sr-only">Amilod Zareg</span>
                            <svg className="h-8 w-auto" viewBox="0 0 20 30">
                                <path fill="currentColor" d="M 2.757 0 L 2.951 0.509 L 3.845 2.857 L 2.857 2.857 L 1.429 2.857 L 0 2.857 L 0 4.286 L 0 7.143 L 0 8.571 L 2.857 8.571 L 2.857 7.143 L 2.857 5.714 L 4.934 5.714 L 8.374 14.745 L 0.313 24.822 L 1.429 27.143 L 13.097 27.143 L 14.186 30 L 17.243 30 L 17.049 29.491 L 16.155 27.143 L 18.571 27.143 L 20 27.143 L 20 25.714 L 20 22.857 L 20 21.429 L 17.143 21.429 L 17.143 22.857 L 17.143 24.286 L 4.401 24.286 L 19.687 5.178 L 18.571 2.857 L 6.903 2.857 L 5.815 0 L 2.757 0 Z M 7.991 5.714 L 15.599 5.714 L 10.445 12.157 L 7.991 5.714 Z" />
                            </svg>
                        </TranslateLink>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only"><Translate id="layout.open_main_menu" /></span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>

                    <Popover.Group className="hidden lg:flex lg:gap-x-10">
                        <Popover className="relative">
                            <Popover.Button className={`inline-flex items-center gap-x-1 text-sm font-semibold leading-6 ${currentPage.startsWith("collection_") ? "text-amber-600" : "text-gray-900"} hover:text-amber-500 p-2`}>
                                <span><Translate id="layout.collections" /></span>
                                <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                            </Popover.Button>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-min -translate-x-1/2 px-4">
                                    <div className="w-56 shrink rounded-xl bg-white p-4 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5">
                                        {collections.map((item) => (
                                            <TranslateLink key={item.name} to={item.to} className={`block p-2 ${currentPage === item.page ? "text-amber-600" : "text-gray-900"} hover:text-amber-500`}>
                                                <Translate id={item.name} />
                                            </TranslateLink>
                                        ))}
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </Popover>

                        <TranslateLink to="/about" className={`text-sm font-semibold leading-6 ${currentPage === "about" ? "text-amber-600" : "text-gray-900"} hover:text-amber-500 p-2`}>
                            <Translate id="layout.about_us" />
                        </TranslateLink>
                        <TranslateLink to="/contact" className={`text-sm font-semibold leading-6 ${currentPage === "contact" ? "text-amber-600" : "text-gray-900"} hover:text-amber-500 p-2`}>
                            <Translate id="layout.contact_us" />
                        </TranslateLink>
                        {language === "pt" ?
                            <LanguageSelector className="text-sm font-semibold leading-6 text-gray-900 hover:text-amber-500 p-2" language="en">EN 🇬🇧</LanguageSelector> :
                            <LanguageSelector className="text-sm font-semibold leading-6 text-gray-900 hover:text-amber-500 p-2" language="pt">PT 🇵🇹</LanguageSelector>}
                    </Popover.Group>
                </nav>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-10" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <TranslateLink to="/" className="-m-1.5 p-1.5">
                                <span className="sr-only">Amilod Zareg</span>
                                <svg className="h-8 w-auto" viewBox="0 0 20 30">
                                    <path d="M 2.757 0 L 2.951 0.509 L 3.845 2.857 L 2.857 2.857 L 1.429 2.857 L 0 2.857 L 0 4.286 L 0 7.143 L 0 8.571 L 2.857 8.571 L 2.857 7.143 L 2.857 5.714 L 4.934 5.714 L 8.374 14.745 L 0.313 24.822 L 1.429 27.143 L 13.097 27.143 L 14.186 30 L 17.243 30 L 17.049 29.491 L 16.155 27.143 L 18.571 27.143 L 20 27.143 L 20 25.714 L 20 22.857 L 20 21.429 L 17.143 21.429 L 17.143 22.857 L 17.143 24.286 L 4.401 24.286 L 19.687 5.178 L 18.571 2.857 L 6.903 2.857 L 5.815 0 L 2.757 0 Z M 7.991 5.714 L 15.599 5.714 L 10.445 12.157 L 7.991 5.714 Z" />
                                </svg>
                            </TranslateLink>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only"><Translate id="layout.close_menu" /></span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <Disclosure as="div" className="-mx-3">
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                    <Translate id="layout.collections" />
                                                    <ChevronDownIcon
                                                        className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                        aria-hidden="true"
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="mt-2 space-y-2">
                                                    {collections.map((item) => (
                                                        <Disclosure.Button
                                                            key={item.name}
                                                            as="a"
                                                            href={item.to}
                                                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                        >
                                                            <Translate id={item.name} />
                                                        </Disclosure.Button>
                                                    ))}
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                    <TranslateLink
                                        to="/about"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        <Translate id="layout.about_us" />
                                    </TranslateLink>
                                    <TranslateLink
                                        to="/contact"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        <Translate id="layout.contact_us" />
                                    </TranslateLink>
                                    {language === "pt" ?
                                        <LanguageSelector className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" language="en">EN 🇬🇧</LanguageSelector> :
                                        <LanguageSelector className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" language="pt">PT 🇵🇹</LanguageSelector>}
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>

            {children}

            <footer className="bg-white">
                <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
                    <div className="flex justify-center space-x-6 md:order-2">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">{item.name}</span>
                                <item.icon className="h-6 w-6" aria-hidden="true" />
                            </a>
                        ))}
                    </div>
                    <div className="mt-8 md:order-1 md:mt-0">
                        <p className="text-center text-xs leading-5 text-gray-500">
                            &copy; {new Date().getFullYear()} <Translate id="layout.copyright_text" />
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Layout