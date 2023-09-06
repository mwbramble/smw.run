import React, {Component} from 'react';
import CATEGORIES from '../../Data/categorydata';
import {Link} from 'react-router-dom';
import './categories.css';

export default class Categories extends Component{
  render(){
    return (
      <section className='main-container'>
        <h1 id='page-title'>Categories</h1>
        <div className='lists-container'>
          <div className='category-list'>
            <h3 id='type-name'>Cape</h3>
            <ul id='cape'>
              {CATEGORIES.map(c => {
                if(c.type === 'cape'){
                  return (
                    <li key={c.id}>
                      <Link to={`/categories/${c.id}`}>
                        {c.title}
                      </Link>
                    </li>
                  )
                }
                return null;
              })}
            </ul>
          </div>
          <div className='category-list'>
            <h3 id='type-name'>No Cape</h3>
            <ul id='no-cape'>
              {CATEGORIES.map(c => {
                if(c.type === 'no-cape'){
                  return (
                    <li key={c.id}>
                      <Link to={`/categories/${c.id}`}>
                        {c.title}
                      </Link>
                    </li>
                  )
                }
                return null;
              })}
            </ul>
          </div>
          <div className='category-list'>
            <h3 id='type-name'>Small Only</h3>
            <ul id='small-only'>
              {CATEGORIES.map(c => {
                if(c.type === 'small-only'){
                  return (
                    <li key={c.id}>
                      <Link to={`/categories/${c.id}`}>
                        {c.title}
                      </Link>
                    </li>
                  )
                }
                return null;
              })}
            </ul>
          </div>
          <div className='category-list'>
            <h3 id='type-name'>Other</h3>
            <ul id='other'>
              {CATEGORIES.map(c => {
                if(c.type === 'other'){
                  return (
                    <li key={c.id}>
                      <Link to={`/categories/${c.id}`}>
                        {c.title}
                      </Link>
                    </li>
                  )
                }
                return null;
              })}
            </ul>
          </div>
        </div>

        {/* leaving this here in case i want to have a list of all the categories together */}
        {/* <ul id='full-categories-list'>
          {CATEGORIES.map(c =>
            <li key={c.id}>
              <Link to={`/categories/${c.id}`}>
                {c.title}
              </Link>
            </li>
          )}
        </ul> */}
        
      </section>
    )
  }
}