"use client";

import Logo from "./logo";
import { useAuth0 } from "@auth0/auth0-react";

export default function Header() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  // if (isLoading) {
  //   return null;
  // }
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray02-900/100 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.yellow.950),theme(colors.pink.700),theme(colors.yellow.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(red_0_0)_padding-box,_linear-gradient(pink_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm">
          <div className="flex flex-1 items-center">
            <Logo />
          </div>
          {!isAuthenticated && (
            <ul className="flex flex-1 items-center justify-end gap-3">
              <li>
                <button
                  onClick={() => loginWithRedirect()}
                  className="btn-sm relative bg-gradient-to-b from-purple-800 to-orange-800/100 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.pink.800),theme(colors.blue.800),theme(colors.yellow.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
                >
                  Sign In
                </button>
              </li>
            </ul>
          )}
          {isAuthenticated && (
            <ul className="flex flex-1 items-center justify-end gap-3">
              <li>
                <button
                  onClick={() => logout()}
                  className="btn-sm relative bg-gradient-to-b from-purple-800 to-orange-800/100 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.pink.800),theme(colors.blue.800),theme(colors.yellow.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
                >
                  Sign Out
                </button>
              </li>
            </ul>
          )}

        </div>
      </div>
    </header>
  );
}
