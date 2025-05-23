import dayjs from "dayjs";

const StationReadings = ({readings}) => {
  return (
    <div className="p-4 border rounded-2xl bg-white shadow mt-5">
      <p className="text-2xl font-bold pb-6">Station Readings</p>

      <div className="flex justify-between py-2">
        <p className="font-medium">Name</p>
        <p>{readings?.name}</p>
      </div>
      <div className="flex justify-between py-2">
        <p className="font-medium">Country Name</p>
        <p>{readings?.country?.name}</p>
      </div>
      <div className="flex justify-between py-2">
        <p className="font-medium">Timezone</p>
        <p>{readings?.timezone}</p>
      </div>
      <div className="flex justify-between py-2">
        <p className="font-medium">Date Time First</p>
        <p>{dayjs(readings?.datetimeFirst?.utc).format("D MMMM YYYY")}</p>
      </div>
      <div className="flex justify-between py-2">
        <p className="font-medium">Date Time Last</p>
        <p>{dayjs(readings?.datetimeLast?.utc).format("D MMMM YYYY")}</p>
      </div>
      <div className="flex justify-between py-2 flex-wrap gap-2">
        <p className="font-medium">Measurements</p>
        <p className="text-right whitespace-normal break-words max-w-md">
          {readings?.sensors?.map((sensor) => sensor.name).join(", ")}
        </p>
      </div>
    </div>
  );
};

export default StationReadings;
