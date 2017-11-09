import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Styles from './styles'

class HomePage extends React.Component {
  state = {
    username: '',
    password: '',
    confirmPassword: ''
  }

  setValue(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  signup(e) {
    e.preventDefault();
    if(this.state.username === '' || this.state.password === '' || this.state.confirmPassword ==='') {
      alert('please enter info in all fields.')
    }
    else if(this.state.password !== this.state.confirmPassword) {
      alert('make sure your password matches.')
    } else {
      axios.post('/users/register', this.state).then(() => {
        alert('success!')
      })
    }
  }

  login(e) {
    e.preventDefault();
    axios.post('/users/login', this.state).then((results) => {
      localStorage.setItem('token', results.data.token)
    })
  }

  render() {
    return(
      <div style={Styles.bgColor}>
        <form onSubmit={e => this.signup(e)}>
          <Container>
            <Row>
              <Col style={Styles.arial}>
                <h3 style={Styles.red}>Register</h3>
              </Col>
            </Row>
            <Row>
              <Col style={Styles.arial}>
                <input
                  placeholder="username"
                  name="username"
                  onChange={e => this.setValue(e)}
                />
              </Col>
            </Row>
            <Row>
              <Col style={Styles.arial}>
                <input
                  placeholder="password"
                  name="password"
                  onChange={e => this.setValue(e)}
                />
              </Col>
            </Row>
            <Row>
              <Col style={Styles.arial}>
                <input
                  placeholder="confirm password"
                  name="confirmPassword"
                  onChange={e => this.setValue(e)}
                />
              </Col>
            </Row>
            <Row>
              <Col style={Styles.arial}>
                <Button color="info" type='submit'>Submit</Button>
              </Col>
            </Row>

          </Container>
        </form>

        <form onSubmit={e => this.login(e)}>
          <Container>
            <Row>
              <Col style={Styles.arial}>
                <h3 style={Styles.red} >Login</h3>
              </Col>
            </Row>
            <Row>
              <Col style={Styles.arial}>
                <input
                  placeholder="username"
                  name="username"
                  onChange={e => this.setValue(e)}
                />
              </Col>
            </Row>
            <Row>
              <Col style={Styles.arial}>
                <input
                  placeholder="password"
                  name="password"
                  onChange={e => this.setValue(e)}
                />
              </Col>
            </Row>
            <Row>
              <Col style={Styles.arial}>
                <Button color="info" type='submit'>Submit</Button>
              </Col>
            </Row>
          </Container>
        </form>
      </div>
    )
  }
}

ReactDOM.render(
  <HomePage />,
  document.getElementById('root')
)
