/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from 'styled-components'
import {Plus} from '@styled-icons/bootstrap/Plus'
import { GatsbyImage } from "gatsby-plugin-image"
import moment from "moment"
import 'moment/locale/es'
import React from "react"
import ItemTags from "./item-tags"
import { I18nextContext, useTranslation } from "gatsby-plugin-react-i18next"

const PlusIcon = styled(Plus)`
  color: red;
`

const HeroSection = (heroContent) => {
  
  const {t} = useTranslation()
  const { language } = React.useContext(I18nextContext)
  
  moment.locale(language)
  const dateFormat = language === 'es' ? "D MMMM, YYYY" : "MMMM D, YYYY"
  const postDate = moment(heroContent.date, "MMMM D, YYYY")


  return (
    <div className={`px-8 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-16 md:py-12 lg:px-24 lg:py-12 bg-zinc-100 dark:bg-zinc-800`}>
      <h2 className="text-2xl mb-5">{heroContent.headerText}</h2>
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none break-words">
              {heroContent.title}
            </h2>
            <p className="mb-2">{postDate.format(dateFormat)} · {heroContent.timeToRead} min</p>
            {!!heroContent.tags && (
              <p sx={{ color: `secondary`, mt: 3, mb: 3, a: { color: `primary` }, fontSize: [1, 1, 1] }}>
                <React.Fragment>
                  <ItemTags tags={heroContent.tags} />
                </React.Fragment>
              </p>
            )}
            <p className="text-base md:text-lg">
              {heroContent.description}
            </p>
          </div>
        </div>
        <div className="lg:p-5">
            <GatsbyImage alt={""} image={heroContent.image} className="object-cover w-full h-56 sm:h-96 grayscale group-hover:grayscale-0 transition ease-in-out duration-300"/>
        </div>
      </div>
      <div className="mt-5 lg:mt-0">
          <div className="group-hover:animate-pulse">
            <div className="text-base inline-block">+</div>
            <span className="group-hover:underline ml-1">{t(`Leer más`)}</span>
          </div>
      </div>
    </div>
  )
}

export default HeroSection
