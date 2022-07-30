import * as React from "react"
import { Javascript, Php, ReactLogo, TailwindCss, Git } from '@styled-icons/boxicons-logos'

const classes = "w-20 pt-4 transition-all ease-in-out duration-500 hover:pt-2"

const StackCarousel = () => {
	return (
		<>
			<a href="https://www.php.net/"><Php className={classes + ` hover:text-blue-700`}/></a>
			<a href="https://developer.mozilla.org/docs/Web/JavaScript"><Javascript className={classes + ` hover:text-yellow-400`}/></a>
			<a href="https://reactjs.org/"><ReactLogo className={classes + ` hover:text-blue-400`}/></a>
			<a href="https://tailwindcss.com/"><TailwindCss className={classes + ` hover:text-blue-400`}/></a>
			<a href="https://git-scm.com/"><Git className={classes + ` hover:text-amber-700`}/></a>
		</>
	)
}

export default StackCarousel