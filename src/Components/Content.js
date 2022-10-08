import React from "react";
import lady from "../Images/Rectangle.png";
import phone from "../Images/y.png";
import graph from "../Images/x.png";
import text from "../Images/text.png";
import store from "../Images/store.png"
import playstore from "../Images/playstore.png"


function Content() {
  return (
    <section className="">
      <main className="flex justify-between bg-gradient-to-r xxs:flex-col xxm:flex-col xms:flex-col from-greeen via-green to-greeen pl-28 pr-28 pt-32 xxs:pl-10 xxs:pr-10 xxm:pl-8 xxm:pr-8 xms:pl-20 xms:pr-20 smm:pl-20 smm:pr-20">
        <section className="font-medium flex flex-col justify-center text-white ">
          <h1 className="text-6xl tracking-wide w-wt xms:text-4xl xms:w-80 xxs:text-3xl xxs:w-72 xxm:w-72 xxm:text-4xl smm:text-4xl smm:w-64">
            What can Skdl help you do?
          </h1>
          <p className="pt-8 w-wt xxs:w-64 xxs:text-xs xms:text-sm xxm:text-sm xxm:w-80 xms:w-80 tracking-wide text-base leading-6 mb-20 smm:text-sm smm:w-80">
            Plan, schedule and organize your day to day activities with special
            customizable features, to help you keep track of your pprogress in
            real time all in a unique simple way.
          </p>
        </section>
        <section className="flex mr-40">
          <img
            src={text}
            alt="question"
            className=" relative w-48 h-48 left-36 xxs:w-20 xxs:h-20 xms:w-28 xxs:bottom-10 xms:bottom-10 xms:h-28 smm:h-28 smm:left-16 xxs:left-10 xxm:left-12 xxm:h-28 xxm:bottom-6 xms:left-14"
          />
          <img src={lady} alt="lady" className="w-96 max-w-btt object-fill" />
        </section>
      </main>

      <aside className="flex justify-between pl-28 pr-28 xxs:flex-col xxm:flex-col xms:flex-col xxs:pl-10 xxs:pr-10 xxm:pl-8 xxm:pr-8 xxm:pt-10 xms:pl-20 xms:pr-20 smm:pl-20 smm:pr-20">
        <section className="font-medium flex flex-col justify-center items-center  xxm:items-start xms:items-start smm:items-start">
          <h1 className="text-6xl tracking-wide w-wtb xms:text-4xl xms:w-80 xxs:w-64 xxs:text-3xl xxs:mt-10 xms:mt-10 xxm:w-80 xxm:text-4xl smm:text-4xl smm:w-64 smm:mt-10">
            Organize and plan your tasks
          </h1>
          <p className="pt-8 w-wtb xms:w-80 xms:text-sm  xxs:w-64 xxs:text-xs xxm:w-80 xxm:text-sm smm:w-80 smm:text-sm tracking-wide text-base leading-6 ">
            Are you looking for ways to acheive more, complete your task and
            accomplish more goals in ample time? Get to know what is to be built
            on and what is to be improved, plan, organize and schedule your
            daily activities with Skall.
          </p>
        </section>

        <section className="pt-28 pr-36 xxs:pt-12 smm:pr-2">
          <img src={phone} alt="phone" className="w-56" />
        </section>
      </aside>

      <aside className="flex justify-between bg-gradient-to-r from-Green via-green to-Green pl-28 pr-28 xxs:pl-10 xxs:pr-10 xxm:pl-8 xms:pr-20 xms:pl-20 xxm:pr-8 xxs:flex-col-reverse xxm:flex-col-reverse xms:flex-col-reverse smm:pr-20 smm:pl-20">
        <section className="font-medium flex flex-col justify-center">
          <p className=" mb-6 w-wtb tracking-wide leading-6 text-white mt-12 xxs:mt-16 xxm:mt-16 xms:w-80  xxs:w-64 xxs:text-xs xxm:w-80 xxm:text-sm xms:text-sm smm:text-sm smm:w-80">
            Measure your performance and track your progress know how well
            you’re doing, segmented by day, month and year, this would help you
            organize your life.
          </p>
        </section>

        <section className=" pr-36 smm:pr-2">
          <img
            src={graph}
            alt="phone"
            className="w-56 border-4 border-white rounded-b-3xl "
          />
        </section>
      </aside>

      <aside className=" bg-gradient-to-r from-Green via-green to-Green pl-28 pr-28 h-ht xxm:pr-8 xxm:pl-8 xms:pl-8 smm:pl-20 smm:pr-20">
        <section className="flex flex-col pt-48 items-center justify-center ml-96 smm:ml-0 xxs:items-center xxs:ml-0 xms:ml-0 xxs:pt-20 xxm:ml-0 xxm:pt-36 xms:pt-36">
        <hgroup>
          <h1 className="text-3xl text-white font-medium xxs:text-lg xxs:w-40 xms:text-3xl">Download Now!</h1>
        </hgroup>
        <section className="flex justify-between w-80 mt-8 xxs:w-72 xms:w-80">
          <figure className="bg-black text-white w-32 flex p-1 items-center rounded-md">
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
