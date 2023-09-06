import React, {Component} from 'react';
import CATEGORIES from '../../Data/categorydata';
import './categorypage.css';

export default class CategoryPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      category: CATEGORIES.filter(c => c.id === this.props.match.params.id),
      data: {},
      wrRunner: null,
      wrTime: null
    }
  }

  parseRunInfo(runData){
    if(!this.state.data){
      document.getElementById('no-wr').style.display = 'inline';
    }
    else{
      let parsedRunner = '';
      parsedRunner = (
        this.state.data.players.data[0].id 
        ? this.state.data.players.data[0].names.international
        : this.state.data.players.data[0].name
      );

      let parsedWRTime = '';
      this.state.data.runs.forEach(e => {
        // srcom gives run times in seconds, so i have to convert that to hh:mm:ss
        let h, m, s;
        let time = e.run.times.primary_t;
        h = Math.floor(time / 3600);
        time %= 3600;
        m = Math.floor(time / 60);
        s = (time % 60).toFixed(3);

        // adds a zero to necessary parts of time
        // ex: '1:02:03.456' instead of '1:2:3.456'
        if(m < 10){
          m = '0' + m;
        }
        if(s < 10){
          s = '0' + s;
        }

        // removes '.000' from the end of times that have them
        if(s.substring(3) === '000'){
          s = s.substring(0, 2);
        }

        // this if/else gets rid of the hours section if it is 0
        // ex: '34:07.178' instead of '00:34:07.178'
        if(h === 0){
          parsedWRTime = m + ':' + s;
        }
        else{
          parsedWRTime = h + ':' + m + ':' + s;
        }
      })
      document.getElementById('wr').innerHTML = (`
        <span>WR is ${parsedWRTime} by ${parsedRunner}</span>
        <br />
        <small>
          <a href={'https://speedrun.com/smw#${this.state.category[0].leaderboard}'}>
            Full Leaderboard
          </a>
        </small>
      `)
    }
  }

  componentDidMount(){
    const that = this;
    fetch(`https://www.speedrun.com/api/v1/leaderboards/pd0wq31e${this.state.category[0].wr}&embed=players`)
      .then(function(res){
        return res.json();
      })
      .then(function(data){
        that.setState({data: data.data});
        that.parseRunInfo();
      })
  }

  render(){
    return (
      <section className='main-container'>
        <h1 id='page-title'>{this.state.category[0].title}</h1>
        <div className='category-container'>
          <div className='category-about-rules'>
            <h3 id='about'>About</h3>
            <p id='desc'>{this.state.category[0].desc}</p>
            <hr />
            <h3 id='rules-label'>Rules/Penalties</h3>
            <ul id='rules-list'>
              {this.state.category[0].rules.map(rule =>
                <li key={rule}>{rule}</li>
              )}
            </ul>
            <ul id='penalties-list'>
              {this.state.category[0].penalties.map(penalty =>
                <li key={penalty}>{penalty}</li>
              )}
            </ul>
          </div>
        </div>
        <div id='wr'></div>
          <div id='no-wr'>
            <span>WR is Unavailable.</span>
            <br />
            <small onClick={() => alert('SRC sucks')}>(Why?)</small>
          </div>
      </section>
    )
  }
}