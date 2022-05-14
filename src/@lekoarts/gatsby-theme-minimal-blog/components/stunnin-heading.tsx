/** @jsx jsx */
import { jsx, Heading } from "theme-ui"

const StunninHeading = (props: any) => {
  return (
    <Heading {...props}>
      <div className="absolute mix-blend-difference border-zinc-50 border-t-[0.5px] border-b-[0.5px] skew-y-[-45deg] w-8 h-4 mt-3 -ml-3"></div>
      {props.children}
    </Heading>
  )
}

export default StunninHeading
