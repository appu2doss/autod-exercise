import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import posts from './data/posts.json';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link,
} from 'react-router-dom'

function links ({match}) {
  // let arr = posts.find( data  => data.id === match.params.id)
  return (
    <div class="col-sm-12 api-details">       
      <h5>{match.params.id}</h5>
    </div>
  )
}
function documentation ({ match }) {
  return (
    <div class="row">
         {posts.map(({ title, id, description, intro, guide, ref }) => (
      <div class="col-sm-4">
                <Card>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <div>
                        <div>
                            <Link to={`${match.url}/en/api/dummy1/${intro}`}>{intro}</Link></div>
                            <div> <Link to={`${match.url}/en/api/dummy1/${guide}`}>{guide}</Link></div>
                            <div> <Link to={`${match.url}/en/api/dummy1/${ref}`}>{ref}</Link>
                        </div>
                    </div>
                </Card.Body>
                </Card>    
        </div>        
        ))}        
      <Route path={`${match.path}/en/api/dummy1/:id`} component={links} />
    </div>
  )
}
class Exam extends Component {
  render() {      
    return (
      <Router>
        <div style={{width: 1000, margin: '0 auto'}}>
          <Redirect exact from="/" to="/developer/documentation" />
          <Route path='/developer/documentation' component={documentation} />
        </div>
      </Router>
    )
  }
}
export default Exam