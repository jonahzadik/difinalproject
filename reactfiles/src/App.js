import "./App.css";
import TopBar from "./Components/TopBar";
import FirstSection from "./Components/FirstSection";
import SecondSection from "./Components/SecondSection";
import Buttons from "./Components/Buttons";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <header className="App-header">
                  <TopBar />
                  <FirstSection />
                  <SecondSection />
                  <Buttons />
                  <Footer />
                </header>
              </>
            }
          />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
