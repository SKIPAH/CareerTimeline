declare module "*.webp" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "../components/BackgroundVideo" {
    const BackgroundVideo: React.FC<{ src: string }>;
    export default BackgroundVideo;
  }

  declare module "*.mp4" {
    const src: string;
    export default src;
  }


  declare module "./TimelineElements" {
    const TimelineElements: {
      [language: string]: Array<{
        id: string;
        date: string;
        icon: string;
        title: string;
        location: string;
        description: string;
        buttonText?: string;
        buttonLink?: string;
        buttonText2?: string;
        buttonLink2?: string;
      }>;
    };
    export default TimelineElements;
  }