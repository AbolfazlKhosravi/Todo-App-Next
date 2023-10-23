import Link from "next/link";

const Header = () => {
  return (
    <header className="2xl:container mx-auto  flex flex-col  min-[550px]:flex-row min-[550px]:justify-between justify-center items-center w-full mb-4 p-4 min-[550px]:py-6 bg-blue-600 rounded-b-lg">
      <h1 className="font-bold text-slate-700 text-3xl mb-4 min-[550px]:mb-0 lg:text-4xl">
        To Do List App
      </h1>
      <ul className="flex gap-x-4 lg:gap-x-8">
        <li className="text-slate-200 text-[1rem] sm:text-[1.04rem] lg:text-xl font-medium">
          <Link href="/">Home</Link>
        </li>
        <li className="text-slate-200 text-[1rem] sm:text-[1.04rem] lg:text-xl font-medium">
          <Link href="todos">Todos</Link>
        </li>
        <li className="text-slate-200 text-[1rem] sm:text-[1.04rem] lg:text-xl font-medium">
          <Link href="profile">Profile</Link>
        </li>
        <li className="text-slate-200 text-[1rem] sm:text-[1.04rem] lg:text-xl font-medium">
          <Link href="signIn">Sign In</Link>
        </li>
        <li className="text-slate-200 text-[1rem] sm:text-[1.04rem] lg:text-xl font-medium">
          <Link href="signIn">Sign Un</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
