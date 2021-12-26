import React, { useState, useEffect } from "react";
import "./Main.css";
import instagramLogo from "../../assets/owner/instagram.png";
import twitterLogo from "../../assets/owner/twitter.png";
import moreIcon from "../../assets/owner/more.png";

const Main = ({ punkListData, selectedPunk }) => {
  const [activePunk, setActivePunk] = useState(punkListData[0]);

  console.log(punkListData);

  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [punkListData, selectedPunk]);

  return (
    <div className="main">
      <div className="main__mainContent">
        <div className="main__punkHighlight">
          <div className="main__punkContainer">
            <img
              className="main__selectedPunk"
              src={activePunk.image_original_url}
              alt=""
            />
          </div>
        </div>

        <div className="main__punkDetails" style={{ color: "#fff" }}>
          <div className="main__title">
            {activePunk.name}
            <span className="main__itemNumber">#{activePunk.token_id}</span>
          </div>

          <div className="main__owner">
            <div className="main__ownerImageContainer">
              <img src={activePunk.owner.profile_img_url} alt="" />
            </div>
            <div className="main__ownerDetails">
              <div className="main__ownerNameAndHandle">
                <div>{activePunk.owner.address}</div>
                <div className="main__ownerHandle">
                  @{activePunk.owner.user.username}
                </div>
              </div>
              <div className="main__ownerLink">
                <img src={instagramLogo} alt="" />
              </div>
              <div className="main__ownerLink">
                <img src={twitterLogo} alt="" />
              </div>
              <div className="main__ownerLink">
                <img src={moreIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
