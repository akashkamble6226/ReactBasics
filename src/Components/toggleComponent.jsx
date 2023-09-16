import { useState } from "react";

import cssClasses from "../CSS/toggleComponent.module.css";

const ToggleComponent = () => {
  const [isOn, setIsOn] = useState(false);

  function changeToggleStatus()
  {
    setIsOn(!isOn);
  }

  return (
    <>
      <div className={cssClasses.row}>
        {/* <div className={cssClasses.col}>
          <h4> Current status - {isOn.toString()} </h4>
        </div> */}
        <div className={cssClasses.col}>
        <input type="checkbox" checked={isOn} onChange={changeToggleStatus}/>
          <button onClick={changeToggleStatus}>ToggleStatus</button>
        </div>
      </div>
    </>
  );
};


export default ToggleComponent;