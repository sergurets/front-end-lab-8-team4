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

	// componentDidMount() {
	// 	this.props.getUsers();
	// }

	renderUsersInfo = (obj) => {
		// let email = FB.firebase.auth().currentUser.email;
		let email = 'lviv@i.ua';
		console.log(obj);
		this.userEmail = email;

		var temp = {};
		for (var key in obj) {
			if (obj[key].email === email) {
				temp = Object.assign({}, obj[key]);
			}
		}

		return (
			<div className="">
				<ul className="">
					<li className="">Name: {temp.name}</li>
					<li className="">Surname: {temp.surname}</li>
					<li className="">City: {temp.city}</li>
					<li className="">Email: {temp.email}</li>
					<li className="">Photo: <img src={temp.url} alt="user-av"></img></li>
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
		console.log(this.props.data)
		return (
			< div className="user-info" >
				<h1 className="user-info__heading">Users Info</h1>
				<button onClick={this.logOut}>Log Out</button>
				<ol>
					{/* {this.renderList(this.props.data)} */}
				</ol>
				<div className="user-info__list">
					{this.renderUsersInfo(this.props.data)}
				</div>
			</div >
		);
	}
}

const mapStateToProps = (state) => {
	return {
		data: state.userList
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