import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UseStateExample from './pages/UseStateExample';
import UseEffectExample from './pages/UseEffectExample';
import UseReducerExample from './pages/UseReducerExample';
import UseContextExample from './pages/UseContextExample';
import UseMemoExample from './pages/UseMemoExample';
import UseRefExample from './pages/UseRefExample';
import ClassLifecycle from './pages/ClassLifecycle';
import UseCallbackExample from './pages/UseCallbackExample';
import { ContextProvider } from './context/MyContext';
import Home from './pages/Home';

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
				<Route
					exact={true}
					path={'/use-context-example'}
				component={() => (
						<ContextProvider>
							<UseContextExample />
						</ContextProvider>
					)}
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
						path={'/use-callback-example'}
						component={UseCallbackExample}
					/>
			</Router>
	);
}

export default App;
