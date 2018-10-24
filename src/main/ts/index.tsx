import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./redux/store";
import SamplePageComponent from "./components";
import { WeatherService } from "./service/WeatherService";
import { OpenWeatherMapWeatherService } from "./service/OpenWeatherMapWeatherService";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <div className="container">
        <SamplePageComponent />
    </div>
  </Provider>,
  rootElement
);