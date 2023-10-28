import "./RightSide.css";
import setting from "../../../media/setting.png";
import { useState } from "react";
export function RightSide() {
  const [settingDisplay, setSettingDisplay] = useState<Boolean>(false);
  return (
    <section className="RightSide">
      <div className="SettingWrap" onClick={() => setSettingDisplay(!settingDisplay)}>
        <img className="SettingIcon" src={setting} />
      </div>
      {settingDisplay && (
        <div className="SettingArea">
          <div className="ButtonUploadWrap">
            <button className="ButtonUpload">Update</button>
            <button className="ButtonCancel">Cancel</button>
          </div>
          <div className="InputWrap">
            <span className="Title">Server Local #1</span>
            <input className="Input" type="text" />
          </div>
          <div className="InputWrap">
            <span className="Title">Server Local #2</span>
            <input className="Input" type="text" />
          </div>
          <div className="InputWrap">
            <span className="Title">Server Internet #1</span>
            <input className="Input" type="text" />
          </div>
          <div className="InputWrap">
            <span className="Title">Server Internet #2</span>
            <input className="Input" type="text" />
          </div>
          <div className="InputWrap">
            <span className="Title">Server Internet #3</span>
            <input className="Input" type="text" />
          </div>
        </div>
      )}
    </section>
  );
}
