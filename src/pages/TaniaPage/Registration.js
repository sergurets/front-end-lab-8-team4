import React, { Component } from 'react';
import  fireb  from '../../firebase.js';
import './Registration.css';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: "",
      surname: "",
      password: "",
      city: "",
      email: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getFile = this.getFile.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    var key = fireb.firebaseTrueUsers.push({
	    name: this.state.name,
	    email: this.state.email,
	    password: this.state.password,
	    city: this.state.city,
	    surname: this.state.surname
  	}).key;
  	var data = {
  		name: this.state.name,
	    email: this.state.email,
	    password: this.state.password,
	    city: this.state.city,
	    surname: this.state.surname
  	}
		var filename = this.state.image.name;
  	var storageRef = fireb.firebase.storage().ref('/userImages/' + filename);
  	var upload = storageRef.put(this.state.image);
  	upload.on('state_changed', function(snapshot){

  	}, function(error){
  		console.log(error);
  	}, function(){
  		var downloadURL = upload.snapshot.downloadURL;
  		var updates = {};
  		data.url = downloadURL;
  		updates['/usersT/'+key] = data;
  		fireb.firebaseDB.ref().update(updates);
  	});

  	fireb.firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
  		.then(res => {
  			console.log(res);
  			alert('Successfully registrated');
  		})
  		.catch(error => {
  			console.log(error);
  		})
  	var inputs = document.getElementsByTagName('input');
  	for(var i=0;i<inputs.length;i++){
  		inputs[i].value="";
  	}
  }

  handleChange(event){
    this.setState({[event.target.id]: event.target.value});
  }

  getFile(event){
  	var selectedFile = event.target.files[0];
  	this.state.image = selectedFile;
  }

  render(){
    return (
      <div className="regform">
      <form onSubmit={this.handleSubmit} method="post">
      <input type="text"
        placeholder="Enter name"
        id="name"
        className="regform_name"
        value={this.state.name}
        onChange={this.handleChange}
        required
      />
      <input type="text"
        placeholder="Enter surname"
        id="surname"
        className="regform_surname"
        value={this.state.surname}
        onChange={this.handleChange}
        required
      /><br/>
      <input type="password"
        placeholder="Enter password"
        id="password"
        className="regform_pass"
        value={this.state.password}
        onChange={this.handleChange}
        required
      /><br/>
      <input type="text"
        placeholder="Enter city"
        id="city"
        className="regform_city"
        value={this.state.city}
        onChange={this.handleChange}
        required
      /><br/>
      <input type="email"
        placeholder="E-mail"
        id="email"
        className="regform_email"
        value={this.state.email}
        onChange={this.handleChange}
        required
      /><br/>
      <label htmlFor="file" >Upload Image</label>
      <input type="file" onChange={this.getFile} id="file" name="photo" multiple accept="image/*,image/jpeg"/><br/>
      <button className="regform_send">Send</button>
      </form>
      </div>
    );
  }
}


export default App;
