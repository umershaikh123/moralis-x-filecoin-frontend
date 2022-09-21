import React, { useState } from 'react';
import CauseBox from './causeBox';
import program1 from '../assest/program1.png';

export default function DonateModal({ showModal, setShowModal }) {
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center  bg-black-background flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-custom1 my-6  max-w-sm  ">
              <div className="border-0 rounded-lg bg-DarkBlack p-4 shadow-lg relative flex flex-col w-full   ">
                <button
                  className="bg-red w-24 py-2 text-black-background font-bold   px-6  rounded-md
                     text-md  mr-1   hover:scale-110 transition ease-in duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <div className="flex -mt-5 items-center justify-start  ">
                  <h3 className="text-3xl text-light-green ml-60   font-semibold">
                    Payment
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="flex">
                    <div className="flex-auto mt-8">
                      <div>
                        <p className=" text-light-green  pr-2 text-md font-semibold leading-relaxed">
                          Please enter amount you want to Donate
                        </p>
                      </div>
                      {/* <div className="mt-8">
                        <label htmlFor="address">Address:</label>
                        <input
                          type="text"
                          className=" text-md border ml-5 rounded-lg shadow-md "
                          id="address"
                        />
                      </div> */}
                      <div className="mt-8 ">
                        <label htmlFor="amount">Amount (ETH) :</label>
                        <input
                          type="number"
                          className=" text-center mt-3 border rounded-lg shadow-md"
                          id="amount"
                        />
                      </div>
                      <button
                        className="bg-light-green w-28 mt-16 py-2 text-black-background font-bold outline-none focus:outline-none px-8  rounded-md
                     text-md      hover:scale-110 transition ease-in duration-150"
                        type="button"
                      >
                        Donate
                      </button>
                    </div>
                    <div>
                      <CauseBox
                        addProgress={true}
                        buttonText="Donate"
                        image={program1}
                        message=" Help us fight feed thousands of people in poverty, homeless
                          people and provide medical care for the poor"
                        progressAmount="500/1000" // dynamic
                        progressValue={50}
                        title="Health care program"
                        buttonDesign={`  bg-light-green  transition ease-in duration-150  ml-1  px-5 ml-2  text-DarkBlack font-bold text-xs rounded-md mb-3`}
                        progressDesign={`ml-20 h-4 rounded-lg bg-transparent mb-3 w-28`}
                        boxDesign="  shadow-green w-60 ml-20  "
                        textColor={`darkGreen`}
                        addDescription={true}
                      />
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
