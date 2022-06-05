/** @jsx jsx */
import { jsx, Heading } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "./layout"
import Seo from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo"
import StunninHeading from "./stunnin-heading"

type PageProps = {
  data: {
    page: {
      title: string
      slug: string
      excerpt: string
      body: string
    }
  }
  [key: string]: any
}

const Page = ({ data: { page } }: PageProps) => (
  <Layout>
    <Seo title={page.title} description={page.excerpt} />
    <StunninHeading as="h1" variant="styles.h1">
      {page.title}
    </StunninHeading>
    <section sx={{ 
      my: 5,
      variant: `layout.content`,
      ".gatsby-resp-image-wrapper img": { borderRadius: `0.5rem`}
      }}>
      <MDXRenderer>{page.body}</MDXRenderer>
    </section>
  </Layout>
)

export default Page
