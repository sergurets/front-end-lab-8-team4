import React, { Component } from 'react';
import  fireb  from '../../firebase.js';
import './Registration.css';
import * as firebase from 'firebase';


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
    let data = {
      name: this.state.name,
      email: this.state.email.toLowerCase(),
      password: this.state.password,
      city: this.state.city,
      surname: this.state.surname,
    }
    if(this.state.image){
      data.image = this.state.image;
    }
    fireb.firebaseTrueUsers.orderByChild('email').equalTo(data.email).once("value", function(snapshot) {
       if(snapshot.val()){ //fix empty if
      } else {
        let key = fireb.firebaseTrueUsers.push(data).key;
        let Ref = firebase.database().ref(`usersT/${key}`);
        Ref.update({
          "databaseId": key
        });

        if(data.image){ 
          let filename = data.image.name;
          let storageRef = fireb.firebase.storage().ref('/userImages/' + filename);

          let upload = storageRef.put(data.image);
          upload.on('state_changed', function(snapshot){

          }, function(error){
            console.log(error);
          }, function(){
            let downloadURL = upload.snapshot.downloadURL;
            let updates = {};
            data.url = downloadURL;
            updates['/usersT/'+key] = data;
            fireb.firebaseDB.ref().update(updates);
          });
        } else {
          let updates = {};
            data.url = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
            updates['/usersT/'+key] = data;
            fireb.firebaseDB.ref().update(updates);
        }


        fireb.firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
          .catch(error => {
            alert(error);
          }); // add then
        }
    });

    for (let ref in this.refs) {
      this.refs[ref].value = "";
    } //delete
    for (let key in this.state){
      this.state[key] = "";
    } //setState
  }

  handleChange(event){
    this.setState({[event.target.name]: event.target.value});
  }

  getFile(event){
    var selectedFile = event.target.files[0]; //const , tab
    this.setState({image: selectedFile});
  }

  render(){
    return (
      <div className="regform">
      <form onSubmit={this.handleSubmit} method="post">
      <input type="text"
        placeholder="Enter name"
        name="name"
        ref="name"
        className="regform__input regform__name"
        value={this.state.name}
        onChange={this.handleChange}
        required
      />
      <input type="text"
        placeholder="Enter surname"
        name="surname"
        ref="surname"
        className="regform__input regform__surname"
        value={this.state.surname}
        onChange={this.handleChange}
        required
      /><br/>
      <input type="password"
        placeholder="Enter password"
        name="password"
        ref="pass"
        className="regform__input"
        value={this.state.password}
        onChange={this.handleChange}
        required
      /><br/>
      <input type="text"
        placeholder="Enter city"
        name="city"
        ref="city"
        className="regform__input"
        value={this.state.city}
        onChange={this.handleChange}
        required
      /><br/>
      <input type="email"
        placeholder="E-mail"
        name="email"
        ref="email"
        className="regform__input"
        value={this.state.email}
        onChange={this.handleChange}
        required
      /><br/>
      <label htmlFor="file" className="regform__label">Upload Image</label>
      <input type="file" onChange={this.getFile} id="file" name="photo" multiple accept="image/*,image/jpeg"/><br/>
      <button className="regform--send">Send</button>
      </form>
      </div>
    );
  }
}


export default App;
