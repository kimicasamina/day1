import React from "react";
import Habits from "@/components/habits/habits";
import Status from "@/components/status/index";
import Daily from "../daily";

export default function Home() {
  return (
    <div className="home card h-full ">
      <div className="profile card ">TOP</div>
      <div className="status card">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
        perspiciatis dolore sapiente laudantium optio nobis nam, exercitationem
        voluptatum ut quos?
      </div>
      {/* <div className="habits overflow-y-hidden">
        <h1 className="habits__title">Habits</h1>
        <div className="habits__input">
          <input type="text" />
        </div>
        <div className="habits__list h-full overflow-y-scroll">
          <li>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
            neque delectus doloremque omnis in rerum quae, at assumenda ratione
            magni sed, reprehenderit ex dolores! Possimus, aperiam reiciendis.
            Fugiat, quos dolore!
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
            neque delectus doloremque omnis in rerum quae, at assumenda ratione
            magni sed, reprehenderit ex dolores! Possimus, aperiam reiciendis.
            Fugiat, quos dolore!
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
            neque delectus doloremque omnis in rerum quae, at assumenda ratione
            magni sed, reprehenderit ex dolores! Possimus, aperiam reiciendis.
            Fugiat, quos dolore!
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
            neque delectus doloremque omnis in rerum quae, at assumenda ratione
            magni sed, reprehenderit ex dolores! Possimus, aperiam reiciendis.
            Fugiat, quos dolore!
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
            neque delectus doloremque omnis in rerum quae, at assumenda ratione
            magni sed, reprehenderit ex dolores! Possimus, aperiam reiciendis.
            Fugiat, quos dolore!
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
            neque delectus doloremque omnis in rerum quae, at assumenda ratione
            magni sed, reprehenderit ex dolores! Possimus, aperiam reiciendis.
            Fugiat, quos dolore!
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
            neque delectus doloremque omnis in rerum quae, at assumenda ratione
            magni sed, reprehenderit ex dolores! Possimus, aperiam reiciendis.
            Fugiat, quos dolore!
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
            neque delectus doloremque omnis in rerum quae, at assumenda ratione
            magni sed, reprehenderit ex dolores! Possimus, aperiam reiciendis.
            Fugiat, quos dolore!
          </li>
        </div>
      </div> */}
      <Habits />
      <div className="daily card col-start-2 col-end-2 row-start-2 row-end-4">
        daily
      </div>
      <div className="goals card col-start-3 col-end-3 row-start-2 row-end-4">
        goal
      </div>
    </div>
  );
}
