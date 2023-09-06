// TODO: Maybe make a form for people to suggest things to add.

import React, {Component} from 'react';
import './contact.css';

export default class Contact extends Component{
  render(){
    return (
      <section className='main-container'>
        <h1 id='page-title'>Contact</h1>
        <p>If there are any problems with this site or there is anything you would like added, please contact Bramz.</p>
        <p>You can find him in the following places:</p>
        <ul>
          <li>Twitter: <a href='https://twitter.com/__Bramz'>@__Bramz</a></li>
          <li><a href='https://discord.gg/Bramz'>Bramz's Discord</a></li>
          <li><a href='https://discord.gg/XzrQ26f'>SMW Speedrunning Discord</a></li>
        </ul>
      </section>
    )
  }
}