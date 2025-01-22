import { useRef, useState } from "react";

export default function Login() {
  const [PageType, setPageType] = useState("login");

  const LoginEmailRef = useRef();
  const LoginPwordRef = useRef();
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(LoginEmailRef.current.value);
    console.log(LoginPwordRef.current.value);
  };
  const SignupEmailRef = useRef();
  const SignupPwordRef = useRef();
  const RepeatPwordRef = useRef();
  const handleSignup = (e) => {
    e.preventDefault();
    console.log(SignupEmailRef.current.value);
    console.log(SignupPwordRef.current.value);
    console.log(RepeatPwordRef.current.value);
  };

  return (
    <div className=" w-full">
      {PageType === "login" && (
        <div className="flex flex-col justify-center items-center p-8 ">
          <div className="flex items-center gap-4 w-full pt-8 pb-4 justify-center text-center text-2xl md:text-3xl mb-3">
            <p className="w-8 lg:w-11 h-[2px] bg-black"></p>
            <h1 className="prata-regular font-medium">LOG IN</h1>
            <p className="w-8 lg:w-11 h-[2px] bg-black"></p>
          </div>
          <form
            onSubmit={handleLogin}
            className="flex flex-col gap-4 w-full justify-center items-center"
          >
            <div className=" w-full sm:w-[75%] md:w-1/2">
              <p className="text-base font-medium mb-2">EMAIL</p>
              <input
                type="text"
                className="p-3 w-full border outline-none placeholder:text-gray-300 focus:ring-1 focus:ring-black"
                placeholder="Your Email"
                required
                ref={LoginEmailRef}
              />
            </div>
            <div className=" w-full sm:w-[75%] md:w-1/2">
              <p className="text-base font-medium mb-2">PASSWORD</p>
              <input
                ref={LoginPwordRef}
                type="password"
                className="p-3 w-full border outline-none placeholder:text-gray-300 focus:ring-1 focus:ring-black"
                placeholder="Your Password"
                required
              />
              <p className="text-sm sm:text-base my-1 text-right">
                don't have an account ?{" "}
                <span
                  onClick={() => setPageType("signup")}
                  className=" underline cursor-pointer transition-all duration-300 hover:text-gray-400"
                >
                  Sign up
                </span>
              </p>
            </div>
            <button className="px-8 py-2.5 bg-black w-full sm:w-1/2 md:w-1/4 text-white my-4">
              LOG IN
            </button>
          </form>
        </div>
      )}
      {PageType === "signup" && (
        <div className="flex flex-col justify-center items-center p-8 bg-white">
          <div className="flex items-center gap-4 w-full pt-8 pb-4 justify-center text-center text-2xl md:text-3xl mb-3">
            <p className="w-8 lg:w-11 h-[2px] bg-black"></p>
            <h1 className="prata-regular font-medium">SIGN UP</h1>
            <p className="w-8 lg:w-11 h-[2px] bg-black"></p>
          </div>
          <form
            onSubmit={handleSignup}
            className="flex flex-col gap-4 w-full justify-center items-center"
          >
            <div className=" w-full sm:w-[75%] md:w-1/2">
              <p className="text-base font-medium mb-2">EMAIL</p>
              <input
                ref={SignupEmailRef}
                type="text"
                className="p-3 w-full border outline-none placeholder:text-gray-300 focus:ring-1 focus:ring-black"
                placeholder="Your Email"
                required
              />
            </div>
            <div className=" w-full sm:w-[75%] md:w-1/2">
              <p className="text-base font-medium mb-2">PASSWORD</p>
              <input
                ref={SignupPwordRef}
                type="password"
                className="p-3 w-full border outline-none placeholder:text-gray-300 focus:ring-1 focus:ring-black"
                placeholder="Your Password"
                required
              />
              <input
                ref={RepeatPwordRef}
                type="password"
                className=" my-2 p-3 w-full border outline-none placeholder:text-gray-300 focus:ring-1 focus:ring-black"
                placeholder="Repeat Your Password"
                required
              />
              <p className="text-sm sm:text-base my-1 text-right">
                Already have an account ?{" "}
                <span
                  onClick={() => setPageType("login")}
                  className=" underline cursor-pointer transition-all duration-300 hover:text-gray-400"
                >
                  Log in
                </span>
              </p>
            </div>
            <button className="px-8 py-2.5 bg-black w-full sm:w-1/2 md:w-1/4 text-white my-4">
              SIGN UP
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
