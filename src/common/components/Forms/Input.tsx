import { FC, HtmlHTMLAttributes, InputHTMLAttributes } from 'react';
// import Styles
import s from './form.module.css';

type Width = 'small' | 'full';
type Variant = 'outline' | 'primary';

interface PropsType extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  width?: Width;
  variant?: Variant;
}

const Input: FC<PropsType> = ({
  label,
  width = 'small',
  variant = 'primary',
  ...rest
}: PropsType) => {
  const ManageVarient = (varient: Variant): string => {
    return {
      primary: `${s.basecss_input} ${s.primary}`,
      outline: `${s.basecss_input} ${s.outline}`,
    }[varient];
  };
  const ManageSize = (width: Width): string => {
    return {
      small: ` ${s.smallWidth}`,
      full: ` ${s.fullWidth}`,
    }[width];
  };

  return (
    <div className={`flex flex-col gap-2 ${ManageSize(width)}`}>
      <label className="text-xs text-white ">{label} :</label>
      <input {...rest} className={`${ManageVarient(variant)}`} />
    </div>
  );
};
export default Input;
