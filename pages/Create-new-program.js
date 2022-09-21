// create form page

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
// import { ethers } from 'ethers';
// const ethers = require('ethers');
// import connectContract from '../../utils/connectContract';
/** @format */

// Import the NFTStorage class and File constructor from the 'nft.storage' package
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import React, { useState } from 'react';
import Image from 'next/image';
import Funder from '../assest/Funder.png';
import vector from '../assest/Vector.png';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import Footer from '../components/footer';
import getRandomImage from '../../utils/getRandomImage';
import Alert from '../components/Alert';
import { NFTStorage, File } from 'nft.storage';

const NFT_STORAGE_API_KEY = process.env.NFT_STORAGE_API_KEY;

function CreateNewProgram({ Program }) {
  const router = useRouter();
  const _fundingPage = () => {
    router.push('/funding-programs'); // Make this Dynamic
    console.log('back button pressed ');
  };
  const [eventID, seteventID] = useState(null);
  const [loading, setLoading] = useState(null);
  const [programName, setProgramName] = useState('');
  const [Cause, setCause] = useState('');
  const [description, setDescription] = useState('');
  const [twitter, setTwitter] = useState('');
  const [facebook, setFacebook] = useState('');
  const [Website, setWebsite] = useState('');
  const [FundGoal, setFundGoal] = useState('');
  const [Image, setImage] = useState('');
  const [Video, setVideo] = useState('');

  const [NFT1, setNFT1] = useState('');
  const [NFT2, setNFT2] = useState('');
  const [NFT3, setNFT3] = useState('');

  const [Title1, setTitle1] = useState('');
  const [Title2, setTitle2] = useState('');
  const [Title3, setTitle3] = useState('');

  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const Upload = async () => {
      const body = {
        Name: programName,
        cause: Cause,
        Description: description,
        image: Image,
        video: Video,
        twitter: twitter,
        facebook: facebook,
        website: Website,
        fundGoal: FundGoal
      };

      const client = new Web3Storage({
        token: process.env.WEB3STORAGE_TOKEN
      });

      const files = await makeFileObjects(body);

      async function makeFileObjects(body) {
        const buffer = Buffer.from(JSON.stringify(body));
        const files = new File([buffer], 'data.json');
        return files;
      }

      const cid = await client.put([files]);
      console.log(files);

      console.log('stored files with cid:', cid);
      return cid;
    };

    const cid = await Upload();
    await createProgram(cid);
    await storeExampleNFT();
  }

  async function storeExampleNFT() {
    const nft1 = {
      image: NFT1,
      name: Title1,
      value: 0,
      ProgramName: programName,
      Origin: 'Funder',
      type: 'Soul Bound'
    };

    const nft2 = {
      image: NFT2,
      name: Title2,
      value: value1,
      ProgramName: programName,
      Origin: 'Funder',
      type: 'Soul Bound'
    };

    const nft3 = {
      image: NFT3,
      name: Title3,
      value: value2,
      ProgramName: programName,
      Origin: 'Funder',
      type: 'Soul Bound'
    };

    const client = new NFTStorage({ token: NFT_STORAGE_API_KEY });
    const metadata1 = await client.store(nft1);
    const metadata2 = await client.store(nft2);
    const metadata3 = await client.store(nft3);

    console.log('NFT1 data stored!');
    console.log('Metadata1 URI: ', metadata1.url);

    console.log('NFT2 data stored!');
    console.log('Metadata1 URI: ', metadata2.url);

    console.log('NFT3 data stored!');
    console.log('Metadata1 URI: ', metadata3.url);

    try {
      const Contract = connectContract();

      if (Contract) {
        let CID1 = metadata1;
        let CID2 = metadata2;
        let CID3 = metadata3;
        let _value1 = value1;
        let _value2 = value2;
        let programId = Program.programId;

        const txn = await Contract.storeNFTURI(
          CID1,
          CID2,
          CID3,
          _value1,
          _value2,
          programId
        );

        setLoading(true);
        console.log('waiting...', txn.hash);
        let wait = await txn.wait();

        seteventID(wait.events[0].args[0]);
        setSuccess(true);
        setLoading(false);
        setMessage('Your NFT uri has been stored successfully.');
      } else {
        console.log('Error getting contract.');
      }
    } catch (error) {
      setSuccess(false);
      setMessage(`There was an error creating your event: ${error.message}`);
      setLoading(false);
      console.log(error);
    }
  }

  const createProgram = async cid => {
    try {
      const Contract = connectContract();

      if (Contract) {
        let fundGoal = ethers.utils.parseEther(FundGoal);
        let dataCID = cid;

        const txn = await Contract.CreateNewProgram(fundGoal, dataCID, {
          gasLimit: 900000
        });

        setLoading(true);
        console.log('Minting...', txn.hash);
        let wait = await txn.wait();
        console.log('Minted -- ', txn.hash);
        seteventID(wait.events[0].args[0]);

        setSuccess(true);
        setLoading(false);
        setMessage('Your program has been created successfully.');
      } else {
        console.log('Error getting contract.');
      }
    } catch (error) {
      setSuccess(false);
      setMessage(`There was an error creating your event: ${error.message}`);
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className={styles.NewProgram}>
      {loading && (
        <Alert
          alertType={'loading'}
          alertBody={'Please wait'}
          triggerAlert={true}
          color={'white'}
        />
      )}
      {success && (
        <Alert
          alertType={'success'}
          alertBody={message}
          triggerAlert={true}
          color={'palegreen'}
        />
      )}
      {success === false && (
        <Alert
          alertType={'failed'}
          alertBody={message}
          triggerAlert={true}
          color={'palevioletred'}
        />
      )}

      <Navbar />
      <button
        onClick={_fundingPage}
        className="px-8 py-2 rounded-lg ml-24 mt-10 font-bold text-DarkBlack  bg-Text-green  DarkBlack hover:scale-110  transition ease-in duration-150  "
      >
        Back
      </button>

      {!success && (
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
                  className="ml-form4 h-9 w-80  shadow-md rounded-lg bg-form text-center border-2 "
                  id="Backgroud"
                  accept="image/*"
                  type="file"
                  // required
                  value={Image}
                  onChange={e => setImage(e.target.value)}
                />
              </div>
            </div>

            {/* 5 section */}
            <div className="flex mt-4 ">
              <h1 className=" text-lg font-light text-light-green ml-24  mb-12">
                Introductory Video
              </h1>

              <div className="flex ">
                <input
                  className="ml-form5 h-9 w-80  shadow-md rounded-lg bg-form text-center border-2"
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

            {/* 9 section */}
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

            <div className="flex flex-row mt-4 ">
              <div className="flex flex-col">
                <h1 className=" text-lg   text-light-green ml-24  ">1st NFT</h1>

                <label className=" text-md font-light text-darkGreen ml-24 w-72  mb-12">
                  select the image for your soul bound NFT that you want to give
                  to whoever donates to your porgram
                </label>
              </div>

              <div className="flex ">
                <input
                  className="ml-32 h-9 w-80 shadow-md rounded-lg bg-form text-center border-2 "
                  id="Backgroud"
                  accept="image/*"
                  type="file"
                  // required
                  value={NFT1}
                  onChange={e => setNFT1(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-row mt-4 ">
              <div className="flex flex-col">
                <h1 className=" text-lg   text-light-green ml-24  ">Title</h1>

                <label className=" text-md font-light text-darkGreen ml-24 w-72  mb-12">
                  Title of the 1st NFT
                </label>
              </div>

              <div className="flex ">
                <input
                  className="ml-32 h-9 w-80 shadow-md rounded-lg bg-form text-center border-2 "
                  id="Backgroud"
                  type="text"
                  // required
                  value={Title1}
                  onChange={e => setTitle1(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-row mt-4 ">
              <div className="flex flex-col">
                <h1 className=" text-lg   text-light-green ml-24  ">2ndNFT</h1>

                <label className=" text-md font-light text-darkGreen ml-24 w-72  mb-12">
                  select the image for your soul bound NFT that you want to give
                  to whoever donates to your porgram
                </label>
              </div>

              <div className="flex ">
                <input
                  className="ml-32 h-9 w-80 shadow-md rounded-lg bg-form text-center border-2 "
                  id="Backgroud"
                  accept="image/*"
                  type="file"
                  // required
                  value={NFT2}
                  onChange={e => setNFT2(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-row mt-4 ">
              <div className="flex flex-col">
                <h1 className=" text-lg   text-light-green ml-24  ">Title</h1>

                <label className=" text-md font-light text-darkGreen ml-24 w-72  mb-12">
                  Title of the 2nd NFT
                </label>
              </div>

              <div className="flex ">
                <input
                  className="ml-32 h-9 w-80 shadow-md rounded-lg bg-form text-center border-2 "
                  id="Backgroud"
                  type="text"
                  // required
                  value={Title2}
                  onChange={e => setTitle2(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-row mt-4 ">
              <div className="flex flex-col">
                <h1 className=" text-lg   text-light-green ml-24  ">Value</h1>

                <label className=" text-md font-light text-darkGreen ml-24 w-72  mb-12">
                  The 2nd NFT will be rewarded to whoever donates equal or above
                  this value
                </label>
              </div>

              <div className="flex ">
                <input
                  className="ml-32 h-9 w-80 shadow-md rounded-lg bg-form text-center border-2 "
                  id="Backgroud"
                  type="number"
                  // required
                  value={value1}
                  onChange={e => setValue1(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-row mt-4 ">
              <div className="flex flex-col">
                <h1 className=" text-lg   text-light-green ml-24  ">3rd NFT</h1>

                <label className=" text-md font-light text-darkGreen ml-24 w-72  mb-12">
                  select the image for your soul bound NFT that you want to give
                  to whoever donates to your porgram
                </label>
              </div>

              <div className="flex ">
                <input
                  className="ml-32 h-9 w-80 shadow-md rounded-lg bg-form text-center border-2 "
                  id="Backgroud"
                  accept="image/*"
                  type="file"
                  // required
                  value={NFT3}
                  onChange={e => setNFT3(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-row mt-4 ">
              <div className="flex flex-col">
                <h1 className=" text-lg   text-light-green ml-24  ">Title</h1>

                <label className=" text-md font-light text-darkGreen ml-24 w-72  mb-12">
                  Title of the 3rd NFT
                </label>
              </div>

              <div className="flex ">
                <input
                  className="ml-32 h-9 w-80 shadow-md rounded-lg bg-form text-center border-2 "
                  id="Backgroud"
                  type="text"
                  // required
                  value={Title3}
                  onChange={e => setTitle3(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-row mt-4 ">
              <div className="flex flex-col">
                <h1 className=" text-lg   text-light-green ml-24  ">Value</h1>

                <label className=" text-md font-light text-darkGreen ml-24 w-72  mb-12">
                  The 3rd NFT will be rewarded to whoever donates equal or above
                  this value
                </label>
              </div>

              <div className="flex ">
                <input
                  className="ml-32 h-9 w-80 shadow-md rounded-lg bg-form text-center border-2 "
                  id="Backgroud"
                  type="number"
                  // required
                  value={value2}
                  onChange={e => setValue2(e.target.value)}
                />
              </div>
            </div>

            <button className={styles.gradientButton2} type="submit">
              <span className="px-5   py-8 font-bold text-black-background  ">
                Submit
              </span>
            </button>
          </form>
        </div>
      )}

      {success && eventID && (
        <div>
          Success! Please wait a few minutes, then check out your event page{' '}
          <span className="font-bold">
            <Link href={`/detailPage/${eventID}`}>here</Link>
          </span>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default CreateNewProgram;

export async function getServerSideProps(context) {
  const { id } = context.params;
  const { data } = await client.query({
    // Query event (programCreated) data
  });

  return {
    props: {
      Program: data.event
    }
  };
}
