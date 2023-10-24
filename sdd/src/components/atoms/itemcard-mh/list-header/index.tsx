import style from "@atoms/itemcard-mh/itemcard.module.scss";

interface IListHeader {
  title: string;
  buttonTitle?: string;
}

const ListHeader = ({ title, buttonTitle = "더보기" }: IListHeader) => {
  const handleOnClickShowMore = () => {};
  return (
    <div className={style["itemCard-header"]}>
      <h3>{title}</h3>
      <button className={style["show-more"]} onClick={handleOnClickShowMore}>
        {buttonTitle}
      </button>
    </div>
  );
};

export default ListHeader;
