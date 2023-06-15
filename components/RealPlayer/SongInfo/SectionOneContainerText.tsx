export const SectionOneContainerText = ({ song }: any) => {
  return (
    <div className="j96cpCtZAIdqxcDrYHPI ZcNcu7WZgOAz_Mkcoff3">
      <div className="Q_174taY6n64ZGC3GsKj">
        <div className="eSMjmiD29Ox35O95waw6">
          <div className="W5cB_o0XkkU7Q8tlTGxq">
            <div className="PGSe59fD1Hwc9yUM2d3U customStyle">
              <div
                data-testid="context-item-info-title"
                className="Type__TypeElement-sc-goli3j-0 ieTwfQ Q_174taY6n64ZGC3GsKj"
                dir="auto"
                data-encore-id="type"
                style={{
                  marginBottom: "1px",
                }}
              >
                <span draggable="true">
                  <a
                    draggable="false"
                    data-testid="context-item-link"
                    href={"#"} // Default to "#" if imageUrl is null
                    style={{ border: "none" }}
                  >
                    {song.title}
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="s1jyNJBxq16eqkqCf6Ax"></div>
      <div className="gpNta6i8q3KYJC6WBZQC">
        <div className="eSMjmiD29Ox35O95waw6">
          <div className="W5cB_o0XkkU7Q8tlTGxq">
            <div className="PGSe59fD1Hwc9yUM2d3U customStyle">
              <div
                data-testid="context-item-info-subtitles"
                className="Type__TypeElement-sc-goli3j-0 fcYQUS gpNta6i8q3KYJC6WBZQC"
                data-encore-id="type"
              >
                <span>
                  <a
                    draggable="true"
                    data-testid="context-item-info-artist"
                    dir="auto"
                    href="/artist/3KdFzFHhUFCRdbllsQ1lZd"
                  >
                    {song.author}
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
