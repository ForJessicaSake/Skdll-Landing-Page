import React from "react";
import lady from "../Images/Rectangle.png";
import phone from "../Images/y.png";
import graph from "../Images/x.png";
import text from "../Images/text.png";
import store from "../Images/store.png"
import playstore from "../Images/playstore.png"


function Content() {
  return (
    <section>
      <main className="flex justify-between bg-gradient-to-r xxs:flex-col xms:flex-col from-greeen via-green to-greeen pl-28 pr-28 pt-32">
        <section className="font-medium flex flex-col justify-center text-white ">
          <h1 className="text-6xl tracking-wide w-wt xms:text-5xl xms:w-96  xxs:text-xl">
            What can Skdl help you do?
          </h1>
          <p className="pt-8 w-wt xms:w-96 tracking-wide text-base leading-6 mb-20">
            Plan, schedule and organize your day to day activities with special
            customizable features, to help you keep track of your pprogress in
            real time all in a unique simple way.
          </p>
        </section>
        <section className="flex mr-40">
          <img
            src={text}
            alt="question"
            className=" relative bottom-20 left-52 xxs:w-96 xms:w-28 xxs:bottom-10 xms:bottom-10 xms:h-40 xxs:left-4 xms:left-16"
          />
          <img src={lady} alt="lady" className="w-wt xxs:w-40" />
        </section>
      </main>

      <aside className="flex justify-between pl-28 pr-28 xxs:flex-col xms:flex-col">
        <section className="font-medium flex flex-col justify-center items-center">
          <h1 className="text-6xl tracking-wide w-wtb xms:text-5xl xms:w-96  xxs:text-xl xxs:mt-10 xms:mt-10">
            Organize and plan your tasks
          </h1>
          <p className="pt-8 w-wtb xms:w-96  xxs:w-96 tracking-wide text-base leading-6">
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

      <aside className="flex justify-between bg-gradient-to-r from-Green via-green to-Green pl-28 pr-28 xxs:flex-col xms:flex-col-reverse">
        <section className="font-medium flex flex-col justify-center">
          <p className=" w-wtb tracking-wide text-base leading-6 text-white mt-12 xms:w-96  xxs:w-96">
            Measure your performance and track your progress know how well
            you’re doing, segmented by day, month and year, this would help you
            organize your life.
          </p>
        </section>

        <section className=" pr-36">
          <img
            src={graph}
            alt="phone"
            className="w-64 border-4 border-white rounded-b-3xl"
          />
        </section>
      </aside>

      <aside className=" bg-gradient-to-r from-Green via-green to-Green pl-28 pr-28 h-ht">
        <section className="flex flex-col pt-48 items-center justify-center ml-96 xxs:ml-0 xms:ml-0">
        <hgroup>
          <h1 className="text-5xl text-white font-medium xxs:text-3xl xms:text-3xl">Download Now!</h1>
        </hgroup>
        <section className="flex justify-between w-80 mt-8 xxs:w-96 xms:w-80">
          <figure className="bg-black text-white w-36 flex p-1 items-center rounded-md">
            <aside>
              <img src={playstore} alt="" className="w-4 mr-2 ml-1" />
            </aside>
            <div>
              <h6 className="text-xs  text-gray-200">GET IT ON</h6>
              <h2 className="text-sm">Google Play</h2>
            </div>
          </figure>

          <figure className="bg-black text-white flex w-36 p-1 items-center rounded-md ">
            <aside>
              <img src={store} alt="" className="w-4 mr-2 ml-1" />
            </aside>
            <div>
              <h6 className="text-xs text-gray-200">Download on the</h6>
              <h2 className="text-sm">App Store</h2>
            </div>
          </figure>
        </section>
        </section>
       
      </aside>
    </section>
  );
}

export default Content;
