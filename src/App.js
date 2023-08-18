import './App.css'
import NevBar from './components/NevBar'
import News from './components/News'
//import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import React, { Component } from 'react'

export default class App extends Component {
  pagecontent = 40
  render() {
    return (
      <div>
        <>
          <Router>
            <div>
              <NevBar />

              <Switch>
                <Route exact path='/'>
                  <News key='general' pagesize={this.pagecontent} country={'us'} category={'general'} />
                </Route>
                <Route exact path='/science'>
                  <News key='science' pagesize={this.pagecontent} country={'us'} category={'science'} />
                </Route>
                <Route exact path='/health'>
                  <News key='health' pagesize={this.pagecontent} country={'us'} category={'health'} />
                </Route>
                <Route exact path='/business'>
                  <News key='business' pagesize={this.pagecontent} country={'us'} category={'business'} />
                </Route>
                <Route exact path='/entertainment'>
                  <News
                    key='entertainment'
                    pagesize={this.pagecontent}
                    country={'us'}
                    category={'entertainment'}
                  />
                </Route>
                <Route exact path='/general'>
                  <News key='general' pagesize={this.pagecontent} country={'us'} category={'general'} />
                </Route>
                <Route exact path='/sports'>
                  <News key='sports' pagesize={this.pagecontent} country={'us'} category={'sports'} />
                </Route>
                <Route exact path='/technology'>
                  <News key='technology' pagesize={this.pagecontent} country={'us'} category={'technology'} />
                </Route>
              </Switch>
            </div>
          </Router>
        </>
      </div>
    )
  }
}
