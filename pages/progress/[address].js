import React, { useState } from 'react';
import Image from 'next/image';
import CauseBox from '../../components/causeBox';
import program1L from '../../assest/program1L.png';

import p1 from '../../assest/profil1.png';
import p2 from '../../assest/Ellipse9.png';
import p3 from '../../assest/Ellipse10.png';
import p4 from '../../assest/Ellipse13.png';

import {
  BsFillPersonFill,
  BsFillChatDotsFill,
  BsFillQuestionCircleFill
} from 'react-icons/bs';

import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { FiTarget } from 'react-icons/fi';

import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';

import { BsClockFill } from 'react-icons/bs';
import DonateModal from '../../components/donateModal';

import { Window, useLaunch, useIsOpen, Launcher } from '@relaycc/receiver';
const ProgressPage = () => {
  const launch = useLaunch();
  const isOpen = useIsOpen();
  const router = useRouter();
  const _fundingPage = () => {
    router.push('/funding-programs'); // Make this Dynamic
    console.log('back button pressed ');
  };

  const _UserProfile = () => {
    router.push('/userProfile/1'); // Make this Dynamic
    console.log('back button pressed ');
  };

  const [showModal, setShowModal] = useState(false);
  return (
    <div className="bg-black-background   flex  w-custom5   text-light-green ">
      <DonateModal setShowModal={setShowModal} showModal={showModal} />
      {/* Left side */}
      <div className="flex flex-col w-6/12 ml-16   ">
        <button
          onClick={_fundingPage}
          className="px-4 py-2 rounded-lg max-w-button  mt-6 font-bold  bg-Text-green  text-DarkBlack hover:scale-110  transition ease-in duration-150  "
        >
          Back
        </button>
        <h1 className="text-4xl text-light-green mb-5 mt-8 font-bold  ">
          Raising Stage
        </h1>

        <p className="text-xl mb-8 w-9/12 font-normal text-light-green leading-extra-loose  ">
          The program is in Verifying Stage. Please Look at the program
          carefully and then vote . If the program is fake then Click on the
          Reject button
        </p>

        <h1 className="text-3xl text-light-green mb-4  font-bold  ">
          Users Donated
        </h1>

        {/* user 1 */}

        <div className="flex flex-col   space-y-6 mt-4">
          <div className="flex flex-row   space-x-4 items-center ">
            <Image src={p1} onClick={_UserProfile} />

            <h1 className="text-xl text-darkGreen font-bold  ">
              0xea123456789101112
            </h1>

            <button className="px-6 py-1 rounded-md    font-bold  bg-light-green  text-DarkBlack hover:scale-110  transition ease-in duration-150  ">
              0.01 ETH
            </button>
          </div>

          <div className="flex flex-row   space-x-4 items-center ">
            <Image src={p2} onClick={_UserProfile} />

            <h1 className="text-xl text-darkGreen font-bold  ">
              0xea123456789101112
            </h1>

            <button className="px-6 py-1 rounded-md    font-bold  bg-light-green  text-DarkBlack hover:scale-110  transition ease-in duration-150  ">
              2 ETH
            </button>
          </div>

          <div className="flex flex-row   space-x-4 items-center ">
            <Image src={p3} onClick={_UserProfile} />

            <h1 className="text-xl text-darkGreen font-bold  ">
              0xea123456789101112
            </h1>

            <button className="px-6 py-1 rounded-md    font-bold  bg-light-green  text-DarkBlack hover:scale-110  transition ease-in duration-150  ">
              3 ETH
            </button>
          </div>

          <div className="flex flex-row   space-x-4 items-center ">
            <Image src={p4} onClick={_UserProfile} />

            <h1 className="text-xl text-darkGreen font-bold  ">
              0xea123456789101112
            </h1>

            <button className="px-6 py-1 rounded-md    font-bold  bg-light-green  text-DarkBlack hover:scale-110  transition ease-in duration-150  ">
              5.01 ETH
            </button>
          </div>

          <div className="flex flex-row   space-x-4 items-center ">
            <Image src={p1} onClick={_UserProfile} />

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
          image={program1L}
          message=" Help us fight feed thousands of people in poverty, homeless
                  people and provide medical care for the poor"
          progressAmount="500/1000" // dynamic
          progressValue={50}
          title="Health care program"
          buttonDesign={`mt-5 bg-orange p-1 mr-12  px-6 py-2 ml-2  text-white-background font-bold text-xs rounded-md mb-3`}
          progressDesign={`ml-20 h-4 rounded-lg bg-transparent mb-3 w-28`}
          // onClicked={vote}
          boxDesign=" shadow-green w-custom4 pb-16 mr-44   "
          textColor={`darkGreen`}
          addDescription={true}
        />

        <div className="mr-16 mt-6  ">
          <button
            onClick={() => setShowModal(true)}
            className="px-10 py-2 mb-6 ml-24 rounded-md   font-bold  bg-light-green  text-DarkBlack hover:scale-110  transition ease-in duration-150  "
          >
            Donate
          </button>

          <div className="flex mt-5">
            <FiTarget size={35} className="mr-4" />
            <p className="text-md font-semibold mt-1">
              Target: <span className="text-green ml-1"> $1000</span>
            </p>
          </div>

          <div className="flex mt-5">
            <BsFillPersonFill size={25} className="mr-4" />

            <h3 className="text-md font-semibold">Address of Organizer: </h3>
            <span>
              <a
                href={`https://mumbai.polygonscan.com/`}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 inline"
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

          <div className="flex mt-5">
            <RiMoneyDollarCircleFill size={35} className="mr-4" />
            <p className="text-md font-semibold mt-1">
              Total Funds Raised :{' '}
              <span className="text-green ml-1"> 100 $</span>
            </p>
          </div>

          <div className="flex mt-5">
            <BsFillQuestionCircleFill size={35} className="mr-4" />
            <p className="text-md font-semibold  mt-1">
              Remainig : <span className="text-green ml-1"> 900 $</span>
            </p>
          </div>

          <div className="flex mt-5">
            <BsClockFill size={35} className="mr-4" />
            <p className="text-md font-semibold mt-1">
              Time remaining: <span className="text-green ml-1"> 1 month</span>
            </p>
          </div>

          <div className="h-44"></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressPage;
