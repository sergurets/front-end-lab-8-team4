import React, { Component } from "react";
import fireb from "../../firebase.js";
import { Link } from "react-router-dom";
import "./Login.css";
import { connect } from 'react-redux';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email: "",
      status: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.singOut = this.singOut.bind(this);
  }
  
  componentWillMount(){
      fireb.firebase.auth().onAuthStateChanged((user)=>{
        this.setState({
          status: user? true : false 
        });
        if(user){
          document.getElementsByClassName("regform--logout")[0].style.visibility = "visible";
          document.getElementsByClassName("regform--send")[0].style.visibility = "hidden";
        }
      })
    }
  
  handleSubmit(event) {
    event.preventDefault();
      fireb.firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(res => {
        alert('okay');
        this.props.history.goBack();
        document.getElementsByClassName("regform--logout")[0].style.visibility = "visible";
        document.getElementsByClassName("regform--send")[0].style.visibility = "hidden";
      }).catch(function(error) {
         alert(error);
    });
      for (let key in this.state){
        this.setState({[key]: ""})
      }
  }
  
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  
  singOut() {
    fireb.firebase.auth().signOut()
      .then(function() {
        alert("logged out");
        document.getElementsByClassName("regform--logout")[0].style.visibility = "hidden";
        document.getElementsByClassName("regform--send")[0].style.visibility = "visible";
      })
      .catch(function(error) {
        alert(error);
      });
  }

  render() {
    let isLog = this.state.status;
    return (
      <section className="section-login">
        <div className="regform">
          <form onSubmit={this.handleSubmit} method="post">
            <input
              type="email"
              placeholder="E-mail"
              name="email"
              ref="email"
              className="regform__input"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <br />
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              ref="pass"
              className="regform__input"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            <br />
            <button className="regform--send">Send</button>
          </form>
          <div>
            <button onClick={this.singOut} className="button regform--logout">
              Log Out
            </button>
          </div>
          <div className="regform__register">
            <Link to="/registration" className="regform__register">
              Don't have an account? Register now
            </Link>
          </div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    CurUser: state.user.CurUser
  }
}
export default connect(mapStateToProps,null)(Login);
