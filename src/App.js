import { useEffect, useState } from "react";
import "./App.css";
import CollectionCard from "./components/CollectionCard/CollectionCard";
import Header from "./components/Header/Header";
import axios from "axios";
import Punklist from "./components/Punklist/Punklist";

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
      <Punklist punkListData={punkListData} />
    </div>
  );
}

export default App;
