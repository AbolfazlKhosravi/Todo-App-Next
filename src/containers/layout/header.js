import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const Header = () => {
  const { data: session, status } = useSession();
  console.log(session);
  return (
    <header className="2xl:container mx-auto  flex flex-col  min-[550px]:flex-row min-[550px]:justify-between justify-center items-center w-full mb-4 p-4 min-[550px]:py-6 bg-blue-600 rounded-b-lg">
      <h1 className="font-bold text-slate-700 text-3xl mb-4 min-[550px]:mb-0 lg:text-4xl">
        To Do List App
      </h1>
      <ul className={`flex gap-x-4 lg:gap-x-8  ${status === "loading" && !session ?"opacity-0":"opacity-100"}`}>
        <li className="text-slate-200 text-[1rem] sm:text-[1.03rem] lg:text-[1.1rem] font-medium">
          <Link href="/">Home</Link>
        </li>
        <li className="text-slate-200 text-[1rem] sm:text-[1.03rem] lg:text-[1.1rem] font-medium">
          <Link href="/protect-ssr">Protect SSR</Link>
        </li>
        <li className="text-slate-200 text-[1rem] sm:text-[1.03rem] lg:text-[1.1rem] font-medium">
          <Link href="/profile">Profile</Link>
        </li>
        {!session && status !== "loadidng" && (
          <li className="text-slate-200 text-[1rem] sm:text-[1.03rem] lg:text-[1.1rem] font-medium">
            <button onClick={() => signIn()}>Sign In</button>
          </li>
        )}
        {session && (
          <li className="text-slate-200 text-[1rem] sm:text-[1.03rem] lg:text-[1.1rem] font-medium">
            <button onClick={() => signOut()}>Sign Out</button>
          </li>
        )}
      </ul>
    </header>
  );
};

export default Header;
