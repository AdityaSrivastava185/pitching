import Link from "next/link";
import { auth, signOut, signIn } from "@/auth";
import { BadgePlus, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="px-10 py-3 md:px-40 md:py-6 shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl sm:text-4xl font-bold text-[#CAD3D7] dark:text-white dark:bg-none">
            JustPitch
          </h1>
        </Link>

        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span className="max-sm:hidden text-white">Create</span>
                <BadgePlus className="size-6 sm:hidden text-[#C70039]" />
              </Link>

              <form
                action={async () => {
                  "use server";

                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">
                  <span className="max-sm:hidden text-white">Logout</span>
                  <LogOut className="size-6 sm:hidden text-[#C70039]" />
                </button>
              </form>

              <Link href={`/user/${session?.id}`}>
                <Avatar className="size-10">
                  <AvatarImage
                    src={session?.user?.image || ""}
                    alt={session?.user?.name || ""}
                  />
                  <AvatarFallback>AV</AvatarFallback>
                </Avatar>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";

                await signIn("github");
              }}
            >
              <button type="submit" className="text-white bg-[#C70039] px-6 py-2 sm:px-10 sm:py-4 rounded-full font-bold">
                Login
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
