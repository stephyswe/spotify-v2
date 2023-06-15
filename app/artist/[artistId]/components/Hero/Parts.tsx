import { SvgVerified } from "@/components/icons/pages/SvgVertified";

const HeroImage = ({ alt, src, srcSet }: any) => (
  <div className="_gLjHpwOxHFwo5nLM8hb" draggable="true">
    <div className="CmkY1Ag0tJDfnFXbGgju" draggable="false">
      <img // eslint-disable-line @next/next/no-img-element
        aria-hidden="false"
        draggable="false"
        loading="lazy"
        src={src}
        alt={alt}
        className="mMx2LUixlnN_Fu45JpFB CmkY1Ag0tJDfnFXbGgju _EShSNaBK1wUIaZQFJJQ ta4ePOlmGXjBYPTd90lh Yn2Ei5QZn19gria6LjZj"
        srcSet={srcSet.join(",")}
        sizes="(min-width: 1280px) 232px, 192px"
      />
    </div>
  </div>
);

const HeroVerified = () => (
  <span className="CmR9tHJ5ta6oWJlKBm3k">
    <div className="b0NcxAbHvRbqgs2S8QDg bn2UNQDs5GLY5rjp5Ljh"></div>
    <SvgVerified />
    <span
      data-encore-id="type"
      className="Type__TypeElement-sc-goli3j-0 ieTwfQ"
    >
      Verified Artist
    </span>
  </span>
);

const HeroTitle = ({ title }: any) => (
  <span
    dir="auto"
    className="rEN7ncpaUeSGL9z0NGQR"
    draggable="true"
    data-testid="entityTitle"
  >
    <h1
      dir="auto"
      data-encore-id="type"
      className="Type__TypeElement-sc-goli3j-0 dYGhLW"
      style={{
        margin: "0.08em 0px 0.12em",
        visibility: "visible",
        width: "100%",
        fontSize: "6rem",
      }}
    >
      {title}
    </h1>
  </span>
);

export { HeroImage, HeroTitle, HeroVerified };
