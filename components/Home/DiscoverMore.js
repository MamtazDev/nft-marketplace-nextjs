import React from 'react';

const DiscoverMore = () => {
    return (
        <section>
        <div className="m_all">
            <div className="container">
                <div className="discoverNft mb_60 d-flex justify-content-between align-items-center">
                    <div>
                        <h2>Discover More NFTs</h2>
                        <p className="subHeader">Explore new trending NFTs</p>
                    </div>
                    <a className="seeAll d-none d-md-block" href="liveAuction.html" target="_blank">See All </a>
                </div>


                <div className="row g-4">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="discoverInnerBox">
                            <img className="img-fluid w-100" src="./assets/images/distanceGalaxy.png"
                                alt="Distance Galaxy"/>
                            <div className="boxBottom h-100">
                                <article className="mb_25">
                                    <p>Distant Galaxy</p>
                                    <div className="d-flex align-items-center gap_12 mt-2">
                                        <img src="./assets/images/moonDancer.png" alt="Avatar"/>
                                        <a href="profile.html">MoonDancer</a>
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
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="discoverInnerBox">
                            <img className="img-fluid w-100" src="./assets/images/liveOfEdena.png"
                                alt="Distance Galaxy"/>
                            <div className="boxBottom h-100">
                                <article className="mb_25">
                                    <p>Life On Edena</p>
                                    <div className="d-flex align-items-center gap_12 mt-2">
                                        <img src="./assets/images/nebulaKid.png" alt="Avatar"/>
                                        <a href="profile.html">NebulaKid</a>
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
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 d-block d-md-none d-lg-block">
                        <div className="discoverInnerBox">
                            <img className="img-fluid w-100" src="./assets/images/astroFiction.png"
                                alt="Distance Galaxy"/>
                            <div className="boxBottom h-100">
                                <article className="mb_25">
                                    <p>AstroFiction</p>
                                    <div className="d-flex align-items-center gap_12 mt-2">
                                        <img src="./assets/images/spaceone.png" alt="Avatar"/>
                                        <a href="profile.html">Spaceone</a>
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
                    </div>
                </div>

                <a className="seeAll d-block d-md-none mt_80" href="liveAuction.html" target="_blank">See All </a>
            </div>
        </div>
    </section>
    );
};

export default DiscoverMore;