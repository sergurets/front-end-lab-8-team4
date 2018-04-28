import React from 'react';
import { connect } from 'react-redux';
import { userList } from '../../../actions';
import FB from '../../../firebase';
import UserJobList from '../UserJobList/UserJobList'

class UserInfo extends React.Component {

	constructor(props) {
		super(props);
		this.logOut = this.logOut.bind(this);
		this.userEmail = ''
	}

	componentWillMount() {
		this.props.getUsers();
	}

	renderUsersInfo = (obj) => {
		// let email = FB.firebase.auth().currentUser.email;
		let email = 'sef@rhtt.er';

		this.userEmail = email;

		console.log('call');
		var temp = {};
		for (var key in obj) {
			if (obj[key].email === email) {
				temp = Object.assign({}, obj[key]);
			}
		}

		return (
			<div>
				<ul className="">
					<li>Name: {temp.name}</li>
					<li>Surname: {temp.surname}</li>
					<li>City: {temp.city}</li>
					<li>Email: {temp.email}</li>
					<li>Photo: <img src={temp.url}></img></li>
				</ul>
			</div>
		)

	}

	logOut(e) {
		FB.firebase.auth().signOut().then(function () {
			alert('logged out');
		}).catch(function (error) {
			alert(error);
		});
	}


	renderList = (obj) => {
		let users = [];
		for (var key in obj) {
			users.push(obj[key]);
		}

		return (
			users.map(item => (
				<li className="" key={item.id}>
					<h3>{item.name}</h3>
					<p>{item.surname}</p>
				</li>
			))
		);
	}

	render() {
		return (
			<div id="">
				<h1>Users Info</h1>
				<button onClick={this.logOut}>Log Out</button>
				<ol>
					{/* {this.renderList(this.props.data)} */}
				</ol>
				<div>
					{this.renderUsersInfo(this.props.data)}
					<UserJobList email={this.userEmail} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		data: state.userList.users
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getUsers: () => {
			dispatch(userList())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);