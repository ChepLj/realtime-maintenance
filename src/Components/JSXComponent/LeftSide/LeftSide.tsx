import { useEffect, useState } from "react";
import { ITF_UrlData } from "../../../interface/interface";
import "./LeftSide.css";

export function LeftSide({ urlData }: { urlData: ITF_UrlData }) {
  const [serverLocal1Status, setServerLocal1Status] = useState<"Unknown" | "Ok" | "Disable">("Disable");
  const [serverLocal2Status, setServerLocal2Status] = useState<"Unknown" | "Ok" | "Disable">("Disable");
  const [serverInternet1Status, setServerInternet1Status] = useState<"Unknown" | "Ok" | "Disable">("Disable");
  const [serverInternet2Status, setServerInternet2Status] = useState<"Unknown" | "Ok" | "Disable">("Disable");
  const [serverInternet3Status, setServerInternet3Status] = useState<"Unknown" | "Ok" | "Disable">("Disable");
  //TODO: handle Check Url Status
  const handleCheckUrlStatus = (res: any): "Unknown" | "Ok" | "Disable" => {

    if (res && res.status >= 200 && res.status < 400) return "Ok";
    return "Unknown";
  };
  //TODO: handle Check Url Status
  //TODO: check server OK
  useEffect(() => {
    //server Local 1
    if (urlData.ServerLocal1) {
      fetch(urlData.ServerLocal1)
        .then((res) => setServerLocal1Status(handleCheckUrlStatus(res)))
        .catch((err) => {
          console.log(err);
          setServerLocal1Status("Unknown");
        });
    } else {
      setServerLocal1Status("Disable");
    }
    //server Local 2
    if (urlData.ServerLocal2) {
      fetch(urlData.ServerLocal2)
        .then((res) => setServerLocal2Status(handleCheckUrlStatus(res)))
        .catch((err) => {
          console.log(err);
          setServerLocal2Status("Unknown");
        });
    } else {
      setServerLocal2Status("Disable");
    }
    //server Internet 1
    if (urlData.ServerInternet1) {
      fetch(urlData.ServerInternet1)
        .then((res) => setServerInternet1Status(handleCheckUrlStatus(res)))
        .catch((err) => {
          console.log(err);
          setServerInternet1Status("Unknown");
        });
    } else {
      setServerInternet1Status("Disable");
    }
    //server Internet 2
    if (urlData.ServerInternet2) {
      fetch(urlData.ServerInternet2)
        .then((res) => setServerInternet2Status(handleCheckUrlStatus(res)))
        .catch((err) => {
          console.log(err);
          setServerInternet2Status("Unknown");
        });
    } else {
      setServerInternet2Status("Disable");
    }
    //server Internet 3
    if (urlData.ServerInternet3) {
      fetch(urlData.ServerInternet3)
        .then((res) => setServerInternet3Status(handleCheckUrlStatus(res)))
        .catch((err) => {
          console.log(err);
          setServerInternet3Status("Unknown");
        });
    } else {
      setServerInternet3Status("Disable");
    }
  }, [JSON.stringify(urlData)]);
  //TODO: check server OK
  return (
    <section className="LeftSide fullWidth leftSide-MinWidth-sm">
      <div className="Container width-90">
        <span className="Title">Access from Local</span>
        <a className={`ButtonWrap ${serverLocal1Status} leftSide-Button-MinWidth-sm`} href={urlData.ServerLocal1}>
          Sever Local #1
        </a>
        <a className={`ButtonWrap ${serverLocal2Status} leftSide-Button-MinWidth-sm`} href={urlData.ServerLocal2}>
          Sever Local #2
        </a>
      </div>
      <div className="Container width-90">
        <span className="Title">Access from Internet</span>
        <a className={`ButtonWrap ${serverInternet1Status} leftSide-Button-MinWidth-sm`} href={urlData.ServerInternet1}>
          Sever Internet #1
        </a>
        <a className={`ButtonWrap ${serverInternet2Status} leftSide-Button-MinWidth-sm`} href={urlData.ServerInternet2}>
          Sever Internet #2
        </a>
        <a className={`ButtonWrap ${serverInternet3Status} leftSide-Button-MinWidth-sm`} href={urlData.ServerInternet3}>
          Sever Internet #3
        </a>
      </div>
    </section>
  );
}
