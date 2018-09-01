import React from 'react';

const NewsItem = ({item}) => {
    return(
        <div>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
        </div>
    );
};

export default NewsItem;