import React, { useState } from 'react';
import CauseBox from './causeBox';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import program1 from '../assest/program1.png';
import styles from '../styles/Home.module.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';
export default function VoteModal({ showModal, setShowModal }) {
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center bg-black-background transition ease-in duration-150  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-custom8 my-6  max-w-sm  ">
              <div className="border-0 rounded-lg bg-DarkBlack p-4 shadow-lg relative flex flex-col w-full bg-black-background outline-none focus:outline-none">
                <div className="flex  items-center justify-start  ">
                  <button
                    className="bg-red py-2 text-black-background font-bold outline-none focus:outline-none px-6  rounded-md
                     text-md  mr-1 mb-3 hover:scale-110 transition ease-in duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
                <div className="flex items-center  justify-between rounded-t">
                  <h3 className="text-3xl ml-36 text-lightOrange  mb-3 font-semibold">
                    Voting
                  </h3>
                </div>
                {/*body*/}
                <div className="flex-auto">
                  <div>
                    <p className=" text-light-green pl-4 pr-4 text-md font-semibold leading-relaxed">
                      Please be careful in voting. press accept if it the
                      program seems original or press reject if it is a scam
                    </p>
                  </div>
                  <div className="  mx-auto w-24 mt-6  rounded-md items-center justify-center">
                    {/* <p className="font-bold  bg-orange py-1 rounded-md  text-center  text-DarkBlack">
                      Program
                    </p> */}
                  </div>
                  <div className=" ">
                    <CauseBox
                      addProgress={false}
                      addbutton={false}
                      image={program1}
                      boxDesign="w-60 ml-16 shadow-orange  "
                      message="Help us fight feed thousands of people in poverty , homeless poeple and provide medical care for the poor"
                    />
                  </div>
                  <div className="flex p-1 ml-24 mt-5">
                    <button className="flex bg-darkGreen  rounded-lg p-2 mr-6 hover:scale-110 transition ease-in duration-150">
                      <FaThumbsUp
                        className="ml-1 mr-1  text-white-background"
                        size={20}
                      />
                      <p className=" text-white-background font-semibold">
                        Accept
                      </p>
                    </button>
                    <button className="flex bg-lightRed  rounded-lg p-2 hover:scale-110 transition ease-in duration-150">
                      <FaThumbsDown
                        className="ml-1 mr-1 mt-1 text-white-background"
                        size={20}
                      />
                      <p className="text-white-background font-semibold">
                        Reject
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
