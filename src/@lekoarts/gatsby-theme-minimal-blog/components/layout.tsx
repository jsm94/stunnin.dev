/** @jsx jsx */
import * as React from "react"
import { Global } from "@emotion/react"
import { Box, Container, jsx, useColorMode, get, Flex } from "theme-ui"
import Seo from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo"
import Header from "./header"
import Footer from "./footer"
import CodeStyles from "@lekoarts/gatsby-theme-minimal-blog/src/styles/code"
import SkipNavLink from "@lekoarts/gatsby-theme-minimal-blog/src/components/skip-nav"
import CrosshairSeparator from "./crosshair-separator"
import { useTranslation } from "gatsby-plugin-react-i18next"

type LayoutProps = { children: React.ReactNode; className?: string }

const Layout = ({ children, className = `` }: LayoutProps) => {
  const [colorMode, setColorMode] = useColorMode()
  const {t} = useTranslation()
  className += colorMode + className

  return (
    <React.Fragment>
      <Global
        styles={(t) => ({
          "*": {
            boxSizing: `inherit`,
          },
          html: {
            WebkitTextSizeAdjust: `100%`,
          },
          img: {
            borderStyle: `none`,
          },
          pre: {
            fontFamily: `monospace`,
            fontSize: `1em`,
          },
          "[hidden]": {
            display: `none`,
          },
          "::selection": {
            backgroundColor: get(t, `colors.text`),
            color: get(t, `colors.background`),
          },
          a: {
            transition: `all 0.3s ease-in-out`,
            color: `text`,
          },
        })}
      />
      <Seo />
      <SkipNavLink>Skip to content</SkipNavLink>
      <Container>
        <Header />
        <Flex sx={{ alignItems: `center`, justifyContent: `center`, mb: [5, 5, 6] }}>
          <CrosshairSeparator/>
        </Flex>
        <Box id="skip-nav" as="main" variant="layout.main" sx={{ ...CodeStyles }} className={className}>
          {children}
        </Box>
        <Flex sx={{ alignItems: `center`, justifyContent: `center`, mb: [6, 6, 6], mt: [6, 6, 6] }}>
          <CrosshairSeparator/>
        </Flex>
        <Footer />
      </Container>
    </React.Fragment>
  )
}

export default Layout
