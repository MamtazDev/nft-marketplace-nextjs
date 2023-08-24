import React from "react";

const CreateAuction = () => {
  const times = [
    {
      data: 2,
    },
    {
      data: 6,
    },
    {
      data: 12,
    },
    {
      data: 24,
    },
    {
      data: 36,
    },
    {
      data: 48,
    },
  ];
  return (
    <div className="createAuction">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-3">
            <div className="ggggg">
              <button
                style={{ width: "unset" }}
                className="bg-danger rounded-pill border-0 px-3 py-1"
              >
                X
              </button>
              <img
                className="img-fluid"
                src="https://cdn.dribbble.com/users/383277/screenshots/18055765/media/e5fc935b60035305099554810357012a.png?resize=400x300&vertical=center"
                alt=""
              />
            </div>
            <p className="shade mb-2">GS #443</p>
            <div className="shade">
              <h5>Raffle Details</h5>
              <p>The details of your raffle</p>
            </div>
          </div>
          <div className="col-12 col-lg-9">
            <div className="shade">
              <form>
                <div className="mb-3">
                  <label className="mb-3">
                    <h5>Ticket Supply</h5>
                    <p>The number of tickets you want to sell.</p>
                  </label>
                  <input
                    type="number"
                    min="10"
                    placeholder="Minumum 10 tickets"
                  />
                </div>
                <div className="mb-3">
                  <label className="mb-3">
                    <h5>Ticket price</h5>
                    <p>
                      The price of each ticket in AVAX. The minimum price is
                      0.05 AVAX.
                    </p>
                  </label>
                  <input
                    type="number"
                    min="0.05"
                    placeholder="Minumum price 0.05"
                  />
                </div>
                <div className="mb-3">
                  <label className="mb-3">
                    <h5>End Date</h5>
                    <p>The date and time the raffle will end.</p>
                  </label>
                  <div className="row">
                    {times.map((value, index) => (
                      <div className="col-6 col-md-4 col-lg-2" key={index}>
                        <button>{value.data} hours</button>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mb-3">
                  <label className="mb-3 d-flex justify-content-center">
                    <p className="text-center">
                      Want to schedule your raffle for a specific date and time?
                    </p>
                  </label>
                  <div className="d-flex align-items-center pppp">
                    <input className="border-0" type="date" />
                    <input className="border-0" type="time" />
                  </div>
                </div>

                <div className="mb-3 text-center gated_divider">
                  <button
                    style={{ width: "unset" }}
                    className="bg-primary border-0 text-white rounded-pill py-1"
                  >
                    + NFT gated{" "}
                  </button>
                </div>
                <div className="d-flex align-items-center gap-1 mb-2">
                  <input style={{ width: "unset" }} type="checkbox" />
                  <label className="fw-bold">
                    I accept the terms and condition below.
                  </label>
                </div>
                <div className="mb-2">
                  <button className="apv_btn fw-bold">APPROVE</button>
                </div>

                <div>
                  <select>
                    <option>Terms and conditions</option>
                    <option>Saab</option>
                    <option>Saab</option>
                    <option>Saab</option>
                    <option>Saab</option>
                    <option>Saab</option>
                  </select>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAuction;
