import React from "react";
import lady from '../Images/Rectangle.png'
import phone from '../Images/y.png'
import graph from "../Images/x.png";


function Content() {
  return (
    <section>
      <main className="flex justify-between bg-green pl-28 pr-28">
        <section className="font-medium flex flex-col justify-center text-white ">
          <h1 className="text-6xl tracking-wide w-wt">
            What can Skdl help you do?
          </h1>
          <p className="pt-8 w-wt tracking-wide text-sm leading-6">
            Plan, schedule and organize your day to day activities with special
            customizable features, to help you keep track of your pprogress in
            real time all in a unique simple way.
          </p>
        </section>
        <section>
          <img src={lady} alt="lady" className="w-wt" />
          <img />
        </section>
      </main>

      <aside className="flex justify-between pl-28 pr-28">
        <section className="font-medium flex flex-col justify-center">
          <h1 className="text-6xl tracking-wide w-wtb">
            Organize and plan your tasks
          </h1>
          <p className="pt-8 w-wtb tracking-wide text-sm leading-6">
            Are you looking for ways to acheive more, complete your task and
            accomplish more goals in ample time? Get to know what is to be built
            on and what is to be improved, plan, organize and schedule your
            daily activities with Skall.
          </p>
        </section>

        <section className="pt-28 pr-36">
          <img src={phone} alt="phone" className="w-64" />
        </section>
      </aside>

      <aside className="flex justify-between pl-28 pr-28 bg-green">
        <section className="font-medium flex flex-col justify-center">
          {/* <h1 className="text-6xl tracking-wide w-wtb">
            Organize and plan your tasks
          </h1>
          <p className="pt-8 w-wtb tracking-wide text-sm leading-6">
            Are you looking for ways to acheive more, complete your task and
            accomplish more goals in ample time? Get to know what is to be built
            on and what is to be improved, plan, organize and schedule your
            daily activities with Skall.
          </p> */}
        </section>

        <section className=" pr-36">
          <img
            src={graph}
            alt="phone"
            className="w-64 border-4 border-white rounded-b-3xl"
          />
        </section>
      </aside>

      <hgroup>
        <h1 className="text-xl font-medium">Download Now</h1>
      </hgroup>
    </section>
  );
}

export default Content;
