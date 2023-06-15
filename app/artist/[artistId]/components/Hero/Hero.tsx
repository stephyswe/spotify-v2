import HeroContainer from "@/app/artist/[artistId]/components/Hero/HeroContainer";
import {
  HeroImage,
  HeroTitle,
  HeroVerified,
} from "@/app/artist/[artistId]/components/Hero/Parts";

const heroData = {
  name: "Skurk3n",
  monthlyListeners: "",
  src: "https://i.scdn.co/image/ab6761610000517417f0587fd68dc6dcce548446",
  isVerified: true,
  srcSet: [
    "https://i.scdn.co/image/ab6761610000517417f0587fd68dc6dcce548446 160w",
    "https://i.scdn.co/image/ab6761610000517417f0587fd68dc6dcce548446 320w",
    "https://i.scdn.co/image/ab6761610000e5eb17f0587fd68dc6dcce548446 320w",
    "https://i.scdn.co/image/ab6761610000e5eb17f0587fd68dc6dcce548446 640w",
  ],
};

const Hero = () => {
  const { name, monthlyListeners, src, isVerified, srcSet } = heroData;
  return (
    <HeroContainer
      Image={<HeroImage src={src} srcSet={srcSet} alt={name} />}
      Verified={<HeroVerified />}
      Title={<HeroTitle title={name} />}
      monthlyListeners={monthlyListeners}
    />
  );
};

export default Hero;
