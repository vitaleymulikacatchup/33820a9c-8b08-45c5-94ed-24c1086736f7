"use client";
import NavbarBase from '@/components/navigation/NavbarBase';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import TimelineProcessFlow from '@/components/sections/layouts/roadmap/ProcessRoadmap';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import FooterBase from '@/components/footer/FooterBase';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" }}>
      <NavbarBase
        logoSrc="/images/logo.svg"
        logoAlt="MemeCoin Logo"
        leftButtonText="Menu"
        rightButtonText="Join the Meme"
        className="bg-transparent"
        buttonTextColor="text-white"
        buttonBgColor="bg-accent"
      />
      <BillboardHero
        title="Welcome to MemeCoin"
        subtitle="Your playful ride into the crypto space"
      />
      <SplitAbout
        description="Join the MemeCoin community and explore the future of fun, engaging crypto currencies!"
      />
      <TimelineProcessFlow
        items={[
          { id: '1', title: 'Step 1', description: 'Visit the website and learn about the features.', image: '/images/placeholder1.avif', items: [], reverse: false },
          { id: '2', title: 'Step 2', description: 'Involve in community discussions and forums.', image: '/images/placeholder2.avif', items: [], reverse: true },
          { id: '3', title: 'Step 3', description: 'Invest and join in the journey!', image: '/images/placeholder3.avif', items: [], reverse: false }
        ]}
        className="mb-8"
      />
      <TextGridTokenomics
        title="Tokenomics"
        description="Our economic model ensures fair distribution and sustainability."
        tokenData={[
          { value: '1B', description: 'Total Supply' },
          { value: '10%', description: 'Development Fund' },
          { value: '20%', description: 'Marketing' },
        ]}
      />
      <FooterBase
        logoSrc="/images/logo.svg"
        logoWidth={100}
        logoHeight={40}
        columns={[
          { title: 'Useful Links', items: [
            { label: 'Home', onClick: () => {} },
            { label: 'About', onClick: () => {} },
            { label: 'Tokenomics', onClick: () => {} }
          ]},
          { title: 'Legal', items: [
            { label: 'Privacy Policy', onClick: () => {} },
            { label: 'Terms of Service', onClick: () => {} }
          ]},
          { title: 'Connect', items: [
            { label: 'Twitter', onClick: () => {} },
            { label: 'Telegram', onClick: () => {} }
          ]}
        ]}
        copyrightText="© 2023 MemeCoin. All rights reserved."
        onPrivacyClick={() => {}}
        className="bg-transparent"
      />
    </SiteThemeProvider>
  );
}