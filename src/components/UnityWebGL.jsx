import React, { useState, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { useLocation } from "react-router-dom";
import { getTranslation } from "./Translations";
import { useLanguage } from "../hooks/useLanguage";
import { Button } from "react-bootstrap";
import { unityProjects } from "./UnityProjectConfig";

export default function UnityWebGL({ config }) {
  const [isMobile, setIsMobile] = useState(true);
  const [startLoading, setStartLoading] = useState(false);
  const location = useLocation();
  const currentLanguage = useLanguage();

  const { unityProvider, loadingProgression, unload } = useUnityContext({
    loaderUrl: config.loaderUrl,
    dataUrl: config.dataUrl,
    frameworkUrl: config.frameworkUrl,
    codeUrl: config.codeUrl,
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
    if (location.pathname !== config.route) {
      unload(); // Unload Unity when navigating away from dev page
    }
  }, [location, config.route, unload]);

  if (location.pathname !== config.route) {
    return null; // Do not render anything if not on /dev route
  }

  if (isMobile) {
    return (
      <div className="unity-webgl-mobile-message">
        <p>Unity WebGL content is not available on mobile devices.</p>
      </div>
    );
  } else {
    return (
      <>
        {!startLoading && (
          <Button
            className="unity-start-loading-button"
            onClick={() => setStartLoading(true)}
          >
            {getTranslation("unity-start-loading-button", currentLanguage)}
          </Button>
        )}

        {startLoading && (
          <div className="unity-content">
            {loadingProgression < 1 && (
              <div className="loading-overlay">
                <h1>Loading... {Math.round(loadingProgression * 100)}%</h1>
              </div>
            )}
            ,
            <Unity unityProvider={unityProvider} className="unity-webgl" />
          </div>
        )}
      </>
    );
  }
}
