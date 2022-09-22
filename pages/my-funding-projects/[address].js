import { useState } from 'react';
import React from 'react';
import Layout from '../../components/Layout';
import Image from 'next/image';
import program1 from '../../assest/program1.png';
import styles from '../../styles/Home.module.css';
import CauseBox from '../../components/causeBox';
import Footer from '../../components/footer';
import program2 from '../../assest/p2.png';
import program3 from '../../assest/p3.png';
import program4 from '../../assest/p4.png';

import { useRouter } from 'next/router';
const MyfundingProjects = () => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const CreateNewProgram = () => {
    router.push('/Create-new-program');
    console.log('button pressed');
  };

  return (
    <div className=" ">
      <Layout>
        <div className="flex ml-16 mt-16  ">
          <div className="text-3xl font-bold">My Funding projects</div>
          <button
            className="bg-light-green px-4 py-1 text-black-background ml-custom6 rounded-md h-fit items-end justify-end font-bold text-xl hover:scale-110 transition ease-in duration-150"
            onClick={CreateNewProgram}
          >
            Create new program
          </button>
        </div>

        <div className="flex  mx-auto space-x-20 flex-wrap ">
          <CauseBox
            buttonText="Donate"
            image={program1}
            message=" This is a global scholarship program , providing oppportunites
            to the people who can't afford education.
            
            "
            progressAmount="500/1000" // dynamic
            progressValue={50}
            title="Scholarship program"
            boxDesign="w-64 shadow-green pb-4 w-custom4  ml-14 "
            textColor={`darkGreen`}
            addDescription={true}
            // onClicked={} // move to detail page
          />

          <CauseBox
            buttonText="Donate"
            image={program2}
            message="This is a Nature fund program to help the and save animal life , 
            and provide enough food for the poor animals in zoos
             "
            progressAmount="500/1000" // dynamic
            progressValue={50}
            title="Nature relieve funds"
            boxDesign="w-64 shadow-green pb-4 w-custom4  ml-14 "
            textColor={`darkGreen`}
            addDescription={true}
            // onClicked={} // move to detail page
          />

          <CauseBox
            buttonText="Donate"
            image={program3}
            message=" Help us fight feed thousands of people in poverty, homeless
                  people and provide medical care for the poor"
            progressAmount="500/1000" // dynamic
            progressValue={50}
            title="Health care program"
            boxDesign="w-64 shadow-green pb-4 w-custom4  ml-14 "
            textColor={`darkGreen`}
            addDescription={true}
            // onClicked={} // move to detail page
          />
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default MyfundingProjects;
