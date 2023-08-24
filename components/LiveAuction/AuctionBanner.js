import React from "react";
import banner from "@/public/assets/images/auctionBanner.png";

const AuctionBanner = () => {
  return (
    <section>
      <div class="auctionBanner">
        <img
          style={{ marginBottom: "40px" }}
          class="img-fluid w-100"
          src={banner.src}
          alt="Auction Details Banner"
        />
      </div>
    </section>
  );
};

export default AuctionBanner;
