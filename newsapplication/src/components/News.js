import React, { Component } from 'react';
import NewsItem from './NewsItem';

export default class News extends Component {
  render() {
    return (
      <>
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </>
    );
  }
}
