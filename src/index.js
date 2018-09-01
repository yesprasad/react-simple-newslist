import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/header';
import JSON from './Data/newsDb.json'
import NewsList from './components/NewsSection/news_list';


class App extends Component {
    state = {
        news: JSON
    };

    render(){
        return (
        <div>
            <Header/>
            <NewsList news={this.state.news}/>
        </div>
        )
    };
};

ReactDOM.render(<App/>, document.getElementById('root'));