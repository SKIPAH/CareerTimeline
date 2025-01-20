import React, { useState, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { useLocation } from "react-router-dom";

export default function UnityWebGL() {
  const [isMobile, setIsMobile] = useState(true);
  const location = useLocation();

  const { unityProvider, loadingProgression, unload } = useUnityContext({
    loaderUrl: "/WEBGLBUILDFORWEBSITE.loader.js",
    dataUrl: "/WEBGLBUILDFORWEBSITE.data",
    frameworkUrl: "/WEBGLBUILDFORWEBSITE.framework.js",
    codeUrl: "/WEBGLBUILDFORWEBSITE.wasm",
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
      unload(); // Unload Unity instance when component unmounts
    };
  }, [unload]);

  // Effect to handle route changes
  useEffect(() => {
    return () => {
      if (location.pathname !== "/dev") {
        unload(); // Unload Unity when navigating away from dev page
      }
    };
  }, [location, unload]);

  if (isMobile) {
    return (
      <div className="unity-webgl-mobile-message">
        <p>Unity WebGL content is not available on mobile devices.</p>
      </div>
    );
  } else {
    return (
      <>
        {loadingProgression !== 1 && (
          <h1>Loading... {Math.round(loadingProgression * 100)}%</h1>
        )}
        <Unity unityProvider={unityProvider} className="unity-webgl" />
      </>
    );
  }
}

