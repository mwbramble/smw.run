import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import LEVELS from '../../Data/leveldata';
import './levelpagenew.css';

export default class LevelPageNew extends Component{
  constructor(props){
    super(props);
    this.state = {
      l: LEVELS.filter(l => l.id === this.props.match.params.id)[0],
      activeStrat: null
    }
  }

  render(){
    return(
      <section className='main-container'>
        <h1 id='page-title'>{this.state.l.name}</h1>
        <div classNam='level-container'>
          
        </div>
      </section>
    )
  }
}