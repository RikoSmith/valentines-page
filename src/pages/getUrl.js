import React, { Component} from 'react'
import { encode, decode } from 'url-safe-base64'
var qs = require('qs')



class Welcome extends Component {
    render() {
    let req_values = JSON.stringify(qs.parse(window.location.href.split('?')[1]))
    const url_code = encode(btoa(req_values))

    return (
      <div className='link-container'>
        <h3>This is your link:</h3>
        <p>{url_code}</p>
      </div>
        );
    }
  }

export default Welcome
