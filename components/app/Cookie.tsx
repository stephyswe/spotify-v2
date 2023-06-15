const Cookie = () => {
  return (
    <div id="onetrust-consent-sdk">
      <div className="onetrust-pc-dark-filter ot-hide ot-fade-in"></div>
      <div
        id="onetrust-pc-sdk"
        className="ot-sdk-container otPcCenter ot-hide ot-fade-in ot-accordions-pc"
        aria-modal="true"
        role="alertdialog"
        lang="en"
        aria-label="About Your Privacy"
      >
        {/* <!-- Close Button --> */}
        <button
          id="close-pc-btn-handler"
          className="main pc-close-button ot-close-icon"
          aria-label="Close"
        ></button>
        {/* <!-- Close Button --> */}
        <div id="ot-content" className="ot-main-content">
          {/* <!-- Logo Tag --> */}
          <div className="pc-logo-container">
            <div
              className="pc-logo"
              role="img"
              aria-label="Company Logo"
              style={{
                backgroundImage:
                  'url("https://cdn.cookielaw.org/logos/static/ot_company_logo.png")',
                backgroundPosition: "left",
              }}
            >
              <h2 id="pc-title">About Your Privacy</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
