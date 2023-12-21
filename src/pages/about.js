import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

export default function AboutPage() {
    return (<Layout>
        <main className="isolate">
            <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-amber-100/20 pt-14">
                <div
                    className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-amber-600/10 ring-1 ring-amber-50 sm:-mr-80 lg:-mr-96"
                    aria-hidden="true"
                />
                <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                        <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
                            The Essence of Amilod Zareg
                        </h1>
                        <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                            <p className="text-lg leading-8 text-gray-600">Embracing the essence of femininity, our fashion brand celebrates the allure of graceful silhouettes and vibrant hues. From flowing, romantic dresses to a palette alive with colors, our creations embody a timeless design philosophy meticulously crafted with an unwavering focus on detail and flawless finishing.</p>
                        </div>
                        <StaticImage
                            src="../images/ss-alice/01.jpg"
                            alt=""
                            className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
                        />
                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
            </div>

            <div className="overflow-hidden">
                <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                        <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                            <p className="mt-6 text-xl leading-8 text-gray-600">
                                At the heart of our brand lies a commitment to timeless elegance, where every stitch, every fold, reflects an artistry that transcends trends. Our dedication to perfection resonates in the immaculate finishings, elevating each garment to a realm of exquisite craftsmanship.
                            </p>
                            <p className="mt-6 text-base leading-7 text-gray-600">
                                Distinguished by an originality that defines us, our unique style embodies an urban chic sensibility, infusing classic designs with a contemporary twist. Our fashion narrative weaves together a tapestry of individuality, shaping a distinctive identity that stands apart in its own fashion sphere.
                            </p>
                            <p className="mt-6 text-base leading-7 text-gray-600">
                                From the bustling streets to the cosmopolitan landscape, our brand exudes a flair that's both captivating and authentically our own. We invite you to embrace our distinctive blend of sophistication, originality, and urban allure, as we redefine the boundaries of timeless fashion.
                            </p>
                        </div>
                        <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                                <StaticImage
                                    src="../images/fw-roz/09.jpg"
                                    alt=""
                                    className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                                />
                            </div>
                            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                                <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                                    <StaticImage
                                        src="../images/ss-alice/13.jpg"
                                        alt=""
                                        className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                                    />
                                </div>
                                <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                                    <StaticImage
                                        src="../images/fw-hime/01.jpg"
                                        alt=""
                                        className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                                    />
                                </div>
                                <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                                    <StaticImage
                                        src="../images/ss-boudoir/12.jpg"
                                        alt=""
                                        className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </Layout>)
}

export const Head = () => <title>About Us | Amilod Zareg</title>