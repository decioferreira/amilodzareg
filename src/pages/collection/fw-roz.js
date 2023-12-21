import * as React from "react"
import Layout from "../../components/layout"
import { StaticImage } from "gatsby-plugin-image"

export default function FwRozPage() {
    return (<Layout>
        <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Fall/Winter</h3>
                <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Roz</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    Amilod Zareg by <a href="/about#Designer_Marlene_Torres">Marlene Torres</a>:
                    <br />
                    Photographer <a href="http://www.flickr.com/photos/misscartier/" target="_blank" rel="noreferrer">Miss Cartier</a>
                    <br />
                    Stylist Amilod Zareg
                    <br />
                    Hairdresser <a href="https://www.facebook.com/hairidentityporto" target="_blank" rel="noreferrer">Rute Hair Identity</a>
                    <br />
                    Make-up artist <a href="http://ritasilvamakeupartist.blogspot.com/" target="_blank" rel="noreferrer">Rita Silva</a>
                    <br />
                    Models Raíssa Ruiz &amp; Patrícia Ferreira
                    <br />
                    Scenario Palácio de Cristal
                </p>
            </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="columns-2 md:columns-3 gap-4">
                <StaticImage className="h-auto max-w-full rounded-lg mb-4" src="../../images/fw-roz/01.jpg" alt="" />
                <StaticImage className="h-auto max-w-full rounded-lg mb-4" src="../../images/fw-roz/02.jpg" alt="" />
                <StaticImage className="h-auto w-full rounded-lg mb-4" src="../../images/fw-roz/03.jpg" alt="" />
                <StaticImage className="h-auto max-w-full rounded-lg mb-4" src="../../images/fw-roz/05.jpg" alt="" />
                <StaticImage className="h-auto max-w-full rounded-lg mb-4" src="../../images/fw-roz/09.jpg" alt="" />
                <StaticImage className="h-auto max-w-full rounded-lg mb-4" src="../../images/fw-roz/12.jpg" alt="" />
                <StaticImage className="h-auto max-w-full rounded-lg mb-4" src="../../images/fw-roz/15.jpg" alt="" />
                <StaticImage className="h-auto w-full rounded-lg mb-4" src="../../images/fw-roz/17.jpg" alt="" />
                <StaticImage className="h-auto max-w-full rounded-lg mb-4" src="../../images/fw-roz/20.jpg" alt="" />
                <StaticImage className="h-auto max-w-full rounded-lg mb-4" src="../../images/fw-roz/23.jpg" alt="" />
                <StaticImage className="h-auto max-w-full rounded-lg mb-4" src="../../images/fw-roz/29.jpg" alt="" />
            </div>
        </div>
    </Layout>)
}

export const Head = () => <title>Fall/Winter Roz Collection | Amilod Zareg</title>