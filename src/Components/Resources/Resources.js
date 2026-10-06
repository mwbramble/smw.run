import React, {Component} from 'react';
import './resources.css';

export default class Resources extends Component {
  render(){
    return (
      <section className='resources-container'>
        <h1 id='page-title'>Resources</h1>
        <h3 className='label'>Discord Servers</h3>
        <ul>
          <li><a href='https://discord.gg/0SkVJ6hE2KFkKlak'>English</a></li>
          <li><a href='https://discord.com/invite/WdTmqtZ'>Português</a></li>
          <li><a href='https://discord.com/invite/eTHepHZ'>日本語</a></li>
          <br />
          <li><a href='https://discord.gg/smwc'>Romhacking</a></li>
          <li><a href='https://discord.gg/ZHP6K2T'>Romhack Speedrunning</a></li>
          <li><a href='https://discord.gg/6kuCjAAf9k'>SMW Science (TASing)</a></li>
        </ul>
        <h3 className='label'>Learning</h3>
        <ul>
          <li><a href='http://isofrieze.com/practice'>Practice ROM</a></li>
          <li><a href='http://tasvideos.org/GameResources/SNES/SuperMarioWorld.html'>TASVideos</a></li>
          {/* <li><a href=''>Main Category Leaderboards</a></li> */}
          {/* <li><a href=''>Category Extension Leaderboards</a></li> */}
        </ul>
        <h3 className='label'>Streams</h3>
        <ul>
          <li><a href='https://twitch.tv/SuperMarioWorld'>English</a></li>
          <li><a href='https://www.twitch.tv/supermarioworldbrasil'>Português</a></li>
          <li><a href='https://www.twitch.tv/supermarioworldjapan'>日本語</a></li>
          <li><a href='https://www.twitch.tv/directory/game/Super%20Mario%20World'>Game Directory</a></li>
          <li><a href='https://www.twitch.tv/team/smw_runners'>Twitch Team</a></li>
        </ul>
        <h3 className='label'>Miscellaneous</h3>
        <ul>
          <li><a href='https://www.youtube.com/@smwcommunity'>YouTube</a></li>
          <li><a href='https://bsky.app/profile/smwcommunity.bsky.social'>Bluesky</a></li>
          <li><a href='https://authorblues.github.io/smwrandomizer/'>Randomizer</a></li>
          <li><a href='https://racetime.gg/smw'>Race Results</a></li>
          {/* <li><a href=''>Emulator Information</a></li> */}
        </ul>
      </section>
    )
  }
}