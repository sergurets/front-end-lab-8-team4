import React from 'react';
import { connect } from 'react-redux';
import { userList } from '../../../actions';
import FB from '../../../firebase';

class UserInfo extends React.Component {

	constructor(props) {
		super(props);
		this.logOut = this.logOut.bind(this);

		this.state = {
			name: '',
			email: '',
			surname: '',
			city: ''
		}
	}

	componentWillMount() {
		this.props.getUsers();
	}

	setStateWithFoundEmail() {
		let email = FB.firebase.auth().currentUser.email;

		//convert store from obj to arr
		let users = [];
		for (var key in this.props.data) {
			users.push(this.props.data[key]);
		}

		//search for user by email
		let user = users.find(el => {
			return el.email === email;
		});

		console.log(user.name);

		// setting values
		this.setState({
			name: user.name,
			email: user.email,
			surname: user.surname,
			city: user.city
		});

	}

	logOut(e) {
		FB.firebase.auth().signOut().then(function () {
			alert('logged out');
		}).catch(function (error) {
			alert(error);
		});
	}


	// renderList = (obj) => {
	// 	let users = [];
	// 	for (var key in obj) {
	// 		users.push(obj[key]);
	// 	}

	// 	return (
	// 		users.map(item => (
	// 			<li className="" key={item.id}>
	// 				<h3>{item.name}</h3>
	// 				<p>{item.surname}</p>
	// 			</li>
	// 		))
	// 	);
	// }

	render() {
		this.setStateWithFoundEmail();
		return (
			<div id="">
				<h1>Users Info</h1>
				<button onClick={this.logOut}>Log Out</button>
				<ul className="">
					<li>Name: {this.state.name}</li>
					<li>Surname: {this.state.surname}</li>
					<li>City: {this.state.city}</li>
					<li>Email: {this.state.email}</li>
				</ul>
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