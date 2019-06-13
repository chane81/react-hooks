import React, { useState, useEffect, useMemo, useRef } from 'react';

/**
 * 이전 상태값 가져오기
 */
function usePrevious(value) {
	const ref = React.useRef();

	React.useEffect(() => {
		ref.current = value;
	});
	return ref.current;
}

function UseMemoExample() {
	const [nickname, setNickname] = useState('');
	const txtNickname = useRef();
	const prevNickname = usePrevious(nickname);

	// useMemo
	useMemo(() => {
		//console.log('useMemo Prev값:', prevNickname);
		console.log('useMemo - nickName 상태값 update 효과:', nickname);
	}, [nickname]);

	// useEffect
	useEffect(() => {
		console.log('effect - nickname 상태값 update 효과:', nickname);
	}, [nickname]);

	const ConsoleLog = ({ children }) => {
		console.log('렌더링');
		return false;
	};

	return (
		<div>
			<ConsoleLog />
			<div>UseEffect 예제(console.log 로 확인)</div>
			<div>
				<input ref={txtNickname} type='text' placeholder='별명을 입력하세요!' />
			</div>
			<div>{nickname}</div>
			<button onClick={e => setNickname(txtNickname.current.value)}>
				별명입력
			</button>
		</div>
	);
}

export default UseMemoExample;
