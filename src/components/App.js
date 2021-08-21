import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UseStateExample from './UseStateExample';
import UseEffectExample from './UseEffectExample';
import UseReducerExample from './UseReducerExample';
import UseContextExample from './UseContextExample';
import UseMemoExample from './UseMemoExample';
import UseRefExample from './UseRefExample';
import ClassLifecycle from './ClassLifecycle';
import { ContextProvider } from '../context/MyContext';
import UseRefTypescriptExample from './UseRefTypescriptExample';
import Home from './Home';

function App() {
	return (
		<ContextProvider>
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
				<Route
					exact={true}
					path={'/use-context-example'}
					component={UseContextExample}
				/>
				<Route
					exact={true}
					path={'/use-memo-example'}
					component={UseMemoExample}
				/>
				<Route
					exact={true}
					path={'/use-ref-example'}
					component={UseRefExample}
				/>
				<Route
					exact={true}
					path={'/use-ref-typescript-example'}
					component={UseRefTypescriptExample}
				/>
			</Router>
		</ContextProvider>
	);
}

export default App;
