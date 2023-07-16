import Link from "next/link";
import Headshot from "@/components/ui/headshot";
import Project from "@/components/project";

export default function Root() {
  return (
    <main className="my-12 flex items-center justify-center">
      <div className="mx-4 flex w-full md:mx-0 md:max-w-2xl">
        <div className="flex flex-col">
          <Headshot />
          <p className="mt-2">
            I'm a Software Engineer who likes building cross-platform mobile
            apps.
          </p>
          <p>
            {" "}
            I make videos on{" "}
            <Link
              href="https://www.youtube.com/@hqasmei"
              target="_blank"
              className="font-semibold text-violet-600 underline underline-offset-4 hover:text-violet-500"
            >
              YouTube
            </Link>{" "}
            too.
          </p>
          <br />
          <p className="text-xl font-bold">My Tech Stack</p>
          <ul className="list-inside list-disc">
            <li>Expo</li>
            <li>TypeScript</li>
            <li>Supabase</li>
            <li>Tailwind CSS</li>
          </ul>
          <br />
          <p className="text-xl font-bold">My Socials</p>
          <ul className="list-inside list-disc space-y-1">
            <li>
              <Link
                href="https://twitter.com/hqasmei"
                target="_blank"
                className="font-semibold text-violet-600 underline underline-offset-4 hover:text-violet-500"
              >
                Twitter
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/hqasmei"
                target="_blank"
                className="font-semibold text-violet-600 underline underline-offset-4 hover:text-violet-500"
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link
                href="https://discord.gg/agzuPEVxhT"
                target="_blank"
                className="font-semibold text-violet-600 underline underline-offset-4 hover:text-violet-500"
              >
                Discord
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/feed/"
                target="_blank"
                className="font-semibold text-violet-600 underline underline-offset-4 hover:text-violet-500"
              >
                LinkedIn
              </Link>
            </li>
          </ul>
          <br />
          {/* <p className="text-xl font-bold">My Projects</p>
          <div className="mt-2 flex flex-col space-y-3">
            <Project name="Coming soon" description="" />
          </div> */}
        </div>
      </div>
    </main>
  );
}
