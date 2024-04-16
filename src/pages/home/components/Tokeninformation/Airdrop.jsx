import React, { useEffect, useRef, useState } from 'react'
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
// import { STRINGS } from '../ConnectButton/helpers/constants';

// const initialClickedState = {
//   flag: false,
//   data: null,
//   reset: null
// };

const Airdrop = ({ content = {} }) => {
  const { description, section1, section2, title, buttonText } = content
  const AIRDROP_SCHEMA = AIRDROP_SOCIAL_FIELDS_FORM_SCHEMA(section1)
  const dispatch = useDispatch()
  // const { connect, wallet, publicKey, signMessage } = useWallet();
  // const { setVisible, visible } = useWalletModal();
  // const [clickedConnect, setClickedConnect] = useState(initialClickedState);
  // const [walletConnectCalled, setWalletConnectCalled] = useState(initialClickedState);
  // const isSigningMessage = useRef(false);

  // useEffect(() => {
  //   if (clickedConnect?.flag && publicKey && !isSigningMessage.current) {
  //     handleCallSignMessage();
  //   }
  // }, [clickedConnect, publicKey])

  const handleCallSignMessage = async (data) => {
    // isSigningMessage.current = true;
    try {
      // const response = await handleSignMessage(signMessage)
      // if (response) {
        // const payload = removeEmptyKeys(clickedConnect?.data)
        const payload = removeEmptyKeys(data)
        // payload.signature = response
        dispatch(
          createAirDrop(payload, (message, status) => {
            if (status === STATUS.SUCCESS) {
              toast.success(message);
              clickedConnect?.reset();
            }
            else {
              toast.error(message);
            }
          })
        );
      // }
    } catch (error) {
      toast.error(error);
    } finally {
      // isSigningMessage.current = false;
      // setClickedConnect(initialClickedState);
    }
  };
  
  // useEffect(() => {
  //   if (!visible) {
  //     setWalletConnectCalled(false);
  //     setClickedConnect(false);
  //   }
  // }, [visible])

  const onSubmit = (data, event, reset) => {
    try {
      if (!hasAtLeastNumberOfValues(data, REQUIRED_NUMBER_OF_AIDROP_FIELDS)) {
        toast.error("Please complete at least two social media fields to qualify for the airdrop whitelist.");
        return
      }
      handleCallSignMessage(data)
      // setWalletConnectCalled({ flag: true, data, reset })
      // if (!wallet) {
      //   setVisible(true);
      // }
    } catch (error) {
      console.error('Error connecting to wallet:', error);
    }


  };

  // const handleConnectWallet = async (data, reset) => {
  //   try {
  //     await connect();
  //     setClickedConnect({
  //       flag: true,
  //       data: data,
  //       reset: reset
  //     });
  //   } catch (error) {
  //     console.log('error: ', error);
  //     toast.error(STRINGS.WALLET_NOT_CONNECTED);
  //   }

  // }
  // useEffect(() => {
  //   if (wallet && walletConnectCalled?.flag) {
  //     handleConnectWallet(walletConnectCalled?.data, walletConnectCalled?.reset);
  //     setWalletConnectCalled(false)
  //   }
  // }, [walletConnectCalled, wallet])
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
              <h4><SafeHTML html={section1?.title} /></h4>
              <CustomForm
                formData={AIRDROP_SCHEMA}
                onSubmit={onSubmit}
                defaultValues={{}}
                submitText={<SafeHTML html={section1?.buttonText} />}
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