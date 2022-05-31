import Reactotron from "reactotron-react-js";
import { name } from "./app.json";
import { reactotronRedux } from "reactotron-redux";
import sagaPlugin from "reactotron-redux-saga";

declare global {
  interface Console {
    tron: any;
  }
}

const reactotron = Reactotron.configure({ name }) // controls connection & communication settings
  .use(sagaPlugin({ except: [""] }))
  .use(reactotronRedux()) //redux plugin
  .connect();

reactotron.clear!();

console.tron = reactotron;

export default reactotron;
