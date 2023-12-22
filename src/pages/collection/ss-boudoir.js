import * as React from "react"
import Layout from "../../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import { Translate, TranslateLink, useTranslations } from "gatsby-plugin-translate"

export default function SsBoudoirPage() {
    const t = useTranslations()

    return (<Layout currentPage="collection_boudoir">
        <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <h3 className="text-base font-semibold leading-7 text-gray-900"><Translate id="collections.spring_summer" /></h3>
                <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Boudoir</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    Amilod Zareg by <TranslateLink to="/about#Designer_Marlene_Torres" className="text-amber-600 hover:text-amber-500">Marlene Torres</TranslateLink>:
                    <br />
                    <Translate id="collections.photographer_female" /> <a className="text-amber-600 hover:text-amber-500" href="http://www.flickr.com/photos/misscartier/" target="_blank" rel="noreferrer">Miss Cartier</a>
                    <br />
                    <Translate id="collections.stylist" /> Amilod Zareg
                    <br />
                    <Translate id="collections.hairdresser" /> <a className="text-amber-600 hover:text-amber-500" href="https://www.facebook.com/hairidentityporto" target="_blank" rel="noreferrer">Rute Hair Identity</a>
                    <br />
                    <Translate id="collections.make_up_artist" /> <a className="text-amber-600 hover:text-amber-500" href="http://ritasilvamakeupartist.blogspot.com/" target="_blank" rel="noreferrer">Rita Silva</a>
                    <br />
                    <Translate id="collections.models" /> Raíssa Ruiz &amp; Patrícia Ferreira
                    <br />
                    <Translate id="collections.scenario" /> Palácio de Cristal
                </p>
            </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="columns-2 md:columns-3 gap-4">
                <StaticImage className="h-auto max-w-full rounded-lg mb-4" src="../../images/ss-boudoir/01.jpg" alt={t`collections.ss_boudoir`} />
                <StaticImage className="h-auto w-full rounded-lg mb-4" src="../../images/ss-boudoir/02.jpg" alt={t`collections.ss_boudoir`} />
                <StaticImage className="h-auto max-w-full rounded-lg mb-4" src="../../images/ss-boudoir/03.jpg" alt={t`collections.ss_boudoir`} />
                <StaticImage className="h-auto max-w-full rounded-lg mb-4" src="../../images/ss-boudoir/04.jpg" alt={t`collections.ss_boudoir`} />
                <StaticImage className="h-auto max-w-full rounded-lg mb-4" src="../../images/ss-boudoir/05.jpg" alt={t`collections.ss_boudoir`} />
                <StaticImage className="h-auto max-w-full rounded-lg mb-4" src="../../images/ss-boudoir/06.jpg" alt={t`collections.ss_boudoir`} />
                <StaticImage className="h-auto max-w-full rounded-lg mb-4" src="../../images/ss-boudoir/07.jpg" alt={t`collections.ss_boudoir`} />
                <StaticImage className="h-auto w-full rounded-lg mb-4" src="../../images/ss-boudoir/08.jpg" alt={t`collections.ss_boudoir`} />
                <StaticImage className="h-auto w-full rounded-lg mb-4" src="../../images/ss-boudoir/09.jpg" alt={t`collections.ss_boudoir`} />
                <StaticImage className="h-auto w-full rounded-lg mb-4" src="../../images/ss-boudoir/10.jpg" alt={t`collections.ss_boudoir`} />
                <StaticImage className="h-auto max-w-full rounded-lg mb-4" src="../../images/ss-boudoir/11.jpg" alt={t`collections.ss_boudoir`} />
                <StaticImage className="h-auto max-w-full rounded-lg mb-4" src="../../images/ss-boudoir/12.jpg" alt={t`collections.ss_boudoir`} />
            </div>
        </div>
    </Layout>)
}

export const Head = () => <title><Translate id="collections.ss_boudoir_title" /></title>