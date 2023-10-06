import React from "react";

const Panel = () => {
  return (
    <>
      <div className="panel">
        <div className="panel-all">
          <i class="fa-solid fa-bars"></i>  All
        </div>

        <div className="panel-ops">
          <a>Today's Deals </a>
          <a>Customer Service </a>
          <a>Registry </a>
          <a>Gift Cards </a>
          <a>Sell </a>
        </div>

        <div className="panel-deals">Shop Deals in Electronics</div>
      </div>
    </>
  );
};
export default Panel;
