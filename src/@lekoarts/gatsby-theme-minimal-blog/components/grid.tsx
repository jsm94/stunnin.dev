/** @jsx jsx */
import { jsx } from "theme-ui"
import BlogGridItem from "./blog-grid-item"

const Grid = ({ posts, className = ``, showTags = true, skipFirst = true }) => {
  var blogGridList: any

  if (skipFirst) {
    blogGridList = posts.slice(1).map((post) => (
      <BlogGridItem key={post.slug} post={post} showTags={showTags} />
    ))
  } else {
    blogGridList = posts.map((post) => (
      <BlogGridItem key={post.slug} post={post} showTags={showTags} />
    ))
  }

  return (
    <section sx={{ mb: [4, 5, 5] }} className={className}>
      <div className=" py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:py-20">
        <div className="grid gap-6 row-gap-5 lg:grid-cols-3">
          {blogGridList}
        </div>
      </div>
    </section>
  )
}

export default Grid
