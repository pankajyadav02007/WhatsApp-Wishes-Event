import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const MessagePage = () => {
  const [yourName,setYourName] = useState ("");
  const params = useParams();
  const navigate = useNavigate();

  const WhURL = `https://api.whatsapp.com/send?text= ${yourName} ${`https://whats-app-wishes-event-gey1rw4mo.vercel.app`}`;

  useEffect(() => {
    if (params.name.length < 2) {
      navigate("/", { replace: true });
    }
  }, [params.name]);

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center  font-bold  text-xl bg-blue-200 ">
      {/* Animation section */}

      <div className="flex">
        <a
          href="https://www.mythrillfiction.com/the-dark-rider"
          alt="Mythrill"
          target="_blank"
        ></a>
        <div class="card">
          <div class="wrapper">
            <img
              src="https://pnghq.com/wp-content/uploads/2023/02/durga-maa-png-8247.png"
              class="cover-image"
            />
          </div>
          {/* <img
            src="https://th.bing.com/th/id/OIP.73vb6J2fD8oblvWRYGqgDQHaJQ?rs=1&pid=ImgDetMain"
            class="title"
          /> */}
          <img
            src="https://th.bing.com/th/id/OIP.wNlAZDpeWZ-Ol5McoINaDAAAAA?rs=1&pid=ImgDetMain"
            class="character"
          />
        </div>

        {/* <a
          href="https://www.mythrillfiction.com/force-mage"
          alt="Mythrill"
          target="_blank"
        >
          <div class="card">
            <div class="wrapper">
              <img
                src="https://th.bing.com/th/id/OIP.73vb6J2fD8oblvWRYGqgDQHaJQ?rs=1&pid=ImgDetMain"
                class="cover-image"
              />
            </div>
            <img
              src=""
              class="title"
            />
            <img
              src=""
              class="character"
            />
          </div>
        </a> */}
      </div>

      <div>
        <h1 className="text-center mt-12">{params.name} wishes you</h1>
        <h2 className="text-center mt-3">Happy Navratri</h2>
        <div>
          <form>
            <input
              className="text-[16px] border h-10 mt-12  rounded pl-6"
              type="text"
              placeholder="Wishes by your Name"
              onChange={(e) => setYourName(e.target.value)}
            />
            <a className=" bg-green-500 rounded px-6 py-2 text-[18px] ml-12 text-white" href={WhURL}>
              wish
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MessagePage;
