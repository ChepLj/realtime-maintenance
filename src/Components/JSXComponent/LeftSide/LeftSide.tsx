import { useEffect } from "react";
import { ITF_UrlData } from "../../../interface/interface";
import "./LeftSide.css";

export function LeftSide({ urlData }: { urlData: ITF_UrlData }) {
  return (
    <section className="LeftSide">
      <div className="Container">
        <span className="Title">Access from Local</span>
        <a className={`ButtonWrap ${urlData.ServerLocal1 ? "" : "Disable"}`} href={urlData.ServerLocal1}>
          Sever Local #1
        </a>
        <a className={`ButtonWrap ${urlData.ServerLocal2 ? "" : "Disable"}`} href={urlData.ServerLocal2}>
          Sever Local #2
        </a>
      </div>
      <div className="Container">
        <span className="Title">Access from Internet</span>
        <a className={`ButtonWrap ${urlData.ServerInternet1 ? "" : "Disable"}`} href={urlData.ServerInternet1}>
          Sever Internet #1
        </a>
        <a className={`ButtonWrap ${urlData.ServerInternet2 ? "" : "Disable"}`} href={urlData.ServerInternet2}>
          Sever Internet #2
        </a>
        <a className={`ButtonWrap ${urlData.ServerInternet3 ? "" : "Disable"}`} href={urlData.ServerInternet3}>
          Sever Internet #3
        </a>
      </div>
    </section>
  );
}
