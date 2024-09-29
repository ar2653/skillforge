import Link from "next/link";

export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_3.5s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.yellow.200),theme(colors.pink.200),theme(colors.blue.50),theme(colors.purple.300),theme(colors.orange.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-SummerFavourite text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Skills that Shine, Gaps combine
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-gray01-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Found your dream job but your resume doesn’t quite match? At SkillForge you can compare your skills to the ones you lack in a job post description and see which free online courses can fill the gap!
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <Link href="/resume" passHref>
                      <span className="btn group mb-4 w-full bg-gradient-to-t from-pink-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto relative inline-flex items-center">
                        Find our Match
                        <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                          -&gt;
                        </span>
                      </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
