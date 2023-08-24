import React from "react";

const CreatedSection = () => {
  return (
    <section>
      <div class="container">
        <div class="proHeader mb_40">
          <h2 class="mb_30">Animakid</h2>

          <div class="d-flex align-items-center gap_30">
            <div>
              <p>250k+</p>
              <span>Volume</span>
            </div>
            <div>
              <p>50k+</p>
              <span>NFTs Sold</span>
            </div>
            <div>
              <p>300k+</p>
              <span>Followers</span>
            </div>
          </div>
        </div>
      </div>
      <hr class="profileOutter" />
      <div class="container">
        <div class="created w-100 text-center d-flex justify-content-center gap-3">
          <p>Created</p>
          <span>302</span>
        </div>
      </div>
      <div
        class="personalBid"
        style={{ paddingTop: "75px", paddingBottom: "75px" }}
      >
        <div class="container">
          <div>
            <div class="row g-4">
              <div class="col-12 col-md-6 col-lg-4">
                <div class="discoverInnerBox">
                  <img
                    class="img-fluid w-100"
                    src="./assets/images/distanceGalaxy.png"
                    alt="Distance Galaxy"
                  />
                  <div
                    class="boxBottom h-100"
                    style={{ backgroundColor: "#2B2B2B" }}
                  >
                    <article class="mb_25">
                      <p>Distant Galaxy</p>
                      <div class="d-flex align-items-center gap_12 mt-2">
                        <img src="./assets/images/avatar.png" alt="Avatar" />
                        <a href="profile.html">Animakid</a>
                      </div>
                    </article>
                    <div class="entryBids d-flex justify-content-between align-items-center">
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
              </div>

              <div class="col-12 col-md-6 col-lg-4">
                <div class="discoverInnerBox">
                  <img
                    class="img-fluid w-100"
                    src="./assets/images/liveOfEdena.png"
                    alt="Distance Galaxy"
                  />
                  <div
                    class="boxBottom h-100"
                    style={{ backgroundColor: "#2B2B2B" }}
                  >
                    <article class="mb_25">
                      <p>Happy Robot 032</p>
                      <div class="d-flex align-items-center gap_12 mt-2">
                        <img src="./assets/images/avatar.png" alt="Avatar" />
                        <a href="profile.html">BeKind2Robots</a>
                      </div>
                    </article>
                    <div class="entryBids d-flex justify-content-between align-items-center">
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
              </div>

              <div class="col-12 col-md-6 col-lg-4">
                <div class="discoverInnerBox">
                  <img
                    class="img-fluid w-100"
                    src="./assets/images/astroFiction.png"
                    alt="Distance Galaxy"
                  />
                  <div
                    class="boxBottom h-100"
                    style={{ backgroundColor: "#2B2B2B" }}
                  >
                    <article class="mb_25">
                      <p>AstroFiction</p>
                      <div class="d-flex align-items-center gap_12 mt-2">
                        <img src="./assets/images/avatar.png" alt="Avatar" />
                        <a href="profile.html">Animakid</a>
                      </div>
                    </article>
                    <div class="entryBids d-flex justify-content-between align-items-center">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatedSection;
