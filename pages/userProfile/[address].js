import Image from 'next/image';
import React, { useState } from 'react';

import program1 from '../../assest/program1.png';
import program2 from '../../assest/p2.png';

import nft1 from '../../assest/image10.png';
import nft2 from '../../assest/image8.png';

import p1 from '../../assest/profil1.png';
import Layout from '../../components/Layout';

import styles from '../../styles/Home.module.css';
import Footer from '../../components/footer';
import CauseBox from '../../components/causeBox';

import { Window, useLaunch, useIsOpen, Launcher } from '@relaycc/receiver';

const UserProfile = () => {
  const launch = useLaunch();
  const isOpen = useIsOpen();
  return (
    <div>
      <Layout>
        <div className=" mb-16   ml-14 text-light-green ">
          <div>
            <div className="   flex   ">
              <p className="text-4xl  font-bold   mt-7">User Profile</p>
              <div className="flex  ml-custom6 ">
                <div className=" flex mt-8">
                  <div className="bg-light-green px-4 py-1 text-black-background rounded-md h-fit font-bold text-xl ">
                    Total funds donated :
                  </div>

                  <div className="bg-light-green px-4 py-1 ml-2 text-black-background rounded-md h-fit font-bold text-xl  ">
                    500 $
                  </div>
                </div>
              </div>
            </div>

            <div className="ml-3">
              <div className="flex mt-5 space-x-3">
                <div className="w-fit">
                  <Image src={p1} height="50px" width="50px" alt="address" />
                </div>
                <p className="mt-2 ml-1 text-light-green  text-2xl font-semibold ">
                  0xea123456789101112{' '}
                </p>
                {/* 
                <button className="bg-light-green px-4 mt-3 text-black-background rounded-md h-fit font-bold text-xl">
                  Chat
                </button> */}

                <Window className={styles.position} />

                <button
                  onClick={
                    () => launch('0x31600D5AF12782205F42998b19567B550c1D464e') //address of the organizer
                  }
                  className="bg-light-green px-4 mt-3 text-black-background rounded-md h-fit font-bold text-xl hover:scale-110  transition ease-in duration-150 "
                >
                  chat
                </button>
              </div>
              <p className="mt-5 text-2xl leading-loose font-bold mb-3 ">
                NFT&apos;s Recieved
              </p>
              <div className="flex">
                <div className="w-fit  hover:scale-110 transition ease-in duration-150 dark:text-light-green ">
                  <Image src={nft2} height="150px" alt="nft-holder" />
                </div>
                <div className="w-fit   ml-12  rounded-lg hover:scale-110 transition ease-in duration-150 dark:text-light-green ">
                  <Image src={nft1} height="150px" alt="nft-holder" />
                </div>
              </div>
            </div>

            <div>
              <div className="   flex   ">
                <p className="text-2xl  font-bold   mt-12 ">Donated programs</p>
              </div>

              <div className="flex  mx-auto space-x-20 flex-wrap      ">
                <CauseBox
                  buttonText="Donate"
                  image={program1}
                  message=" Help us fight feed thousands of people in poverty, homeless
                  people and provide medical care for the poor"
                  progressAmount="500/1000" // dynamic
                  progressValue={50}
                  title="Scholar ship program"
                  buttonDesign={`mt-5 bg-light-green mr-5    px-5 text-DarkBlack font-bold text-xs rounded-md mb-3`}
                  boxDesign="w-56 shadow-green pb-4 ml-3"
                  textColor={`darkGreen`}
                  addDescription={false}
                />

                <CauseBox
                  buttonText="Donate"
                  image={program2}
                  message=" Help us fight feed thousands of people in poverty, homeless
                  people and provide medical care for the poor"
                  progressAmount="500/1000" // dynamic
                  progressValue={50}
                  title="nature relieve funds"
                  buttonDesign={`mt-5 bg-light-green mr-5    px-5 text-DarkBlack font-bold text-xs rounded-md mb-3`}
                  boxDesign="w-56 shadow-green pb-4 ml-3"
                  textColor={`darkGreen`}
                  addDescription={false}
                  // onClicked={} // move to detail page
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default UserProfile;
