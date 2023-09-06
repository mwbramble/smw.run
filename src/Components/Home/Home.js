// TODO: Add more content and make this page more interesting.

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './home.css';

export default class Home extends Component{
  render(){
    return (
      <section className='main-container'>
        <h1 id='page-title'>Welome to the home of all things SMW Speedrunning!</h1>
        <h3>Weekly 96 Exit races are held on Fridays at 8:00pm ET!</h3>
        <p>Need to learn some strats? Be sure to check out the <b><Link to={'/levels'}>level pages</Link></b>.</p>
        <p>Don't know what category to run? Visit the <b><Link to={'/categories'}>categories section</Link></b> to learn more about them.</p>
        <p>Need some extra help learning a trick? Check out the <b><Link to={'/tutorials'}>tutorials page</Link></b>.</p>
        <p>Did you hear an SMW runner say something and you didn't know what they were talking about? Take a look at the <b><Link to={'/glossary'}>glossary</Link></b>.</p>
        <p>Looking for some SMW runners to watch? Browse through the <b><Link to={'/runners'}>runner index</Link></b>.</p>
        <p>Need a link to the Practice ROM? Find that and much more on the <b><Link to={'/resources'}>resources page</Link></b>.</p>
      </section>
    )
  }
}