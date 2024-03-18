import Team from "./Team";
import styles from "./Partners.module.css";

const Partners = () => {
  return (
    <section className={styles.shapeTransformer}>
      <div className={styles.pathCombiner}>
        <h1 className={styles.title}>Partners</h1>
        <div className={styles.wrapperArrows}>
          <img className={styles.arrowsIcon} alt="" src="/arrows.svg" />
        </div>
      </div>
      <div className={styles.cards}>
        <Team maskGroup="/mask-group-5@2x.png" image39="/image-39@2x.png" />
        <div className={styles.team}>
          <div className={styles.iconAssemblerXParent}>
            <div className={styles.iconAssemblerX}>
              <div className={styles.wrapperMaskGroup}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="/mask-group-6@2x.png"
                />
              </div>
              <img
                className={styles.pinpng2Icon}
                alt=""
                src="/pinpng-2-1@2x.png"
              />
            </div>
            <button className={styles.component1}>
              <div className={styles.component1Child} />
              <img
                className={styles.image39Icon}
                alt=""
                src="/image-39@2x.png"
              />
            </button>
          </div>
          <div className={styles.mikeStonebergParent}>
            <div className={styles.mikeStoneberg}>Mike Stoneberg</div>
            <div className={styles.ceoProduct}>{`CEO & Product Manager`}</div>
          </div>
        </div>
        <Team
          maskGroup="/mask-group-7@2x.png"
          image39="/image-40@2x.png"
          propWidth="37px"
        />
        <Team
          maskGroup="/mask-group-7@2x.png"
          image39="/image-45@2x.png"
          propWidth="49px"
        />
        <Team
          maskGroup="/mask-group-7@2x.png"
          image39="/logo@2x.png"
          propWidth="102.6px"
        />
        <div className={styles.team1}>
          <div className={styles.wrapperMaskGroup1}>
            <img
              className={styles.maskGroupIcon1}
              alt=""
              src="/mask-group-10@2x.png"
            />
          </div>
          <div className={styles.pinpng2Wrapper}>
            <img
              className={styles.pinpng2Icon1}
              alt=""
              src="/pinpng-2@2x.png"
            />
          </div>
          <div className={styles.component1Parent}>
            <div className={styles.component11}>
              <div className={styles.component1Item} />
              <img
                className={styles.image45Icon}
                alt=""
                src="/image-45-1@2x.png"
              />
            </div>
            <div className={styles.mikeStonebergGroup}>
              <div className={styles.mikeStoneberg1}>Mike Stoneberg</div>
              <div
                className={styles.ceoProduct1}
              >{`CEO & Product Manager`}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
