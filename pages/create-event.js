import { useState, useEffect } from 'react';
import Head from 'next/head';
// import Link from 'next/link';
import getRandomImage from '../../utils/getRandomImage';

import donate from '../assest/donateMoney.png';
import { Web3Storage, File, getFilesFromPath } from 'web3.storage';
import { NFTStorage } from 'nft.storage';

const { resolve } = require('path');
export default function CreateEvent() {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [maxCapacity, setMaxCapacity] = useState('');
  const [refund, setRefund] = useState('');
  const [eventLink, setEventLink] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [NFT1, setNFT1] = useState('');

  // ({ token: process.env.WEB3STORAGE_TOKEN });

  //   const [dataUri, setDataUri] = useState('')

  //   const onChange = (file) => {

  //     if(!file) {
  //       setDataUri('');
  //       return;
  //     }

  //     fileToDataUri(file)
  //       .then(dataUri => {
  //         setDataUri(dataUri)
  //       })

  // const fileToDataUri = (file) => new Promise((resolve, reject) => {
  //   const reader = new FileReader();
  //   reader.onload = (event) => {
  //     resolve(event.target.result)
  //   };
  //   reader.readAsDataURL(file);
  //   })

  selectFile = () => {
    let uploadfile = document.getElementById('upload_doc');
    if (uploadfile) {
      this.setState({
        selectedUploadFile: uploadfile.files[0]
      });
    }
  };

  const formData = new FormData();
  formData.append(NFT1, this.state.selectedFile);
  this.uploadFile(formData); // here you can use fetch/Axios to send the form data

  async function handleSubmit(e) {
    e.preventDefault();
    const Upload = async () => {
      const body = {
        name: eventName,
        description: eventDescription,
        link: eventLink,
        image: donate
      };

      const client = new Web3Storage({
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDJBNDRGRTdiMGU5MzhFNzVGNDg3QTU0MzBFZEQzNDRkMjgxNkMyYjQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjM2NTk0MTUzNjYsIm5hbWUiOiJtb3JhbGlzIGhhY2thdGhvbiJ9.B-l87X3hMdRAGhs5xPze9Faq7w70y-OsBwVdi-PP2Qo'
      });

      // const files = await makeFileObjects(body);

      const files = await makeFileObjects(body);

      async function makeFileObjects(body) {
        const buffer = Buffer.from(JSON.stringify(body));
        const files = new File([buffer], 'data.json');
        return files;
      }

      const cid = await client.put([files]);
      console.log(files);

      console.log('stored files with cid:', cid);
    };

    async function storeExampleNFT() {
      const nft1 = {
        image: blob,
        name: 'Title1',
        value: 0,
        ProgramName: 'programName',
        Origin: 'Funder',
        type: 'Soul Bound',
        description: 'description about nft'
      };

      const client = new NFTStorage({
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDlkODc1Njg4RTY0MkIzNzlkNTg0MDZCNDFDMGE5MjY5ZDdCNGE1ZEUiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2MzY1OTcxOTUyMCwibmFtZSI6ImhhY2thdGhvbiJ9.wjRxHAGIc7cGCgnqSPrFRlcm4iR3d5_wDYLgTDASu-E'
      });
      const metadata1 = await client.store(nft1);
      // const metadata2 = await client.store(nft2);
      // const metadata3 = await client.store(nft3);

      console.log('NFT1 data stored!');
      console.log('Metadata1 URI: ', metadata1.url);

      // console.log('NFT2 data stored!');
      // console.log('Metadata1 URI: ', metadata2.url);

      // console.log('NFT3 data stored!');
      // console.log('Metadata1 URI: ', metadata3.url);
    }

    await Upload();
    await storeExampleNFT();
  }

  useEffect(() => {
    document.addEventListener('wheel', event => {
      if (document.activeElement.type === 'number') {
        document.activeElement.blur();
      }
    });
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Create your event | web3rsvp</title>
        <meta
          name="description"
          content="Create your virtual event on the blockchain"
        />
      </Head>
      <section className="relative py-12">
        <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl mb-4">
          Create your virtual event
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-8 divide-y divide-gray-200"
        >
          <div className="space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
              <label
                htmlFor="eventname"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Event name
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  id="event-name"
                  name="event-name"
                  type="text"
                  className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                  required
                  value={eventName}
                  onChange={e => setEventName(e.target.value)}
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Date & time
                <p className="mt-1 max-w-2xl text-sm text-gray-400">
                  Your event date and time
                </p>
              </label>
              <div className="mt-1 sm:mt-0 flex flex-wrap sm:flex-nowrap gap-2">
                <div className="w-1/2">
                  <input
                    id="date"
                    name="date"
                    type="date"
                    className="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border border-gray-300 rounded-md"
                    required
                    value={eventDate}
                    onChange={e => setEventDate(e.target.value)}
                  />
                </div>
                <div className="w-1/2">
                  <input
                    id="time"
                    name="time"
                    type="time"
                    className="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border border-gray-300 rounded-md"
                    required
                    value={eventTime}
                    onChange={e => setEventTime(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
              <label
                htmlFor="max-capacity"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Max capacity
                <p className="mt-1 max-w-2xl text-sm text-gray-400">
                  Limit the number of spots available for your event.
                </p>
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="number"
                  name="max-capacity"
                  id="max-capacity"
                  min="1"
                  placeholder="100"
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border border-gray-300 rounded-md"
                  value={maxCapacity}
                  onChange={e => setMaxCapacity(e.target.value)}
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
              <label
                htmlFor="refundable-deposit"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Refundable deposit
                <p className="mt-1 max-w-2xl text-sm text-gray-400">
                  Require a refundable deposit (in MATIC) to reserve one spot at
                  your event
                </p>
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="number"
                  name="refundable-deposit"
                  id="refundable-deposit"
                  min="0"
                  step="any"
                  inputMode="decimal"
                  placeholder="0.00"
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border border-gray-300 rounded-md"
                  value={refund}
                  onChange={e => setRefund(e.target.value)}
                />
              </div>
            </div>

            <div className="flex ">
              <input
                className="ml-32 h-9 w-80 shadow-md rounded-lg bg-form text-center border-2 "
                id="Backgroud"
                accept="image/*"
                type="file"
                required
                value={NFT1}
                onChange={e => setNFT1(e.target.value)}
              />
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
              <label
                htmlFor="event-link"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Event link
                <p className="mt-1 max-w-2xl text-sm text-gray-400">
                  The link for your virtual event
                </p>
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  id="event-link"
                  name="event-link"
                  type="text"
                  className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                  required
                  // value={eventLink}
                  // onChange={(e) => setEventLink(e.target.value)}
                />
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
              <label
                htmlFor="about"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Event description
                <p className="mt-2 text-sm text-gray-400">
                  Let people know what your event is about!
                </p>
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <textarea
                  id="about"
                  name="about"
                  rows={10}
                  className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                  // value={eventDescription}
                  // onChange={(e) => setEventDescription(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border  border-transparent shadow-sm text-sm font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Create
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}
