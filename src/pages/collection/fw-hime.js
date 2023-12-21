import * as React from "react"
import Layout from "../../components/layout"
import { StaticImage } from "gatsby-plugin-image"

export default function FwHimePage() {
    return (<Layout>
        <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Fall/Winter</h3>
                <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Hime</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                Amilod Zareg by <a href="/about#Designer_Marlene_Torres">Marlene Torres</a>:
                <br />
                Photographer <a href="http://cutdesign.pt/" target="_blank" rel="noreferrer">Filipe Santos</a>
                <br />
                Stylist Augusto Soares
                <br />
                Hairdresser <a href="https://www.facebook.com/hairidentityporto" target="_blank" rel="noreferrer">Rute Hair Identity</a>
                <br />
                Make-up artist <a href="http://www.barbarabrandao.com/" target="_blank" rel="noreferrer">Bárbara</a>
                <br />
                Models Patrícia Zhu &amp; Isabel Vieira
                <br />
                Scenario <a href="http://www.cm-porto.pt/" target="_blank" rel="noreferrer">Palacete Pinto Leite</a>
                </p>
            </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="columns-2 md:columns-3 gap-4">
                <StaticImage className="h-auto max-w-full rounded-lg mb-4" src="../../images/fw-hime/01.jpg" alt="" />
                <StaticImage className="h-auto w-full rounded-lg mb-4" src="../../images/fw-hime/02.jpg" alt="" />
                <StaticImage className="h-auto w-full rounded-lg mb-4" src="../../images/fw-hime/03.jpg" alt="" />
                <StaticImage className="h-auto w-full rounded-lg mb-4" src="../../images/fw-hime/04.jpg" alt="" />
                <StaticImage className="h-auto w-full rounded-lg mb-4" src="../../images/fw-hime/05.jpg" alt="" />
                <StaticImage className="h-auto max-w-full rounded-lg mb-4" src="../../images/fw-hime/06.jpg" alt="" />
                <StaticImage className="h-auto w-full rounded-lg mb-4" src="../../images/fw-hime/07.jpg" alt="" />
                <StaticImage className="h-auto w-full rounded-lg mb-4" src="../../images/fw-hime/08.jpg" alt="" />
                <StaticImage className="h-auto w-full rounded-lg mb-4" src="../../images/fw-hime/09.jpg" alt="" />
                <StaticImage className="h-auto w-full rounded-lg mb-4" src="../../images/fw-hime/10.jpg" alt="" />
                <StaticImage className="h-auto max-w-full rounded-lg mb-4" src="../../images/fw-hime/11.jpg" alt="" />
            </div>
        </div>
    </Layout>)
}

export const Head = () => <title>Fall/Winter Hime Collection | Amilod Zareg</title>