import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function UnityWebGL() {
  const { unityProvider, loadingProgression } = useUnityContext({
    loaderUrl: "/WEBGLBUILDFORWEBSITE.loader.js",
    dataUrl: "/WEBGLBUILDFORWEBSITE.data",
    frameworkUrl: "/WEBGLBUILDFORWEBSITE.framework.js",
    codeUrl: "/WEBGLBUILDFORWEBSITE.wasm",
  });

  return (
    <>
      {loadingProgression !== 1 && (
        <h1>Loading... {Math.round(loadingProgression * 100)}%</h1>
      )}
      <Unity
        unityProvider={unityProvider}
        style={{
          width: "960px",
          height: "600px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
        }}
      />
    </>
  );
}

export default UnityWebGL;
