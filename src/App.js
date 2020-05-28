import React from 'react';
import { Provider } from 'react-redux'
import store from './store'
import { loadUser } from './actions/authActions'
import { Container } from 'reactstrap'
import LoginForm from './components/auth/loginForm'
import RegisterModal from './components/auth/RegisterModal'
// import IndexNavbar from './components/IndexNavbar'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends React.Component {

  componentDidMount() {
    store.dispatch(loadUser())
  }

  render() {
    return (
      <Router>
        <Provider store={store}>
          <Container>
            <LoginForm />
            <RegisterModal />
          </Container>
        </Provider>
      </Router>
    )
  }
}

export default App;