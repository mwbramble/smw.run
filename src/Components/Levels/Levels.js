import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import LEVELS from '../../Data/leveldata';
import './levels.css';

export default class Levels extends Component{
  render(){
    return (
      <section className='main-container'>
        <h1 id='page-title'>Levels</h1>
        <div className='lists-container'>
          <div className='world-list'>
            <h3 id='world-name'>World 1</h3>
            <ul id='world-1'>
              {LEVELS.map(l => {
                if(l.world === 1){
                  return (
                    <li key={l.id}>
                      <Link to={`/levels/${l.id}`}>
                        {l.name}
                      </Link>
                    </li>
                  )
                }
                return null;
              })}
            </ul>
          </div>
          <div className='world-list'>
            <h3 id='world-name'>World 2</h3>
            <ul id='world-2'>
              {LEVELS.map(l => {
                if(l.world === 2){
                  return (
                    <li key={l.id}>
                      <Link to={`/levels/${l.id}`}>
                        {l.name}
                      </Link>
                    </li>
                  )
                }
                return null;
              })}
            </ul>
          </div>
          <div className='world-list'>
            <h3 id='world-name'>World 3</h3>
            <ul id='world-3'>
              {LEVELS.map(l => {
                if(l.world === 3){
                  return (
                    <li key={l.id}>
                      <Link to={`/levels/${l.id}`}>
                        {l.name}
                      </Link>
                    </li>
                  )
                }
                return null;
              })}
            </ul>
          </div>
          <div className='world-list'>
            <h3 id='world-name'>World 4</h3>
            <ul id='world-4'>
              {LEVELS.map(l => {
                if(l.world === 4){
                  return (
                    <li key={l.id}>
                      <Link to={`/levels/${l.id}`}>
                        {l.name}
                      </Link>
                    </li>
                  )
                }
                return null;
              })}
            </ul>
          </div>
          <div className='world-list'>
            <h3 id='world-name'>World 5</h3>
            <ul id='world-5'>
              {LEVELS.map(l => {
                if(l.world === 5){
                  return (
                    <li key={l.id}>
                      <Link to={`/levels/${l.id}`}>
                        {l.name}
                      </Link>
                    </li>
                  )
                }
                return null;
              })}
            </ul>
          </div>
          <div className='world-list'>
            <h3 id='world-name'>World 6</h3>
            <ul id='world-6'>
              {LEVELS.map(l => {
                if(l.world === 6){
                  return (
                    <li key={l.id}>
                      <Link to={`/levels/${l.id}`}>
                        {l.name}
                      </Link>
                    </li>
                  )
                }
                return null;
              })}
            </ul>
          </div>
          <div className='world-list'>
            <h3 id='world-name'>World 7</h3>
            <ul id='world-7'>
              {LEVELS.map(l => {
                if(l.world === 7){
                  return (
                    <li key={l.id}>
                      <Link to={`/levels/${l.id}`}>
                        {l.name}
                      </Link>
                    </li>
                  )
                }
                return null;
              })}
            </ul>
          </div>
          <div className='world-list'>
            <h3 id='world-name'>Star World</h3>
            <ul id='world-8'>
              {LEVELS.map(l => {
                if(l.world === 8){
                  return (
                    <li key={l.id}>
                      <Link to={`/levels/${l.id}`}>
                        {l.name}
                      </Link>
                    </li>
                  )
                }
                return null;
              })}
            </ul>
          </div>
          <div className='world-list'>
            <h3 id='world-name'>Special World</h3>
            <ul id='world-9'>
              {LEVELS.map(l => {
                if(l.world === 9){
                  return (
                    <li key={l.id}>
                      <Link to={`/levels/${l.id}`}>
                        {l.name}
                      </Link>
                    </li>
                  )
                }
                return null;
              })}
            </ul>
          </div>
        </div>
      </section>
    )
  }
}