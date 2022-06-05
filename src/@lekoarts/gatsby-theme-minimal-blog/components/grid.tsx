/** @jsx jsx */
import { jsx } from "theme-ui"
import BlogGridItem from "./blog-grid-item"

const Grid = ({ posts, className = ``, showTags = true, skipFirst = true }) => {
  var blogGridList: any

  if (skipFirst) posts = posts.slice(1)

  blogGridList = posts.map((post, index) => (
    <BlogGridItem key={post.slug} post={post} showTags={showTags} showDivider={index<posts.length-1}/>
  ))

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
