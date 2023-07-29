import { useEffect, useState } from "react";
import { RESTRO_INFO_API } from "./constants";

const useResInfo = (restroId) => {
  const [ResInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchResInfo();
  }, []);

  const fetchResInfo = async () => {
    const ResInfo = await fetch(RESTRO_INFO_API + restroId);
    const json = await ResInfo.json();
    setResInfo(json.data);
  };

  return ResInfo;
};

export default useResInfo;
