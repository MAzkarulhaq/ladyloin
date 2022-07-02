import React from "react";
import { useState, useEffect } from "react";
import "./Nav.css";
import Web3 from "web3";
import { useNavigate } from "react-router";
import abi from "./abi.json";

const Nav = ({ setconnecctstatus, connecctstatus }) => {
  const [connectedAccount, setConnectedAccount] = useState("Connect Wallet");
  useEffect(() => {
    if (connecctstatus) {
      connectWallet();
    }
  });

  async function connectWallet() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      const web3 = window.web3;
      const metaMaskAccount = await web3.eth.getAccounts();

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
      console.log("CCC", connecctstatus);
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }
  const Navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="row align-items-center py-3">
          <div className="col-6 d-flex justify-content-start">
            <a href="" className="logo text-center">
              <span>
                <span
                  onClick={() => {
                    Navigate("/");
                  }}
                >
                  Lady Lion
                </span>{" "}
                <br />
                <span
                  className="m1"
                  onClick={() => {
                    Navigate("/Alpha");
                  }}
                >
                  Alpha
                </span>
              </span>
            </a>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <a
              className="btn  bg-pink rounded-pill"
              onClick={async () => {
                connectWallet();
              }}
            >
              {connectedAccount}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
