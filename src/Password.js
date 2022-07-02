import React from "react";
import { useState } from "react";
export const Password = ({ setUserPassword }) => {
  return (
    <div style={{ textAlign: "center" }} className="mt-5">
      <h3>Enter Password to continue</h3>
      <br />

      <input
        type="text"
        onChange={(e) => {
          setUserPassword(e.target.value);
        }}
      />
      <br />
      <br />
      <h3>
        If you don't have a password, go to the discord channel and request one!
      </h3>
      <h3>
        <a href="#">
          <i class="fab fa-discord" style={{ cursor: "pointer" }}></i>
        </a>
      </h3>
    </div>
  );
};
