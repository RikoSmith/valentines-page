/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import Intro from "../sections/intro"

const Hero = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider speed={0.2} offset={offset} factor={factor}>
      <UpDown>
        <SVG icon="triangle" hiddenMobile width={48} stroke color="icon_pink" left="10%" top="20%" />
        <SVG icon="hexa" width={48} stroke color="icon_red" left="60%" top="70%" />
        <SVG icon="box" width={6} color="icon_pink" left="60%" top="15%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="arrowUp" hiddenMobile width={16} color="icon_pink" left="80%" top="10%" />
        <SVG icon="triangle" width={12} stroke color="icon_brightest" left="90%" top="50%" />
        <SVG icon="circle" width={16} color="icon_pink" left="70%" top="90%" />
        <SVG icon="triangle" width={16} stroke color="icon_red" left="30%" top="65%" />
        <SVG icon="cross" width={16} stroke color="icon_red" left="28%" top="15%" />
        <SVG icon="circle" width={6} color="icon_pink" left="75%" top="10%" />
        <SVG icon="upDown" hiddenMobile width={8} color="icon_red" left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="circle" hiddenMobile width={24} color="icon_red" left="5%" top="70%" />
      <SVG icon="circle" width={6} color="icon_red" left="4%" top="20%" />
      <SVG icon="circle" width={12} color="icon_pink" left="50%" top="60%" />
      <SVG icon="upDown" width={8} color="icon_red" left="95%" top="90%" />
      <SVG icon="upDown" hiddenMobile width={24} color="icon_pink" left="40%" top="80%" />
      <SVG icon="triangle" width={8} stroke color="icon_pink" left="25%" top="5%" />
      <SVG icon="circle" width={64} color="icon_pink" left="95%" top="5%" />
      <SVG icon="box" hiddenMobile width={64} color="icon_red" left="5%" top="90%" />
      <SVG icon="box" width={6} color="icon_pink" left="10%" top="10%" />
      <SVG icon="box" width={12} color="icon_pink" left="40%" top="30%" />
      <SVG icon="hexa" width={16} stroke color="icon_red" left="10%" top="50%" />
      <SVG icon="hexa" width={8} stroke color="icon_pink" left="80%" top="70%" />
    </Divider>
    <Content sx={{ variant: `texts.bigger`, color: `DarkSlateBlue` }} speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <h1 sx={{ color: `DarkOrchid`, fontSize: `72px` }}>Choir Valentine</h1>
        <p>Get your singing valentine link now!</p>
        {/* <Intro /> */}
      </Inner>
    </Content>
  </div>
)

export default Hero
