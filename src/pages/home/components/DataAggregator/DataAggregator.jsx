import { CodeEditor } from "../CodeEditor";
import styles from "./DataAggregator.module.css";

const DataAggregator = () => {
  return (
    <section className={styles.dataAggregator}>
      <div className={styles.imageProcessorParent}>
        <div className={styles.imageProcessor}>
          <div className={styles.wrapperGroup59}>
            <img
              className={styles.wrapperGroup59Child}
              loading="lazy"
              alt=""
              src="/group-59.svg"
            />
          </div>
          <div className={styles.titleParent}>
            <h1 className={styles.title}>Transparency</h1>
            <div className={styles.description}>
              Crypto ipsum bitcoin ethereum dogecoin litecoin. Klaytn golem
              terraUSD kava amp maker velas. Velas serum harmony XRP algorand
              aave klaytn.
            </div>
          </div>
        </div>
        <CodeEditor/>
        {/* <div className={styles.main}>
          <div className={styles.files}>
            <div className={styles.fileWrapper}>
              <div className={styles.file}>
                <div className={styles.icon}>
                  <img className={styles.vectorIcon} alt="" />
                  <div className={styles.vectorParent}>
                    <img
                      className={styles.vectorIcon1}
                      alt=""
                      src="/vector-5.svg"
                    />
                    <b className={styles.js}>JS</b>
                  </div>
                </div>
                <div className={styles.premiumtokenWrapper}>
                  <div className={styles.premiumtoken}>PremiumToken</div>
                </div>
              </div>
            </div>
            <div className={styles.iconWrapper}>
              <div className={styles.icon1}>
                <img className={styles.vectorIcon2} alt="" />
                <div className={styles.vectorGroup}>
                  <img
                    className={styles.vectorIcon3}
                    alt=""
                    src="/vector-5.svg"
                  />
                  <b className={styles.md}>MD</b>
                </div>
              </div>
            </div>
            <div className={styles.readmemdWrapper}>
              <div className={styles.readmemd}>README.md</div>
            </div>
          </div>
          <div className={styles.mainInner}>
            <div className={styles.lineNumbersParent}>
              <b className={styles.lineNumbers}>
                <p className={styles.p}>1</p>
                <p className={styles.p1}>2</p>
                <p className={styles.p2}>3</p>
                <p className={styles.p3}>4</p>
                <p className={styles.p4}>5</p>
                <p className={styles.p5}>6</p>
                <p className={styles.p6}>7</p>
                <p className={styles.p7}>8</p>
                <p className={styles.p8}>9</p>
                <p className={styles.p9}>10</p>
                <p className={styles.p10}>11</p>
                <p className={styles.p11}>12</p>
                <p className={styles.p12}>13</p>
                <p className={styles.p13}>14</p>
                <p className={styles.p14}>15</p>
                <p className={styles.p15}>16</p>
                <p className={styles.p16}>17</p>
                <p className={styles.p17}>18</p>
                <p className={styles.p18}>19</p>
                <p className={styles.p19}>20</p>
                <p className={styles.p20}>21</p>
              </b>
              <div className={styles.codeSnippet}>
                <p className={styles.imports}>// Imports</p>
                <p className={styles.importMongooseSchemaFr}>
                  <span className={styles.import}>import</span>
                  <span className={styles.span}>{` `}</span>
                  <span className={styles.mongoose}>mongoose</span>
                  <span className={styles.span1}>{`, { `}</span>
                  <span className={styles.schema}>Schema</span>
                  <span className={styles.span2}>{` } `}</span>
                  <span className={styles.from}>from</span>
                  <span> 'mongoose'</span>
                </p>
                <p className={styles.blankLine}>&nbsp;</p>
                <p className={styles.collectionName}>// Collection name</p>
                <p className={styles.exportConstCollectionPro}>
                  <span className={styles.exportConst}>export const</span>
                  <span className={styles.span3}>{` `}</span>
                  <span className={styles.collection}>collection</span>
                  <span> = 'Product'|</span>
                </p>
                <p className={styles.blankLine1}>&nbsp;</p>
                <p className={styles.schema1}>// Schema</p>
                <p className={styles.constSchemaNewSchema}>
                  <span className={styles.const}>const</span>
                  <span className={styles.span4}>{` `}</span>
                  <span className={styles.schema2}>schema</span>
                  <span className={styles.span5}>{` = `}</span>
                  <span className={styles.new}>new</span>
                  <span className={styles.schema3}>{` Schema({`}</span>
                </p>
                <p className={styles.name}>
                  <span className={styles.span6}>{`  `}</span>
                  <span className={styles.name1}>name</span>
                  <span className={styles.span7}>{`: {`}</span>
                </p>
                <p className={styles.typeString}>
                  <span className={styles.span8}>{`    `}</span>
                  <span className={styles.type}>type</span>
                  <span className={styles.string}>: String,</span>
                </p>
                <p className={styles.requiredTrue}>
                  <span className={styles.span9}>{`    `}</span>
                  <span className={styles.required}>required</span>
                  <span className={styles.true}>: true</span>
                </p>
                <p className={styles.p21}>{`  },`}</p>
                <p className={styles.blankLine2}>&nbsp;</p>
                <p className={styles.description1}>
                  <span className={styles.span10}>{`  `}</span>
                  <span className={styles.description2}>description</span>
                  <span className={styles.span11}>{`: {`}</span>
                </p>
                <p className={styles.typeString1}>
                  <span className={styles.span12}>{`    `}</span>
                  <span className={styles.type1}>type</span>
                  <span>: String</span>
                </p>
                <p className={styles.p22}>{`  }`}</p>
                <p className={styles.timestampsTrue}>
                  <span>{`}, {`}</span>
                  <span className={styles.timestamps}>timestamps</span>
                  <span className={styles.true1}>{`: true})`}</span>
                </p>
                <p className={styles.blankLine3}>&nbsp;</p>
                <p className={styles.model}>// Model</p>
                <p className={styles.exportDefaultMongoosemodel}>
                  <span className={styles.exportDefault}>export default</span>
                  <span> mongoose.model(</span>
                  <span className={styles.collection1}>collection</span>
                  <span className={styles.span13}>{`, `}</span>
                  <span className={styles.schema4}>schema</span>
                  <span className={styles.span14}>{`, `}</span>
                  <span className={styles.collection2}>collection</span>
                  <span className={styles.span15}>)</span>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.statusBar}>
            <div className={styles.lf}>LF</div>
            <div className={styles.line536}>Line 5:36</div>
            <div className={styles.utf8}>UTF8</div>
            <div className={styles.spaces}>2 spaces</div>
            <div className={styles.frameParent}>
              <div className={styles.iconsWrapper}>
                <img className={styles.icons} alt="" src="/icons.svg" />
              </div>
              <b className={styles.main1}>main</b>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default DataAggregator;
