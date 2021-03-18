import React, { useContext } from 'react';
import { MyContext } from '../context/MyContext';

/**
 * context 사용을 위한 사전 작업
 * 1. context 와 provider 생성 -  /contexxt/MyContext.js 참고
 * 2. ContextProvider 로 감싸기 - /components/App.js 참고
 */

const UseContextExample = () => {
	const { state, dispatch } = useContext(MyContext);

	return (
		<div>
			<h1>Count: {state.counter}</h1>
			<div>
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
					name='SET_NICKNAME'
					placeholder='별명을 입력하세요!'
					onChange={e => dispatch(e.target)}
				/>
				<div>{state.nickname}</div>
			</div>
		</div>
	);
}

export default UseContextExample;