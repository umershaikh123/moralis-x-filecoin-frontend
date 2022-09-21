import React, { useState } from 'react';
import CauseBox from './causeBox';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import program1 from '../assest/program1.png';

export default function FailedModal({ showModal, setShowModal }) {
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center  bg-black-background flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-custom1 my-6  max-w-sm  ">
              <div className="border-0 rounded-lg bg-DarkBlack p-4 shadow-lg relative flex flex-col w-full   ">
                <button
                  className="bg-red w-24 py-2 text-black-background font-bold outline-none focus:outline-none px-6  rounded-md
                          text-md mr-1   hover:scale-110 transition ease-in duration-150 "
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <div className="flex -mt-10 items-center justify-start  ">
                  <h3 className="text-3xl text-red ml-52   font-semibold">
                    Program Failed
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="flex">
                    <div className="flex-auto mt-8">
                      <div className="space-y-8 ">
                        <p className=" text-light-green  pr-2 text-xl font-semibold leading-relaxed">
                          The program could fail due to one of the following
                          reasons
                        </p>
                        <p className=" text-light-green  pr-2 text-lg font-semibold leading-relaxed">
                          1- It was rejected in verifying stage 2
                        </p>
                        <p className=" text-light-green  pr-2 text-lg font-semibold leading-relaxed">
                          2- Ran out of FundRaising Time
                        </p>

                        <p className=" text-light-green  pr-2 text-lg font-semibold leading-relaxed">
                          3- Voting Time ran out . Total vote not reached
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end rounded-b"></div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
