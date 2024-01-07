import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinners'
import defaultImage from '../imagenot.png'

export default class News extends Component {
  constructor(props) {
    super()
    let articles = []
    this.state = { articles: articles, loading: false, page: 1 }
    document.title = `${this.capitalize(props.category)}-News`
  }
  capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  async componentDidMount() {
    this.updatenews()

    /* 
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=067f2e694d4a49d99a4717392dabf9cf&page=1&pagesize=${this.props.pagesize}`
    this.setState({ loading: true })
    let data = await fetch(url)
    let parseData = await data.json()
    console.log('this is data' + parseData)
    this.setState({ articles: parseData.articles, totalResults: parseData.totalResults, loading: false }) */
  }
  async updatenews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=067f2e694d4a49d99a4717392dabf9cf&page=${this.props.pag}&pagesize=${this.props.pagesize}`
    this.setState({ loading: true })
    let data = await fetch(url)
    let parseData = await data.json()
    console.log('this is data' + parseData)
    this.setState({ articles: parseData.articles, totalResults: parseData.totalResults, loading: false })
  }

  handleNextClick = async () => {
    console.log('next')
    /* if (this.state.page + 1 <= Math.ceil(this.state.totalResults / this.props.pagesize)) {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=business&apiKey=067f2e694d4a49d99a4717392dabf9cf&page=${this.state.page + 1}&pageSize=${
        this.props.pagesize
      }`
      this.setState({ loading: true })
      let data = await fetch(url)
      let parseData = await data.json()
      console.log('this is data', parseData)
      this.setState({
        articles: parseData.articles,
        totalResults: parseData.totalResults,
        page: this.state.page + 1,
        loading: false,
      })
    } */
    this.setState({ page: this.state.page + 1 })
    this.updatenews()
  }

  handlePreviousClick = async () => {
    console.log('previous')
    /* let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=business&apiKey=067f2e694d4a49d99a4717392dabf9cf&page=${this.state.page - 1}&pagesize=${
      this.props.pagesize
    }`
    this.setState({ loading: true })
    let data = await fetch(url)
    let parseData = await data.json()
    console.log('this is data' + parseData)
    this.setState({ articles: parseData.articles })

    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
      loading: false,
    })
 */
    this.setState({ page: this.state.page - 1 })
    this.updatenews()
  }

  render() {
    return (
      <>
        <div className='container my-3'>
          <h1 className='text-center'>Top Head Lines from {this.capitalize(this.props.category)}</h1>
          {this.state.loading && <Spinner />}

          <div className='row my-3'>
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <div className='col-md-4 my-4' key={element.url}>
                    <NewsItems
                      tittle={element.title}
                      description={element.description}
                      imageURL={element.urlToImage || defaultImage}
                      newsURL={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                )
              })}
            ;
          </div>
        </div>

        <div className='container d-flex justify-content-around my-3 mx-3'>
          <button
            disabled={this.state.page <= 1}
            type='button'
            className='btn btn-primary'
            onClick={this.handlePreviousClick}>
            &larr; Previous
          </button>

          <button
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)}
            type='button'
            className='btn btn-primary'
            onClick={this.handleNextClick}>
            Next &rarr;
          </button>
        </div>
      </>
    )
  }
}
