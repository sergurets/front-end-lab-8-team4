import React from 'react';
import { connect } from 'react-redux';
import { userList } from '../../../actions';
import FB from '../../../firebase';
// import UserJobList from '../UserJobList/UserJobList';
import './UserInfo.css';

class UserInfo extends React.Component {

	constructor(props) {
		super(props);
		this.logOut = this.logOut.bind(this);
		this.userEmail = ''
	}

	componentDidMount() {
		this.props.getUsers();
	}

	renderUsersInfo = (obj) => {
		// let email = FB.firebase.auth().currentUser.email;
		let email = 'lviv@i.ua';
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
					<li className="user-info__list__item">Name: <span>{temp.name}</span></li>
					<li className="user-info__list__item">Surname:<span>{temp.surname}</span></li>
					<li className="user-info__list__item">City:<span>{temp.city}</span></li>
					<li className="user-info__list__item">Email:<span>{temp.email}</span></li>
					<li className="user-info__list__item">Photo:<span><img src={temp.url} alt="user-av"></img></span></li>
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
			< div className="user-info" >
				<h1 className="user-info__heading">Users Info</h1>
				<button onClick={this.logOut}>Log Out</button>

				<div className="user-info__list">
					{this.renderUsersInfo(this.props.data)}
				</div>
			</div >
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