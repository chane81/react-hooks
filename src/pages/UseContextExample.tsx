import React, { useContext, MouseEvent, ChangeEvent } from 'react';
import { MyCtx, ContextProvider } from '../context/MyContext';

/**
 * context 사용을 위한 사전 작업
 * 1. context 와 provider 생성 -  /contexxt/MyContext.js 참고
 * 2. ContextProvider 로 감싸기 - /components/App.js 참고
 */

const UseContextExample = () => {
	//const ctx = useContext(MyContext);
	const { state, dispatch } = MyCtx();

	const handleDispatch = (
		e: MouseEvent<HTMLButtonElement> | ChangeEvent<HTMLInputElement>
	) => dispatch(e.currentTarget);


	return (
		<div>
			<h1>Count: {state.counter}</h1>
			<div>
				<button name='INCREMENT' onClick={handleDispatch}>
					+1
				</button>
				<button name='DECREMENT' onClick={handleDispatch}>
					-1
				</button>
			</div>
			<div>
				<input
					type='text'
					name='SET_NICKNAME'
					placeholder='별명을 입력하세요!'
					onChange={handleDispatch}
				/>
				<div>{state.nickname}</div>
			</div>
		</div>
	);
}

export default UseContextExample;