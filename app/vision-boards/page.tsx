import Link from "next/link";
import React from "react";

export default function VisionBoardPage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 text-center">
      <div className="w-full justify-center px-6 pt-24 text-center sm:pt-28 md:px-0 md:text-left">
        <h1 className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-center text-4xl font-bold text-transparent  md:pb-4 md:text-6xl">
          Vision Boards.
        </h1>
        <p className="pb-4 text-center text-xl text-stone-300 ">
          Here are a few my vision boards I&#39;ve made over that last few
          years.
        </p>

        <section className="mb-6">
          <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 md:grid-cols-3 ">
            <Link
              href="https://drive.google.com/file/d/1Bpkru62Gsmhq0XPiEkvEOpQ5gOZcTz-Q/view?usp=sharing"
              target="_blank"
            >
              <div className="mx-auto flex max-w-md flex-row space-x-4 rounded-lg bg-stone-800 p-4 text-center shadow hover:bg-stone-700 md:flex-col md:space-x-0">
                <h3 className="text-xl font-medium text-stone-100">2023</h3>
              </div>
            </Link>
            <Link
              href="https://drive.google.com/file/d/18XAjpez_rH2PudYk4WBvzeNFX7yQ2tXE/view?usp=sharingg"
              target="_blank"
            >
              <div className="mx-auto flex max-w-md flex-row space-x-4 rounded-lg bg-stone-800 p-4 text-center shadow hover:bg-stone-700 md:flex-col md:space-x-0">
                <h3 className="text-xl font-medium text-stone-100">2022</h3>
              </div>
            </Link>
            <Link
              href="https://drive.google.com/file/d/187FA-dIwW4lRiDNZdB9Lsq8eOFVFhIMe/view?usp=sharing"
              target="_blank"
            >
              <div className="mx-auto flex max-w-md flex-row space-x-4 rounded-lg bg-stone-800 p-4 text-center shadow hover:bg-stone-700 md:flex-col md:space-x-0">
                <h3 className="text-xl font-medium text-stone-100">2021</h3>
              </div>
            </Link>
            <Link
              href="https://drive.google.com/file/d/1T8H8xp3pEdtgQc_I1SKmIOSpYEmSyStz/view?usp=sharing"
              target="_blank"
            >
              <div className="mx-auto flex max-w-md flex-row space-x-4 rounded-lg bg-stone-800 p-4 text-center shadow hover:bg-stone-700 md:flex-col md:space-x-0">
                <h3 className="text-xl font-medium text-stone-100">2020</h3>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
