import React from 'react';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
       username: "",
       password: ""
    };

    this.handleChange = this.handleChange.bind(this)
    this.handlePwdChange = this.handlePwdChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    this.setState({
      username: event.target.value
    })
  }

  handlePwdChange(event){
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    if (this.state.username.length > 0 && this.state.password.length > 0) {
      this.props.onSubmit()
    } else {
      return
    }
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" value={this.state.username} onChange={this.handleChange} type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" value={this.state.password} onChange={this.handlePwdChange} type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}
