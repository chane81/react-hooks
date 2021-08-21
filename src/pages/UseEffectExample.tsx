import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UseEffectExample = () => {
	const [nickName, setNickName] = useState('');
	const [drinkName, setDrinkName] = useState('');

	/* 1. ComponentDidMount 효과만 */
	useEffect(() => {
		console.log('component 마운트 효과만!');
	}, []);

	/* 2. ComponentDidMount 또는 componentDidUpdate 효과 */
	// useEffect(() => {
	// 	console.log('component 마운트/업데이트 효과 둘다!');
	// });

	/* 3. ComponentDidMount 또는 특정 상태값 update 에 대해서만 */
	useEffect(() => {
		console.log('nickName의 상태값 update 효과:', nickName);
	}, [nickName]);

	useEffect(() => {
		console.log('drinkName의 상태값 update 효과:', drinkName);
	}, [drinkName]);

	/* componentWillUnmount 만 */
	useEffect(() => {
		return () => {
			console.log('component 언마운트 될거야!');
		};
	}, []);

	return (
		<div>
			<div>UseEffect 예제(console.log 로 확인)</div>
			<div>
				<input
					type='text'
					placeholder='별명을 입력하세요!'
					onChange={e => setNickName(e.target.value)}
				/>
			</div>
			<div>
				<input
					type='text'
					onChange={e => setDrinkName(e.target.value)}
					placeholder='좋아하는 음료를 입력하세요!'
				/>
			</div>
			<div>
				<Link to='/'>언마운트시 useEffect 테스트</Link>
			</div>
		</div>
	);
}

export default UseEffectExample;
