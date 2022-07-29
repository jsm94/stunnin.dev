/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import StunninLogo from "./stunnin-logo"
import { Link } from "gatsby-plugin-react-i18next"

const HeaderTitle = () => {
  const { siteTitle } = useSiteMetadata()
  const { basePath } = useMinimalBlogConfig()
  const { theme } = useThemeUI()
  
  return (
    <Link
      to={replaceSlashes(`/${basePath}`)}
      aria-label={`${siteTitle} - Back to home`}
      sx={{ color: `heading`, textDecoration: `none` }}
    >
      <StunninLogo name={`stunnin'`} primaryColor={theme.colors.primary} secondaryColor={theme.colors.background}/>
    </Link>
  )
}

export default HeaderTitle
