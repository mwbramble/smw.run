import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import LEVELS from '../../Data/leveldata';
import './levelpage.css';

export default class LevelPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      l: LEVELS.filter(l => l.id === this.props.match.params.id)[0],
      activeStrat: null
    };
  }

  toggle(id){
    if(id === this.state.activeStrat){
      this.setState({activeStrat: null});
    }
    else{
      this.setState({activeStrat: id});
    }
  }

  render(){
    // console.log(this.state.l)
    return (
      <section className='main-container'>
        <h1 id='page-title'>{this.state.l.name}</h1>
        <div className='level-container'>
          {this.state.l.strats.secret ? <h3 id='exit-type'>Normal</h3> : ''}
          {this.state.l.strats.normal ? this.state.l.strats.normal.map(s => {
            console.log(s)
            return (
              <div className='strat-container'>
                <h3 id='strat-name' onClick={(e) => this.toggle(s.id)}>{s.name}{s.time ? ` - ${s.time}` : ''} | Source: {s.source}</h3>
                <p><strong>Categories:</strong> {s.categories.join(', ')}</p>
                {s.id === this.state.activeStrat ? (
                  <>
                    <section className='active-strat'>
                      <iframe title={s.name} width='570' height='320' src={'https://youtube.com/embed/' + s.link + '?rel=0'} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                      {s.desc === '' ? '' : s.desc}
                    </section>
                  </>
                ) : ''}
              </div>
            )
          }) : ''}
          {this.state.l.strats.secret ? <h3 id='exit-type'>Secret</h3> : ''}
          {this.state.l.strats.secret ? this.state.l.strats.secret.map(s => {
            return (
              <div className='strat-container'>
                <h3 id='strat-name' onClick={(e) => this.toggle(s.id)}>{s.name}{s.time ? ` - ${s.time}` : ''} | Source: {s.source}</h3>
                <p><strong>Categories:</strong> {s.categories.join(', ')}</p>
                {s.id === this.state.activeStrat ? (
                  <>
                    <iframe title={s.name} src={s.link + '?rel=0'} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                    <br />
                    <small>{s.desc === '' ? '' : s.desc}</small>
                  </>
                ) : ''}
              </div>
            )
          }) : ''}
        </div>
        <div className='level-info'>
          <p id='info-title'>Overworld Location</p>
          <img id='level-image' src={require(`../../Images/Levels/${this.state.l.id}.png`)} alt={this.state.l.name} />
          <p id='info-text'>
            <b>Available Powerups:</b> {this.state.l.powerups.join(', ')}<br />
            This level {this.state.l.dragoncoins ? 'has' : 'does not have'} Dragon Coins{this.state.l.moon ? ' and a Moon' : ''}.
          </p>
        </div>
      </section>
    )
  }
}