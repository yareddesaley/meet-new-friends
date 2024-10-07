function Login() {
  return (
    <>
      <div className="flex gap-9 justify-center items-center text-center h-screen bg-slate-300">
        <div className="w-1/4 text-start">
          <span className="font-bold text-4xl text-blue-600">
            Social Medias
          </span>
          <h4 className="text-lg mt-3">
            Connect with friends and the world around this social media
          </h4>
        </div>
        <div className="w-1/4 p-5 bg-white rounded-xl">
          <form action="" className="flex flex-col gap-3 focus:outline-none">
            <input
              type="text"
              placeholder="Email"
              className="w-full border border-solid border-gray-400 p-2 rounded-xl focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-solid border-gray-400 p-2 rounded-xl focus:outline-none"
            />
            <button className="w-full bg-blue-700 text-center rounded-xl h-10 text-white">
              Log In
            </button>
            <span className="text-sm text-blue-600 cursor-pointer">
              Forgot Password?
            </span>
            <div>
              <button className="w-2/3 bg-green-500 text-white p-2 rounded-xl">
                Create a New Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
