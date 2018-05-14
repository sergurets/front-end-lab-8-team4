import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { getUser } from '../../../actions';
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
	}

	componentDidMount() {
		try {
			let email = FB.firebase.auth().currentUser.email;
			this.userEmail = email;
			this.props.getUserByEmail(email);
		}
		catch (e) {
			this.setState({ redirect: true });
		}
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

	handleChangeEmail(e) {
		this.setState({ email: e.target.value })
	}

	handleChangePassword(e) {
		this.setState({ password: e.target.value })
	}

	handleLoginEmail(e) {
		this.setState({ emailToLogin: e.target.value })
	}

	handleLoginPassword(e) {
		this.setState({ passwordToLogin: e.target.value })
	}

	renderUsersInfo = (obj) => {
		let temp = {};
		for (var key in obj) {
			temp = Object.assign({}, obj[key]);
		}

		return (
			<div className="user-info__list">
				<button onClick={this.editUserInfo}>Edit</button>
				<ul className="">
					<li className="user-info__list__item">Name: <span>{temp.name}</span></li>
					<li className="user-info__list__item">Surname:<span>{temp.surname}</span></li>
					<li className="user-info__list__item">City:<span>{temp.city}</span></li>
					<li className="user-info__list__item">Email:<span>{temp.email}</span></li>
					<li className="user-info__list__item">Photo:<span><img src={temp.url} alt="user-av"></img></span></li>
				</ul>
			</div>
		)
	}

	editUserInfo = (e) => {
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
				<button onClick={this.saveUserInfo}>Save</button>
				<ul className="">
					<li className="edit-user-info__item">Name: <input onChange={this.handleChangeName} type="text" defaultValue={temp.name} /></li>
					<li className="edit-user-info__item">Surname: <input onChange={this.handleChangeSurname} type="text" defaultValue={temp.surname} /></li>
					<li className="edit-user-info__item">City: <input type="text" onChange={this.handleChangeCity} defaultValue={temp.city} /></li>
					<li className="edit-user-info__item">Photo: <button>Upload new image</button></li>
				</ul>
			</div >
		)
	}

	saveUserInfo = () => {
		let keyName = Object.keys(this.props.data);

		FB.firebase.database().ref(`usersT/${keyName}`).update({
			"name": this.state.name,
			"surname": this.state.surname,
			"city": this.state.city,
		});


		this.setState({
			editing: false
		})
	}

	render() {
		const { redirect } = this.state;

		if (redirect) {
			return <Redirect to='/page' />;
		}

		return (
			<div className="user-info" >
				<h1 className="user-info__heading">Users Info</h1>

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
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);