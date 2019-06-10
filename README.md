# 리액트 hooks
  - 리액트 v16.8 에 도입된 함수형 컴포넌트에서 상태관리를 할 수 있게 하는 신 기능

# hook 전에 `클래스형 컴포넌트 Lifecycle`을 알아보자
  - constructor
    > 생성자
  - getDerivedStateFromProps
    > 새 props 를 받았을 때
    > state 갱신 할 때
  - shouldComponentUpdate
    > 컴포넌트 업데이트 직전 호출
  - render
    > 렌더링
  - getSnapshotBeforeUpdate
    > DOM 업데이트 직전 호출
  - componentDidMount
    > 컴포넌트가 만들어지고 render 이후에 호출
  - componentDidUpdate
    > 컴포넌트 업데이트 직후 호출
  - componentWillUnmount
    > 컴포넌트가 unmount 되기 전 호출
    > setState 호출 불가
  - componentDidCatch 
    > 컴포넌트 에러발생시
  ![](/public/images/class_component_lifecycle.jpg)

# `useState`
  - 기본적인 상태관리 Hook
  
# `useEffect`
  - 컴포넌트의 componentDidMount, componentDidUpdate, componentWillUnmount 라이프사이클 기능을 이걸 가지고 쓸 수 있음
  - 하지만 위의 라이프사이클 기능과는 약간의 차이가 있음
  - `클래스형 컴포넌트의 componentDidUpdate() 함수의 경우는 상태값 update 시에만 발생하지만 useEffect는 컴포넌트 마운트시 또는 상태값 update 시에 발생한다.`
  - 효과
    > ComponentDidMount 효과만 
    > ComponentDidMount 또는 특정 상태값 update 에 대해서만
    > componentWillUnmount 만

# `useReducer`
  - 맞다 리덕스의 그 리듀서와 동일한 개념이다.
  - 각 액션별로 상태값을 변경하게 하는 리듀서를 두어서 상태 변경에 대해 디스패치를 통해 리듀서에서 관리하게 한다.

# 나머내용은 좀 쉬고 테스트

# `useContext`

# `useMemo`

# `useCallback`

# `useRef`

# `커스텀 hooks`
