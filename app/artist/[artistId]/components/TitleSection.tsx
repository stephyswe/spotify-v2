const TitleSection = ({ showAll, title }: any) => (
  <div className="q8AZzDc_1BumBHZg0tZb">
    <div className="OMuRYOdpUbGif12_lRJl">
      {/*  <ArtistTitle title={title} /> */}
      {showAll ? <ShowAll /> : null}
    </div>
  </div>
);

export default TitleSection;

const ShowAll = () => (
  <a
    draggable="false"
    className="a7lvtXATo3HALtrsOHtO HOgue4Eg4UdBR58M0633"
    href="/artist/1HUodyPt48DvzRQZksaOQW/discography/all"
  >
    <span
      data-encore-id="type"
      className="Type__TypeElement-sc-goli3j-0 eoWRdH"
    >
      Show all
    </span>
  </a>
);
