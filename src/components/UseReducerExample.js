import React, { useReducer } from 'react';

// 1. 리듀서 - 액션의 네임을 case 명으로 사용할 경우
const reducer = (state, action) => {
	console.log('1번 리듀서 prev state:', state);

	switch (action.name) {
		case 'INCREMENT': {
			return {
				...state,
				counter: state.counter + 1
			};
		}
		case 'DECREMENT':
			return {
				...state,
				counter: state.counter - 1
			};
		case 'NICKNAME':
			return {
				...state,
				nickName: action.value
			};
		default:
			return state;
	}
};

// 2. 리듀서 - 액션의 네임을 상태값의 key 로 사용할 경우
const inputReducer = (state, action) => {
	console.log('2번 리듀서 prev state:', state);

	return {
		...state,
		[action.name]: action.value
	};
};

function UseReducerExample() {
	// 1번 리듀서에 대한 state 와 dispatch 선언
	const [state, dispatch] = useReducer(reducer, {
		counter: 0,
		nickName: ''
	});

	// 2번 리듀서에 대한 state 와 dispatch 선언
	const [inputState, inputDispatch] = useReducer(inputReducer, {
		MYNAME: '',
		DRINKNAME: ''
	});

	return (
		<div>
			<div>UseReducer 예제</div>
			<div>
				<div>
					<p>
						현재 카운터 값은 <b>{state.counter}</b> 입니다
					</p>
				</div>
				<button name='INCREMENT' onClick={e => dispatch(e.target)}>
					+1
				</button>
				<button name='DECREMENT' onClick={e => dispatch(e.target)}>
					-1
				</button>
			</div>
			<div>
				<input
					type='text'
					name='NICKNAME'
					placeholder='별명을 입력하세요!'
					onChange={e => dispatch(e.target)}
				/>
				<p>{state.nickName}</p>
			</div>
			<hr />
			<div>
				<input
					type='text'
					name='MYNAME'
					placeholder='이름을 입력하세요!'
					onChange={e => inputDispatch(e.target)}
				/>
				<p>{inputState.MYNAME}</p>
				<input
					type='text'
					name='DRINKNAME'
					placeholder='음료수를 입력하세요!'
					onChange={e => inputDispatch(e.target)}
				/>
				<p>{inputState.DRINKNAME}</p>
			</div>
		</div>
	);
}

export default UseReducerExample;
