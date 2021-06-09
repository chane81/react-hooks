import React, { useState } from 'react';
import useCounter from '../hooks/useSwrCounter'

const UseSwrExample = () => {
	const { data, mutate } = useCounter();

	const handleInc = () => mutate(data + 1);
	const handleDec = () => mutate(data - 1);
	
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
