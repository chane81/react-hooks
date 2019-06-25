import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<Link to='/class-lifecycle'>클래스형 컴포넌트 Lifecycle</Link>
			<Link to='/use-state-example'>UseState</Link>
			<Link to='/use-effect-example'>UseEffect</Link>
			<Link to='/use-context-example'>UseContext</Link>
			<Link to='/use-reducer-example'>UseReducer</Link>
			<Link to='/use-memo-example'>UseMemo</Link>
			<Link to='/use-ref-example'>UseRef</Link>
		</div>
	);
}

export default Home;
