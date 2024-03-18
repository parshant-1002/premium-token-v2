import styles from "./ConnectionMaker.module.css";

const ConnectionMaker = () => {
  return (
    <section className={styles.connectionMaker}>
      <div className={styles.auditSection}>
        <img className={styles.imgIcon} alt="" src="/img-1.svg" />
        <div className={styles.textContent}>
          <div className={styles.content}>
            <div className={styles.text}>
              <h1 className={styles.title}>External audit</h1>
              <div className={styles.description}>
                Crypto ipsum bitcoin ethereum dogecoin litecoin. Polkadot flow
                solana revain XRP compound. TRON algorand zcash amp digibyte
                hedera terra PancakeSwap celsius. TerraUSD hive horizen.
              </div>
            </div>
            <button className={styles.input}>
              <img
                className={styles.heroiconsOutlinelink}
                alt=""
                src="/heroiconsoutlinelink.svg"
              />
              <a
                className={styles.httpsmoralisiosolanaSmar}
                href="https://moralis.io/solana-smart-contract-examples-for-developers/"
                target="_blank"
              >
                https://moralis.io/solana-smart-contract-examples-for-developers/
              </a>
            </button>
          </div>
          <button className={styles.button}>
            <img
              className={styles.heroiconsOutlinedocumentArr}
              alt=""
              src="/heroiconsoutlinedocumentarrowdown.svg"
            />
            <b className={styles.downloadDocument}>Download document</b>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConnectionMaker;
