import React from 'react';

export default class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange}/><p>{ this.props.maxChars - this.state.value.length }</p>
      </div>
    );
  }
}
