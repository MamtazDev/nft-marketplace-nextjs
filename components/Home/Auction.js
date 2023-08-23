import React from "react";

const Auction = () => {
  return (
    <section>
      <div className="m_all">
        <div className="container">
          <div className="mb_40">
            <h2>Auction: How it works</h2>
            <p className="subHeader">Find out how to get started</p>
          </div>

          <div className="row g-4">
            <div className="col-12 col-md-4">
              <div className="auctionBidInner d-flex flex-md-column align-items-center">
                <img
                  className="img-fluid"
                  src="./assets/images/setupWallet.png"
                  alt="Setup Wallet"
                />
                <div className="auctionBidBottom mt-3">
                  <span>Setup Your wallet</span>
                  <p className="mt-2">
                    Set up your wallet of choice. Connect it to the NFTLUB by
                    clicking the wallet icon in the top right corner.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="auctionBidInner d-flex flex-md-column align-items-center">
                <img
                  className="img-fluid"
                  src="./assets/images/auctionBid2.png"
                  alt="Setup Wallet"
                />
                <div className="auctionBidBottom mt-3">
                  <span>List for auction</span>
                  <p className="mt-2">
                    Pick the NFT to be auctioned from the list of NFT’s present
                    in the connected wallet. Provide all the required info and
                    create the auction.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="auctionBidInner d-flex flex-md-column align-items-center">
                <img
                  className="img-fluid"
                  src="./assets/images/auctionBid3.png"
                  alt="Setup Wallet"
                />
                <div className="auctionBidBottom mt-3">
                  <span>Start Earning</span>
                  <p className="mt-2">
                    Start earning by selling the entries to the auction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auction;
