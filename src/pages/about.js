import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { Translate, useTranslations } from "gatsby-plugin-translate";

export default function AboutPage() {
  const t = useTranslations();

  return (
    <Layout currentPage="about">
      <main className="isolate">
        <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-amber-100/20 pt-14">
          <div
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-amber-600/10 ring-1 ring-amber-50 sm:-mr-80 lg:-mr-96"
            aria-hidden="true"
          />
          <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
                <Translate id="about.essence_amilod_zareg" />
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-lg leading-8 text-gray-600">
                  <Translate id="about.essence_amilod_zareg_description_01" />
                </p>
              </div>
              <StaticImage
                src="../images/ss-alice/01.jpg"
                alt={t`about.ss_alice_name`}
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
                  <Translate id="about.essence_amilod_zareg_description_02" />
                </p>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  <Translate id="about.essence_amilod_zareg_description_03" />
                </p>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  <Translate id="about.essence_amilod_zareg_description_04" />
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
                      alt={t`about.ss_alice_name`}
                      className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                    <StaticImage
                      src="../images/fw-hime/01.jpg"
                      alt={t`about.fw_hime_name`}
                      className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                    <StaticImage
                      src="../images/ss-boudoir/12.jpg"
                      alt={t`about.ss_boudoir_name`}
                      className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export const Head = ({ pageContext }) => {
  return (
    <title>
      {pageContext.language === "pt"
        ? "Sobre Nós | Amilod Zareg"
        : "About Us | Amilod Zareg"}
    </title>
  );
};
