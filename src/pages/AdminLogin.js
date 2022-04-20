import { useState } from "react";

export default function AdminLogin({ setAdmin }) {
  const [err, setErr] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  setTimeout(() => {
    setErr(false);
    setErrMsg("");
  }, 2000);
  const [info, setInfo] = useState({
    username: "",
    password: "",
  });
  const handleInput = (e) => {
    const name = e.target.name;
    setInfo({ ...info, [name]: e.target.value });
  };
  const AdminFormSumite = (e) => {
    e.preventDefault();
    const { username, password } = info;
    if (!username || !password) {
      setErr(true);
      setErrMsg("Invalid Input field");
    } else {
      if (username === "admin" && password === "admin") {
        // Navigate("/");
        alert("success");
        setAdmin(true);
        setInfo({
          username: "",
          password: "",
        });
      } else {
        setErr(true);
        setErrMsg("Invalid credentials");
      }
    }
  };
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center flex-col bg-blue-500">
        <form
          method="POST"
          onSubmit={AdminFormSumite}
          className="lg:w-1/3 w-2/3 p-4 shadow-xl rounded-lg"
        >
          <h1 className="text-2xl text-center text-white mb-4">Admin Login</h1>
          {err ? (
            <h3 className="bg-red-500 px-2 py-1 text-center mb-4 rounded-lg text-white shadow-lg">
              {errMsg}
            </h3>
          ) : (
            ""
          )}
          <div className=" flex flex-col mb-6 ">
            <input
              type="text"
              name="username"
              id="username"
              value={info.username}
              onChange={handleInput}
              placeholder="Username"
              autoComplete="off"
              className="p-2 rounded-lg outline-none"
            />
          </div>
          <div className="flex flex-col mb-6">
            <input
              type="password"
              name="password"
              id="password"
              value={info.password}
              onChange={handleInput}
              placeholder="Password"
              autoComplete="off"
              className="p-2 rounded-lg outline-none"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 rounded-lg shadow-lg w-full bg-pink-500 text-white  hover:bg-pink-700 border-none outline-none"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}
