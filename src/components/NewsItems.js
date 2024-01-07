import React, { Component } from 'react'

export default class NewsItems extends Component {
  render() {
    let { tittle, description, imageURL, newsURL, author, date, source } = this.props
    return (
      <div className='card' style={{ width: '18rem', height: '38rem' }}>
        <img src={imageURL} height={200} className='card-img-top ' alt='...' />
        <div className='card-body'>
          <span class='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
            {source}
            <span class='visually-hidden'>unread messages</span>
          </span>
          <h5 className='card-title'>{tittle.length > 70 ? `${tittle.slice(0, 70)} ...` : tittle}</h5>
          <p className='card-text'>
            {description && description.length > 200 ? `${description.slice(0, 200)} ...` : description}
          </p>
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
