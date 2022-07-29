/** @jsx jsx */
import { jsx } from "theme-ui"
import HeroSection from "./hero-section"
import useSiteMetadata from "../hooks/use-site-metadata"
import { getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const FeaturedPostView = ({ featuredPost, headerText, className = ``, showTags = true }) => {
  const { siteConfig } = useSiteMetadata()
  const image = getImage(featuredPost.banner)

  const heroContent = {
    title: featuredPost.title,
    headerText: headerText,
    description: featuredPost.excerpt,
    tags: featuredPost.tags,
    slug: featuredPost.slug,
    image: image,
    date: featuredPost.date,
    timeToRead: featuredPost.timeToRead
  }

  return (
    <section  className={className}>
        <Link to={heroContent.slug}>
          <div id="featured" className="group">
            <div className={`transition ease-in-out group-hover:ring-2 ring-offset-4 ring-current ring-offset-zinc-50 dark:ring-offset-zinc-900 duration-300`}>
              <HeroSection {...heroContent}/>
            </div>
          </div>
        </Link>
    </section>
  )
}

export default FeaturedPostView
