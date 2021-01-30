import React, { Component} from 'react'
import { encode, decode } from 'url-safe-base64'
var qs = require('qs')



class Welcome extends Component {
    render() {
    let req_values = JSON.stringify(qs.parse(window.location.href.split('?')[1]))
    const url_code = encode(btoa(req_values))

    return (
        <h1>Hello, {url_code}</h1>
        );
    }
  }

export default Welcome
