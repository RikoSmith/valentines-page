import React, { Component} from 'react'
import { encode, decode } from 'url-safe-base64'
var qs = require('qs')



class Welcome extends Component {

  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { url_code: null };
  }

  componentDidMount(prevProps) {
    let req_vals = JSON.stringify(qs.parse(window.location.href.split('?')[1]))
    const url_c = encode(Buffer.from(this.state.req_values.toString()).toString('base64'))
    this.setState({
      url_code: url_c
    })
  }

  render() {
    
    
    

    return (
      <div className='link-container'>
        <h3>This is your link:</h3>
        <p>{this.state.url_code}</p>
      </div>
        );
    }
}

export default Welcome
