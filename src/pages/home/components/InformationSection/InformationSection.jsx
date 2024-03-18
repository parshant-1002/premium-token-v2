import { InformationCard } from "../InformationCard";
import styles from "./InformationSection.module.css";

const InformationSection = () => {
  return (
    <section className={styles.homeInner}>
      <div className={styles.frameParent}>
        <div className={styles.titleWrapper}>
          <div className={styles.title}>How to win a 350,000€ prize</div>
        </div>
        <div className={styles.frameGroup}>
          <InformationCard
            illustration="/illustration@2x.png"
            title="Buy premiumtoken"
            prop="1"
          />
          <InformationCard
            illustration="/illustration-1.svg"
            title={`Hold & get a chance to win 350k $ prize`}
            prop="2"
            propPadding="var(--padding-23xl) var(--padding-mini) 46.30000000000018px"
            propHeight="unset"
            propFlex="1"
            propWidth="179.8px"
            propOverflow="unset"
          />
          <InformationCard
            illustration="/illustration-2@2x.png"
            title="At each 10m market cap winners is drawn automatic"
            prop="3"
            propPadding="var(--padding-23xl) var(--padding-mini) 46.30000000000018px"
            propHeight="unset"
            propFlex="1"
            propWidth="173.1px"
            propOverflow="hidden"
          />
          <div className={styles.cardParent}>
            <div className={styles.card}>
              <div className={styles.illustrationWrapper}>
                <div className={styles.illustration}>
                  <img className={styles.vectorIcon} alt="" />
                  <div className={styles.illustrationInner}>
                    <img
                      className={styles.frameChild}
                      loading="lazy"
                      alt=""
                      src="/group-9567@2x.png"
                    />
                  </div>
                  <img className={styles.vectorIcon1} alt="" />
                </div>
              </div>
              <div
                className={styles.title1}
              >{`The longer one hold & the more tokens one have, the bigger chance to win`}</div>
            </div>
            <div className={styles.wrapperRectangle16Parent}>
              <div className={styles.wrapperRectangle16}>
                <img
                  className={styles.wrapperRectangle16Child}
                  alt=""
                  src="/rectangle-16-3.svg"
                />
              </div>
              <div className={styles.div}>4</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformationSection;
