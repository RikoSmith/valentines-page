import React, {Component} from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"
import { decode } from 'url-safe-base64'
var qs = require('qs')

class Cara extends Component{

  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { user_values: null };
  }

  componentDidMount() {
    if (window.location.href.split('?')[1] == undefined){
      console.log("Fuck!")
      this.setState({
        user_values: {
          message: "Never gonna give you up. Never gonna let you down. Never gonna run around and desert you.",
          name_target: "You",
          name_sender: "Rick",
          song: 4
        }
      })
    }
    else 
    {
      const req_key = qs.parse(window.location.href.split('?')[1])
      const json_str = Buffer.from(decode(req_key.key), 'base64').toString()
      const user_vals = JSON.parse(json_str)
      console.log(user_vals)
      this.setState({
        user_values: user_vals
      })
    }
    
  }

  render(){
    return (
      <Layout>
        <Parallax pages={3}>
          <Hero offset={0} factor={1} vals={this.state.user_values}/>
          <Projects offset={1} factor={1} vals={this.state.user_values} />
          <About offset={2} factor={1} />
        </Parallax>
      </Layout>
    )
  }

} 

export default Cara
