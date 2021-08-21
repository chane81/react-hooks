import React, {ForwardRefRenderFunction} from 'react';

interface IProps {
  className?: string;
}

export interface IFancyRef {
  focus: () => void;
}

const FancyInput: ForwardRefRenderFunction<IFancyRef, IProps> = (
	props,
	ref
) => {
	const inputRef = React.useRef<HTMLInputElement>(null);

	React.useImperativeHandle(ref, () => ({
		focus: () => {
			inputRef.current!.focus();
		}
	}));

	return <input ref={inputRef} />;
};

export default React.forwardRef(FancyInput);
