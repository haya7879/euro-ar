import SectionTitle from "@/components/shared/section-title";

export default function AboutSection() {
  return (
    <section
      id="who-is-euroquest"
      className="bg-white scroll-mt-24"
    >
      <div className="flex flex-col gap-12 relative z-10">
        <div className="w-full">
          <SectionTitle
            title="من هو يوروكويست"
            highlight=""
            className="!mb-4"
          />
          <p className="font-normal text-sm md:text-base leading-7">
            تأسست EuroQuest International في عام 2015 من قبل فريق يتمتع بأكثر من 25 عاماً من الخبرة، وقد قدمت أكثر من 1000 برنامج تدريبي، استفاد منها أكثر من 15,000 مشارك عبر قطاعات متنوعة في مراكز عالمية تشمل دبي، لندن، برشلونة، إسطنبول، فيينا، باريس، وجنيف.
          </p>
        </div>
      </div>
    </section>
  );
}
