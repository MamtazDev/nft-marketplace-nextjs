import React from "react";

const LiveAuction = () => {
  const datas = [
    {
      pic: "./assets/images/liveAuction1.png",
      name: "Magic Mushroom 0325",
      author: "./assets/images/profileLive1.png",
      authorName: "Shroomie",
      entryFee: 0.0001,
      bids: 8 / 100,
    },
    {
      pic: "./assets/images/liveAuction2.png",
      name: "Happy Robot 032",
      author: "./assets/images/profileLive2.png",
      authorName: "BeKind2Robots",
      entryFee: 0.0001,
      bids: 8 / 100,
    },
    {
      pic: "./assets/images/liveAuction3.png",
      name: "Happy Robot 024",
      author: "./assets/images/profileLive2.png",
      authorName: "BeKind2Robots",
      entryFee: 0.0001,
      bids: 8 / 100,
    },
    {
      pic: "./assets/images/liveAuction4.png",
      name: "Designer Bear",
      author: "./assets/images/profileLive4.png",
      authorName: "Mr Fox",
      entryFee: 0.0001,
      bids: 8 / 100,
    },
    {
      pic: "./assets/images/liveAuction5.png",
      name: "Colorful Dog 0356",
      author: "./assets/images/profileLive5.png",
      authorName: "Keepitreal",
      entryFee: 0.0001,
      bids: 8 / 100,
    },
    {
      pic: "./assets/images/liveAuction6.png",
      name: "Dancing Robot 0312",
      author: "./assets/images/profileLive6.png",
      authorName: "Robotica",
      entryFee: 0.0001,
      bids: 8 / 100,
    },
    {
      pic: "./assets/images/liveAuction7.png",
      name: "Cherry Blossom Girl 035",
      author: "./assets/images/profileLive7.png",
      authorName: "MoonDancer",
      entryFee: 0.0001,
      bids: 8 / 100,
    },
    {
      pic: "./assets/images/liveAuction8.png",
      name: "Space Travel",
      author: "./assets/images/profileLive8.png",
      authorName: "NebulaKid",
      entryFee: 0.0001,
      bids: 8 / 100,
    },
    {
      pic: "./assets/images/liveAuction9.png",
      name: "Sunset Dimension",
      author: "./assets/images/profileLive9.png",
      authorName: "Animakid",
      entryFee: 0.0001,
      bids: 8 / 100,
    },
    {
      pic: "./assets/images/liveAuction10.png",
      name: "Desert Walk",
      author: "./assets/images/profileLive10.png",
      authorName: "Catch 22",
      entryFee: 0.0001,
      bids: 8 / 100,
    },
    {
      pic: "./assets/images/liveAuction11.png",
      name: "IceCream Ape 0324",
      author: "./assets/images/profileLive11.png",
      authorName: "Ice Ape Club",
      entryFee: 0.0001,
      bids: 8 / 100,
    },
    {
      pic: "./assets/images/liveAuction12.png",
      name: "Colorful Dog 0344",
      author: "./assets/images/profileLive12.png",
      authorName: "PuppyPower",
      entryFee: 0.0001,
      bids: 8 / 100,
    },
  ];
  return (
    <div>
      <section>
        <div className="liveAuction_title">
          <div className="container">
            <h3>Live Auctions</h3>
            <p>Discover the auctions, currently live</p>
          </div>
        </div>
        <div class="liveAuction">
          <div class="container">
            <div class="row g-4">
              {datas.map((data, index) => (
                <div class="col-12 col-md-6 col-lg-4">
                  <div key={index} class="discoverInnerBox">
                    <img
                      class="img-fluid w-100"
                      src={data.pic}
                      alt="Distance Galaxy"
                    />
                    <div class="boxBottom h-100">
                      <article class="mb_25">
                        <p>{data.name}</p>
                        <div class="d-flex align-items-center gap_12 mt-2">
                          <img src={data.author} alt="Avatar" />
                          <a href="profile.html">{data.authorName}</a>
                        </div>
                      </article>
                      <div class="entryBids d-flex justify-content-between align-items-center">
                        <div>
                          <span>Entry Fee</span>
                          <p>{data.entryFee} ETH</p>
                        </div>
                        <div>
                          <span>Bids</span>
                          <p>{data.bids}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LiveAuction;
