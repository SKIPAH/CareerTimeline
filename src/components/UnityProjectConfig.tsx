export interface UnityProjectConfig {
  id: string;
  loaderUrl: string;
  dataUrl: string;
  frameworkUrl: string;
  codeUrl: string;
  route: string;
}

export const unityProjects: UnityProjectConfig[] = [
  {
    id: "project1",
    loaderUrl: "/WEBGLBUILDFORWEBSITE.loader.js",
    dataUrl: "/WEBGLBUILDFORWEBSITE.data",
    frameworkUrl: "/WEBGLBUILDFORWEBSITE.framework.js",
    codeUrl: "/WEBGLBUILDFORWEBSITE.wasm",
    route: "/programming",
  },
  {
    id: "project2",
    loaderUrl: "/MonkeGameBuild.loader.js",
    dataUrl: "/MonkeGameBuild.data",
    frameworkUrl: "/MonkeGameBuild.framework.js",
    codeUrl: "/MonkeGameBuild.wasm",
    route: "/gamedevelopment",
  },
];
