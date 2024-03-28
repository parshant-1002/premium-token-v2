import React from 'react'
import Info from './Info'
import { ICONS } from '../../../../assets';
import SafeHTML from '../../../../shared/components/SanitizeHtml';
import { Each } from '../../../../shared/components/Each';
import { addBaseUrlToUrls, removeEmptyKeys } from '../../../../shared/utilities';
import { AIRDROP_SOCIAL_FIELDS_FORM_SCHEMA } from './config';
import CustomForm from '../../../../shared/components/form/CustomForm/CustomForm';
import { STATUS } from '../../../../shared/constants';
import { createAirDrop } from '../../../../store/actions/contentManagement';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { hasAtLeastFourValues } from './helpers/utils';
import "./airdrop.scss";

const Airdrop = ({ content = {} }) => {
  const { description, section1, section2, title, buttonText } = content
  const AIRDROP_SCHEMA = AIRDROP_SOCIAL_FIELDS_FORM_SCHEMA(section1)
  const dispatch = useDispatch()
  const onSubmit = (data) => {
    if (!hasAtLeastFourValues(data)) {
      toast.error("Please complete at least four fields to qualify for the airdrop whitelist.");
      return
    }
    const payload = removeEmptyKeys(data)
    dispatch(
      createAirDrop(payload, (message, status) => {
        if (status === STATUS.SUCCESS) {
          toast.success(message);
        }
      })
    );
  };

  return (
    <section className="position-relative airdrop_sec">
      <div className="container">
        <div className="airdrop-main" id='airdrop_section'>

          <div className="heading_title text-center">
            <h2 className="h2"><SafeHTML html={title} /></h2>
            <p><SafeHTML html={description} /></p>
          </div>

          <div className="whitelisted-row">
            <div className="white-listed-form ">
              <h4><SafeHTML html={section1?.title}/></h4>
              <CustomForm
                formData={AIRDROP_SCHEMA}
                onSubmit={onSubmit}
                defaultValues={{}}
                submitText= {<SafeHTML html={section1?.buttonText}/>}
              />
            </div>
            <div className="airdrop-info">
              <Each of={section2} render={(item, index) => (
                <Info
                  image={addBaseUrlToUrls(item.imageUrl)}
                  title={item.title}
                />
              )} />
            </div>
          </div>
        </div>

      </div>
      <div className="air_drop_bg">
        <img width={465} height={886} className="img-fluid d-none d-lg-block" alt="Bg" src={ICONS.AirDropBg} />
        <img width={375} height={895} className="img-fluid d-lg-none" alt="Bg" src={ICONS.AuditMobileBG} />
      </div>
    </section>
  )
}

export default Airdrop