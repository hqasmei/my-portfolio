import Image from "next/image"

const HomePage = () => {
  return (
    <main className="min-h-screen mt-20 md:mt-28 animate-fadeIn animation-delay-2">
      <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-12">
        <div className=" ">
          <Image
            alt="logo"
            src="/headshot.png"
            className="rounded-lg drop-shadow-2xl"
            width={1000}
            height={1000}
          />
        </div>

        <div className=" ">
          <p className="text-2xl  font-semibold text-center text-teal-500 pl-1 md:text-left ">
            Hi, my name is
          </p>
          <p className="text-4xl font-bold text-center mb-1 md:text-left lg:text-5xl">
            Hosna Qasmei.
          </p>
          <p className="text-2xl font-semibold leading-8 text-center mb-1 md:text-left ">
            I am a software engineer and aspiring entrepreneur.
          </p>
          <p className="text-xl leading-8 text-center text-neutral-500 md:text-left  xl:pr-36">
            Working towards creating software that makes life easier and more
            meaningful.
          </p>
        </div>
      </div>
    </main>
  )
}

export default HomePage
