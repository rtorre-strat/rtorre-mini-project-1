import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="grid grid-cols-1 justify-items-center p-8 gap-[32px] row-start-2 items-center sm:items-start">
        <div className="justify-items-center list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <h1 className="text-8xl rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              Welcome to my Portfolio
            </h1>
            <br/>
            <h4 className="bg-black/[.05] dark:bg-white/[.06] text-2xl rounded font-[family-name:var(--font-geist-mono)]">
              Feel free to navigate the Site.
            </h4>
        </div>

        <div className="flex gap-4 items-center justify-center content-center flex-col sm:flex-row">

          <a
            className="rounded-full bg-blue-500 border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-blue-800 dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="/pages/project"
          >
            Projects
          </a>

          <a
            className="rounded-full bg-blue-500 border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-blue-800 dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="/pages/aboutMe"
          >
            About Me
          </a>
          <a
            className="rounded-full bg-blue-500 border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-blue-800 dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="/pages/contact"
          >
            Contacts
          </a>
        </div>
      </div>
    </div>
  );
}
