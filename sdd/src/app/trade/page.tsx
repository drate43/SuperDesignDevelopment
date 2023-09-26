import styles from "./trade.module.scss";
const TradePage = () => {
  return (
    <main className={styles.tradeMain}>
      {/* 검색 인풋 필터 */}
      <div>검색 인풋 필터</div>
      <br />
      {/* 배너 영역 */}
      <div>배너 영역</div>
      <br />
      {/* 1차 카테고리 필터 */}
      <div>1차 카테고리 필터</div>
      <br />
      {/* 2차 카테고리 필터 */}
      <div>2차 카테고리 필터</div>
      <br />
      {/* 필터 */}
      <div>필터</div>
      <br />
      {/* 상품 리스트 */}
      <div>상품 리스트</div>
      <br />
    </main>
  );
};

export default TradePage;
