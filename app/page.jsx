import Photo from "@/components/Photo";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import Stats from "@/components/ui/Stats";
import { FiDownload } from "react-icons/fi";
export default function Home() {
  console.log("Home mounted");
  return (
    <section className="h-full">
      <div className="container h-full mx-auto">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pt-8 xl:pb-24">
          <div className="order-2 text-center xl:order-none xl:text-left">
            <span className="text-xl">Front End Web Developer</span>
            <h1 className="mb-6 h1">
              {`Hello I'm `}
              <br /> <p className="text-accent">Huzaifa Ahmad</p>
            </h1>
            <p className=" max-w-[500px] mb-9 text-white/80">
              I create fast, elegant front-end experiences with clean code and thoughtful design.
            </p>
            <div className="flex flex-col items-center gap-8 xl:flex-row">
              <a download="huzaifa_cv" href="/cv.pdf">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center gap-2 uppercase"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles={"flex gap-6"}
                  iconsStyles={
                    "w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover: transition-all duration-500 "
                  }
                />
              </div>
            </div>
          </div>
          <div>
            <div className="order-1 mb-8 xl:order-none xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
