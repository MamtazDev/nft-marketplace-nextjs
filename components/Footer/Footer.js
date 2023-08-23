import React from "react";

const Footer = () => {
  return (
    <footer className="foomt_80">
      <div className="container">
        <div className="footerInner d-flex justify-content-center">
          <div>
            <div className="d-flex align-items-center  gap_12 mb-4">
              <img src="./assets/images/storeFront.png" alt="Store" />
              <img src="./assets/images/footerLogo.png" alt="Logo" />
            </div>
            <p className="mb-4">
              NFT marketplace UI created
              <br className="d-none d-lg-block" /> with Anima for Figma.
            </p>
            <p className="mb-3">Join our community</p>
            <div className="socialLink d-flex align-items-center gap-2">
              <a href="https://discord.com/invite/eQxkYTNxSp">
                <img src="./assets/images/discordLogo.png" alt="Discord Link" />
              </a>
              <a href="https://www.youtube.com/channel/UCXqr0Ca-b73rU9zcpSBJ5cw">
                <img src="./assets/images/youtubeLogo.png" alt="Youtube Link" />
              </a>
              <a href="https://twitter.com/animaapp?lang=en">
                <img src="./assets/images/twitterLogo.png" alt="Twitter Link" />
              </a>
              <a href="https://www.instagram.com/animaapp/?hl=en">
                <img
                  src="./assets/images/instagramLogo.png"
                  alt="Instagram Link"
                />
              </a>
            </div>
          </div>
          <div>
            <div className="footerMenu">
              <span className="d-block">Explore</span>
              <a href="liveAuction.html">Auctions</a>
              <a href="profile.html">Profile</a>
              <a href="createAuction.html">Create Auction</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
