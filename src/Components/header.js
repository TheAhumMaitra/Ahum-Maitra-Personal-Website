import { SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import CodeIcon from "@mui/icons-material/Code";
import Button from "@mui/material/Button";
import Link from "next/link";
import { ModeToggle } from "./toggle";

export default function Header() {
  return (
    <header>
      <nav
        className="w-full h-[9vh] p-2 flex justify-around items-center
                     bg-white text-black border-b-4 border-emerald-500
                     dark:bg-black dark:text-white"
      >
        <div id="main_logo" className="flex gap-3 items-center">
          <CodeIcon className="text-green-600 dark:text-green-400" />
          <h2 className="font-extrabold">Ahum Maitra</h2>
        </div>

        <ul className="list-none flex gap-5">
          <li>
            <Link
              href="/"
              className="text-base font-bold text-green-700 dark:text-green-400 transition hover:bg-emerald-500 hover:p-3 hover:rounded-3xl hover:text-white dark:hover:text-black"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio"
              className="text-base font-bold text-green-700 dark:text-green-400 transition hover:bg-emerald-500 hover:p-3 hover:rounded-3xl hover:text-white dark:hover:text-black"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio"
              className="text-base font-bold text-green-700 dark:text-green-400 transition hover:bg-emerald-500 hover:p-3 hover:rounded-3xl hover:text-white dark:hover:text-black"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-base font-bold text-green-700 dark:text-green-400 transition hover:bg-emerald-500 hover:p-3 hover:rounded-3xl hover:text-white dark:hover:text-black"
            >
              Contact Me
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <ModeToggle />
          <SignedOut>
            <SignUpButton mode="modal">
              <Button variant="outlined">Register</Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
            <Button variant="contained">Dashboard</Button>
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}
