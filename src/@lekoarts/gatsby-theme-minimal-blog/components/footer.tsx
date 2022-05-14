/** @jsx jsx */
import React from "react"
import { jsx} from "theme-ui"
import useSiteMetadata from "../hooks/use-site-metadata"

const Footer = () => {
  const { siteTitle, siteConfig, version } = useSiteMetadata()
  const baseColor = siteConfig.baseColor
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
        &copy; {new Date().getFullYear()} by {siteTitle}. All rights reserved.
      </React.Fragment>
      <React.Fragment>
        <p>{version}</p>
      </React.Fragment>
    </footer>
  )
}

export default Footer
