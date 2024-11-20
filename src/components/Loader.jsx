import React from "react";
import loaderModule from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={loaderModule.wifi_loader}>
      <svg className={loaderModule.circle_outer} viewBox="0 0 86 86">
        <circle className={loaderModule.back} cx={43} cy={43} r={40} />
        <circle className={loaderModule.front} cx={43} cy={43} r={40} />
        <circle className={loaderModule.new} cx={43} cy={43} r={40} />
      </svg>
      <svg className={loaderModule.circle_middle} viewBox="0 0 60 60">
        <circle className={loaderModule.back} cx={30} cy={30} r={27} />
        <circle className={loaderModule.front} cx={30} cy={30} r={27} />
      </svg>
      <svg className={loaderModule.circle_inner} viewBox="0 0 34 34">
        <circle className={loaderModule.back} cx={17} cy={17} r={14} />
        <circle className={loaderModule.front} cx={17} cy={17} r={14} />
      </svg>
      <div className={loaderModule.text} data-text="Cargando" />
    </div>
  );
};

export default Loader;
