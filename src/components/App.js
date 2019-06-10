import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UseStateExample from './UseStateExample';
import UseEffectExample from './UseEffectExample';
import UseReducerExample from './UseReducerExample';
import ClassLifecycle from './ClassLifecycle';
import Home from './Home';

function App() {
	return (
		<Router>
			<Route exact={true} path={'/'} component={Home} />
			<Route
				exact={true}
				path={'/class-lifecycle'}
				component={ClassLifecycle}
			/>
			<Route
				exact={true}
				path={'/use-state-example'}
				component={UseStateExample}
			/>
			<Route
				exact={true}
				path={'/use-effect-example'}
				component={UseEffectExample}
			/>
			<Route
				exact={true}
				path={'/use-reducer-example'}
				component={UseReducerExample}
			/>
		</Router>
	);
}

export default App;
