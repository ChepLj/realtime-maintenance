import "./RightSide.css";
import setting from "../../../media/setting.png";
import { useEffect, useState } from "react";
import postDataToDB from "../../../api/postDataToDB";
import { ITF_UploadContainer, ITF_UrlData } from "../../../interface/interface";

export function RightSide({ urlData, setRefresh }: { urlData: ITF_UrlData; setRefresh: Function }) {
  const [settingDisplay, setSettingDisplay] = useState<boolean>(false);

  //TODO: check permit setting
  const checkPermitSetting = () => {
    if (!settingDisplay) {
      const keyInput = prompt("Enter the code Id of Admin");
      if (keyInput == "1285") {
        setSettingDisplay(!settingDisplay);
      } else {
        alert("Wrong code id of Admin");
      }
    } else {
      setSettingDisplay(!settingDisplay);
    }
  };
  //TODO_END: check permit setting
  //TODO: get url of server to update'
  const getUrlOfServerToUpdate = () => {
    interface ITF_ElmList {
      [key: string]: HTMLInputElement;
    }
    const elmList: ITF_ElmList = {
      serverLocal1Elm: document.getElementById("ServerLocal1") as HTMLInputElement,
      serverLocal2Elm: document.getElementById("ServerLocal2") as HTMLInputElement,
      serverInternet1Elm: document.getElementById("ServerInternet1") as HTMLInputElement,
      serverInternet2Elm: document.getElementById("ServerInternet2") as HTMLInputElement,
      serverInternet3Elm: document.getElementById("ServerInternet3") as HTMLInputElement,
    };
    for (const elm in elmList) {
      if (elmList[elm].value) {
        if (!urlify(elmList[elm].value)) {
          alert(`${elm} is not correct URL !`);
          return false;
        }
      }
    }
    return {
      ServerLocal1: elmList.serverLocal1Elm.value,
      ServerLocal2: elmList.serverLocal2Elm.value,
      ServerInternet1: elmList.serverInternet1Elm.value,
      ServerInternet2: elmList.serverInternet2Elm.value,
      ServerInternet3: elmList.serverInternet3Elm.value,
    };
  };

  const postUrlServerToDB = () => {
    const data = getUrlOfServerToUpdate();
    if (data) {
      const containerUpload: ITF_UploadContainer[] = [
        {
          ref: "Data/",
          data: data,
        },
      ];
      //callback
      const callback = (messenger: string) => {
        if (messenger === "post successfully!") {
          setRefresh(Math.random());
        } else {
          alert("Error post ");
        }
      };
      //--------
      postDataToDB(containerUpload, callback);
    }
  };
  //TODO_END: get url of server to update
  //TODO: check correct Url
  const urlify = (text: string) => {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.match(urlRegex);
  };
  //TODO_END: check correct Url
  return (
    <section className="RightSide">
      <div className="SettingWrap" onClick={checkPermitSetting}>
        <img className="SettingIcon" src={setting} alt="" />
      </div>
      {settingDisplay && <Setting urlData={urlData} postUrlServerToDB={postUrlServerToDB} setSettingDisplay={setSettingDisplay} settingDisplay={settingDisplay} />}
    </section>
  );
}

//JSX: Setting
function Setting({ urlData, postUrlServerToDB, setSettingDisplay, settingDisplay }: { urlData: ITF_UrlData; postUrlServerToDB: any; setSettingDisplay: Function; settingDisplay: boolean }) {
  useEffect(() => {
    const elmList = {
      ServerLocal1 : document.getElementById("ServerLocal1") as HTMLInputElement,
      ServerLocal2 : document.getElementById("ServerLocal2") as HTMLInputElement,
      ServerInternet1 : document.getElementById("ServerInternet1") as HTMLInputElement,
      ServerInternet2 : document.getElementById("ServerInternet2") as HTMLInputElement,
      ServerInternet3 : document.getElementById("ServerInternet3") as HTMLInputElement,
    }
    
    for(const item in urlData){
      const keyTemp = item as keyof ITF_UrlData
      if(urlData[keyTemp]){
        elmList[keyTemp].value = urlData[keyTemp]
      }
    }
  }, []);
  return (
    <div className="SettingArea">
      <div className="ButtonUploadWrap">
        <button className="ButtonUpload" onClick={postUrlServerToDB}>
          Update
        </button>
        <button className="ButtonCancel" onClick={() => setSettingDisplay(!settingDisplay)}>
          Cancel
        </button>
      </div>
      <div className="InputWrap">
        <span className="Title">Server Local #1</span>
        <input id="ServerLocal1" className="Input" type="text" />
      </div>
      <div className="InputWrap">
        <span className="Title">Server Local #2</span>
        <input id="ServerLocal2" className="Input" type="text" />
      </div>
      <div className="InputWrap">
        <span className="Title">Server Internet #1</span>
        <input id="ServerInternet1" className="Input" type="text" />
      </div>
      <div className="InputWrap">
        <span className="Title">Server Internet #2</span>
        <input id="ServerInternet2" className="Input" type="text" />
      </div>
      <div className="InputWrap">
        <span className="Title">Server Internet #3</span>
        <input id="ServerInternet3" className="Input" type="text" />
      </div>
    </div>
  );
}
//JSX: Setting
