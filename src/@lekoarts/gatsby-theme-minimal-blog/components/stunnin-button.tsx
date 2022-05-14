/** @jsx jsx */
import { jsx } from "theme-ui"

const StunninButton = (props) => {

  return (
    <button className="transition ease-in-out hover:ring-2 ring-offset-4 ring-zinc-900 dark:ring-zinc-300
    ring-offset-zinc-50 dark:ring-offset-zinc-900 duration-300 px-4 py-2 bg-zinc-900 dark:bg-zinc-500 text-zinc-50 dark:text-zinc-300">
    {props.children}
    </button>
  )
}

export default StunninButton
