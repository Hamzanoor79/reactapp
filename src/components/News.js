import React, { Component } from "react";
import NewsItem from "./NewsItem";
export default class News extends Component {
  constructor() {
    super();
    this.state = {
      myarticle: [],
      pagesize: 8,
      page: 1,
    };
  }

  async firstarticle() {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=7b9d340c883345cfba48e19f89e0cf5f&pageSize=${this.state.pagesize}&page=${this.state.page}`;
    const fetchdata = await fetch(url);
    const myjson = await fetchdata.json();
    this.setState({
      myarticle: myjson.articles,
    });
    console.log(myjson.articles);
  }

  async componentDidMount() {
    //console.log(this.state.myarticle);
    this.firstarticle();
  }

  Nextdata = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    this.firstarticle();
  };

  Previousdata = async () => {
    this.setState({
      page: this.state.page - 1,
    });
    this.firstarticle();
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 m-4">
            <h3>News</h3>
          </div>
          {this.state.myarticle.map((element, index) => {
            return (
              <div className="col-sm-3" key={index}>
                <NewsItem
                  mytitle={element.title}
                  mydesc={element.description}
                  myimg={element.urlToImage}
                  author={element.source.name}
                  newsurl={element.url}
                />
              </div>
            );
          })}

          <div className="container d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.Previousdata}
              disabled={this.state.page <= 1}
            >
              &larr; Previous
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.Nextdata}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}
