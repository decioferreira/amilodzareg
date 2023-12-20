import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout>
      <main className="isolate">
        <div className="relative isolate overflow-hidden pt-14">
          <StaticImage className="absolute inset-0 -z-10 h-full w-full object-cover brightness-50 contrast-75" src="../images/hero.jpg" alt="" />
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl drop-shadow-xl">
                Amilod Zareg
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300 drop-shadow-xl">
                Crafting Fashion Stories
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="https://amilodzareg.etsy.com/"
                  className="rounded-md bg-amber-500 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Shop Now on Etsy
                </a>
                <a href="/contact" className="text-sm font-semibold leading-6 text-white">
                  Contact Us <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>

        <div className="relative isolate -z-10">
          <svg
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
          </svg>
          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
              }}
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Where Design Meets Passion
                  </h1>
                  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                    Welcome to Amilod Zareg, where design meets imagination in a seamless blend of
                    artistry and elegance. We craft more than just garments; we curate stories woven
                    with passion, precision, and an unwavering commitment to individuality.
                  </p>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <StaticImage
                        src="../images/fw-hime/01.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <StaticImage
                        src="../images/ss-boudoir/10.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <StaticImage
                        src="../images/fw-roz/03.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <StaticImage
                        src="../images/ss-alice/21.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <StaticImage
                        src="../images/fw-hime/04.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-6 sm:py-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <ul className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <li>
                <StaticImage className="aspect-square w-full rounded-2xl object-cover" src="../images/sweater-and-skirt.webp" alt="" />
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Sweater and skirt</h3>
                <p className="text-base leading-7 text-gray-600">Knitted sweater with lace appliqué and asymmetrical skirt 💖</p>
              </li>
              <li>
                <StaticImage className="aspect-square w-full rounded-2xl object-cover" src="../images/pleated-dress.jpg" alt="" />
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Pleated dress</h3>
                <p className="text-base leading-7 text-gray-600">An Amilod Zareg proposal for a special day 👗</p>
              </li>
              <li>
                <StaticImage className="aspect-square w-full rounded-2xl object-cover" src="../images/dress.webp" alt="" />
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Dress</h3>
                <p className="text-base leading-7 text-gray-600">Because it's the little things that make all the difference ✨</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6 sm:py-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Made-to-measure Wedding Dresses</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Is it your special day? Today you are the Star. You deserve a wedding dress that represents you and your unique style on this special day! Amilod Zareg will help you make this dream come true.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                From wedding dresses, mother of the bride, to party dresses, we can work together to achieve the look you want.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Contact <a href="mailto:geral@amilodzareg.com">geral@amilodzareg.com</a> for more information and prices. We advise you to create the dress of your dreams a year before the big day.
              </p>
            </div>
          </div>

          <ul className="mx-auto mt-20 grid grid-cols-1 sm:mx-0 sm:max-w-none sm:grid-cols-3" >
            <li>
              <StaticImage className="aspect-square w-full object-cover" src="../images/wedding-01.jpg" alt="" />
            </li>
            <li>
              <StaticImage className="aspect-square w-full object-cover" src="../images/wedding-02.jpg" alt="" />
            </li>
            <li>
              <StaticImage className="aspect-square w-full object-cover" src="../images/wedding-03.jpg" alt="" />
            </li>
          </ul>
        </div>
      </main>
    </Layout >
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
