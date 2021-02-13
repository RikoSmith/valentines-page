/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import ProjectsMDX from "../sections/projects"
import './fonts.css';



const Projects = ({ offset, factor = 2, vals = nul }: { offset: number; factor?: number, vals: object }) => {

  const links = [
    "CgOCNibZ87U",
    "Yzo5AnPUIPY",
    "5YWaBuH9Qwc",
    "z7MIJdta4aI",
    "dQw4w9WgXcQ"
  ]

  const link_song = "http://www.youtube.com/embed/" + links[vals.song] + "?rel=0&hd=1"

  return (
    <div>
      <Divider
      bg="#E75286"
      sx={{ clipPath: `polygon(0 0%, 100% 10%, 100% 100%, 0 90%)` }}
      speed={0.1}
      offset={1}
      factor={factor}
    />
      <Content speed={0.4} offset={offset} factor={factor}>
        <Inner>
          <h4 sx={{color: `#ffffff`, textAlign: `center`, textShadow: `0 5px 5px #e75286, 0 -5px 5px #e75286;`}}>
            DISCLAIMER! This is not an actual Singing Valentine video. The actual video will be here on the 14th of February. This update is automatic and you DO NOT need to generate new link.
          </h4>
          <div className="videoWrapper">
              <iframe width="560" height="349" src={link_song} frameBorder="0" allowFullScreen></iframe>
          </div>
        </Inner>
      </Content>
      <Divider speed={0.1} offset={offset} factor={factor}>
        <UpDown>
          <SVG icon="box" width={6} color="icon_brightest" left="85%" top="75%" />
          <SVG icon="upDown" width={8} color="icon_teal" left="70%" top="20%" />
          <SVG icon="triangle" width={8} stroke color="icon_orange" left="25%" top="5%" />
          <SVG icon="circle" hiddenMobile width={24} color="icon_brightest" left="17%" top="60%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="arrowUp" hiddenMobile width={16} color="icon_green" left="20%" top="90%" />
          <SVG icon="triangle" width={12} stroke color="icon_brightest" left="90%" top="30%" />
          <SVG icon="circle" width={16} color="icon_yellow" left="70%" top="90%" />
          <SVG icon="triangle" hiddenMobile width={16} stroke color="icon_teal" left="18%" top="75%" />
          <SVG icon="circle" width={6} color="icon_brightest" left="75%" top="10%" />
          <SVG icon="upDown" hiddenMobile width={8} color="icon_green" left="45%" top="10%" />
          <SVG icon="upDown" hiddenMobile width={8} color="icon_green" left="55%" top="20%" />
        </UpDownWide>
        <SVG icon="circle" hiddenMobile width={6} color="icon_brightest" left="4%" top="20%" />
        <SVG icon="circle" width={12} color="icon_pink" left="80%" top="60%" />
        <SVG icon="box" width={6} color="icon_orange" left="10%" top="10%" />
        <SVG icon="box" width={12} color="icon_yellow" left="29%" top="26%" />
        <SVG icon="hexa" width={16} stroke color="icon_red" left="75%" top="30%" />
        <SVG icon="hexa" width={8} stroke color="icon_yellow" left="80%" top="70%" />
      </Divider>
    </div>
  )
}

export default Projects
