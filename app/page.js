'use client';

import axios from "axios";
import { useEffect, useState } from "react";
import StationSelector from "./components/StationSelector";
import StationReadings from "./components/StationReadings";
import { CircularProgress } from "@mui/material";

export default function Home() {

  const [stations, setStations] = useState([]);
  const [selectedStation, setSelectedStation] = useState(null);
  const [loading, setLoading] = useState(true);

  const getStationsData = async () => {
    try {
      const response = await axios.get("/api/stations");
      const data = response?.data?.results;
      setStations(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("error:getStationsData", error);
    }
  };

  useEffect(() => {
    getStationsData();
  }, []);

  return (
    <div className="">
      <div className="px-4 mx-auto max-w-xl py-10">
        {
          loading ?
            <div className="flex justify-center items-center">
              <CircularProgress />
            </div>
            :
            <StationSelector
              stationsData={stations}
              selectedStation={selectedStation}
              setSelectedStation={setSelectedStation}
            />
        }
        {selectedStation && <StationReadings readings={selectedStation} />}
      </div>
    </div>
  );
}
