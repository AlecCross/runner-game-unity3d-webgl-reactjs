import React from "react";
// import Unity from "react-unity-webgl"
import { Unity, useUnityContext } from "react-unity-webgl";
import urlHome from "../package.json";

function App() {
  const { unityProvider } = new useUnityContext({
    dataUrl: `${urlHome.homepage}build/ReactBuild.data`,
    frameworkUrl: `${urlHome.homepage}build/ReactBuild.framework.js`,
    loaderUrl: `${urlHome.homepage}build/ReactBuild.loader.js`,
    codeUrl: `${urlHome.homepage}build/ReactBuild.wasm`,
  });
  return <Unity unityProvider={unityProvider} style={{ width: 800, height: 600, border: "solid black 1px" }} />;
}

export default App
