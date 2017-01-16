import React from 'react';
import {Card} from 'material-ui';
import trim from 'trim';
import Actions from '../actions';

class MessageBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
  }

  onChange(evt) {
    this.setState({
      message: evt.target.value
    });
  }

  onKeyUp(evt) {
    if (evt.keyCode === 13 && trim(evt.target.value) !== '') {
      evt.preventDefault();

      Actions.sendMessage(this.state.message);

      // clear out textarea
      this.setState({
        message: ''
      });
    }
  }

  render() {
    return (
      <Card style={{
        maxWidth: '1200',
        width: '100%',
        margin: '30px auto 30px',
        padding: 30
      }}>
        <textarea
          value={this.state.message}
          onChange={this.onChange.bind(this)}
          onKeyUp={this.onKeyUp.bind(this)}
          style={{
            width: '100%',
            borderColor: '#D0D0D0',
            resize: 'none',
            borderRadius: 3,
            minHeight: 50,
            color: '#555',
            fontSize: 14,
            outline: 'auto 0px'
        }} />
      </Card>
    );
  }
}

export default MessageBox;