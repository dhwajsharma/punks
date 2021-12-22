import { useEffect, useState } from "react";
import "./App.css";
import CollectionCard from "./components/CollectionCard/CollectionCard";
import Header from "./components/Header/Header";
import axios from "axios";

function App() {
  const [punkListData, setPunkListData] = useState([]);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x71363C6264ADCbC5E0f508173426767D550915F5&order_direction=asc"
      );
      setPunkListData(openseaData.data.assets);
    };

    return getMyNfts();
  }, []);

  return (
    <div className="app">
      <Header />
      <CollectionCard
        id={0}
        name={"Bandana Punk"}
        traits={[{ value: 7 }]}
        image="https://lh3.googleusercontent.com/9B1oTFEv4DeaW9gFwnd1ION2NzfGnC9lHfjnPNSbNkDZmID0P7Di6Y6ptZxZuf0oaWgnAKLu1eqEbdlCJSpHDFUceo2D7H9c0wK56Q=w336"
      />
    </div>
  );
}

export default App;
