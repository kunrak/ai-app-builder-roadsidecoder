import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Zap } from "lucide-react";
import { SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";

function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 h-16 border-b border-white/5 bg-white/7 backdrop-blur-md">
      <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/">
          <Image
            src={"/logo.png"}
            alt="Forge Logo"
            width={100}
            height={100}
            className="h-9 w-auto rounded-md"
          ></Image>
        </Link>

        <div className="flex items-center gap-5">
          <Link href={"/projects"} className="text-[13px] font-medium text-white/40 transition-colors hover:text-white/80">
            Projects
          </Link>

          <button className="inline-flex h-8 items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 text-xs text-white/70 ">
            <Zap className="h-3 w-3 fill-white/70" />
            3 / 40 Credits
          </button>

          <div className="h-4 w-[1px] bg-white/10" />

          <Show when="signed-out">
            <SignInButton mode="modal">
              <button className="text-[13px] font-medium text-white/40 transition-colors hover:text-white/80">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="inline-flex h-8 items-center justify-center rounded-full bg-white px-3.5 text-xs font-semibold text-black hover:bg-white/90 transition-colors">
                Sign Up
              </button>
            </SignUpButton>
          </Show>

          <Show when="signed-in">
            <UserButton />
          </Show>
        </div>
      </nav>
    </header>
  );
}

export default Header;
