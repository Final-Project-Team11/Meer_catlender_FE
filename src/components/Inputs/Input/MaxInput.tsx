import { StColumnBlock, StColumnInput, StInputLabel } from './style';
import { InputProps } from './interfaces';

const MaxInput = ({
  types,
  children,
  Bgcolor,
  type,
  placeholder,
  inputId,
  value,
  onChange,
  name,
  style,
}: InputProps) => {
  return (
    <StColumnBlock types={types} style={style}>
      <StInputLabel types={types} htmlFor={inputId}>
        {children}
      </StInputLabel>
      <StColumnInput
        id={inputId}
        types={types}
        type={type}
        Bgcolor={Bgcolor}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
      />
    </StColumnBlock>
  );
};

export default MaxInput;
