'use client';

import axios from "axios";
import { useEffect, useState } from "react";
import StationSelector from "./components/StationSelector";
import StationReadings from "./components/StationReadings";
import { CircularProgress } from "@mui/material";
import HistoricalBarChart from "./components/HistoricalBarChart";
import { toast } from "react-toastify";

export default function Home() {

  const [stations, setStations] = useState([]);
  const [selectedStation, setSelectedStation] = useState(null);
  const [sensorData, setSensorData] = useState([]);
  const [selectedSensor, setSelectedSensor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [historicalData, setHistoricalData] = useState([]);

  const getStationsData = async () => {
    try {
      const response = await axios.get("/api/stations");
      const data = response?.data?.results;
      setStations(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong while fetching stations. Please try again");
    }
  };

  const getHistoryData = async (id) => {
    try {
      const response = await axios.get(`/api/historical/${id}`);
      const data = response?.data?.results;
      setHistoricalData(data);
    } catch (error) {
      toast.error("Something went wrong while fetching historical data. Please try again");
    }
  };

  useEffect(() => {
    getStationsData();
  }, []);

  useEffect(() => {
    stations?.length > 0 && setSensorData(selectedStation?.sensors)
  }, [selectedStation]);

  useEffect(() => {
    selectedSensor != null && getHistoryData(selectedSensor?.id);
  }, [selectedSensor]);

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
              placeholder="Enter station of London"
              data={stations}
              selectedOption={selectedStation}
              setSelectedOption={setSelectedStation}
            />
        }
        {selectedStation && <StationReadings readings={selectedStation} />}
      </div>

      <div className="px-4 mx-auto max-w-xl py-10">
        {selectedStation != null && (
          <>
            <StationSelector
              placeholder="Select Parameters"
              data={sensorData}
              selectedOption={selectedSensor}
              setSelectedOption={setSelectedSensor}
            />
            {(selectedSensor != null && historicalData?.length > 0) ? <HistoricalBarChart data={historicalData} /> : null}
            {(selectedSensor != null && historicalData?.length == 0) && <p className="text-2xl">No data available</p>}
          </>
        )
        }
      </div>
    </div>
  );
}
