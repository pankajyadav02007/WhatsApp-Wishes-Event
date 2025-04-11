import React, { useState } from "react";
import { useNavigate } from "react-router";

const HomePage = () => {
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();

  function handleForm(e) {
    e.preventDefault();
    navigate(`/${inputValue.toLowerCase()}`);
  }

  return (
    <>
      <section className="flex justify-center items-center flex-col gap-5 min-h-screen text-2xl text-amber-50 ">
        <h3 >Please Click Image</h3>
        <img
          src="https://wallpapercollection.net/wp-content/uploads/2018/04/Durga-Maa.gif"
          alt="Durga Mata With Lion"
          className="h-72 w-72 object-contain shadow-2xl bg-blue-200"
          onClick={() => {
            navigate("deepak");
          }}
        />
      </section>
      <form
        onSubmit={handleForm}
        className="fixed bottom-0 left-[50%] translate-x-[-50%] bg-black/30 max-w-md p-5 flex justify-center gap-5"
      >
        <input
          required
          className="border outline-none focus:border-blue-300 px-2 py-1 text-amber-50"
          placeholder="Enter Your Name"
          name="msg"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button
          type="submit"
          disabled={!inputValue ? true : false}
          className={`px-5 py-1.5 ${
            inputValue.length < 2
              ? "bg-gray-300 text-gray-400 cursor-not-allowed"
              : "bg-pink-500 text-white cursor-pointer"
          }`}
        >
          Wish
        </button>
      </form>
    </>
  );
};

export default HomePage;
