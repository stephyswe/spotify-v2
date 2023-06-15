const HeroContainer = ({ monthlyListeners, Image, Verified, Title }: any) => (
  <div className="contentSpacing NXiYChVp4Oydfxd7rT5r RMDSGDMFrx8eXHpFphqG">
    <div
      className="gHImFiUWOg93pvTefeAD"
      style={{ backgroundColor: "rgb(104, 184, 240)" }}
    ></div>
    <div className="gHImFiUWOg93pvTefeAD xYgjMpAjE5XT05aRIezb"></div>
    <div></div>
    {Image}

    <div className="RP2rRchy4i8TIp1CTmb7">
      <span className="CmR9tHJ5ta6oWJlKBm3k">
        <div className="b0NcxAbHvRbqgs2S8QDg bn2UNQDs5GLY5rjp5Ljh"></div>
        <svg
          role="img"
          height="24"
          width="24"
          aria-hidden="true"
          className="Svg-sc-ytk21e-0 esyykA b0NcxAbHvRbqgs2S8QDg"
          viewBox="0 0 24 24"
          data-encore-id="icon"
        >
          <path d="M10.814.5a1.658 1.658 0 0 1 2.372 0l2.512 2.572 3.595-.043a1.658 1.658 0 0 1 1.678 1.678l-.043 3.595 2.572 2.512c.667.65.667 1.722 0 2.372l-2.572 2.512.043 3.595a1.658 1.658 0 0 1-1.678 1.678l-3.595-.043-2.512 2.572a1.658 1.658 0 0 1-2.372 0l-2.512-2.572-3.595.043a1.658 1.658 0 0 1-1.678-1.678l.043-3.595L.5 13.186a1.658 1.658 0 0 1 0-2.372l2.572-2.512-.043-3.595a1.658 1.658 0 0 1 1.678-1.678l3.595.043L10.814.5zm6.584 9.12a1 1 0 0 0-1.414-1.413l-6.011 6.01-1.894-1.893a1 1 0 0 0-1.414 1.414l3.308 3.308 7.425-7.425z"></path>
        </svg>
        <span
          data-encore-id="type"
          className="Type__TypeElement-sc-goli3j-0 ieTwfQ"
        >
          Verified Artist
        </span>
      </span>
      <span
        dir="auto"
        className="rEN7ncpaUeSGL9z0NGQR"
        draggable="true"
        data-testid="entityTitle"
        aria-expanded="false"
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
          Skurk3n
        </h1>
      </span>
      <span className="Ydwa1P5GkCggtLlSvphs">74,518 monthly listeners</span>
    </div>

    {/* <div className="RP2rRchy4i8TIp1CTmb7">
      {Verified}
      {Title}
      <span className="Ydwa1P5GkCggtLlSvphs">
        {monthlyListeners} monthly listeners
      </span>
    </div> */}
  </div>
);

export default HeroContainer;
