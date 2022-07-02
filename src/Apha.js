import React from "react";
import Nav from "./Nav";
import lionpride from "./assets/lioness_pride.webp";
import lady from "./assets/Lady.webp";
import lioness from "./assets/lioness.webp";
import Footer from "./Footer";

const Apha = () => {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-3">
            <h1>Community</h1>
            <img src={lionpride} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <p>
              Lady Lions are each unique, holding their own individual rarity
              and programmatically generated from 150 individual traits.
              <br />
              <br />
              They are stored as ERC-721 tokens on the Ethereum blockchain.
              <br />
              <br />
              Minting a Lady Lion costs .05ETH. A pre-launch is scheduled, with
              information on it below.
              <br />
              <br />
              All private and commercial rights belong to the owner of each Lady
              Lion to be used as they choose.
            </p>
          </div>
        </div>
        <div className="row justify-content-center align-items-center py-5">
          <div className="col-md-6">
            <p>
              <br />
              <br />
              <br />
              <ul>
                <li>
                  Discord is launched with private channels for members who own
                  a Lady Lion and a Lazy Lion
                </li>
                <li>
                  Lady Lion merch store is unlocked and available. Additional
                  exclusive free merch to the most active Lady Lion members.
                </li>
                <li>Community Wallet is opened</li>
                <li>
                  PURRRfect Advantage program is initiated with DOUBLE awards to
                  members who own a Lazy Lion
                </li>
                <li>Complimenting "surprise" NFT dropped free to members</li>
                <li>
                  Free cruise to the Caribbean including flight, hotel and
                  spending money for a selected Lady Lion member dropped
                  annually
                </li>
                <li>Annual IRL 3 Day Weekend Get Together</li>
              </ul>
            </p>
          </div>
          <div className="col-md-3">
            <h1 className="">Benefits</h1>
            <img src={lady} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-3">
            <h1>Rarity & Traits</h1>
            <img src={lioness} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <br />
            <br />
            <p>
              Lady Lions each hold their own unique rarity level, and each is
              programmatically generated from over 150 one- of-a-kind,
              hand-drawn traits.
              <br />
              <br />
              Traits are drawn from fur color, expression, eye looks, clothing
              and many more others.
              <br />
              <br />
              Lady Lions will be listed on Rarity Traits immediately after sell
              out for ease of confirmation of your Lady Lions rarity level and
              uniqueness.
            </p>
          </div>
        </div>
        <br />
        <br />
        <div className="text-center">
          <h2>WHITELIST & PRE-LAUNCH INFORMATION</h2>
          <p>
            Lazy Lion holders will receive an opportunity to whitelist with Lady
            Lions. Among other benefits to be announced,
            <br />
            Lazy Lion Whitelisters will be eligible to participate in our
            pre-launch, which will take place the day before our launch.
            <br />
            <br />
            We will offer 2,000 Lady Lions in our pre-launch with a whitelist
            minting price of .04ETH!
          </p>
          <br />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Apha;
