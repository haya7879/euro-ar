import Container from "@/components/shared/container";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";

interface AboutSectionProps {
  className?: string;
}

export default function AboutSection({ className = "" }: AboutSectionProps) {
  return (
    <section className={`bg-[#F2F8FF] md:py-14 py-12 ${className}`}>
      <Container>
        {/* Main Content Section */}
        <div className="flex items-center justify-between lg:flex-row-reverse flex-col gap-8 lg:gap-10 mb-10">
          {/* Image Section - Left */}
          <div className="relative lg:w-1/2 flex items-center justify-center">
            <img
              src="/assets/images/about-section.png"
              alt="تعاون الفريق"
              className="w-full h-auto object-cove"
            />
          </div>

          {/* Content Section - Right */}
          <div className="w-full lg:w-1/2 space-y-4">
            {/* Section Header */}
            <div className="mb-6">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
                من <span className="text-[#3E5EC0]">نحن</span>
              </h2>
            </div>

            {/* Bullet Points */}
            <ul className="space-y-4 text-gray-700 text-base leading-relaxed">
              <li className="flex items-start gap-3">
                <span>
                  يوروكويست إنترناشيونال هي معهد تدريبي رائد يقدم دورات تدريبية
                  عالية الجودة تمكن الأفراد والمنظمات من التفوق.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span>
                  نركز على الإدارة المبتكرة وتطوير القيادة، وتعزيز أداء الأفراد
                  والفرق والمنظمات.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span>
                  تدمج برامجنا النظرية مع التطبيق العملي لتقديم نتائج مستدامة
                  وتأثير قابل للقياس.
                </span>
              </li>
            </ul>

            {/* Button */}
            <Link
              href={"/about"}
              className="bg-[#3E5EC0] hover:bg-[#2d4aa7] w-fit !mt-0 md:mx-0 text-white px-4 py-2.5 rounded-md font-semibold text-sm transition-all duration-300 transform cursor-pointer flex items-center gap-3 group"
              suppressHydrationWarning={true}
            >
              <span>عرض المزيد</span>
              <ChevronLeftIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-start">
          {/* Years Of Expertise */}
          <div className="text-center md:space-y-3 space-y-2">
            <div className="md:text-4xl text-[28px] font-bold text-[#20B486]">
              25<span className="text-[#20B486]">+</span>
            </div>
            <p className="text-gray-900 font-medium text-xs leading-tight">
              سنوات من الخبرة
            </p>
          </div>

          {/* Participants Trained */}
          <div className="text-center md:space-y-3 space-y-2">
            <div className="md:text-4xl text-[28px] font-bold text-[#20B486]">
              1000<span className="text-[#20B486]">+</span>
            </div>
            <p className="text-gray-900 font-medium text-xs leading-tight">
              مشارك مدرب
              <br />
              عبر الصناعات
            </p>
          </div>

          {/* Global Network */}
          <div className="text-center md:space-y-3 space-y-2">
            <div className="shrink-0">
              <img
                src="/assets/icons/achievement-icon.svg"
                alt=""
                className="w-10 h-10 mx-auto"
              />
            </div>
            <p className="text-gray-900 font-medium text-xs leading-tight">
              شبكة عالمية من
              <br />
              المدربين المعتمدين دولياً
            </p>
          </div>

          {/* Specialized Training Programs */}
          <div className="text-center md:space-y-3 space-y-2">
            <div className="md:md:text-4xl text-[28px] font-bold text-[#20B486]">
              1000<span className="text-[#20B486]">+</span>
            </div>
            <p className="text-gray-900 font-medium text-xs leading-tight">
              برامج تدريبية متخصصة
              <br />
              تم تقديمها
            </p>
          </div>

          {/* International Cities */}
          <div className="text-center md:space-y-3 space-y-2">
            <div className="md:text-4xl text-[28px] font-bold text-[#20B486]">
              15<span className="text-[#20B486]">+</span>
            </div>
            <p className="text-gray-900 font-medium text-xs leading-tight">
              مدن وعواصم
              <br />
              دولية
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
