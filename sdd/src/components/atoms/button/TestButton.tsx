import styles from './TestButtobn.module.scss'

type Ttype = 'text' | 'link'
type TSize = 'mini' | 'small' | 'medium'

interface IButtonProps {
  type?: Ttype
  // 버튼 내용
  label?: string;
  // 버튼 배경색
  color?: string;
  size?: TSize
  outline?: string
  // 클릭함수
  onClick?: () => void;
}

export const TestButton = ({
  type = 'text',
  color = 'default',
  size = 'medium',
  label,
  outline,
  onClick,
  ...props
}: IButtonProps) => {
  const btnType = type ? styles[type] : ''
  const btnColor = color ? styles[color] : ''
  const btnSize = size ? styles[size] : ''
  const isOutline = outline ? styles[outline] : ''

  return (
    <>
      <button
        type="button"
        className={`${styles.btn} ${btnType} ${btnColor} ${btnSize} ${isOutline}`} {...props}
        onClick={onClick}
      >
        {label}
      </button>
    </>
  );
};
