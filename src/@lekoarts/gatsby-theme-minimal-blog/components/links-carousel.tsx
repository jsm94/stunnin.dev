import * as React from "react"
import { Github, Linkedin, Twitter } from '@styled-icons/boxicons-logos'

const classes = "w-10 pt-4 transition-all ease-in-out duration-500 hover:pt-2"

const LinksCarousel = () => {
	return (
		<>
			<a href="https://github.com/jsm94"><Github className={classes + ` hover:text-black-900`}/></a>
			<a href="https://www.linkedin.com/in/juan-antonio-seco-merch%C3%A1n/"><Linkedin className={classes + ` hover:text-blue-800`}/></a>
			<a href="https://twitter.com/stunnindev"><Twitter className={classes + ` hover:text-blue-400`}/></a>
		</>
	)
}

export default LinksCarousel