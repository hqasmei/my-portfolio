import Image from "next/image"
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai"

const HomePage = () => {
  return (
    <main className="min-h-screen">
      <section className="flex flex-col items-center gap-20 mt-10 md:flex-row-reverse">
        <div>
          <h1 className="text-3xl mb-3 font-black">
            Developer. Content Creator.
          </h1>
          <p className="leading-8 tracking-wide text-xl font-light mb-4">
            I'm a Software Engineer based in Los Angeles, CA. I'm working
            towards creating software that makes life easier and more
            meaningful. I believe that you should{" "}
            <span className="font-bold text-teal-500">never stop growing</span>{" "}
            and that&#39;s what I strive to do.
          </p>
          <div className="flex flex-col md:flex-row md:items-center md:gap-4 gap-2">
            <div className="flex gap-2">
              <a
                href="https://github.com/hqasmei"
                target="_blank"
                aria-label="Github"
              >
                {" "}
                <AiOutlineGithub
                  size={30}
                  className="hover:-translate-y-1 transition-transform cursor-pointer"
                />
              </a>
              <a
                href="https://twitter.com/hqasmei"
                target="_blank"
                aria-label="Twitter"
              >
                <AiOutlineTwitter
                  className="hover:-translate-y-1 transition-transform cursor-pointer"
                  size={30}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/hosnaqasmei/"
                target="_blank"
                aria-label="LinkedIn"
              >
                {" "}
                <AiOutlineLinkedin
                  size={30}
                  className="hover:-translate-y-1 transition-transform cursor-pointer"
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCQBMkSDgbxDb8usMeXmOZyA"
                target="_blank"
                aria-label="YouTube"
              >
                {" "}
                <AiOutlineYoutube
                  size={30}
                  className="hover:-translate-y-1 transition-transform cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>
        <Image
          alt="logo"
          src="/headshot.png"
          className="rounded-full order-first md:order-1 w-[300px] shadow-lg"
          width={300}
          height={300}
        />
      </section>
    </main>
  )
}

export default HomePage
