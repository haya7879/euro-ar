import { Metadata } from "next";
import HeroBanner from "@/components/shared/hero-banner";
import { HomeIcon } from "lucide-react";
import { getSeoData } from "@/services/services";
import Container from "@/components/shared/container";
import Schema from "@/components/shared/schema";
import AboutNavigation from "./_components/about-navigation";
import AboutSection from "./_components/about-section";
import VissionMission from "./_components/vission-mission";
import FutureOutlook from "./_components/future-outlook";
import WhyEuroquest from "./_components/why-euroquest";
import OurClients from "./_components/our-clients";
import OurValues from "./_components/our-values";
import OurImpact from "./_components/our-impact";
import OurAchievements from "./_components/our-achievements";

const breadcrumbs = [
  { label: "", href: "/", icon: <HomeIcon width={16} height={16} /> },
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
        "عن يوركويست إنترناشيونال | التدريب والتطوير المهني عالميًا",
      description:
        "تعرّف على يوركويست إنترناشيونال، مؤسسة تدريبية رائدة بخبرة تتجاوز 25 عامًا، قدمت أكثر من 1000 برنامج في القيادة، الموارد البشرية، المالية، النفط والغاز، الذكاء الاصطناعي، الاستدامة، والتحولات الرقمية في مدن عالمية.",
      keywords:
        "عن يوركويست إنترناشيونال، التدريب والتطوير المهني عالميًا",
    };
  }
}

export default function AboutPage() {
  return (
    <>
      <Schema
        pageType="about"
        pageTitle="عن يوركويست إنترناشيونال | التدريب والتطوير المهني عالميًا"
        pageDescription="تعرّف على يوركويست إنترناشيونال، مؤسسة تدريبية رائدة بخبرة تتجاوز 25 عامًا، قدمت أكثر من 1000 برنامج في القيادة، الموارد البشرية، المالية، النفط والغاز، الذكاء الاصطناعي، الاستدامة، والتحولات الرقمية في مدن عالمية."
        pageUrl="https://euroqst.com/about"
      />
      {/* Hero Banner */}
      <HeroBanner
        backgroundImage="/assets/images/hero-about.webp"
        title="يوروكويست إنترناشيونال - من نحن" 
        description="تأسست شركة يوروكويست إنترناشيونال في عام 2015 على يد فريق يتمتع بخبرة تزيد عن 25 عامًا، وقد قدمت أكثر من 1000 دورة تدريبية، استفاد منها أكثر من 15000 مشارك عبر قطاعات متنوعة في مراكز عالمية بما في ذلك دبي ولندن وبرشلونة واسطنبول وفيينا وباريس وجنيف."
        breadcrumbs={breadcrumbs}
        enableTypewriter={true}
      />

      <Container>
        <div className="flex flex-col xl:flex-row gap-6 xl:gap-8 py-6 lg:py-8">
          <AboutNavigation />
          <div className="flex-1 min-w-0">
            {/* <AboutSection /> */}
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
      {/* <CoverageSection /> */}
    </>
  );
}
