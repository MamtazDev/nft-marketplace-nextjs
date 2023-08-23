import React from "react";

const Bidding = () => {
  return (
    <section>
      <div className="container">
        <div className="mb_40">
          <h2>Bidding: How it works</h2>
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
                <span>Bid</span>
                <p className="mt-2">
                  Pay the entry fee and place 6 bids till the auction is live.
                  The bids will be encrypted and stored on the blockchain.
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
                <span>Reveal</span>
                <p className="mt-2">
                  Once the auction ends, reveal your bids. The bids will be
                  decrypted and stored on the blockchain.
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
                <span>Claim</span>
                <p className="mt-2">
                  After the bids are revealed, the lowest unique bid is detected
                  and winner can claim the NFT.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bidding;
