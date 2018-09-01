import React from 'react';
import NewsItem from './news_item';

const NewsList = (props) => {
    const items = props.news.map(item => {
        return(
            <NewsItem item={item} key= {item.id}/>
        )
    })
    return(
       <div> {items} </div>
    );
};

export default NewsList;




