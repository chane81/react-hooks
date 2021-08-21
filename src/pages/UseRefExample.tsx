import React, { useRef } from 'react';

const UseRefExample = () => {
	const refTxtNickname = useRef<HTMLInputElement>(null);
	const refEtc = useRef('초기값임!');
	const refDvNickname = useRef<HTMLDivElement>(null);

	const handleClick = () => {
		console.log(`refTxtNickname: ${refTxtNickname.current?.value}`);
		console.log(`refEtc 초기값: ${refEtc.current}`);
		refEtc.current += '=>' + refTxtNickname.current?.value;
		console.log(`refEtc 값 변경 후: ${refEtc.current}`);

		if (refDvNickname.current)
			refDvNickname.current.innerText = refTxtNickname.current?.value || '';
	};

	return (
		<div>
			<div>
				<input
					ref={refTxtNickname}
					type='text'
					placeholder='별명을 입력하세요!'
				/>
			</div>

			<div ref={refDvNickname}>:D</div>
			<button onClick={handleClick}>별명입력</button>
		</div>
	);
}

export default UseRefExample;
