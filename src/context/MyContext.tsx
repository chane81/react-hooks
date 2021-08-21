import { createContext, useReducer, useContext, ReducerAction } from 'react';
import _ from 'lodash/fp';

interface IState {
	counter: number;
	nickname: string;
}

interface IAction {
	name: string;
	value: string;
}

const initState = {
	counter: 1,
	nickname: ''
};

interface IContext {
	state: IState;
	dispatch: React.Dispatch<IAction>;
}

const MyContext =
	createContext<IContext | null>(null);

const reducer = (state: IState, action: IAction) => {
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

const ContextProvider = (props: any) => {
	const [state, dispatch] = useReducer(reducer, initState);

	return (
		<MyContext.Provider value={{ state, dispatch }}>
			{props.children}
		</MyContext.Provider>
	);
}

const MyCtx = () => {
	const ctx = useContext(MyContext);
	if (!ctx) {
		throw new Error('Cannot find Context');
	}
	

	return ctx;
}

export { MyCtx, ContextProvider };
