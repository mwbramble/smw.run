import React, {Component} from 'react';
import './resources.css';

export default class Resources extends Component {
  render(){
    return (
      <section className='resources-container'>
        <h1 id='page-title'>Resources</h1>
        <h3 className='label'>Learning</h3>
        <ul>
          <li><a href='https://discord.gg/XzrQ26f'>SMW Speedrunning Discord</a></li>
          <li><a href='https://isofrieze.com/twitch/practice.html'>Practice ROM</a></li>
          <li><a href='https://discord.gg/He7Unfn'>SMW Science Discord</a></li>
          <li><a href='http://tasvideos.org/GameResources/SNES/SuperMarioWorld.html'>TASVideos Page</a></li>
          <li><a href='https://speedrun.com/smw'>Leaderboards</a></li>
          <li><a href='https://www.speedrun.com/smwext'>Category Extension Leaderboards</a></li>
        </ul>
        <h3 className='label'>Streams</h3>
        <ul>
          <li><a href='https://twitch.tv/SuperMarioWorld'>English Channel</a></li>
          <li><a href='https://www.twitch.tv/supermarioworldbrasil'>Canal Português</a></li>
          <li><a href='https://twitch.tv/supermarioworldjapan'>日本語のチャンネル</a></li>
          <li><a href='https://www.twitch.tv/directory/game/Super%20Mario%20World'>Game Directory</a></li>
          <li><a href='https://www.twitch.tv/team/smw_runners'>Twitch Team</a></li>
        </ul>
        <h3 className='label'>Miscellaneous</h3>
        <ul>
          <li><a href='https://authorblues.github.io/smwrandomizer/'>Randomizer</a></li>
          <li><a href='https://bsky.app/profile/smwcommunity.bsky.social'>Bluesky</a></li>
          <li><a href='https://www.youtube.com/channel/UCP9dONWrn4qjVNoeeJ39KuQ'>YouTube</a></li>
          <li><a href='https://racetime.gg/smw'>Race Results</a></li>
          <li><a href='https://www.youtube.com/watch?v=ml1NhHenAoI'>Bramz's Leaderboard Verification Process</a></li>
        </ul>
      </section>
    )
  }
}