/** @jsx jsx */
import { jsx } from "theme-ui"
import styled from "styled-components"

const Logo = styled.div`
  font-family: 'Open Sans', sans-serif;
`
const LogoLeft = styled.span.attrs((props: {primaryColor: string, secondaryColor: string}) => props)`
  & {
    color: ${(props) => props.secondaryColor};
    text-align: center;
    line-height: 21px;
    height: 21px;
    position: relative;
    display: inline-block;
    padding: 0px 2px 2px 15px;
    z-index: 10
  }
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: inherit;
    width: 100%;
    padding: 2px 0px 0px 0px;
    transform: SkewX(-25deg);
    transform-origin: bottom right;
    background: ${(props) => props.primaryColor};
    z-index: -10
  }
`
const LogoRight = styled.span.attrs((props: {primaryColor: string}) => props)`
  color: ${(props) => props.primaryColor};
  text-align: left;
  line-height: 21px;
  height: 21px;
  padding: 0px 0px 0px 8px;
  position: relative;
  display: inline-block;
  z-index: 10;
`

const StunninLogo = (props) => (
  <Logo>
    <LogoLeft primaryColor={props.primaryColor} secondaryColor={props.secondaryColor}>{props.name}</LogoLeft>
    <LogoRight primaryColor={props.primaryColor}>.dev</LogoRight>
  </Logo>
)

export default StunninLogo
