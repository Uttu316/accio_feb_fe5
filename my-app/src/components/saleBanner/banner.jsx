import { useEffect, useState } from "react";

const Banner = () => {
  const [sale, setSale] = useState(0);

  useEffect(() => {
    //with empty array use effect tracks two phases

    //*mouting

    console.log("Banner mounted");

    return () => {
      //cleanup function

      //*unmounting
      console.log("Unmounted Banner");
    };
  }, []);

  useEffect(() => {
    // with variables in dependency  array, effect will trigger
    // mounting, everytime any variable changes

    console.log("Sale Updated to", sale);
    return () => {
      //cleanup function will trigger before every new value
      console.log("Sale changed from", sale);
    };
  }, [sale]);
  return (
    <div>
      <h3>Sale is Live</h3>
      <button onClick={() => setSale(sale + 5)}>Modify Sale</button>
      {sale}% off
    </div>
  );
};
export default Banner;
