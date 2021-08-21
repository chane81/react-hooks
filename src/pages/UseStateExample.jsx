import React, { useState } from 'react';

const UseStateExample = () => {
	const [counter, setCounter] = useState(0);
	const [nickName, setsNickName] = useState('');
	const [drinkName, setDrinkName] = useState('');

	return (
		<div>
			<div>UseState 예제</div>
			<div>
				<div>
					<p>
						현재 카운터 값은 <b>{counter}</b> 입니다
					</p>
				</div>
				<button onClick={e => setCounter(counter + 1)}>+1</button>
				<button onClick={e => setCounter(counter - 1)}>-1</button>
			</div>
			<hr />
			<div>
				<input
					type='text'
					value={nickName}
					onChange={e => setsNickName(e.target.value)}
					placeholder='별명을 입력하세요!'
				/>
				<p>별명:{nickName}</p>

				<input
					type='text'
					value={drinkName}
					onChange={e => setDrinkName(e.target.value)}
					placeholder='좋아하는 음료를 입력하세요!'
				/>
				<p>음료수:{drinkName}</p>
			</div>
		</div>
	);
}

export default UseStateExample;
