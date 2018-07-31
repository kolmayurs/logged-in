import React, { Component } from 'react';
import '../css/App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loggedIn} from '../actions/reduxActions';
import Popup from './Popup';

const mapStateToProps = (state) => {
  return{
    login : state.login.login,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    ...bindActionCreators({loggedIn},dispatch)
  }
}



class App extends Component {
  constructor(props){
    super(props);
    this.state = {email: '', password:'',showPopup: false}
    this.submitResponse = this.submitResponse.bind(this);
  }
 /* componentDidMount(){
    this.props.loggedIn('asdf@asdf.com','1234');
  }*/
  submitResponse(){
    this.props.loggedIn(this.state.email, this.state.password);
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  render() {
    return (
      <div className="App">
        <div className="login">
          <div className="login-triangle"></div>
          <h2 className="login-header">Log in</h2>
          <form className="login-container">
            <p><input type="email" onChange={e => {this.setState({email: e.target.value})}} placeholder="Email" autoComplete="off" required /></p>
            <p><input type="password" onChange={e => {this.setState({password: e.target.value})}} placeholder="Password" minLength="4" maxLength="8" autoComplete="off" required/></p>
            <p><input type="submit" value="Log in" onClick={this.submitResponse} /></p>
          </form>
        </div>
        <button onClick={this.togglePopup.bind(this)}>show popup</button>
        {this.state.showPopup ? 
          <Popup
            text='Close Me'
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
