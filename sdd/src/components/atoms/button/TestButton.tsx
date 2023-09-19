interface IButtonProps {
  /**
   * 버튼 배경색
   */
  backgroundColor?: string;
  /**
   * 버튼 내용
   */
  label: string;
  /**
   * 클릭함수
   */
  onClick?: () => void;
}

export const TestButton = ({
  backgroundColor,
  label,
  ...props
}: IButtonProps) => {
  const handleButtonClick = () => {
    alert("click");
  };
  return (
    <button type="button" {...props}>
      {label}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  );
};
