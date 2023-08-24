import React from "react";
import storeFront from "@/public/assets/images/storeFront.png";
import footerLogo from "@/public/assets/images/footerLogo.png";
import discordLogo from "@/public/assets/images/discordLogo.png";
import youtubeLogo from "@/public/assets/images/youtubeLogo.png";
import twitterLogo from "@/public/assets/images/twitterLogo.png";
import instagramLogo from "@/public/assets/images/instagramLogo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="foomt_80">
      <div className="container">
        <div className="footerInner d-flex justify-content-center">
          <div>
            <div className="d-flex align-items-center  gap_12 mb-4">
              <img src={storeFront.src} alt="Store" />
              <img src={footerLogo.src} alt="Logo" />
            </div>
            <p className="mb-4">
              NFT marketplace UI created
              <br className="d-none d-lg-block" /> with Anima for Figma.
            </p>
            <p className="mb-3">Join our community</p>
            <div className="socialLink d-flex align-items-center gap-2">
              <a href="https://discord.com/invite/eQxkYTNxSp">
                <img src={discordLogo.src} alt="Discord Link" />
              </a>
              <a href="https://www.youtube.com/channel/UCXqr0Ca-b73rU9zcpSBJ5cw">
                <img src={youtubeLogo.src} alt="Youtube Link" />
              </a>
              <a href="https://twitter.com/animaapp?lang=en">
                <img src={twitterLogo.src} alt="Twitter Link" />
              </a>
              <a href="https://www.instagram.com/animaapp/?hl=en">
                <img src={instagramLogo.src} alt="Instagram Link" />
              </a>
            </div>
          </div>
          <div>
            <div className="footerMenu">
              <span className="d-block">Explore</span>
              <Link href="/live-auction">Auctions</Link>
              <Link href="/profile">Profile</Link>
              <Link href="/create-auction">Create Auction</Link>
            </div>
          </div>
        </div>
        <div class="footerOuter">
          <p>Ⓒ NFT Market. Use this template freely.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
