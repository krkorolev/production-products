import * as React from "react";
import { classNames } from "helpers/classNames/classNames";
import cls from "./Input.module.scss";

type HTMLInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: "text";
  placeholder?: string;
  autofocus?: boolean;
}

export const Input: React.FC<InputProps> = React.memo((props) => {
  const {
    className,
    value,
    type,
    autofocus,
    placeholder,
    onChange,
    ...otherProps
  } = props;
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };
  const ref = React.useRef<HTMLInputElement>(null);
  const [isFocus, setIsFocus] = React.useState(false);
  const [caretPosition, setCaretPosition] = React.useState(0);
  const onFocus = () => {
    setIsFocus(true);
  };
  const onBlur = () => {
    setIsFocus(false);
  };
  const onSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0);
  };

  React.useEffect(() => {
    if (autofocus) {
      setIsFocus(true);
      ref.current?.focus()
    }
  }, [autofocus]);

  return (
    <div
      {...otherProps}
      className={classNames(cls.InputWrapper, {}, [className])}
    >
      <div className={cls.placeholder}>{placeholder}</div>
      <div className={cls.caretWrapper}>
        <input
          ref={ref}
          className={cls.input}
          type={type}
          value={value}
          onChange={onChangeHandler}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          autoFocus={autofocus}
        />
        {isFocus && (
          <span
            style={{ left: `${caretPosition * 10}px` }}
            className={cls.caret}
          ></span>
        )}
      </div>
    </div>
  );
});
