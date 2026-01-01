import React, {Component} from 'react';
import RUNNERS from '../../Data/runnerdata';
import './runnerpage.css';

export default class RunnerPage extends Component {
  render(){
    const r = RUNNERS.filter(r => r.id === this.props.match.params.id)[0];
    const twitch = `https://twitch.tv/${r.links.twitch}`;
    const youtube = `https://youtube.com/${r.links.youtube}`;
    const twitter = `https://twitter.com/${r.links.twitter}`;
    const srcom = `https://speedrun.com/${r.links.srcom}`;
    
    return (
      <section className='runnerpage-container'>
        <h1 id='page-title'>{r.name}</h1>
        <h3 id='location'>{r.location.subcountry ? r.location.subcountry + ', ' : ''}{r.location.country ? r.location.country : ''} <img id='runner-flag' src={require(`../../Images/Flags/${r.location.country}.png`)} alt={r.country + ' Flag'} /> | Runner Since {r.began}</h3>
        <ul id='socials'>
          {r.links.twitch ? <li><a href={twitch}>Twitch</a></li> : ''}
          {r.links.youtube ? <li><a href={youtube}>YouTube</a></li> : ''}
          {r.links.twitter ? <li><a href={twitter}>Twitter</a></li> : ''}
          {r.links.discord ? <li>Discord: @{r.links.discord}</li> : ''}
          {r.links.srcom ? <li><a href={srcom}>speedrun.com</a></li> : ''}
        </ul>
        <p id='bio'>{r.bio}</p>
      </section>
    )
  }
}