import { pageData } from "@/app/(site)/data";
import MadeForSection from "@/components/app/(site)/MadeForSection";

export default function SectionPage() {
  return (
    <div data-testid="home-section-page">
      <div className="uIJTvxFOg2izOY7aRRiU">
        <div className="I3EivnXTjYMpSbPUiYEg contentSpacing">
          <MadeForSection data={pageData[0]} allItems />
        </div>
      </div>
    </div>
  );
}
