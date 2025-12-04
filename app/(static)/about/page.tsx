import { Metadata } from "next";
import HeroBanner from "@/components/shared/hero-banner";
import SectionTitle from "@/components/shared/section-title";
import { Home } from "lucide-react";
import { getSeoData } from "@/services/services";
import Container from "@/components/shared/container";
import Schema from "@/components/shared/schema";
import AboutNavigation from "./_components/about-navigation";
import AboutSection from "./_components/about-section";
import VissionMission from "./_components/vission-mission";
import OurImpact from "./_components/our-impact";
import FutureOutlook from "./_components/future-outlook";
import WhyEuroquest from "./_components/why-euroquest";
import OurAchievements from "./_components/our-achievements";
import OurClients from "./_components/our-clients";
import OurValues from "./_components/our-values";
import CoverageSection from "./_components/coverage-section";

const breadcrumbs = [
  { label: "", href: "/", icon: <Home width={16} height={16} /> },
  { label: "من نحن", href: "/about" },
];

// Generate metadata dynamically
export async function generateMetadata(): Promise<Metadata> {
  try {
    const seoData = await getSeoData("about");
    const seo = seoData.seo;

    return {
      title: seo.meta_title,
      description: seo.meta_description,
      keywords: seo.meta_keywords,
      openGraph: {
        title: seo.meta_title,
        description: seo.meta_description,
        images: [
          {
            url: seo.meta_image,
            width: 1200,
            height: 630,
            alt: seo.meta_title,
          },
        ],
        type: "website",
        url: seo.canonical,
      },
      twitter: {
        card: "summary_large_image",
        title: seo.meta_title,
        description: seo.meta_description,
        images: [seo.meta_image],
      },
      alternates: {
        canonical: seo.canonical,
      },
    };
  } catch (error) {
    console.error("Error generating metadata for about page:", error);

    // Fallback metadata
    return {
      title:
        "من نحن - EuroQuest International | التدريب المهني والتطوير",
      description:
        "تعرف على EuroQuest International، معهد تعليمي رائد يقدم تجارب تدريبية وتعلمية عالية الجودة. تأسس في عام 2015 من قبل فريق يتمتع بأكثر من 25 عامًا من الخبرة.",
      keywords:
        "من نحن euroquest، معهد تدريبي، التطوير المهني، الخدمات التعليمية، التدريب الإداري",
    };
  }
}

export default function AboutPage() {
  return (
    <>
      <Schema
        pageType="about"
        pageTitle="من نحن - EuroQuest International"
        pageDescription="تعرف على EuroQuest International، معهد تعليمي رائد يقدم تجارب تدريبية وتعلمية عالية الجودة. تأسس في عام 2015 من قبل فريق يتمتع بأكثر من 25 عامًا من الخبرة."
        pageUrl="https://euroqst.com/about"
      />
      {/* Hero Banner */}
      <HeroBanner
        backgroundImage="/assets/images/hero-about.webp"
        title="من نحن - EuroQuest International"
        description="تأسست في عام 2015 من قبل فريق يتمتع بأكثر من 25 عامًا من الخبرة، قدمت EuroQuest International أكثر من 1000 برنامج تدريبي، استفاد منها أكثر من 15000 مشارك عبر قطاعات متنوعة في مراكز عالمية تشمل دبي، لندن، برشلونة، إسطنبول، فيينا، باريس، وجنيف."
        breadcrumbs={breadcrumbs}
        enableTypewriter={true}
      />

      <Container>
        <div className="flex flex-col xl:flex-row gap-6 xl:gap-8 py-6 xl:py-8">
          <AboutNavigation />
          <div className="flex-1 min-w-0">
            <AboutSection />
            <VissionMission />
            <OurValues />
            <OurClients />
            <OurAchievements />
            <WhyEuroquest />
            <OurImpact />
            <FutureOutlook />
          </div>
        </div>
      </Container>
      <CoverageSection />
    </>
  );
}
