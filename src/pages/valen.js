import React, { Component} from 'react'
import { decode } from 'url-safe-base64'
var qs = require('qs')



class Welcome extends Component {
    render() {
    let req_values = qs.parse(window.location.href.split('?')[1])
    let json_str = atob(decode(req_values.key))
    let valen_params = JSON.parse(json_str)
    console.log(valen_params)
    return (
        <h1>Hello, {valen_params.toString()}</h1>
        );
    }
  }

export default Welcome
