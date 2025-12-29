import React, {Component} from 'react';
import LEVELS from '../../Data/leveldata';
import './levelpage.css';

export default class LevelPageNew extends Component{
  constructor(props){
    super(props);
    this.state = {
      l: LEVELS.filter(l => l.id === this.props.match.params.id)[0]
    }
  }

  toggle(s){
    console.log(s.id)
    let content = document.getElementById(`hidden` + s.id);
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
          {this.state.l.normal.map(s => {
            return(
              <div className='strat-container' onClick={(e) => this.toggle(this.state.l.normal[s.id])}>
                <h3 id='strat-name'>{s.name} - {s.time}</h3>
                <strong>Difficulty: {s.difficulty}</strong>
                <div className='coll-content' id={`hidden` + s.id}>
                  <iframe title={s.name} width='570' height='320' src={'https://youtube.com/embed/' + s.link + '?rel=0'} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                  {s.desc ? s.desc : ''}
                </div>
              </div>
            )
            }
          )}
        </div>
        <div className='level-container'>
          {this.state.l.secret ? <h2 id='exit-type'>Secret Exit</h2> : ''}
        </div>
      </section>
    )
  }
}