/** @jsx jsx */
import { jsx } from "theme-ui"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import ItemTags from "./item-tags"
import moment from "moment"
import 'moment/locale/es'
import React from "react"
import ItemTags from "./item-tags"
import { I18nextContext, useTranslation } from "gatsby-plugin-react-i18next"

import { Link as LinkGatsby } from "gatsby"

const BlogGridItem = ({ post, showTags = true, showDivider }) => {
  const image = getImage(post.banner)

  const { language } = React.useContext(I18nextContext)
  
  moment.locale(language)
  const dateFormat = language === 'es' ? "D MMMM, YYYY" : "MMMM D, YYYY"
  const postDate = moment(post.date, "MMMM D, YYYY")
  return (
    <LinkGatsby to={post.slug} className="group">
      <GatsbyImage alt={""} image={image} className="object-cover w-full h-64 mb-6 lg:h-80 xl:h-96 
        transition ease-in-out group-hover:ring-2 ring-offset-4 ring-current ring-offset-zinc-50
        dark:ring-offset-zinc-900 duration-300 grayscale group-hover:grayscale-0"/>
      <p className="mb-2">{postDate.format(dateFormat)} · {post.timeToRead} min</p>
      {post.tags && (
        <p sx={{ color: `secondary`, mt: 3, mb: 3, a: { color: `primary` }, fontSize: [1, 1, 1] }}>
          <React.Fragment>
            <ItemTags tags={post.tags} />
          </React.Fragment>
        </p>
        )}
      <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl break-words">
        {post.title}
      </h5>
      {showDivider && (
        <hr className="my-12 lg:hidden"/>
      )}
    </LinkGatsby>
  )
}

export default BlogGridItem
