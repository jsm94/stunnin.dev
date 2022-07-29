/** @jsx jsx */
import { jsx, useColorMode, Flex } from "theme-ui"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import ColorModeToggle from "@lekoarts/gatsby-theme-minimal-blog/src/components/colormode-toggle"
import Navigation from "@lekoarts/gatsby-theme-minimal-blog/src/components/navigation"
import HeaderTitle from "@lekoarts/gatsby-theme-minimal-blog/src/components/header-title"
import HeaderExternalLinks from "./header-external-links"
import { Helmet } from 'react-helmet'
import { I18nextContext, Link, useI18next } from "gatsby-plugin-react-i18next"
import React from "react"

const Header = () => {
  const { navigation: nav } = useMinimalBlogConfig()
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const displayMode = colorMode
  const toggleColorMode = (e: React.SyntheticEvent) => {
    e.preventDefault()
    setColorMode(isDark ? `light` : `dark`)
  }

  const {languages, originalPath} = useI18next()
  const { language } = React.useContext(I18nextContext)

  return (
    <header sx={{ mb: [4, 5] }}>
      <Helmet htmlAttributes={{ displayMode }} />
      <Flex sx={{ alignItems: `center`, justifyContent: `space-between` }}>
        <HeaderTitle />
        <div sx={{ display: `flex` }}>
          <div sx={{ fontSize: [1, `15px`], color: `secondary`, mr: [`28px`, `30px`]}} className="languages">
          {languages.map((lng, i) => (
            <span key={lng}>
              {i > 0 && (<span>|</span>)}
              <Link to={originalPath} language={lng} sx={{color: language == lng ? `text` : `inherit`}}>
                {lng}
              </Link>
            </span>
          ))}
          </div>
          <div>
            <ColorModeToggle isDark={isDark} toggle={toggleColorMode} />
          </div>
        </div>
      </Flex>
      <div
        sx={{
          boxSizing: `border-box`,
          display: `flex`,
          // variant: `dividers.bottom`,
          alignItems: `center`,
          justifyContent: `space-between`,
          mt: 3,
          color: `secondary`,
          a: { color: `secondary`, ":hover": { color: `heading` } },
          flexFlow: `wrap`,
        }}
      >
        <Navigation nav={nav} />
        <HeaderExternalLinks />
      </div>
    </header>
  )
}

export default Header
