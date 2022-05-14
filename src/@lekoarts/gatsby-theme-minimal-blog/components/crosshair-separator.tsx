/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui"
import styled from "styled-components"

const Crosshair = styled.div.attrs((props: {color: string}) => props)`
  & {
    position: relative;
    width: 15px;
    height: 15px;
  }

  & .crosshair-tl {
    position: absolute;
    margin: 1px 0px 0px 3px;
    height: 5px;
    border-left: 0.5px solid ${(props) => props.color};
    transform: SkewX(45deg);
  }

  & .crosshair-tr {
    position: absolute;
    margin: 1px 0px 0px 11px;
    height: 5px;
    border-left: 0.5px solid ${(props) => props.color};
    transform: SkewX(-45deg);
  }

  & .crosshair-bl {
    height: 5px;
    margin: 9px 0px 0px 3px;
    position: absolute;
    border-left: 0.5px solid ${(props) => props.color};
    transform: SkewX(-45deg);
  }

  & .crosshair-br {
    height: 5px;
    margin: 9px 0px 0px 11px;
    position: absolute;
    border-left: 0.5px solid ${(props) => props.color};
    transform: SkewX(45deg);
  }
`

const CrosshairComponent = (props) => (
  <Crosshair>
    <div {...props} className="crosshair-tl"></div>
    <div {...props} className="crosshair-tr"></div>
    <div {...props} className="crosshair-bl"></div>
    <div {...props} className="crosshair-br"></div>
  </Crosshair>
)

const CrosshairSeparator = () => {
  const { theme } = useThemeUI()

  return (
    <CrosshairComponent color={theme.colors.primary}/>
  )
}

export default CrosshairSeparator
