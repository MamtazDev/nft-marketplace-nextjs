import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="mt_80 m_all">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="hero">
                <h1>NFTs Meet Unique Bidding!</h1>
                <p className="bannerSub">
                  NFT marketplace UI created with Anima for Figma. Collect, buy
                  and sell art from more than 20k NFT artists.
                </p>
                <div className="bannerFollow d-none d-md-block">
                  <span className="d-inline-block mb_60">
                    <a className="d-flex align-items-center gap-1" href="#">
                      <img src="./assets/images/rocketLaunch.png" alt="Lunch" />{" "}
                      Create Auction
                    </a>
                  </span>
                  <article className="d-flex align-items-center gap_30">
                    <div>
                      <p>240k+</p>
                      <span>Total Sale</span>
                    </div>
                    <div>
                      <p>100k+</p>
                      <span>Auctions</span>
                    </div>
                    <div>
                      <p>240k+</p>
                      <span>Bidders</span>
                    </div>
                  </article>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="heroBanner">
                <img
                  className="img-fluid w-100"
                  src="./assets/images/hero.png"
                  alt="Hero Banner"
                />
                <div className="boxBottom">
                  <article className="mb_25">
                    <p>Space Walking</p>
                    <div className="d-flex align-items-center gap_12 mt-2">
                      <img src="./assets/images/avatar.png" alt="Avatar" />
                      <a href="profile.html">Animakid</a>
                    </div>
                  </article>
                  <div className="entryBids d-flex justify-content-between align-items-center">
                    <div>
                      <span>Entry Fee</span>
                      <p>0.0001 ETH</p>
                    </div>
                    <div>
                      <span>Bids</span>
                      <p>8/100</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bannerFollow d-block d-md-none mt_80">
                <span className="mb_60 d-block">
                  <a
                    className="d-flex justify-content-center align-items-center gap-1"
                    href="#"
                  >
                    <img src="./assets/images/rocketLaunch.png" alt="Lunch" />{" "}
                    Create Auction
                  </a>
                </span>
                <article className="d-flex align-items-center justify-content-center gap_30">
                  <div>
                    <p>240k+</p>
                    <span>Total Sale</span>
                  </div>
                  <div>
                    <p>100k+</p>
                    <span>Auctions</span>
                  </div>
                  <div>
                    <p>240k+</p>
                    <span>Bidders</span>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
