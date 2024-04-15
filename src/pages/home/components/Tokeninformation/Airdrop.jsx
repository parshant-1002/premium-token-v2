import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import { useDispatch } from 'react-redux';
import { useWallet } from "@solana/wallet-adapter-react";
import Info from './Info'
import { ICONS } from '../../../../assets';
import SafeHTML from '../../../../shared/components/SanitizeHtml';
import { Each } from '../../../../shared/components/Each';
import { addBaseUrlToUrls, handleSignMessage, removeEmptyKeys } from '../../../../shared/utilities';
import { AIRDROP_SOCIAL_FIELDS_FORM_SCHEMA } from './config';
import CustomForm from '../../../../shared/components/form/CustomForm/CustomForm';
import { STATUS } from '../../../../shared/constants';
import { createAirDrop } from '../../../../store/actions/contentManagement';
import { hasAtLeastNumberOfValues } from './helpers/utils';
import "./airdrop.scss";
import { REQUIRED_NUMBER_OF_AIDROP_FIELDS } from './helpers/constants';

const initialClickedState = {
  flag: false,
  data: null,
  reset: null
};

const Airdrop = ({ content = {} }) => {
  const { description, section1, section2, title, buttonText } = content
  const AIRDROP_SCHEMA = AIRDROP_SOCIAL_FIELDS_FORM_SCHEMA(section1)
  const dispatch = useDispatch()
  const { connect, wallet, publicKey, signMessage } = useWallet();
  const { setVisible } = useWalletModal();
  const [clickedConnect, setClickedConnect] = useState(initialClickedState);

  useEffect( () => {
    if(clickedConnect?.flag && publicKey){
     handleCallSignMessage();
    }
 },[clickedConnect, publicKey])

const handleCallSignMessage = async () => {
  try {
    const response = await handleSignMessage(signMessage)
    if (response){
      const payload = removeEmptyKeys(clickedConnect?.data)
      payload.signature = response
      dispatch(
        createAirDrop(payload, (message, status) => {
          if (status === STATUS.SUCCESS) {
            toast.success(message);
            clickedConnect?.reset();
          }
        })
      );
    }
  } catch (error) {
  } finally {
    setClickedConnect(initialClickedState);
  }
};

  const onSubmit = async(data, event, reset) => {
    try {
      if (!hasAtLeastNumberOfValues(data, REQUIRED_NUMBER_OF_AIDROP_FIELDS)) {
        toast.error("Please complete at least two fields to qualify for the airdrop whitelist.");
        return
      }
      if (!wallet) {
        setVisible(true);
      } else {
        await connect();
        setClickedConnect({
          flag: true,
          data: data,
          reset: reset
        });
      }
    } catch (error) {
      console.error('Error connecting to wallet:', error);
    }
  
 
  };

  return (
    <section className="position-relative airdrop_sec" >
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