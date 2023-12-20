import * as React from "react"
import Layout from "../components/layout"

const socialMedias = [
    {
        name: 'Facebook',
        description: 'facebook.com/amilodzareg',
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
        description: 'instagram.com/amilodzareg',
        href: 'https://www.instagram.com/amilodzareg',
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
            </svg>
        ),
    },
    {
        name: 'Etsy',
        description: 'amilodzareg.etsy.com',
        href: 'https://amilodzareg.etsy.com',
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 384 512" {...props}>
                <path d="M384 348c-1.8 10.8-13.8 110-15.5 132-117.9-4.3-219.9-4.7-368.5 0v-25.5c45.5-8.9 60.6-8 61-35.3 1.8-72.3 3.5-244.1 0-322-1-28.5-12.1-26.8-61-36v-25.5c73.9 2.4 255.9 8.6 363-3.8-3.5 38.3-7.8 126.5-7.8 126.5H332C320.9 115.7 313.2 68 277.3 68h-137c-10.3 0-10.8 3.5-10.8 9.8V241.5c58 .5 88.5-2.5 88.5-2.5 29.8-1 27.6-8.5 40.8-65.3h25.8c-4.4 101.4-3.9 61.8-1.8 160.3H257c-9.2-40.1-9.1-61-39.5-61.5 0 0-21.5-2-88-2v139c0 26 14.3 38.3 44.3 38.3H263c63.6 0 66.6-25 98.8-99.8H384z" />
            </svg>
        ),
    },
    {
        name: 'Pinterest',
        description: 'pinterest.com/amilodzareg',
        href: 'https://www.pinterest.com/amilodzareg',
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 496 512" {...props}>
                <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3 .8-3.4 5-20.3 6.9-28.1 .6-2.5 .3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z" />
            </svg>
        ),
    },
    {
        name: 'Tumblr',
        description: 'amilodzareg.tumblr.com',
        href: 'https://amilodzareg.tumblr.com/',
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 320 512" {...props}>
                <path d="M309.8 480.3c-13.6 14.5-50 31.7-97.4 31.7-120.8 0-147-88.8-147-140.6v-144H17.9c-5.5 0-10-4.5-10-10v-68c0-7.2 4.5-13.6 11.3-16 62-21.8 81.5-76 84.3-117.1 .8-11 6.5-16.3 16.1-16.3h70.9c5.5 0 10 4.5 10 10v115.2h83c5.5 0 10 4.4 10 9.9v81.7c0 5.5-4.5 10-10 10h-83.4V360c0 34.2 23.7 53.6 68 35.8 4.8-1.9 9-3.2 12.7-2.2 3.5 .9 5.8 3.4 7.4 7.9l22 64.3c1.8 5 3.3 10.6-.4 14.5z" />
            </svg>
        ),
    },
]

export default function ContactPage() {
    return (<Layout>
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Studio Address</h2>
                            <p className="mt-4 leading-7 text-gray-600">Visit us at:</p>
                            <a className="font-semibold text-amber-600" href="https://goo.gl/maps/ParyhgWRiumbwAtB8">
                                <address className="mt-3 space-y-1 text-sm not-italic leading-6">
                                    <p>Rua de Brito Capelo, 27</p>
                                    <p>4050-130 Porto</p>
                                    <p>Portugal</p>
                                </address>
                            </a>
                        </div>

                        <div className="sm:grid-cols-2 lg:col-span-2 rounded-2xl bg-gray-50">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12014.89846870058!2d-8.618719!3d41.16236!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2465131a5728b9%3A0x5b2d071090bb4279!2sAmilod%20Zareg!5e0!3m2!1sen!2spt!4v1702986762246!5m2!1sen!2spt"
                                width="100%"
                                height="400"
                                className="border-0 rounded-2xl"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Our Studio Address - Google Maps"></iframe>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Contacts</h2>
                            <p className="mt-4 leading-7 text-gray-600">
                                You can also send us a message on <a className="font-semibold text-amber-600" href="https://www.facebook.com/amilodzareg">facebook</a> or <a className="font-semibold text-amber-600" href="https://www.instagram.com/amilodzareg">instagram</a>.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                            <div className="rounded-2xl bg-gray-50 p-10">
                                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                                    <dt className="text-base font-semibold leading-7 text-gray-900">Email</dt>
                                    <dd>
                                        <a className="font-semibold text-amber-600" href="mailto:geral@amilodzareg.com">
                                            geral@amilodzareg.com
                                        </a>
                                    </dd>
                                </dl>
                            </div>
                            <div className="rounded-2xl bg-gray-50 p-10">
                                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                                    <dt className="text-base font-semibold leading-7 text-gray-900">Telephone</dt>
                                    <dd>
                                        <a className="font-semibold text-amber-600" href="tel:00351915056837">
                                            (+351) 91 505 68 37
                                        </a>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Follow Us Online</h2>
                            <p className="mt-4 leading-7 text-gray-600">
                                Discover our world on social media! Get an exclusive look into our latest collections, style tips, and more. Connect with us to be part of our vibrant community.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                            {socialMedias.map((item) => (
                                <div className="rounded-2xl bg-gray-50 p-10">
                                    <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                                        <dt className="inline-flex items-center gap-x-1 text-base font-semibold leading-7 text-gray-900">
                                            <item.icon className="h-6 w-6" aria-hidden="true" />
                                            <span>{item.name}</span>
                                        </dt>
                                        <dd>
                                            <a className="font-semibold text-amber-600" href={item.href}>
                                                {item.description}
                                            </a>
                                        </dd>
                                    </dl>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>)
}
