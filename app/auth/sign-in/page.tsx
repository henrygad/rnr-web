import AuthRightSide from "@/components/auth/AuthRightSide";
import SignInForm from "@/components/SignInForm";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import Image from "next/image";
import Link from "next/link";
import icon from "@/public/Images/logo-light.svg"


export default function Page() {
  return (
    <div className="min-h-screen w-full relative flex flex-col">
      {/* Global client header */}
      <header className="w-full flex">
              <nav className="flex-1 flex my-3 items-center bg-transparent">
                {/* Logo */}
                <div className=" justify-center w-full md:mt-0 flex gap-2">
                  <div className="flex h-10 items-center justify-center">
                                          <Image
                                          src={icon}
                                          alt="icon"
                                          height={180}
                                          width={180}
                                          />
                                              
                                      
                                      </div>
                  
                </div>
                              
              </nav>
            </header>

      <main className="flex-1 w-full flex">
        {/* Left side */}
        <section
          className="flex-1 flex justify-center items-center"
          
        >
          <div className="text-center min-w-[320px] sm:w-120 bg-transparent">
            {/* Spacing */}
            <div className="min-h-10.5 md:hidden"></div>

            {/* Page title */}
            <div className="text-center -mt-12 mb-8">
              <h1 className="text-2xl lg:text-[32px] text-center font-semibold text-gray-900 dark:text-white mb-2">
                Welcome back
              </h1>
              <p className="text-gray-600 text-base dark:text-gray-400">
                We are happy to see you again
              </p>
            </div>

            {/* Container */}
            <div className="bg-white">
              {/* Sign in form */}
              <div className="mb-8">
                <SignInForm />
              </div>

              {/* Divider */}
              <div className="flex items-center mb-8">
                <div className="grow border-t border-gray-300 dark:border-gray-600"></div>
                <span className="mx-4 text-sm text-gray-500 dark:text-gray-400">
                  Or
                </span>
                <div className="grow border-t border-gray-300 dark:border-gray-600"></div>
              </div>

              {/* Sign in with google */}
              {/* <div className="mb-8">
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center gap-3 font-semibold text-[16px] min-h-14 px-4 border shadow rounded-full"
                  type="button"
                >
                  <Image
                    src="/google_logo.svg"
                    alt="google_logo.svg"
                    width={24}
                    height={24}
                  />
                  <span className="block">Sign In with Google</span>
                </Button>
              </div> */}

              {/* Sign up link */}
              <div className="flex justify-center items-center gap-2 text-[16px]">
                <p className="text-gray-600 dark:text-gray-400">
                  Don&apos;t have an account?
                </p>
                <Link
                  className="font-medium text-[#20646D] underline"
                  href="/auth/sign-up"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Right side */}
      </main>

      {/* Global client footer */}
      <footer></footer>
    </div>
  );
}
