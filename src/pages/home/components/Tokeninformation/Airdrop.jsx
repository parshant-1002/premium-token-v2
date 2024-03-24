import React from 'react'
import Info from './Info'
import "./airdrop.scss";
import { ICONS } from '../../../../assets';
import SafeHTML from '../../../../shared/components/SanitizeHtml';
import { Each } from '../../../../shared/components/Each';
import { addBaseUrlToUrls } from '../../../../shared/utilities';
import { AIRDROP_SOCIAL_FIELDS_FORM_SCHEMA } from './config';
import CustomForm from '../../../../shared/components/form/CustomForm/CustomForm';
import { STATUS } from '../../../../shared/constants';
import { createAirDrop } from '../../../../store/actions/contentManagement';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { hasAtLeastFourValues } from './helpers/utils';

const Airdrop = ({ content = {} }) => {
  const { description, section1, section2, title } = content
  const AIRDROP_SCHEMA = AIRDROP_SOCIAL_FIELDS_FORM_SCHEMA(section1)
  const dispatch = useDispatch()
  const onSubmit = (data) => {
    if (!hasAtLeastFourValues(data)) {
      toast.error("Please complete at least four fields to qualify for the airdrop whitelist.");
      return
    }
    dispatch(
      createAirDrop(data, (message, status) => {
        if (status === STATUS.SUCCESS) {
          toast.success(message);
        }
      })
    );
  };
  return (
    <section className="position-relative airdrop_sec">
      <div className="container">
        <div className="airdrop-main">

          <div className="heading_title text-center">
            <h2 className="h2"><SafeHTML html={title} /></h2>
            <p><SafeHTML html={description} /></p>
          </div>

          <div className="whitelisted-row">
            <div className="white-listed-form ">
              <CustomForm
                formData={AIRDROP_SCHEMA}
                onSubmit={onSubmit}
                defaultValues={{}}
                submitText="Update Contract Details Content"
              />
            </div>
            {/* <form className="white-listed-form">
                <h3 className="h4">
                  Get whitelisted for AirDrop
                </h3>

                <div className="main-form">

                  <div className="input-col">
                    <img className="" alt="" src="/heroiconssolid.svg" />

                    <input
                      className=""
                      placeholder="Enter your PremiumToken wallet address"
                      type="text"
                    />

                  </div>

                  <div className="input-col">
                    <img
                      className=""
                      alt=""
                      src="/social-icons.svg"
                    />
                    <input
                      className=""
                      placeholder="Enter URL to your Twitter profile"
                      type="text"
                    />
                  </div>
                  <div className="input-col">
                    <img
                      className=""
                      alt=""
                      src="/social-icons-2.svg"
                    />
                    <input
                      className=""
                      placeholder="Enter your Telegram username"
                      type="text"
                    />
                  </div>
                  <div className="input-col">
                    <img
                      className=""
                      alt=""
                      src="/social-icons-5.svg"
                    />
                    <input
                      className=""
                      placeholder="Enter URL to your Instagram profile"
                      type="text"
                    />
                  </div>
                  <div className="input-col">
                    <img
                      className=""
                      alt=""
                      src="/social-icons-6.svg"
                    />
                    <input
                      className=""
                      placeholder="  Enter URL to your Facebook profile"
                      type="text"
                    />

                  </div>
                  <div className="input-col">
                    <img
                      className=""
                      alt=""
                      src="/social-icons-1.svg"
                    />
                    <input
                      className=""
                      placeholder="Enter your username on Discord"
                      type="text"
                    />

        <div className="airdrop-main">
 
          <div className="whitelisted-row">
            <form className="white-listed-form">
              <h3 className="h4">
                Get whitelisted for AirDrop
              </h3>
              <div className="main-form">
                <div className="input-col">
                  <img className="" alt="" src="/heroiconssolid.svg" />
                  <input
                    className=""
                    placeholder="Enter your PremiumToken wallet address"
                    type="text"
                  />
                </div>

                <div className="input-col">
                  <img
                    className=""
                    alt=""
                    src="/social-icons.svg"
                  />
                  <input
                    className=""
                    placeholder="Enter URL to your Twitter profile"
                    type="text"
                  />
                </div>
                <div className="input-col">
                  <img
                    className=""
                    alt=""
                    src="/social-icons-2.svg"
                  />
                  <input
                    className=""
                    placeholder="Enter your Telegram username"
                    type="text"
                  />
                </div>
                <div className="input-col">
                  <img
                    className=""
                    alt=""
                    src="/social-icons-5.svg"
                  />
                  <input
                    className=""
                    placeholder="Enter URL to your Instagram profile"
                    type="text"
                  />
                </div>
                <div className="input-col">
                  <img
                    className=""
                    alt=""
                    src="/social-icons-6.svg"
                  />
                  <input
                    className=""
                    placeholder="  Enter URL to your Facebook profile"
                    type="text"
                  />
                </div>
                <div className="input-col">
                  <img
                    className=""
                    alt=""
                    src="/social-icons-1.svg"
                  />
                  <input
                    className=""
                    placeholder="Enter your username on Discord"
                    type="text"
                  />
                </div>
                <div className="input-col">
                  <img
                    className=""
                    alt=""
                    src="/social-icons-8.svg"
                  />
                  <input
                    className=""
                    placeholder=" Enter URL to your TikTok profile"
                    type="text"
                  />
                </div>
              </form> */}
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