import clsx from "clsx";

import { SvgPagesPlay } from "@/components/icons/pages/SvgPlay";

const cardData = {
  image:
    "https://dailymix-images.scdn.co/v2/img/ab67616d0000b2732629d34abc381ed283504d7b/1/en/default",
  title: "Daily Mix 1",
  subtitle: "Artist",
};

const MadeForItem = ({ isArtist }: any) => {
  const { image, title, subtitle } = cardData;
  return (
    <div className="LunqxlFIupJw_Dkx6mNx">
      <div draggable="true" className="XiVwj5uoqqSFpS4cYOC6">
        <div className="xBV4XgMq0gC5lQICFWY_">
          <ItemPicture isArtist={isArtist} image={image} />
          <div className="woJQ5t2YiaJhjTv_KE7p">
            <div className="PFgcCoJSWC3KjhZxHDYH">
              <PagesPlayButton small />
            </div>
          </div>
        </div>
        <div className="E1N1ByPFWo4AJLHovIBQ">
          <MadeForItemTitle title={title} />
          <MadeForItemSubtitle subtitle={subtitle} />
        </div>
        <CardClickHandler />
      </div>
    </div>
  );
};

export default MadeForItem;

const CardClickHandler = () => (
  <div className="tsv7E_RBBw6v0XTQlcRo" data-testid="card-click-handler"></div>
);

const ItemPicture = ({ isArtist, image }: any) => (
  <div
    className={clsx(
      "g4PZpjkqEh5g7xDpCr2K",
      isArtist ? "yYflTYbufy7rATGQiZfq" : ""
    )}
    style={{ ["--card-color" as any]: "#5477AF" }}
  >
    <div className="">
      <img // eslint-disable-line @next/next/no-img-element
        aria-hidden="false"
        draggable="false"
        loading="lazy"
        src={image}
        data-testid="card-image"
        alt=""
        className={clsx(
          "mMx2LUixlnN_Fu45JpFB SKJSok3LfyedjZjujmFt",
          isArtist ? "yYflTYbufy7rATGQiZfq" : "",
          "Yn2Ei5QZn19gria6LjZj"
        )}
      />
    </div>
  </div>
);

export const PagesPlayButton = ({ small }: any) => (
  <button
    data-testid="play-button"
    aria-label="Play Daily Mix 1"
    data-encore-id="buttonPrimary"
    className={clsx("Button-sc-qlcn5g-0", small ? "mCyvT" : "DjJKP")}
  >
    <span
      className={clsx(
        "ButtonInner-sc-14ud5tc-0",
        small ? "lmjRIQ" : "gGxSiT",
        "encore-bright-accent-set"
      )}
    >
      <span
        aria-hidden="true"
        className={clsx(
          "IconWrapper__Wrapper-sc-1hf1hjl-0",
          small ? "erHrNB" : "iDxtzn"
        )}
      >
        <SvgPagesPlay />
      </span>
    </span>
  </button>
);

const MadeForItemTitle = ({ title }: any) => (
  <a
    draggable="false"
    title="Daily Mix 1"
    className="Nqa6Cw3RkDMV8QnYreTr"
    dir="auto"
    href="/playlist/37i9dQZF1E38CQRep75Jse"
  >
    <div
      className="Type__TypeElement-sc-goli3j-0 gIkgYW nk6UgB4GUYNoAcPtAQaG"
      data-encore-id="type"
    >
      {title}
    </div>
  </a>
);

const MadeForItemSubtitle = ({ subtitle }: any) => (
  <div
    className="Type__TypeElement-sc-goli3j-0 bDHxRN Za_uNH8nTZ0qCuIqbPLZ"
    data-encore-id="type"
  >
    {subtitle}
  </div>
);
