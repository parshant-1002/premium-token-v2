import React from 'react'
import Info from './Info'

const Airdrop = () => {
  return (
    <div>

      <div className="airdrop-main">
        <div className="">
          <div className="">
            <div class="airdrop-info-para">
              <h2 class="h2 text-center">How to join the AirDrop</h2>
              <p class="text-center">You can get whitelisted for the PremiumToken AirDrop by following us on minimum 4 of the 6 social media platforms. Be sure to double check your wallet address is correct before you submit, otherwise you wont receive your tokens. A total of 10 AirDrops will be held and the first one will be on 1st of May.</p>
            </div>
          </div>
          <div className="whitelisted-row">
            <form className="white-listed-form">
              <h3 className="">
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
                  Submit airdrop
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
    </div>
  )
}

export default Airdrop