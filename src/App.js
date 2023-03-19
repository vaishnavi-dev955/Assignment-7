import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'

import NxtWatchContext from './Context/NxtWatchContext'

import LoginForm from './components/LoginForm'

import Home from './components/Home'
import NotFound from './components/NotFound'

import './App.css'

// Replace your code here
class App extends Component {
  state = {isDarkBtnTheme: false}

  onToggleTheme = () => {
    this.setState(prevState => ({isDarkBtnTheme: !prevState.isDarkBtnTheme}))
  }

  render() {
    const {isDarkBtnTheme} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          isDarkBtnTheme,
          onToggleTheme: this.onToggleTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
