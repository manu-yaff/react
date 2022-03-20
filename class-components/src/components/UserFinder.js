import { Fragment, useState, useEffect, Component } from 'react';

import Users from './Users';

class UserFrinder extends Component {
	constructor() {
		super();
		this.state = {
			filteredUsers: DUMMY_USERS,
			searchTerm: '',
		};
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.searchTerm !== this.state.searchTerm) {
			this.state({
				filteredUsers: DUMMY_USERS.filter((user) => {
					user.name.includes(searchTerm);
				}),
			});
		}
	}

	searchChnageHandler(event) {
		this.setState({ searchItem: event.target.value });
	}

	render() {
		return (
			<Fragment>
				<input type="search" onChange={searchChangeHandler} />
				<Users users={filteredUsers} />
			</Fragment>
		);
	}
}

export default UserFinder;
