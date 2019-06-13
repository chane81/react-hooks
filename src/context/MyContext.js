import React, { createContext, useReducer } from 'react';
import _ from 'lodash/fp';

const initState = {
	counter: 1,
	nickname: ''
};
const MyContext = createContext(initState);

const reducer = (state, action) => {
	switch (action.name) {
		case 'INCREMENT': {
			return _.merge(state, { counter: state.counter + 1 });
		}
		case 'DECREMENT': {
			return _.merge(state, { counter: state.counter - 1 });
		}
		case 'SET_NICKNAME': {
			return _.set('nickname', action.value, state);
		}
		default:
			return state;
	}
};

function ContextProvider(props) {
	const [state, dispatch] = useReducer(reducer, initState);

	return (
		<MyContext.Provider value={{ state, dispatch }}>
			{props.children}
		</MyContext.Provider>
	);
}

export { MyContext, ContextProvider };
