/** @jsx jsx */
import { Link } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"
import React from "react"
import { jsx } from "theme-ui"
import useSiteMetadata from "../hooks/use-site-metadata"

const Footer = () => {
  const { siteTitle, siteConfig, version } = useSiteMetadata()
  const baseColor = siteConfig.baseColor

  const {t} = useTranslation()

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [4],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        fontSize: `0.9rem`
      }}
    >
      <React.Fragment>
          <div>
          {t(`Hecho con ♥`)}
          </div>
      </React.Fragment>
      <React.Fragment>
        <p>{version}</p>
      </React.Fragment>
    </footer>
  )
}

export default Footer
