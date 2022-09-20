// create form page
import Navbar from '../components/Navbar';
import React, { useState } from 'react';
import Image from 'next/image';
import Funder from '../assest/Funder.png';
import vector from '../assest/Vector.png';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import Footer from '../components/footer';
import getRandomImage from '../../utils/getRandomImage';
/** @format */

// Import the NFTStorage class and File constructor from the 'nft.storage' package
import { NFTStorage, File } from 'nft.storage';

// // The 'mime' npm package helps us set the correct file type on our File objects
// import mime from 'mime';

// // The 'fs' builtin module on Node.js provides access to the file system
// import fs from 'fs';

// // The 'path' module provides helpers for manipulating filesystem paths
// import path from 'path';

// Paste your NFT.Storage API key into the quotes:
const NFT_STORAGE_KEY = 'REPLACE_ME_WITH_YOUR_KEY';
const API_KEY = process.env.NFT_STORAGE_API_KEY;

function CreateNewProgram() {
  const router = useRouter();
  const _fundingPage = () => {
    router.push('/funding-programs'); // Make this Dynamic
    console.log('back button pressed ');
  };
  const [ID, setID] = useState(null);
  const [programName, setProgramName] = useState('');
  const [Cause, setCause] = useState('');
  const [description, setDescription] = useState('');
  const [twitter, setTwitter] = useState('');
  const [facebook, setFacebook] = useState('');
  const [Website, setWebsite] = useState('');
  const [FundGoal, setFundGoal] = useState('');
  const [Image, setImage] = useState('');
  const [Video, setVideo] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const body = {
      Name: programName,
      cause: Cause,
      Description: description,
      // image: Image,
      image: getRandomImage(),
      // video: Video,
      twitter: twitter,
      facebook: facebook,
      website: Website,
      fundGoal: FundGoal
    };

    // console.log('ProgramName :  ', programName);
    // console.log('cause:  ', Cause);
    // console.log(' Description:  ', description);
    // console.log('image:  ', Image);
    // console.log('Video:  ', Video);
    // console.log('twitter:  ', twitter);
    // console.log('facebook :  ', facebook);
    // console.log('Website :  ', Website);
    // console.log('FundGoal :  ', FundGoal);
    // console.log('From submitted ');

    try {
      console.log('ERROR ');
      const response = await fetch('./api/store-event-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      if (response.status !== 200) {
        alert('Oops! Something went wrong. Please refresh and try again.');
      } else {
        console.log('Form successfully submitted!');
        let responseJSON = await response.json();
        console.log('WEB3 STORAGE : cid ', responseJSON.cid);
        // await createEvent(responseJSON.cid);
      }
      // check response, if success is false, dont take them to success page
    } catch (error) {
      alert(
        `Oops! Something went wrong. Please refresh and try again. Error ${error}`
      );
    }

    // storeExampleNFT();
  }

  // async function storeExampleNFT() {
  //   const NFT_Image = document.getElementById('NFT'); // image inputed in a form

  //   // use custom metaData
  //   const nft = {
  //     // image, // use image Blob as `image` field
  //     image: NFT_Image,

  //     name: "Storing the World's Most Valuable Virtual Assets with NFT.Storage",
  //     description: 'The metaverse is here. Where is it all being stored?'
  //   };

  //   const client = new NFTStorage({ token: API_KEY });
  //   const metadata = await client.store(nft);

  //   console.log('NFT data stored!');
  //   console.log('Metadata URI: ', metadata.url);
  // }

  // const createEvent = async cid => {
  //   try {
  //     const rsvpContract = connectContract();

  //     if (rsvpContract) {
  //       let deposit = ethers.utils.parseEther(refund);
  //       let eventDateAndTime = new Date(`${eventDate} ${eventTime}`);
  //       let eventTimestamp = eventDateAndTime.getTime();
  //       let eventDataCID = cid;

  //       const txn = await rsvpContract.createNewEvent(
  //         eventTimestamp,
  //         deposit,
  //         maxCapacity,
  //         eventDataCID,
  //         { gasLimit: 900000 }
  //       );
  //       setLoading(true);
  //       console.log('Minting...', txn.hash);
  //       let wait = await txn.wait();
  //       console.log('Minted -- ', txn.hash);

  //       setEventID(wait.events[0].args[0]);

  //       setSuccess(true);
  //       setLoading(false);
  //       setMessage('Your event has been created successfully.');
  //     } else {
  //       console.log('Error getting contract.');
  //     }
  //   } catch (error) {
  //     setSuccess(false);
  //     setMessage(`There was an error creating your event: ${error.message}`);
  //     setLoading(false);
  //     console.log(error);
  //   }
  // };

  return (
    <div className={styles.NewProgram}>
      <Navbar />
      <button
        onClick={_fundingPage}
        className="px-8 py-2 rounded-lg ml-24 mt-10 font-bold text-DarkBlack  bg-Text-green  DarkBlack hover:scale-110  transition ease-in duration-150  "
      >
        Back
      </button>
      <div className="mx-56 mt-5">
        <div className=" text-3xl font-bold text-light-green ml-24 mt-4  mb-12">
          Create New Funding Program
        </div>
        <form onSubmit={handleSubmit}>
          {/* First section */}
          <div className="flex mt-4 ">
            <h1 className=" text-lg font-light text-light-green ml-24  mb-12">
              Program Name
            </h1>

            <div className="flex text-left">
              <input
                className="ml-form1 h-10 w-custom1  shadow-md rounded-lg bg-form text-center border-2"
                id="Program Name"
                type="text"
                required
                value={programName}
                onChange={e => setProgramName(e.target.value)}
              />
            </div>
          </div>

          {/*2 section */}
          <div className="flex mt-4 ">
            <h1 className=" text-lg font-light text-light-green ml-24 mb-12">
              Cause of the program
            </h1>

            <div className="flex ">
              <input
                className="ml-form2 h-10 w-custom1 shadow-md rounded-lg bg-form text-center border-2"
                id="title"
                type="text"
                required
                value={Cause}
                onChange={e => setCause(e.target.value)}
              />
            </div>
          </div>

          {/* 3 section */}
          <div className="flex mt-4 ">
            <h1 className=" text-lg font-light text-light-green ml-24 mb-12">
              Program Description
            </h1>

            <div className="flex ">
              <input
                className="ml-form3 h-32 w-custom1  shadow-md rounded-lg bg-form text-center border-2 mb-12"
                id="title"
                type="text"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </div>
          </div>

          {/* 4 section */}
          <div className="flex mt-4 ">
            <h1 className=" text-lg font-light text-light-green ml-24  mb-12">
              Background Image
            </h1>

            <div className="flex ">
              <input
                className="ml-form4 h-9 w-96 shadow-md rounded-lg bg-form text-center border-2 "
                id="Backgroud"
                accept="image/*"
                type="file"
                // required
                value={Image}
                onChange={e => setImage(e.target.value)}
              />
            </div>
          </div>

          {/* 4 section */}
          {/* <div className="flex mt-4 ">
            <h1 className=" text-lg font-light text-light-green ml-24  mb-12">
              Upload NFT
            </h1>

            <div className="flex ">
              <input
                className="ml-form4 h-9 w-96 shadow-md rounded-lg bg-form text-center border-2 "
                id="NFT"
                accept="image/*"
                type="file"
              />
            </div>
          </div> */}

          {/* 5 section */}
          <div className="flex mt-4 ">
            <h1 className=" text-lg font-light text-light-green ml-24  mb-12">
              Introductory Video
            </h1>

            <div className="flex ">
              <input
                className="ml-form5 h-9 w-96 shadow-md rounded-lg bg-form text-center border-2"
                id="video"
                accept="video/*"
                type="file"
                value={Video}
                onChange={e => setVideo(e.target.value)}
              />
            </div>
          </div>

          {/* 6  section */}
          <div className="flex mt-4 ">
            <h1 className=" text-lg font-light text-light-green ml-24  mb-12">
              Twitter Link
            </h1>

            <div className="flex ">
              <input
                className="ml-form6 h-9 w-96 shadow-md rounded-lg bg-form text-center border-2"
                id="title"
                type="text"
                required
                value={twitter}
                onChange={e => setTwitter(e.target.value)}
              />
            </div>
          </div>

          {/* 7 section */}
          <div className="flex mt-4 ">
            <h1 className=" text-lg font-light text-light-green ml-24  mb-12">
              Facebook Link
            </h1>

            <div className="flex ">
              <input
                className="ml-form7 h-9 w-96 shadow-md rounded-lg bg-form text-center border-2"
                id="title"
                type="text"
                value={facebook}
                onChange={e => setFacebook(e.target.value)}
              />
            </div>
          </div>

          {/* 8 section */}
          <div className="flex mt-4 ">
            <h1 className=" text-lg font-light text-light-green ml-24  mb-12">
              website Link
            </h1>

            <div className="flex ">
              <input
                className="ml-form8 h-9 w-96 shadow-md rounded-lg bg-form text-center border-2"
                id="title"
                type="text"
                value={Website}
                onChange={e => setWebsite(e.target.value)}
              />
            </div>
          </div>

          {/* 8 section */}
          <div className="flex mt-4 ">
            <h1 className=" text-lg font-light text-light-green ml-24  mb-12">
              Fund goal
            </h1>

            <div className="flex ">
              <input
                className="ml-form9 h-10 w-40 shadow-md rounded-lg bg-form text-start border-2"
                id="title"
                type="number"
                required
                value={FundGoal}
                onChange={e => setFundGoal(e.target.value)}
              />
              <span className="mt-2 -ml-12">ETH</span>
            </div>
          </div>

          <button className={styles.gradientButton2} type="submit">
            <span className="px-5   py-8 font-bold text-black-background  ">
              {/* <input type="submit"  /> */}
            </span>
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default CreateNewProgram;
