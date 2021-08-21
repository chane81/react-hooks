import React from 'react';
import useCounter from '../stores/counterStore'

const UseStateExample = () => {
	const { store, mutate } = useCounter();

	const handleInc = () => { console.log('st', store); mutate(store + 1);} //mutate(store.count + 1);
	const handleDec = () => mutate(store - 1);
	
	return (
		<div>
			<div style={{marginBottom: '1rem'}}>SWR 카운터 컴포넌트 1</div>
			<div>
				<button onClick={handleInc} style={{marginRight: '0.5rem'}}>+1</button>
				<button onClick={handleDec}>-1</button>
			</div>
		</div>
	);
}

export default UseStateExample;
