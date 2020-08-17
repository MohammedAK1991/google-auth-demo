import React from 'react';
import GoogleAuth from './GoogleAuth'

export default function NavBar () {

  return (
    <div class="ui inverted menu large">
      <div class="item active">Logo</div>
      <div class="right menu">
        <div class="item">
          <GoogleAuth/>
        </div>
        <div class="item">Help</div>
      </div>
    </div>
  )
}