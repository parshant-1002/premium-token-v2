import { useNavigate } from "react-router-dom";
import { ICONS } from "../../../../assets";
import SafeHTML from "../../../../shared/components/SanitizeHtml";
import { addBaseUrlToUrls } from "../../../../shared/utilities";
import { CodeEditor } from "../CodeEditor";
import "./DataAggregator.scss";

const DataAggregator = ({content = {}}) => {
  const { transpancy, githubViewButtonUrl, githubViewButtonText, githubTitle, githubLogo, contractImageUrl } = content
  return (
    <section className="dataAggregator position-relative">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 order-lg-1 order-2">
            <div className="d-flex justify-content-center justify-content-lg-start">
              <div className="github_content text-center">
                <em>
                  <img
                  loading="lazy"
                  width={139}
                  height={181}
                  src={addBaseUrlToUrls(githubLogo)}
                  alt="GitHub"
                  className="w-100"
                />
              </em>
                <button type="button" className="btn btn-md btn-secondary" onClick={() => window.open(githubViewButtonUrl, '_blank')}>
                <span className="transform-none">
                  <svg className="d-block d-lg-none" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.75537C10.6868 2.75537 9.38642 3.01403 8.17317 3.51658C6.95991 4.01912 5.85752 4.75572 4.92893 5.6843C3.05357 7.55967 2 10.1032 2 12.7554C2 17.1754 4.87 20.9254 8.84 22.2554C9.34 22.3354 9.5 22.0254 9.5 21.7554V20.0654C6.73 20.6654 6.14 18.7254 6.14 18.7254C5.68 17.5654 5.03 17.2554 5.03 17.2554C4.12 16.6354 5.1 16.6554 5.1 16.6554C6.1 16.7254 6.63 17.6854 6.63 17.6854C7.5 19.2054 8.97 18.7554 9.54 18.5154C9.63 17.8654 9.89 17.4254 10.17 17.1754C7.95 16.9254 5.62 16.0654 5.62 12.2554C5.62 11.1454 6 10.2554 6.65 9.54537C6.55 9.29537 6.2 8.25537 6.75 6.90537C6.75 6.90537 7.59 6.63537 9.5 7.92537C10.29 7.70537 11.15 7.59537 12 7.59537C12.85 7.59537 13.71 7.70537 14.5 7.92537C16.41 6.63537 17.25 6.90537 17.25 6.90537C17.8 8.25537 17.45 9.29537 17.35 9.54537C18 10.2554 18.38 11.1454 18.38 12.2554C18.38 16.0754 16.04 16.9154 13.81 17.1654C14.17 17.4754 14.5 18.0854 14.5 19.0154V21.7554C14.5 22.0254 14.66 22.3454 15.17 22.2554C19.14 20.9154 22 17.1754 22 12.7554C22 11.4422 21.7413 10.1418 21.2388 8.92854C20.7362 7.71528 19.9997 6.61289 19.0711 5.6843C18.1425 4.75572 17.0401 4.01912 15.8268 3.51658C14.6136 3.01403 13.3132 2.75537 12 2.75537Z" fill="white" />
                  </svg>
                  <SafeHTML html={githubViewButtonText}/>
                 </span>
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-8 order-lg-2 order-1">

            <div className="heading_title text-left text-md-center mb-0">
              <h2 className="h2"><SafeHTML html={transpancy?.title}/></h2>
              <SafeHTML html={transpancy?.description} />
            </div>

            <CodeEditor />

          </div>
        </div>
      </div>

      <div className="git_hub_bg">
        <img width={831} height={1203}
          className="img-fluid"
          alt="Git-hub-banner"
          src={ICONS.GitHUbBG}
        />
      </div>
    </section>
  );
};

export default DataAggregator;
