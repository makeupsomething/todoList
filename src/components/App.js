import React from 'react';
import { connect } from 'react-redux';
import ConnectedTodos from './Todos';
import ConnectedGoals from './Goals';
import {
	handleGetData
} from '../actions/shared';

class App extends React.Component {
	componentDidMount() {
		const { dispatch } = this.props;
		
		dispatch(handleGetData())
	}

	render() {
		const { loading } = this.props;

		if(loading === true) {
			return <h3>Loading...</h3>
		}

		return(
			<div>
				REACT APP
				<ConnectedTodos />
				<ConnectedGoals />
			</div>
		)
	}
}

export default connect((state) => ({
	loading: state.loading
}))(App);