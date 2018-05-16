import React from 'react';
import { connect } from 'react-redux';

import { getUser, editUserInfo } from '../../../actions';
import FB from '../../../firebase';
import './UserInfo.css';

class UserInfo extends React.Component {

	constructor(props) {
		super(props);
		this.userEmail = '';
		this.state = {
			editing: false,
			redirect: false
		}

		this.saveUserInfo = this.saveUserInfo.bind(this);
		this.editUserInfo = this.editUserInfo.bind(this);
		this.handleChangeName = this.handleChangeName.bind(this);
		this.handleChangeSurname = this.handleChangeSurname.bind(this);
		this.handleChangeCity = this.handleChangeCity.bind(this);
		this.getFile = this.getFile.bind(this);
	}
	defaultUserInfo = {};

	componentDidMount() {
		let email = FB.firebase.auth().currentUser.email;
		this.userEmail = email;
		this.props.getUserByEmail(email);
	}

	handleChangeName(e) {
		this.setState({ name: e.target.value })
	}

	handleChangeSurname(e) {
		this.setState({ surname: e.target.value })
	}

	handleChangeCity(e) {
		this.setState({ city: e.target.value })
	}

	getFile(event) {
		let selectedFile = event.target.files[0];
		console.log(selectedFile);

		let storageRef = FB.firebase.storage().ref().child('/userImages');

	}


	renderUsersInfo = (obj) => {
		let temp = {};
		for (let key in obj) {
			temp = Object.assign({}, obj[key]);
		}

		return (
			<div >
				<ul className="user-info__list">
					<li className="user-info__list__item">Photo:<span><img src={temp.url} alt="user-av"></img></span></li>
					<li className="user-info__list__item">Name: <span>{temp.name}</span></li>
					<li className="user-info__list__item">Surname:<span>{temp.surname}</span></li>
					<li className="user-info__list__item">City:<span>{temp.city}</span></li>
					<li className="user-info__list__item">Email:<span>{temp.email}</span></li>
				</ul>
				<button className="button" onClick={this.editUserInfo}>Edit</button>
			</div>
		)
	}

	editUserInfo(e) {
		this.setState({
			editing: true
		});
	}

	renderEditing(obj) {
		let temp = {};
		for (var key in obj) {
			temp = Object.assign({}, obj[key]);
		}

		return (
			<div className="edit-user-info">
				<ul className="user-info__list">
					<li className="user-info__list__item">Name: <input onChange={this.handleChangeName} type="text" defaultValue={temp.name} /></li>
					<li className="user-info__list__item">Surname: <input onChange={this.handleChangeSurname} type="text" defaultValue={temp.surname} /></li>
					<li className="user-info__list__item">City: <input type="text" onChange={this.handleChangeCity} defaultValue={temp.city} /></li>
					<li className="user-info__list__item"><label htmlFor="file" className="regform__label">Upload image</label> <input type="file"
						onChange={this.getFile}
						id="file"
						name="photo"
						multiple
						accept="image/*,image/jpeg" /></li>
				</ul>
				<button className="button" onClick={this.saveUserInfo}>Save</button>
			</div >
		)
	}

	saveUserInfo() {
		let keyName = Object.keys(this.props.data);
		this.defaultUserInfo = Object.assign({}, this.props.data);

		this.props.editUserInfo({
			"name": this.state.name || this.defaultUserInfo[keyName].name,
			"surname": this.state.surname || this.defaultUserInfo[keyName].surname,
			"city": this.state.city || this.defaultUserInfo[keyName].city,
		}, keyName, this.userEmail);

		this.setState({
			editing: false
		})
	}

	render() {
		return (
			<div className="user-info" >
				<h1 className="user-info__header">Users Info</h1>
				{this.state.editing ? this.renderEditing(this.props.data) : this.renderUsersInfo(this.props.data)}
			</div >
		);
	}
}

const mapStateToProps = (state) => {
	return {
		data: state.userList.user
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getUserByEmail: (email) => {
			dispatch(getUser(email))
		},

		editUserInfo: (user, key, email) => {
			dispatch(editUserInfo(user, key, email))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
