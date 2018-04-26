import React from 'react';
import { connect } from 'react-redux';
import { userList } from '../../../actions';

class UserInfo extends React.Component {

	componentWillMount() {
		this.props.getUsers();
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
				<h1>Users</h1>
				<ol className="">
					{this.renderList(this.props.data)}
				</ol>
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