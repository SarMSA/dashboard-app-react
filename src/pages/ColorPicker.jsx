import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";
import React from "react";
// import * as ReactDOM from "react-dom";
import { Header } from "../components";

const ColorPicker = () => {
  function tileRender(args) {
    args.element.classList.add("e-icons");
    args.element.classList.add("e-custom-tile");
  }
  function change(args) {
    document.getElementById("preview").style.backgroundColor = args.currentValue.hex;
  }
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category={"App"} title={"Color Picker"} />
      <div className="text-center">
        <div id="preview" />
        <div>
          <p className="mt-2 mb-4 text-2xl font-semibold ">Inline Palette</p>
          <ColorPickerComponent
            id="inline-palette"
            // modeSwitcher={false}
            inline={true}
            showButtons={false}
            // beforeTileRender={tileRender}

            mode="Picker"
            change={change}
          />
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
