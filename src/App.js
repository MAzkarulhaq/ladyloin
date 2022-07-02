import "./App.css";
import { useState } from "react";
import Footer from "./Footer";
import Home from "./Home";
import Nav from "./Nav";
import Alpha from "./Apha";
import { Password } from "./Password";
import { BrowserRouter, useNavigate, Routes, Route } from "react-router-dom";

function App() {
  const [connecctstatus, setConnectedstatus] = useState(false);
  const [userPassword, setUserPassword] = useState("");
  const websitePassword = "2z9mLadyLionsWhitelist3x8n";
  return (
    <>
      {/* <div>
        {websitePassword === userPassword ? (
          <>
            <BrowserRouter>
              <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    <div className="App">
                      <Nav connecctstatus={connecctstatus} />
                      <Home
                        connecctstatus={connecctstatus}
                        setConnectedstatus={setConnectedstatus}
                      />
                      <Footer />
                    </div>
                  }
                ></Route>
                <Route exact path="/Alpha" element={<Alpha />}></Route>
              </Routes>
            </BrowserRouter>
          </>
        ) : (
          <Password setUserPassword={setUserPassword} />
        )}
      </div> */}

      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div className="App">
                <Nav connecctstatus={connecctstatus} />
                <Home
                  connecctstatus={connecctstatus}
                  setConnectedstatus={setConnectedstatus}
                />
                <Footer />
              </div>
            }
          ></Route>
          <Route exact path="/Alpha" element={<Alpha />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
