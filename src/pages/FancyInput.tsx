import * as React from 'react';

interface IProps {
  className?: string;
}

export interface IFancyRef {
  focus: () => void;
}

const FancyInput: React.FC<IProps> = (props, ref: React.Ref<IFancyRef>) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current!.focus();
    }
  }));

  return <input ref={inputRef} />;
};

export default React.forwardRef(FancyInput);
