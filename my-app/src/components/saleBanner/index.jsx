import { useState } from "react";
import Banner from "./banner";

const SaleBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const toggleBanner = () => {
    setShowBanner(!showBanner);
  };
  return (
    <div>
      <h2>Sale Banner</h2>
      <button onClick={toggleBanner}>Toggle Sale Banner</button>
      {showBanner && <Banner />}
    </div>
  );
};

export default SaleBanner;
