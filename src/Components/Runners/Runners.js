import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import RUNNERS from '../../Data/runnerdata';
import './runners.css';

export default class Runners extends Component {
  constructor(props){
    super(props);
    this.state = {
      display: 'all'
    }
  }
  
  sortRunners(){
    let opt = document.getElementById('runner-type').value;
    this.setState({display: opt});
  }
  
  render(){
    return (
      <section className='runners-container'>
        <h1 id='page-title'>Runners</h1>
        <label for='runner-type'>Sort Runners By: </label>
        <select id='runner-type' onChange={() => this.sortRunners()}>
          <option value='all'>All</option>
          <option value='top10'>Top 10 Ranked Runner</option>
          <option value='lbmod'>Leaderboard Mod</option>
          <option value='discordmod'>Discord Mod</option>
        </select>
        <ul className='runner-list'>
          {RUNNERS.map(r => {
            switch(this.state.display){
              case 'all':
                return (
                  <li key={r.id}>
                    <Link to={`/runners/${r.id}`}>
                      {r.name}
                    </Link>
                  </li>
                )

              case 'lbmod':
                if(r.lbmod){
                  return (
                    <li key={r.id}>
                      <Link to={`/runners/${r.id}`}>
                        {r.name}
                      </Link>
                    </li>
                  )
                }
                break;

              case 'discordmod':
                if(r.discordmod){
                  return (
                    <li key={r.id}>
                      <Link to={`/runners/${r.id}`}>
                        {r.name}
                      </Link>
                    </li>
                  )
                }
                break;

              case 'top10':
                if(r.top10){
                  return (
                    <li key={r.id}>
                      <Link to={`/runners/${r.id}`}>
                        {r.name}
                      </Link>
                    </li>
                  )
                }
                break;

              default:
                return null;
            }
            return null;
          })}
        </ul>
      </section>
    )
  }
}