import Unity, { UnityContext } from "react-unity-webgl"

const unityContext = new UnityContext({
    loaderUrl: "./Runner-Game-Unity3d-WebGL/Build/Runner-Game-Unity3d-WebGL.loader.js",
    dataUrl: "./Runner-Game-Unity3d-WebGL/build/Runner-Game-Unity3d-WebGL.data",
    frameworkUrl: "./Runner-Game-Unity3d-WebGL/build/Runner-Game-Unity3d-WebGL.framework.js",
    codeUrl: "./Runner-Game-Unity3d-WebGL/build/Runner-Game-Unity3d-WebGL.wasm",
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
    ></Unity>
  </div>
}

export default App
