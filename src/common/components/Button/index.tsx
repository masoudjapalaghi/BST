import { ButtonHTMLAttributes, FC } from 'react';
// import Styles
import s from './button.module.css';

type Width = 'small' | 'full';
type Variant = 'outline' | 'primary';

interface PropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  width?: Width;
  variant?: Variant;
  children?: React.ReactNode | string;
}

const Button: FC<PropsType> = ({
  label,
  width = 'small',
  variant = 'primary',
  children,
  ...rest
}: PropsType) => {
  const ManageVarient = (varient: Variant): string => {
    return {
      primary: `${s.basecss_btn} ${s.primary}`,
      outline: `${s.basecss_btn} ${s.outline}`,
    }[varient];
  };
  const ManageSize = (width: Width): string => {
    return {
      small: ` ${s.smallWidth}`,
      full: ` ${s.fullWidth}`,
    }[width];
  };

  return (
    <button
      className={`${ManageVarient(variant)} ${ManageSize(width)}`}
      {...rest}
    >
      {children}
    </button>
  );
};
export default Button;
