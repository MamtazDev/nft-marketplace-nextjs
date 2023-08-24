import React from "react";
import profile from "@/public/assets/images/aucProfile.png";
import globe from "@/public/assets/images/globe.png";

const DetailsContainer = () => {
  return (
    <section>
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-7">
            <div class="auctionDetail mb_30">
              <h3>The Orbitians</h3>
              <span>Minted on Sep 30, 2022</span>
            </div>
            <div
              class="d-block d-md-none placeBid text-center"
              style={{ marginBottom: "20px" }}
            >
              <span class="auctionend d-block text-start mb-2">
                Auction ends in:
              </span>
              <div class="timer mb_30">
                <div
                  class="d-flex justify-content-center align-items-center"
                  style={{ gap: "20px" }}
                >
                  <p>59</p>
                  <p>:</p>
                  <p>59</p>
                  <p>:</p>
                  <p>59</p>
                </div>
                <div class="d-flex justify-content-center align-items-center gap-2 gap-lg-5">
                  <div>
                    <span>Hours</span>
                  </div>
                  <div>
                    <span>Minutes</span>
                  </div>
                  <div>
                    <span>Seconds</span>
                  </div>
                </div>
              </div>
              <form class="bidInput d-flex justify-content-center gap-3 mb_30">
                <div class="text-center">
                  <div class="mb-2">
                    <input type="text" />
                  </div>
                  <div class="mb-2">
                    <input type="text" />
                  </div>
                  <div class="mb-2">
                    <input type="text" />
                  </div>
                </div>
                <div class="text-center">
                  <div class="mb-2">
                    <input type="text" />
                  </div>
                  <div class="mb-2">
                    <input type="text" />
                  </div>
                  <div class="mb-2">
                    <input type="text" />
                  </div>
                </div>
              </form>
              <button class="placebidBtn d-none d-lg-block">
                Place Bid 0.0001 ETH
              </button>
              <button class="placebidBtn d-block d-lg-none w-100">
                Place Bid
              </button>
            </div>
            <div class="createdBy">
              <div class="mb_30">
                <span>Created By</span>
                <div class="d-flex align-items-center gap-2">
                  <img src={profile.src} alt="Profile Image" />
                  <p class="orbitTxt">Orbitian</p>
                </div>
              </div>
              <div class="mb_30">
                <span class="mb-1">Description</span>
                <div class="createDes">
                  <div class="mb-2">
                    <p>The Orbitians</p>
                    <p>
                      is a collection of 10,000 unique NFTs on the Ethereum
                      blockchain,
                    </p>
                  </div>
                  <p class="mb-2">
                    There are all sorts of beings in the NFT Universe. The most
                    advanced and friendly of the bunch are Orbitians.
                  </p>

                  <p>
                    They live in a metal space machines, high up in the sky and
                    only have one foot on Earth. These Orbitians are a peaceful
                    race, but they have been at war with a group of invaders for
                    many generations. The invaders are called Upside-Downs,
                    because of their inverted bodies that live on the ground,
                    yet do not know any other way to be. Upside-Downs believe
                    that they will be able to win this war if they could only
                    get an eye into Orbitian territory, so they've taken to make
                    human beings their target.
                  </p>
                </div>
              </div>
              <div>
                <span class="mb-1">Details</span>
                <div class="delailsInner">
                  <div class="d-flex align-items-center gap-2 mb-2">
                    <img src={globe.src} alt="Globe" />
                    <p>View on Etherscan</p>
                  </div>
                  <div class="d-flex align-items-center gap-2">
                    <img src={globe.src} alt="Globe" />
                    <p>View Original</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-5 d-none d-md-block">
            <div class="placeBid text-center">
              <span class="auctionend d-block text-start mb-2">
                Auction ends in:
              </span>
              <div class="timer mb_30">
                <div
                  class="d-flex justify-content-center align-items-center"
                  style={{ gap: "20px" }}
                >
                  <p>59</p>
                  <p>:</p>
                  <p>59</p>
                  <p>:</p>
                  <p>59</p>
                </div>
                <div class="d-flex justify-content-center align-items-center gap-5">
                  <div>
                    <span>Hours</span>
                  </div>
                  <div>
                    <span>Minutes</span>
                  </div>
                  <div>
                    <span>Seconds</span>
                  </div>
                </div>
              </div>
              <form class="bidInput d-flex justify-content-center gap-3 mb_30">
                <div class="text-center">
                  <div class="mb-2">
                    <input type="text" />
                  </div>
                  <div class="mb-2">
                    <input type="text" />
                  </div>
                  <div class="mb-2">
                    <input type="text" />
                  </div>
                </div>
                <div class="text-center">
                  <div class="mb-2">
                    <input type="text" />
                  </div>
                  <div class="mb-2">
                    <input type="text" />
                  </div>
                  <div class="mb-2">
                    <input type="text" />
                  </div>
                </div>
              </form>
              <button class="placebidBtn d-none d-lg-block">
                Place Bid 0.0001 ETH
              </button>
              <button class="placebidBtn d-block d-lg-none w-100">
                Place Bid
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsContainer;
