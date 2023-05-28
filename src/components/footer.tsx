import React from "react";
import Link from "next/link";

import { FiTwitter, FiYoutube, FiGithub, FiLinkedin, FaDev , SiSubstack} from "./ui/icons";

const Footer = () => {
  return (
    <footer className="mx-auto flex h-36 w-full items-center justify-center bg-black px-4 text-center text-white md:px-8">
      <div className="flex w-full max-w-3xl flex-col items-center justify-center space-y-4 md:max-w-5xl md:flex-row-reverse md:justify-between  md:space-y-0">
        <div className="flex flex-row space-x-4">
          <Link href="https://twitter.com/hqasmei" target="_blank">
            <FiTwitter
              size={25}
              className="cursor-pointer transition-transform hover:-translate-y-1 "
            />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCQBMkSDgbxDb8usMeXmOZyA"
            target="_blank"
          >
            <FiYoutube
              size={25}
              className="cursor-pointer transition-transform hover:-translate-y-1 "
            />
          </Link>
          <Link href="https://github.com/hqasmei" target="_blank">
            <FiGithub
              size={25}
              className="cursor-pointer transition-transform hover:-translate-y-1 "
            />
          </Link>
          <Link href="https://www.linkedin.com/in/hosnaqasmei/" target="_blank">
            <FiLinkedin
              size={25}
              className="cursor-pointer transition-transform hover:-translate-y-1 "
            />
          </Link>
          <Link href="https://dev.to/hqasmei" target="_blank">
            <FaDev
              size={25}
              className="cursor-pointer transition-transform hover:-translate-y-1 "
            />
          </Link>
          <Link href="https://hosnaqasmei.substack.com/" target="_blank">
            <SiSubstack
              size={25}
              className="cursor-pointer transition-transform hover:-translate-y-1 "
            />
          </Link>
        </div>
        <div>
          <p>© 2023 Hosna Qasmei. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
