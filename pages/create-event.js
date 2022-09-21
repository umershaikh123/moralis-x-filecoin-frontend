import { useState, useEffect } from 'react';
import Head from 'next/head';
// import Link from 'next/link';
import getRandomImage from '../../utils/getRandomImage';

import donate from '../assest/donateMoney.png';
import { Web3Storage, File, getFilesFromPath } from 'web3.storage';

const { resolve } = require('path');
export default function CreateEvent() {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [maxCapacity, setMaxCapacity] = useState('');
  const [refund, setRefund] = useState('');
  const [eventLink, setEventLink] = useState('');
  const [eventDescription, setEventDescription] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const body = {
      name: eventName,
      description: eventDescription,
      link: eventLink,
      image: donate
    };

    async function storeEventData() {
      try {
        const files = await makeFileObjects(body);
        const cid = await storeFiles(files);

        return json({ success: true, cid: cid });
      } catch (err) {
        return res
          .status(500)
          .json({ error: 'Error creating event', success: false });
      }
    }

    async function makeFileObjects(body) {
      const buffer = Buffer.from(JSON.stringify(body));

      // const imageDirectory = resolve(
      //   process.cwd(),
      //   `public/images/${body.image}`
      // );
      // const files = await getFilesFromPath(imageDirectory);

      const files = files.push(new File([buffer], 'data.json'));
      return files;
    }

    function makeStorageClient() {
      return new Web3Storage({ token: process.env.WEB3STORAGE_TOKEN });
    }

    async function storeFiles(files) {
      const client = makeStorageClient();
      const cid = await client.put(files);
      return cid;
    }

    // try {
    //   try {
    //     const response = await storeEventData();
    //   } catch (error) {
    //     console.log(' ERROR response.status !== 200 ');
    //   }

    //   console.log('Form successfully submitted!');
    //   let responseJSON = await response.json();
    //   console.log(responseJSON.cid);
    //   console.log('Responce ', responseJSON);
    //   // await createEvent(responseJSON.cid);
    // } catch (error) {
    //   alert(`  Error ${error}`);
    // }
    // console.log('submitted');

    try {
      const response = await storeEventData();

      // if (response.status !== 200) {
      //   alert('Oops! Something went wrong. Please refresh and try again.');
      // } else {
      console.log('Form successfully submitted!');
      let responseJSON = await response.json();
      console.log('WEB3 STORAGE : cid ', responseJSON.cid);
      // await createProgram(responseJSON.cid);
      // }
      // check response, if success is false, dont take them to success page
    } catch (error) {
      alert(
        `Oops! Something went wrong. Please refresh and try again. Error ${error}`
      );
    }
  }

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

  useEffect(() => {
    // disable scroll on <input> elements of type number
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
