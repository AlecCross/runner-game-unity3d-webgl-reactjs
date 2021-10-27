import React from "react";
// import Unity from "react-unity-webgl"
import Unity, {UnityContext} from "react-unity-webgl"

const unityContext = new UnityContext({
    loaderUrl: "./Game/Build/Build.loader.js",
    dataUrl: "./Game/build/Build.data",
    frameworkUrl: "./Game/build/Build.framework.js",
    codeUrl: "./Game/build/Build.wasm",
})

function App() {
  return <div style={{textAlign: "center"}}>
    <h1>Runner-Game-Unity3d-WebGL-ReactJS</h1>
    <Unity
        style={{
          width: 600,
          height: 400,
          border: "2px solid black",
          backround: "green"
        }}
        unityContext={unityContext}
    />
  </div>
}

export default App
