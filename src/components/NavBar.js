import React from 'react';
import GoogleAuth from './GoogleAuth'

export default function NavBar () {

  return (
    <div class="ui inverted menu large">
      <div class="orange item active ">LOGO</div>
      <div class="right menu">
        <div class="item">
          <GoogleAuth/>
        </div>
        <div class="orange item">Help</div>
      </div>
    </div>
  )
}