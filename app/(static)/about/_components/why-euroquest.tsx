import React from "react";

export default function WhyEuroquest() {
  return (
    <section id="why-euroquest" className="bg-white md:py-11 py-8 scroll-mt-24">
      <div className="flex flex-col gap-12 relative z-10">
        <div className="w-full">
          <div className="flex flex-col lg:flex-row gap-6 items-center lg:items-start">
            {/* Left Side - Question Mark Icon */}
            <div className="w-full max-w-[200px] flex items-start justify-center lg:justify-start">
              <div className="relative">
                <img
                  src="/assets/icons/why-choose-icon.svg"
                  alt=""
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="w-full lg:w-3/4 text-center lg:text-start">
              <h2 className="text-xl md:text-2xl font-bold mb-2">
                لماذا تختار <span className="text-[#3E5EC0]">EuroQuest؟</span>
              </h2>
              <p className="font-normal text-sm md:text-base leading-7">
                برامج تغطي{" "}
                <span className="font-semibold">أكثر من 20 فئة تدريبية</span>{" "}
                منهجيات تجمع بين النظرية والتطبيق حلول مخصصة للمؤسسات والأفراد وجود عالمي في
                مدن مثل دبي، لندن، برشلونة، إسطنبول، فيينا،
                باريس، جنيف، والمزيد تركيز قوي على المواضيع الناشئة مثل{" "}
                <span className="font-semibold">
                  الذكاء الاصطناعي والاستدامة والتحول الرقمي
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
