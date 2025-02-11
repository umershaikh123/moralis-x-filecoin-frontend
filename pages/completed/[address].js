import React, { useState } from 'react';
import Image from 'next/image';
import CauseBox from '../../components/causeBox';
import program1L from '../../assest/program1L.png';
import program1 from '../../assest/program1.png';
import p1 from '../../assest/profil1.png';
import p2 from '../../assest/Ellipse9.png';
import p3 from '../../assest/Ellipse10.png';
import p4 from '../../assest/Ellipse13.png';
import p5 from '../../assest/Ellipse14.png';

import { BsFillPersonFill, BsFillChatDotsFill } from 'react-icons/bs';

import { RiMoneyDollarCircleFill } from 'react-icons/ri';

import { useRouter } from 'next/router';

import { Window, useLaunch, useIsOpen, Launcher } from '@relaycc/receiver';
const CompletedPage = () => {
  const launch = useLaunch();
  const isOpen = useIsOpen();
  const router = useRouter();
  const _fundingPage = () => {
    router.push('/funding-programs'); // Make this Dynamic
    console.log('back button pressed ');
  };
  return (
    <div className="bg-black-background   flex  w-custom5   text-light-green ">
      {/* Left side */}
      <div className="flex flex-col w-6/12 ml-16   ">
        <button
          onClick={_fundingPage}
          className="px-4 py-2 rounded-lg max-w-button  mt-6 font-bold  bg-Text-green  text-DarkBlack hover:scale-110  transition ease-in duration-150  "
        >
          Back
        </button>
        <h1 className="text-4xl text-lightBlue mb-5 mt-8 font-bold  ">
          Completed State
        </h1>

        <p className="text-xl mb-8 w-12/12 font-normal text-lightBlue leading-extra-loose  ">
          Wohoo ! the program has succuessfully raised its funding and it is now
          completed.
        </p>

        <h1 className="text-3xl text-light-green mb-4  font-bold  ">
          Users Donated
        </h1>

        {/* user 1 */}

        <div className="flex flex-col   space-y-6 mt-4">
          <div className="flex flex-row   space-x-4 items-center ">
            <Image src={p1} />

            <h1 className="text-xl text-darkGreen font-bold  ">
              0xea123456789101112
            </h1>

            <button className="px-6 py-1 rounded-md    font-bold  bg-light-green  text-DarkBlack hover:scale-110  transition ease-in duration-150  ">
              0.01 ETH
            </button>
          </div>

          <div className="flex flex-row   space-x-4 items-center ">
            <Image src={p2} />

            <h1 className="text-xl text-darkGreen font-bold  ">
              0xea123456789101112
            </h1>

            <button className="px-6 py-1 rounded-md    font-bold  bg-light-green  text-DarkBlack hover:scale-110  transition ease-in duration-150  ">
              2 ETH
            </button>
          </div>

          <div className="flex flex-row   space-x-4 items-center ">
            <Image src={p3} />

            <h1 className="text-xl text-darkGreen font-bold  ">
              0xea123456789101112
            </h1>

            <button className="px-6 py-1 rounded-md    font-bold  bg-light-green  text-DarkBlack hover:scale-110  transition ease-in duration-150  ">
              3 ETH
            </button>
          </div>

          <div className="flex flex-row   space-x-4 items-center ">
            <Image src={p4} />

            <h1 className="text-xl text-darkGreen font-bold  ">
              0xea123456789101112
            </h1>

            <button className="px-6 py-1 rounded-md    font-bold  bg-light-green  text-DarkBlack hover:scale-110  transition ease-in duration-150  ">
              5.01 ETH
            </button>
          </div>

          <div className="flex flex-row   space-x-4 items-center ">
            <Image src={p1} />

            <h1 className="text-xl text-darkGreen font-bold  ">
              0xea123456789101112
            </h1>

            <button className="px-6 py-1 rounded-md    font-bold  bg-light-green  text-DarkBlack hover:scale-110  transition ease-in duration-150  ">
              2.014 ETH
            </button>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="flex flex-col w-6/12 text-light-green rounded-xl justify-end items-end mt-8 mr-40 mt-12  ">
        <CauseBox
          buttonText="completed"
          image={program1}
          message=" Help us fight feed thousands of people in poverty, homeless
                  people and provide medical care for the poor"
          progressAmount="1000/1000"
          progressValue={100}
          title="Health care program"
          buttonDesign={`mt-5 bg-blue font-semiboldtransition ease-in duration-150   ml-2 px-4 py-0 text-white-background text-xs rounded-md mb-3`}
          progressDesign={`ml-16 h-4 bg-lightBlue rounded-lg bg-transparent mb-3 w-28`}
          boxDesign="  shadow-lightBlue pb-5 w-custom4   mr-24"
          textColor={`darkGreen`}
          addDescription={true}
        />

        <div className="  mt-6  ">
          <button className="px-10 py-2 mb-6 ml-28 rounded-md   font-bold  bg-lightBlue text-DarkBlack hover:scale-110  transition ease-in duration-150  ">
            Completed
          </button>

          <div>
            <button className="px-10 py-2 mb-6 ml-10 rounded-md   font-bold  bg-light-green text-DarkBlack hover:scale-110  transition ease-in duration-150  ">
              Withdraw Funds (only Owner)
            </button>
          </div>

          <div className="flex mt-5">
            <BsFillPersonFill size={25} className="mr-4" />

            <h3 className="text-md font-semibold">Address of Organizer: </h3>
            <span>
              <a
                href={`https://mumbai.polygonscan.com/`}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3  "
              >
                0x31600D5AF12782205F4299
              </a>
            </span>
          </div>

          <div className="flex mt-6">
            <BsFillChatDotsFill size={25} className="mr-4" />
            <h3 className="text-md font-semibold">Chat with the Organizer</h3>
            <button
              onClick={
                () => launch('0x31600D5AF12782205F42998b19567B550c1D464e') //address of the organizer
              }
              className="px-6 py-1 ml-4 -mt-2 rounded-lg max-w-button   font-bold  bg-Text-green  text-DarkBlack hover:scale-110  transition ease-in duration-150  "
            >
              chat
            </button>
            <Window />
          </div>

          <div className="flex mr-24  mt-5">
            <RiMoneyDollarCircleFill size={45} className=" " />
            <p className="text-xl font-semibold mt-2  ml-2">
              Total Funds Raised :{' '}
              <span className="text-green ml-1"> 10000 $</span>
            </p>
          </div>

          <div className="h-24"></div>
        </div>
      </div>
    </div>
  );
};

export default CompletedPage;
