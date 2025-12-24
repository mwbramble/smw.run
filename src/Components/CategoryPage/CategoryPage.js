import React, { Component } from 'react';
import CATEGORIES from '../../Data/categorydata';
import './categorypage.css';

export default class CategoryPageNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: CATEGORIES.filter(c => c.id === this.props.match.params.id),
            data: null,
            wrRunner: '',
            wrTime: '',
            loading: true
        }
    }

    componentDidMount() {
        fetch(`https://www.speedrun.com/api/v1/leaderboards/pd0wq31e${this.state.category[0].wr}&embed=players`)
        .then(res => res.json())
        .then(json => {
            const data = json.data;
            console.log(data)

            let parsedRunner = data.players.data[0].id
                ? data.players.data[0].names.international
                : data.players.data[0].name;

            let parsedWRTime = '';

            let h, m, s;
            let time = data.runs[0].run.times.primary_t;
            h = Math.floor(time / 3600);
            time %= 3600;
            m = Math.floor(time / 60);
            s = (time % 60).toFixed(3);

            if(m < 10){
                m = '0' + m;
            }
            if(s < 10){
                s = '0' + s;
            }

            if(h === 0){
                parsedWRTime = m + ':' + s;
            }
            else{
                parsedWRTime = h + ':' + m + ':' + s;
            }

            this.setState({
                data: data,
                wrRunner: parsedRunner,
                wrTime: parsedWRTime,
                loading: false
            });
        })
        .catch(err => {
            console.error(err);
            this.setState({loading: false});
        });
    }

    render(){
        const {category, data, wrRunner, wrTime, loading} = this.state;
        const cat = category[0];

        return(
            <section className='main-container'>
                <h1 id='page-title'>{cat.title}</h1>
                {loading ? (<span>Loading...</span>) : data ? (
                        <div>
                            <span>WR is {wrTime} by {wrRunner}</span>
                            <br />
                            <small>
                                <a href={`https://speedrun.com/smw#${cat.leaderboard}`}>Full Leaderboard</a>
                            </small>
                        </div>
                    ) : (
                        <div id='no-wr'>
                            <span>WR is unavailable.</span>
                        </div>
                    )}
                <br />
                <h3 id='about'>About</h3>
                <p id='desc'>{cat.desc}</p>
                <hr />
                <h3 id='rules-label'>Rules</h3>
                <ul id='rules-list'>
                    {cat.rules.map(rule => <li key={rule}>{rule}</li>)}
                </ul>
                <ul id='penalties-list'>
                    {cat.penalties.map(penalty => <li key={penalty}>{penalty}</li>)}
                </ul>
            </section>
        );
    }
}