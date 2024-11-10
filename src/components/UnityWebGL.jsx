import React, { useState, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function UnityWebGL() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { unityProvider, loadingProgression } = useUnityContext({
    loaderUrl: "/WEBGLBUILDFORWEBSITE.loader.js",
    dataUrl: "/WEBGLBUILDFORWEBSITE.data",
    frameworkUrl: "/WEBGLBUILDFORWEBSITE.framework.js",
    codeUrl: "/WEBGLBUILDFORWEBSITE.wasm",
  });

  if (isMobile) {
    return (
      <div className="unity-webgl-mobile-message">
        <p>Unity WebGL content is not available on mobile devices.</p>
      </div>
    );
  }

  return (
    <>
      {loadingProgression !== 1 && (
        <h1>Loading... {Math.round(loadingProgression * 100)}%</h1>
      )}
      <Unity unityProvider={unityProvider} className="unity-webgl" />
    </>
  );
}

export default UnityWebGL;
