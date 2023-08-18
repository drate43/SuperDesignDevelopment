import styles from './TestButtobn.module.scss'

type Ttype = 'default' | 'primary' | 'black' | 'white' | 'text' | 'link'

interface IButtonProps {
  type?: Ttype
  // 버튼 내용
  label?: string;
  // 버튼 배경색
  bgColor?: string;
  // 클릭함수
  onClick?: () => void;
}

export const TestButton = ({
  type = 'default',
  label,
  bgColor,
  ...props
}: IButtonProps) => {



  const handleButtonClick = () => {
    alert("click");
  };
  return (
    <>
      <button type="button" className={`btn${type} ${styles.btn}`} {...props} style={{backgroundColor: bgColor}}>
        {label}
      </button>
    </>
  );
};
