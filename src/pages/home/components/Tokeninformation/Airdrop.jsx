import React from 'react'
import Info from './Info'
import "./airdrop.scss";
import { ICONS } from '../../../../assets';

const Airdrop = () => {
  return (
    <section className="position-relative airdrop_sec">
      <div className="container">
        
        <div className="heading_title text-center mb-0">
          <h2 className="h2">How to join the AirDrop</h2>          
          <p>You can get whitelisted for the PremiumToken AirDrop by following us on minimum 4 of the 6 social media platforms. Be sure to double check your wallet address is correct before you submit, otherwise you wont receive your tokens. A total of 10 AirDrops will be held and the first one will be on 1st of May.</p>           
        </div>

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
              </div>
              <div className="submit-drop">
                <button className="btn btn-md btn-secondary">
                  <span className="transform-none">Submit airdrop</span>
                </button>
              </div>
            </form>
            <div className="airdrop-info">
              <Info
                frame89="/frame-89@2x.png"
                followPremiumTokenOnOur6S="Follow PremiumToken on minimum 4 of 6 of our social media channels."
              />
              <Info
                frame89="/Frame.png"
                followPremiumTokenOnOur6S="Fill out the information in the fields to the right, make sure your wallet address is correct and click on Submit."

              />
              <Info
                frame89="/frame-89-2@2x.png"
                followPremiumTokenOnOur6S="The first AirDrop will be held on the 1st of May, be sure you join in before that to get your tokens!"

              />

            </div>
          </div>

        </div>
      </div>
      <div className="air_drop_bg">
        <img width={465} height={886}
          className="img-fluid"
          alt="desktop-banner"
          src={ICONS.AirDropBg}
        />
      </div>
    </section>
  )
}

export default Airdrop