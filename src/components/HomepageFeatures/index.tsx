import Heading from "@theme/Heading";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Powerful Media Processing",
    Svg: require("@site/static/img/Processing.svg").default,
    description: (
      <>
        FFmpeg provides comprehensive capabilities for processing audio, video,
        and other multimedia files with support for numerous formats and codecs.
      </>
    ),
  },
  {
    title: "Format Conversion",
    Svg: require("@site/static/img/Conversion.svg").default,
    description: (
      <>
        Convert between virtually any media format. FFmpeg supports hundreds of
        audio and video codecs, making it the ultimate tool for format conversion.
      </>
    ),
  },
  {
    title: "Video & Audio Filtering",
    Svg: require("@site/static/img/Filter.svg").default,
    description: (
      <>
        Apply complex filters to modify your media files. From simple scaling to
        advanced effects, FFmpeg's filtering system offers endless possibilities.
      </>
    ),
  },
  {
    title: "Stream Manipulation",
    Svg: require("@site/static/img/Stream.svg").default,
    description: (
      <>
        Handle live streams, network protocols, and real-time media processing.
        Perfect for streaming services, broadcasting, and live media applications.
      </>
    ),
  },
  {
    title: "Hardware Acceleration",
    Svg: require("@site/static/img/Hardware.svg").default,
    description: (
      <>
        Leverage hardware acceleration for faster processing. Support for NVIDIA
        NVENC, AMD AMF, Intel QSV, and other hardware encoders/decoders.
      </>
    ),
  },
  {
    title: "Cross-Platform Support",
    Svg: require("@site/static/img/Platform.svg").default,
    description: (
      <>
        Run FFmpeg on virtually any platform. Available for Windows, macOS, Linux,
        and many other operating systems with consistent functionality.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className="w-full md:w-1/3 p-4">
      <div className="flex justify-center">
        <Svg className="h-48 w-48" role="img" />
      </div>
      <div className="text-center px-4">
        <Heading as="h3" className="text-xl font-semibold mt-4">
          {title}
        </Heading>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className="flex flex-col items-center py-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
