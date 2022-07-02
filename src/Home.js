import React from "react";
import { useEffect, useState } from "react";
import Web3 from "web3";
import abi from "./abi.json";
import gif from "./assets/main.webp";
import "./Home.css";

require("dotenv").config();
const { REACT_APP_CONTRACT_ADDRESS } = process.env;
const Home = ({ connecctstatus, setConnectedstatus }) => {
  const [connectedAccount, setConnectedAccount] = useState("Connect Wallet");
  const [contract, setContract] = useState(null);
  const [tokenId, setTokenId] = useState(null);
  const [supply, setTokenSupply] = useState(null);
  const [price, setPrice] = useState();
  const [priceInEth, setPriceInEth] = useState(0.06);
  const [quantity, setQuantity] = useState(1);
  const [minted, setMinted] = useState(false);
  console.log("C", connecctstatus);

  useEffect(() => {
    loadWeb3();
  }, []);

  async function loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      // await window.ethereum.enable();
      const web3 = window.web3;
      // creating contract instance
      const contractaddress = REACT_APP_CONTRACT_ADDRESS;
      const ct = new web3.eth.Contract(abi, contractaddress);
      setContract(ct);
      console.log("ct", ct);
      let price = await ct.methods.price().call();
      setContract(ct);
      setPrice(price);
      setPriceInEth(web3.utils.fromWei(price, "ether"));
      const totalSupply = await ct.methods.totalSupply().call();
      setTokenSupply(totalSupply);
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }
  async function mint() {
    const web3 = window.web3;
    const _value = price * quantity;
    const address = await web3.eth.getAccounts();

    await contract.methods
      .mint(quantity)
      .send({ from: address.toString(), value: _value });
    setMinted(true);
    const totalSupply = await contract.methods.totalSupply().call();
    setTokenSupply(totalSupply);
  }
  async function connectWallet() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      const web3 = window.web3;
      const metaMaskAccount = await web3.eth.getAccounts();
      setConnectedstatus(true);
      let splitedMetaMaskAddress;
      if (metaMaskAccount) {
        splitedMetaMaskAddress =
          metaMaskAccount[0].substring(0, 6) +
          "......" +
          metaMaskAccount[0].substring(
            metaMaskAccount[0].length - 4,
            metaMaskAccount[0].length
          );
      }
      setConnectedAccount(splitedMetaMaskAddress);
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }
  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-4">
            <img src={gif} alt="" />
          </div>
          <div className="col-md-5">
            <h1 id="big-heading">Lady Lion</h1>
            <br />
            <p className="text-center text-white">
              <div class="btngroup">
                <div class="" role="group" aria-label="First group">
                  <button
                    type="button"
                    class="btn bg-pink text-white "
                    onClick={() => {
                      if (quantity > 1) {
                        setQuantity(quantity - 1);
                      }
                    }}
                  >
                    -
                  </button>
                  <button type="button" class="btn text-white">
                    {quantity}
                  </button>
                  <button
                    type="button"
                    class="btn bg-pink text-white"
                    onClick={() => {
                      if (quantity < 20) {
                        setQuantity(quantity + 1);
                      }
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
              <br />
              <a
                className="btn  bg-pink rounded-pill text-uppercase"
                onClick={async () => {
                  await connectWallet();
                  mint();
                }}
              >
                Mint Now
              </a>
            </p>
          </div>
        </div>
        <div className="row py-5">
          <div className="col-md-1"></div>
          <div className="col-md-8">
            <h1>ABOUT Lady Lions</h1>
            <br />
            <p>
              Inspired by the incredibly engaged and dedicated community of
              those languorous Kings lazily drifting days away on a private
              island out in the ocean somewhere, the LL is a collection of
              10,000 Lady Lions NFTs on the Ethereum blockchain and is a
              lifestyle, not just a project.
              <br />
              <br />
              You know who these Ladies are. Queen of the Pride, Mom to cubs,
              Huntress, Mane, Hunt Chief. These fierce females are focused and
              zoned in.
              <br />
              <br />
              But lately, impulses have been sweeping through the Pride. Some
              are peeping a sweet cabana to chill in with some listless friends.
              Others are roaming far and wide, looking for "the one." While some
              are just hangin', being cool and having a good time.
              <br />
              <br />
              But, they're ALL looking for a lazier lifestyle.
            </p>
            <h1>ABOUT the Team</h1>
            <br />
            <p>
              <span className="purple">The Coach:</span>
              &nbsp; Lady Lions Visionary. Lazy Lions Admirer. Husband.
            </p>
            <p>
              <span className="purple">Leo Nardo:</span>
              &nbsp; Lady Lions Artist. Lazy Lions Admirer. Family Friend.
            </p>
            <p>
              <span className="purple">Lucky Starr:</span>
              &nbsp; Lady Lions Creative Director. Lazy Lions Admirer. Wife.
            </p>
            <p>
              <span className="purple">Tay Keith ETH:</span>
              &nbsp; Lady Lions Marketing. Lazy Lions Admirer. Son.
            </p>
            <br />
            <p>
              Drawn into the NFT space this past January, followed by weeks of
              methodically researching, following, collecting, HODLING, flipping
              and learning, a husband and wife found a project they loved. Not
              just for it's potential financial value, but for it's community,
              the embracing nature of it's members and the long-term growth you
              could see, feel and almost even touch. Wanting to see that
              expanded, husband and wife had a light bulb moment and decided to
              talk to the one who got them into this new world, their son. With
              his input and an artistic genius for a friend, the quad set off to
              create what we hope will become a lifestyle for our members and a
              compliment to the Lion OG's of the space.
              <br />
              <br />
              We have poured a lot of time, effort and love into this project to
              ensure the art, concept and community is captivating, welcoming,
              fun and rewarding for all of our members for many years to come.
              Our greatest hope is that you will think it is all of these
              things, and even more!
              <br />
              <br />
              We are looking forward to welcoming you to our Lady Lions family!
              And we hope you will love this as much as we do!
            </p>
            <br />
            <br />
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
