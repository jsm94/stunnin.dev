/** @jsx jsx */
import { jsx, Heading, Box, Flex } from "theme-ui"
// @ts-ignore
import kebabCase from "lodash.kebabcase"
import { Link } from "gatsby"
import Layout from "./layout"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import Seo from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"
import StunninHeading from "./stunnin-heading"

type PostsProps = {
  list: {
    fieldValue: string
    totalCount: number
  }[]
}

const Tags = ({ list }: PostsProps) => {
  const { tagsPath, basePath } = useMinimalBlogConfig()

  return (
    <Layout>
      <Seo title="Tags" />
      <StunninHeading as="h1" variant="styles.h1">
        tags
      </StunninHeading>
      <Box mt={[4, 5]}>
        {list.map((listItem) => (
          <Flex key={listItem.fieldValue} mb={[1, 1, 2]} sx={{ alignItems: `center` }}>
            <Link
              sx={(t) => ({ ...t.styles?.a, variant: `links.listItem`, mr: 2 })}
              to={replaceSlashes(`/${basePath}/${tagsPath}/${kebabCase(listItem.fieldValue)}`)}
            >
              {listItem.fieldValue} <span sx={{ color: `secondary` }}>({listItem.totalCount})</span>
            </Link>
          </Flex>
        ))}
      </Box>
    </Layout>
  )
}

export default Tags
