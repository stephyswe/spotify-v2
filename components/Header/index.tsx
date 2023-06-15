import HeaderArrows from "@/components/Header/Arrows";
import HeaderBackground from "@/components/Header/Background";
import UpgradeButton from "@/components/Header/Buttons/UpgradeButton";
import UserButton from "@/components/Header/Buttons/UserButton";
import LinkInstallApp from "@/components/Header/LinkInstall";

const Header = () => (
  <div className="PHgyArRLVFknlaOm31ID">
    <header aria-label="Top bar and user menu" className="facDIsOQo9q7kiWc4jSg">
      <HeaderBackground />
      <HeaderArrows />
      <div
        data-testid="topbar-content-wrapper"
        className="rovbQsmAS_mwvpKHaVhQ"
      ></div>
      <div className="GTAFfOA_w5vh_bDaGJAG"></div>
      <UpgradeButton />
      <LinkInstallApp />
      <UserButton />
    </header>
  </div>
);

export default Header;
