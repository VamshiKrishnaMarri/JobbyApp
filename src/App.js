import {Component} from 'react'

import {Route, Switch, Redirect} from 'react-router-dom'

import Home from './components/Home'
import LoginForm from './components/LoginForm'
import Jobs from './components/Jobs'
import JobItemDetail from './components/JobItemDetail'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/jobs" component={Jobs} />
          <ProtectedRoute exact path="/jobs/:id" component={JobItemDetail} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </>
    )
  }
}
export default App
