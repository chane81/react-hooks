import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import usePrevious from '../hooks/usePrevious';


const UseMemoExample = () => {
	const [ nickname, setNickname ] = useState('');
	const txtNickname = useRef();
	const prevNickname = usePrevious(nickname);
	const [ number, setNumber ] = useState('');
	const [ list, setList ] = useState([]);

	// useMemo
	useMemo(
		() => {
			//console.log('useMemo Prev값:', prevNickname);
			console.log('useMemo - nickName 상태값 update 효과:', nickname);
		},
		[ nickname ]
	);

	// useEffect
	useEffect(
		() => {
			console.log('effect - nickname 상태값 update 효과:', nickname);
		},
		[ nickname ]
	);

	/* useEffect 언마운트 호출 */
	useEffect(() => {
		return () => {
			console.log('component 언마운트 될거야!');
		};
	}, []);

	const ConsoleLog = ({ children }) => {
		console.log('렌더링');
		return false;
	};

	const handleChange = e => {
		setNumber(e.target.value);
	};

	const onInsert = e => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
	};

	const getAverage = numbers => {
		console.log('NoneMemo 평균값 계산중..');
		if (numbers.length === 0) return 0;
		const sum = numbers.reduce((a, b) => a + b);
		return sum / numbers.length;
	};

	const getMemoAverage = numbers => {
		console.log('Memo 평균값 계산중..');
		if (numbers.length === 0) return 0;
		const sum = numbers.reduce((a, b) => a + b);
		return sum / numbers.length;
	};

	// 렌더링 될 때 마다 호출
	const nonMemoAvg = getAverage(list);

	// 렌더링 시 호출이 아니라 list 값이 바뀌면 호출
	const memoAvg = useMemo(() => getMemoAverage(list), [list]);


	return (
		<div>
			<ConsoleLog />
			<div>UseEffect 예제(console.log 로 확인)</div>
			<div>
				<input ref={txtNickname} type='text' placeholder='별명을 입력하세요!' />
			</div>
			<div>{nickname}</div>
			<button onClick={(e) => setNickname(txtNickname.current.value)}>
				별명입력
			</button>
			<div>
				<Link to='/'>언마운트시 호출 테스트</Link>
			</div>
			<p />
			<div>================================</div>
			<input value={number} onChange={handleChange} />
			<button onClick={onInsert}>등록</button>
			<ul>{list.map((val, idx) => <li key={idx}>{val}</li>)}</ul>
			<div>
        <b>평균 값:</b> {nonMemoAvg}
      </div>
			<div>
        <b>평균 값 memo:</b> {memoAvg}
      </div>
		</div>
	);
}

export default UseMemoExample;
