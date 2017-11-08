import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

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
      <div>
        <form onSubmit={e => this.signup(e)}>
          <h3>Register</h3>
          <input
            placeholder="username"
            name="username"
            onChange={e => this.setValue(e)}
          />
          <input
            placeholder="password"
            name="password"
            onChange={e => this.setValue(e)}
          />
          <input
            placeholder="confirm password"
            name="confirmPassword"
            onChange={e => this.setValue(e)}
          />
          <button type='submit'>Submit</button>
        </form>

        <form onSubmit={e => this.login(e)}>
          <h3>Login</h3>
          <input
            placeholder="username"
            name="username"
            onChange={e => this.setValue(e)}
          />
          <input
            placeholder="password"
            name="password"
            onChange={e => this.setValue(e)}
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(
  <HomePage />,
  document.getElementById('root')
)
