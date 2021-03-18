import { useRef, useEffect } from 'react';

/**
 * 이전 상태값 가져오기
 */
const usePrevious = (value) => {
	const ref = useRef();

	useEffect(() => {
		ref.current = value;
	});
	return ref.current;
}

export default usePrevious;