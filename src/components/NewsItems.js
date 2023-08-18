import React, { Component } from 'react'

export default class NewsItems extends Component {
  render() {
    let { tittle, description, imageURL, newsURL, author, date, source } = this.props
    return (
      <div className='card' style={{ width: '18rem' }}>
        <img src={imageURL} className='card-img-top' alt='...' />
        <div className='card-body'>
          <span class='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
            {source}
            <span class='visually-hidden'>unread messages</span>
          </span>
          <h5 className='card-title'>{tittle}</h5>
          <p className='card-text'>{description}</p>
          <p className='card-text'>
            <small className='text-body-secondary'>
              by {author ? author : 'Unknow'} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a href={newsURL} target='_blank' className='btn btn-primary btn-sm'>
            Go somewhere
          </a>
        </div>
      </div>
    )
  }
}
