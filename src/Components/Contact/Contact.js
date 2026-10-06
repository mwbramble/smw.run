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
          <li><a href='https://bsky.app/profile/bramz.live'>Bluesky</a></li>
          <li><a href='https://discord.gg/Bramz'>Bramz's Discord</a></li>
          <li><a href='https://discord.gg/XzrQ26f'>SMW RTA Discord</a></li>
        </ul>
        <br />
        <p>If you have a concern regarding the SMW RTA community in general, please contact one of the community admins:</p>
        <ul>
          <li>Bramz</li>
          <ul>
            <li><a href='https://bsky.app/profile/bramz.live'>Bluesky</a></li>
            <li><a href="https://discord.com/users/83018891948724224">Discord</a></li>
          </ul>
          <li>IsoFrieze</li>
          <ul>
            {/* <li><a href='https://bsky.app/profile/isofrieze.com'>Bluesky</a></li> */}
            <li><a href="https://discord.com/users/83171276503388160">Discord</a></li>
          </ul>
          <li>Umari0</li>
          <ul>
            {/* <li><a href='https://bsky.app/profile/umari0.bsky.social'>Bluesky</a></li> */}
            <li><a href="https://discord.com/users/72804650209783808">Discord</a></li>
          </ul>
        </ul>
      </section>
    )
  }
}