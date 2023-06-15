import SvgInstall from "@/components/icons/pages/header/SvgInstall";

const LinkInstallApp = () => (
  <a
    draggable="false"
    data-encore-id="buttonPrimary"
    className="Button-sc-qlcn5g-0 cabTyT"
    href="/download"
  >
    <span className="ButtonInner-sc-14ud5tc-0 eDaZIM encore-over-media-set">
      <span
        aria-hidden="true"
        className="IconWrapper__Wrapper-sc-1hf1hjl-0 eIcYHc"
      >
        <SvgInstall />
      </span>
      <span
        className="Type__TypeElement-sc-goli3j-0 eoWRdH ellipsis-one-line"
        data-encore-id="type"
      >
        Install App
      </span>
    </span>
  </a>
);

export default LinkInstallApp;
