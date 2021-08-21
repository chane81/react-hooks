import * as React from 'react';
import FancyInput, { IFancyRef } from './FancyInput';

const UseRefTypescriptExample = () => {
  const myTestRef = React.useRef<IFancyRef>(null);

  const handleClick = () => {
    myTestRef.current!.focus();
  };

  return (
    <div>
      <h1>useRef - Typescript</h1>
      <button onClick={handleClick}>uesRef Test</button>
      <FancyInput ref={myTestRef} />
    </div>
  );
};

export default UseRefTypescriptExample;
