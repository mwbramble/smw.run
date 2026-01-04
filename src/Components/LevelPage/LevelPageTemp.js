import React, {Component} from 'react';
import LEVELS from '../../Data/leveldata';
import './levelpage.css';

export default class LevelPageTemp extends Component{
  constructor(props){
    super(props);
    this.state = {
      l: LEVELS.filter(l => l.id === this.props.match.params.id)[0]
    }
  }

  toggle(s, idType){
    let prefix = idType ? 'secret-hidden' : 'hidden';
    const content = document.getElementById(prefix + s.id);
    if (content.classList.contains('coll-content')){
      content.classList.remove('coll-content');
      content.classList.add('exp-content');
    }
    else{
      content.classList.remove('exp-content');
      content.classList.add('coll-content');
    }
  }

  render(){
    return(
      <section className='main-container'>
        <h1 id='page-title'>{this.state.l.name}</h1>
        <div className='level-info'>
          <p id='info-title'>Overworld Location</p>
          <img id='level-image' src={require(`../../Images/Levels/${this.state.l.id}.png`)} alt={this.state.l.name} />
          <p id='info-text'>
            <b>Available Powerups:</b> {this.state.l.powerups[0] ? this.state.l.powerups.join(', ') : `None`}<br />
            This level {this.state.l.dragoncoins ? 'has Dragon Coins' : 'does not have Dragon Coins or a Moon'}{this.state.l.moon ? ' and a Moon' : ''}.
          </p>
        </div>
        <div className='level-container'>
          {this.state.l.secret ? <h2 id='exit-type'>Normal Exit</h2> : ''}
          {this.state.l.normal.map(n => {
            return(
              <div className='strat-container' onClick={(e) => this.toggle(this.state.l.normal[n.id], false)}>
                <h3 id='strat-name'>{n.name} - {n.time}</h3>
                <div className='coll-content' id={`hidden` + n.id}>
                  {n.desc ? n.desc : ''}
                  <p>Source: {n.source}</p>
                </div>
              </div>
            )
          })}
          {this.state.l.secret ? <h2 id='exit-type'>Secret Exit</h2> : ''}
          {this.state.l.secret.map(s => {
            return(
              <div className='strat-container' onClick={(e) => this.toggle(this.state.l.secret[s.id], true)}>
                <h3 id='strat-name'>{s.name} - {s.time}</h3>
                <div className='coll-content' id={`secret-hidden` + s.id}>
                  {s.desc ? s.desc : ''}
                  <p>Source: {s.source}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    )
  }
}