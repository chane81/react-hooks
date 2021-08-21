import React from 'react';
import useCounter from '../stores/counterStore'

const UseSwrExample = () => {
	const { store, mutate } = useCounter();

	const handleInc = () => mutate(store + 1);
	const handleDec = () => mutate(store - 1);
	
	return (
		<div>
			<div style={{marginBottom: '1rem'}}>SWR 카운터 컴포넌트 2</div>
			<div>
				<button onClick={handleInc} style={{marginRight: '0.5rem'}}>+1</button>
				<button onClick={handleDec}>-1</button>
			</div>
		</div>
	);
}

export default UseSwrExample;
