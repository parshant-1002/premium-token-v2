import { useNavigate } from "react-router-dom";
import { ICONS } from "../../../../assets";
import { RenderIconWithHover } from "../../../../shared/components/RenderIconWithHover";
import SafeHTML from "../../../../shared/components/SanitizeHtml";
import { addBaseUrlToUrls } from "../../../../shared/utilities";
import { CodeEditor } from "../CodeEditor";
import "./DataAggregator.scss";

const DataAggregator = ({content = {}}) => {
  const navigate = useNavigate()
  const { transpancy, githubViewButtonUrl, githubViewButtonText, githubTitle, githubLogo, contractImageUrl } = content
  console.log(content,"dataAggregator")
  return (
    <section className="dataAggregator position-relative">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5 col-lg-4">
            <div className="git_hub d-flex flex-column align-items-center gap-32">
              <RenderIconWithHover iconUrl={addBaseUrlToUrls(githubLogo)}/>
              <button type="button" class="btn btn-md btn-secondary text-capitalize" onClick={()=> navigate(addBaseUrlToUrls(githubViewButtonUrl))}><SafeHTML html={githubViewButtonText}/></button>
            </div>
          </div>

          <div className="col-md-7 col-lg-8">
            <div className="d-flex flex-column gap-54">
              <div className="heading_title text-center">
                <h2 className="h2 common_title">
                  <SafeHTML html={transpancy?.title}/>
                </h2>
                <div className="description">
                  <p className="mb-0">
                    <SafeHTML html={transpancy?.description} />
                  </p>
                </div>

              </div>
              <CodeEditor />
            </div>
          </div>
        </div>


      </div>
      <div className="git_hub_bg">
        <img width={831} height={1203 }
                        className="img-fluid"
                        alt="Git-hub-banner"
                        src={ICONS.GitHUbBG}
                />
      </div>
    </section>
  );
};

export default DataAggregator;
