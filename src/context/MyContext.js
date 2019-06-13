import React, { createContext, useReducer } from 'react';
import _ from 'lodash';

const initState = {
	counter: 1,
	nickname: ''
};
const MyContext = createContext(initState);

const reducer = (state, action) => {
	switch (action.name) {
		case 'INCREMENT': {
			// return {
			// 	...state,
			// 	counter: state.counter + 1
			// };

			return _.merge({}, state, { counter: state.counter + 1 });
		}
		case 'DECREMENT': {
			// return {
			// 	...state,
			// 	counter: state.counter - 1
			// };

			return _.merge({}, state, { counter: state.counter - 1 });
		}
		case 'SET_NICKNAME': {
			return _.merge({}, state, { nickname: action.value });
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
