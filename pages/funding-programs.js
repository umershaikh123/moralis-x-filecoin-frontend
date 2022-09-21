import React, { useState } from 'react';
import Layout from '../components/Layout';
import program1 from '../assest/program1.png';
import { Progress } from '@material-tailwind/react';
import Image from 'next/image';
import program2 from '../assest/p2.png';
import program3 from '../assest/p3.png';
import program4 from '../assest/p4.png';
import CauseBox from '../components/causeBox';
import { useRouter } from 'next/router';
import { GiSandsOfTime } from 'react-icons/gi';
import { BiDollarCircle } from 'react-icons/bi';
import { BsCheckCircle } from 'react-icons/bs';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import styles from '../styles/Home.module.css';
import Footer from '../components/footer';
const FundingProgram = () => {
  const [verify, setVerify] = useState(true);
  const [progress, setProgress] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [reject, setReject] = useState(false);
  const router = useRouter();

  const detailPage = () => {
    router.push(`/detail/1`); //Dyamic
  };

  const verifyClick = () => {
    setProgress(false);
    setCompleted(false);
    setReject(false);
    setVerify(true);
  };
  const progressClick = () => {
    setVerify(false);
    setCompleted(false);
    setReject(false);
    setProgress(true);
  };
  const completedClick = () => {
    setVerify(false);
    setProgress(false);
    setReject(false);
    setCompleted(true);
  };
  const rejectedClicked = () => {
    setVerify(false);
    setProgress(false);
    setCompleted(false);
    setReject(true);
  };
  const verifyButton = () => {
    router.push(`/verifying/8`);
  };
  const progressButton = () => {
    router.push(`/progress/8`);
  };
  const completedButton = () => {
    router.push(`/completed/8`);
  };

  const CreateNewProgram = () => {
    router.push('/Create-new-program');
    console.log('button pressed');
  };

  return (
    <div className={styles.homes}>
      <Layout>
        <div className=" ">
          <div className="mt-10 flex">
            <p className="text-light-green font-bold ml-24 text-3xl   ">
              Funding programs
            </p>
            <button
              onClick={CreateNewProgram}
              className="bg-light-green px-4   text-black-background ml-custom6 rounded-md   font-bold text-xl hover:scale-110 transition ease-in duration-150"
            >
              Create new program
            </button>
          </div>

          <div className="flex 4 ml-24 mt-10 mr-80 ">
            <div>
              <p
                onClick={verifyClick}
                className={`text-xl font-bold hover:cursor-pointer ml-1 hover:scale-110 transition ease-in duration-150  flex ${
                  verify ? 'text-orange' : ''
                }`}
              >
                Verifying <GiSandsOfTime className="mt-2 ml-1" />
              </p>
              {verify && (
                <hr className="w-full  h-1 mt-1  bg-orange text-orange  transition ease-in duration-150 rounded-lg " />
              )}
            </div>

            <div>
              <p
                onClick={progressClick}
                className={`text-xl font-bold hover:cursor-pointer ml-16 hover:scale-110 transition ease-in duration-150 flex ${
                  progress ? 'text-darkGreen' : ''
                }`}
              >
                In progress <BiDollarCircle className="mt-1 ml-1" />
              </p>
              {progress && (
                <hr className="w-32 h-1 ml-16 mt-1  bg-darkGreen  text-darkGreen rounded-lg   transition ease-in duration-150 " />
              )}
            </div>
            <div>
              <p
                onClick={rejectedClicked}
                className={`text-xl font-bold hover:cursor-pointer ml-16 hover:scale-110 transition ease-in duration-150 flex ${
                  reject ? 'text-red' : ''
                }`}
              >
                Rejected <AiOutlineCloseCircle className="mt-1 ml-1" />
              </p>
              {reject && (
                <hr className="w-24 h-1 ml-16 mt-1 bg-red text-red  transition ease-in duration-150 rounded-lg " />
              )}
            </div>
            <div>
              <p
                onClick={completedClick}
                className={`text-xl font-bold hover:cursor-pointer ml-16 hover:scale-110 transition ease-in duration-150 flex ${
                  completed ? 'text-blue ' : ''
                }`}
              >
                Completed <BsCheckCircle className="mt-1 ml-1" />
              </p>
              {completed && (
                <hr className="w-28 h-1 ml-16 mt-1  bg-blue text-blue transition ease-in duration-150 rounded-lg " />
              )}
            </div>
          </div>
        </div>

        <div className=" mb-16 transition ease-in duration-150  ">
          {verify && (
            <div className="flex  mx-auto space-x-20 flex-wrap   ">
              <CauseBox
                addbutton={true}
                addProgress={false}
                buttonText="Verify"
                image={program1}
                message=" This is a global scholarship program , providing oppportunites
                 to the people who can't afford education."
                progressAmount="500/1000" // dynamic
                progressValue={50}
                title="Scholarship program"
                buttonDesign={`mt-5 bg-orange p-1 ml-1 transition ease-in duration-150  px-6 py-2 ml-2  text-white-background font-bold text-xs rounded-md mb-3`}
                progressDesign={`ml-20 h-4 rounded-lg bg-transparent mb-3 w-28`}
                onClicked={verifyButton}
                boxDesign="w-custom4 shadow-orange ml-20  "
                textColor={`darkGreen`}
                addDescription={true}
              />

              <CauseBox
                addbutton={true}
                addProgress={false}
                buttonText="Verify"
                image={program2}
                message=" This is a Nature fund program to help the and save animal life , 
                 and provide enough food for the poor animals in zoos"
                progressAmount="500/1000" // dynamic
                progressValue={50}
                title="Nature relieve funds"
                buttonDesign={`mt-5 bg-orange p-1 ml-1 transition ease-in duration-150  px-6 py-2 ml-2  text-white-background font-bold text-xs rounded-md mb-3`}
                progressDesign={`ml-20 h-4 rounded-lg bg-transparent mb-3 w-28`}
                onClicked={verifyButton}
                boxDesign="w-custom4 shadow-orange  "
                textColor={`darkGreen`}
                addDescription={true}
              />

              <CauseBox
                addbutton={true}
                addProgress={false}
                buttonText="Verify"
                image={program3}
                message=" Help us fight feed thousands of people in poverty, homeless
                  people and provide medical care for the poor"
                progressAmount="500/1000" // dynamic
                progressValue={50}
                title="Health care program"
                buttonDesign={`mt-5 bg-orange p-1 ml-1 transition ease-in duration-150  px-6 py-2 ml-2  text-white-background font-bold text-xs rounded-md mb-3`}
                progressDesign={`ml-20 h-4 rounded-lg bg-transparent mb-3 w-28`}
                onClicked={verifyButton}
                boxDesign="w-custom4 shadow-orange   "
                textColor={`darkGreen`}
                addDescription={true}
              />

              <CauseBox
                addbutton={true}
                addProgress={false}
                buttonText="Verify"
                image={program4}
                message=" Help us fight feed thousands of children in poverty, 
                  provide education and food for them "
                progressAmount="500/1000" // dynamic
                progressValue={50}
                title="Children care program"
                buttonDesign={`mt-5 bg-orange p-1 ml-1  transition ease-in duration-150 px-6 py-2 ml-2  text-white-background font-bold text-xs rounded-md mb-3`}
                progressDesign={`ml-20 h-4 rounded-lg bg-transparent mb-3 w-28`}
                onClicked={verifyButton}
                boxDesign=" w-custom4 shadow-orange   "
                textColor={`darkGreen`}
                addDescription={true}
              />
            </div>
          )}

          {reject && (
            <div className="flex mx-auto space-x-20 flex-wrap   ">
              <CauseBox
                addbutton={true}
                addProgress={false}
                buttonText="Failed"
                image={program1}
                message=" Help us fight feed thousands of people in poverty, homeless
                  people and provide medical care for the poor"
                progressAmount="500/1000" // dynamic
                progressValue={50}
                title="Health care program"
                buttonDesign={`mt-5 bg-red p-1 ml-1 transition ease-in duration-150  px-6 py-2 ml-2  text-white-background font-bold text-xs rounded-md mb-3`}
                progressDesign={`ml-20 h-4 rounded-lg bg-white-background before:bg-white-background mb-3 w-28`}
                onClicked={progressButton}
                boxDesign="w-custom4 shadow-red ml-20 "
                textColor={`darkGreen`}
                addDescription={true}
              />

              <CauseBox
                addbutton={true}
                addProgress={false}
                buttonText="Failed"
                image={program2}
                message=" This is a Nature fund program to help the and save animal life , 
                 and provide enough food for the poor animals in zoos"
                progressAmount="500/1000" // dynamic
                progressValue={50}
                title="Nature relieve funds"
                buttonDesign={`mt-5 bg-red p-1 ml-1 transition ease-in duration-150  px-6 py-2 ml-2  text-white-background font-bold text-xs rounded-md mb-3`}
                progressDesign={`ml-20 h-4 rounded-lg bg-transparent mb-3 w-28`}
                onClicked={progressButton}
                boxDesign="w-custom4 shadow-red  "
                textColor={`darkGreen`}
                addDescription={true}
              />

              <CauseBox
                addbutton={true}
                addProgress={false}
                buttonText="Failed"
                image={program3}
                message=" Help us fight feed thousands of people in poverty, homeless
                  people and provide medical care for the poor"
                progressAmount="500/1000" // dynamic
                progressValue={50}
                title="Health care program"
                buttonDesign={`mt-5 bg-red p-1 ml-1 transition ease-in duration-150  px-6 py-2 ml-2  text-white-background font-bold text-xs rounded-md mb-3`}
                progressDesign={`ml-20 h-4 rounded-lg  bg-white-background mb-3 w-28`}
                onClicked={progressButton}
                boxDesign="w-custom4 shadow-red   "
                textColor={`darkGreen`}
                addDescription={true}
              />

              <CauseBox
                addbutton={true}
                addProgress={false}
                buttonText="Failed"
                image={program4}
                message=" Help us fight feed thousands of children in poverty, 
                  provide education and food for them "
                progressAmount="500/1000" // dynamic
                progressValue={50}
                title="Children care program"
                buttonDesign={`mt-5 bg-red p-1 ml-1 transition ease-in duration-150  px-6 py-2 ml-2  text-white-background font-bold text-xs rounded-md mb-3`}
                progressDesign={`ml-20 h-4 rounded-lg bg-transparent mb-3 w-28`}
                onClicked={progressButton}
                boxDesign=" w-custom4 shadow-red   "
                textColor={`darkGreen`}
                addDescription={true}
              />
            </div>
          )}

          {progress && (
            <div className="flex  mx-auto space-x-20 flex-wrap ">
              <CauseBox
                addbutton={true}
                addProgress={true}
                buttonText="Donate"
                image={program1}
                message=" Help us fight feed thousands of people in poverty, homeless
                  people and provide medical care for the poor"
                progressAmount="500/1000" // dynamic
                progressValue={50}
                title="Health care program"
                buttonDesign={`mt-5 bg-light-green  transition ease-in duration-150  ml-1  px-5 ml-2  text-DarkBlack font-bold text-xs rounded-md mb-3`}
                progressDesign={`ml-20 h-4 rounded-lg bg-transparent mb-3 w-28`}
                onClicked={progressButton}
                boxDesign="  shadow-green w-custom4 ml-20  "
                textColor={`darkGreen`}
                addDescription={true}
              />

              <CauseBox
                addbutton={true}
                addProgress={true}
                buttonText="Donate"
                image={program2}
                message=" This is a Nature fund program to help the and save animal life , 
                 and provide enough food for the poor animals in zoos"
                progressAmount="2000/10000" // dynamic
                progressValue={100}
                title="Nature relieve funds"
                buttonDesign={`mt-5 bg-light-green transition ease-in duration-150   ml-1  px-5 ml-2  text-DarkBlack font-bold text-xs rounded-md mb-3`}
                progressDesign={`ml-20 h-4 rounded-lg bg-transparent mb-3 w-28`}
                onClicked={progressButton}
                boxDesign=" w-custom4 shadow-green  "
                textColor={`darkGreen`}
                addDescription={true}
              />

              <CauseBox
                addbutton={true}
                addProgress={true}
                buttonText="Donate"
                image={program3}
                message=" Help us fight feed thousands of people in poverty, homeless
                  people and provide medical care for the poor"
                progressAmount="13000/15000" // dynamic
                progressValue={70}
                title="Health care program"
                buttonDesign={`mt-5 bg-light-green transition ease-in duration-150   ml-1  px-5 ml-2  text-DarkBlack font-bold text-xs rounded-md mb-3`}
                progressDesign={`ml-20 h-4 rounded-lg bg-transparent mb-3 w-28`}
                onClicked={progressButton}
                boxDesign=" w-custom4 shadow-green   "
                textColor={`darkGreen`}
                addDescription={true}
              />

              <CauseBox
                addbutton={true}
                addProgress={true}
                buttonText="Donate"
                image={program4}
                message=" Help us fight feed thousands of children in poverty, 
                  provide education and food for them "
                progressAmount="6500/7000" // dynamic
                progressValue={90}
                title="Children care program"
                buttonDesign={`mt-5 bg-light-green  transition ease-in duration-150  ml-1  px-5 ml-2  text-DarkBlack font-bold text-xs rounded-md mb-3`}
                progressDesign={`ml-20 h-4 rounded-lg bg-transparent mb-3 w-28`}
                onClicked={progressButton}
                boxDesign="  w-custom4 shadow-green   "
                textColor={`darkGreen`}
                addDescription={true}
              />
            </div>
          )}
          {completed && (
            <div className="flex  mx-auto space-x-20 flex-wrap ">
              <CauseBox
                addbutton={true}
                addProgress={true}
                buttonText="completed"
                image={program1}
                message=" Help us fight feed thousands of people in poverty, homeless
                  people and provide medical care for the poor"
                progressAmount="1000/1000"
                progressValue={100}
                title="Health care program"
                buttonDesign={`mt-5 bg-blue font-semiboldtransition ease-in duration-150   ml-2 px-4 py-0 text-white-background text-xs rounded-md mb-3`}
                progressDesign={`ml-16 h-4 bg-lightBlue rounded-lg bg-transparent mb-3 w-28`}
                onClicked={completedButton}
                boxDesign="  shadow-lightBlue w-custom4  ml-20 "
                textColor={`darkGreen`}
                addDescription={true}
              />

              <CauseBox
                addbutton={true}
                addProgress={true}
                buttonText="completed"
                image={program2}
                message=" This is a Nature fund program to help the and save animal life , 
                 and provide enough food for the poor animals in zoos"
                progressAmount="2000/10000" // dynamic
                progressValue={100}
                title="Nature relieve funds"
                buttonDesign={`mt-5 bg-blue font-semibold transition ease-in duration-150  ml-2 px-4 py-0 text-white-background text-xs rounded-md mb-3`}
                progressDesign={`ml-16 h-4 rounded-lg bg-transparent mb-3 w-28`}
                onClicked={progressButton}
                boxDesign=" w-custom4 shadow-lightBlue "
                textColor={`darkGreen`}
                addDescription={true}
              />

              <CauseBox
                addbutton={true}
                addProgress={true}
                buttonText="completed"
                image={program3}
                message=" Help us fight feed thousands of people in poverty, homeless
                  people and provide medical care for the poor"
                progressAmount="13000/15000" // dynamic
                progressValue={100}
                title="Health care program"
                buttonDesign={`mt-5 bg-blue font-semibold transition ease-in duration-150  ml-2 px-4 py-0 text-white-background text-xs rounded-md mb-3`}
                progressDesign={`ml-16 h-4 rounded-lg bg-transparent mb-3 w-28`}
                onClicked={progressButton}
                boxDesign=" w-custom4 shadow-lightBlue  "
                textColor={`darkGreen`}
                addDescription={true}
              />

              <CauseBox
                addbutton={true}
                addProgress={true}
                buttonText="completed"
                image={program4}
                message=" Help us fight feed thousands of children in poverty, 
                  provide education and food for them "
                progressAmount="6500/7000" // dynamic
                progressValue={100}
                title="Children care program"
                buttonDesign={`mt-5 bg-blue font-semibold transition ease-in duration-150  ml-2 px-4 py-0 text-white-background text-xs rounded-md mb-3`}
                progressDesign={`ml-16 h-4 rounded-lg bg-transparent mb-3 w-28`}
                onClicked={progressButton}
                boxDesign="  w-custom4 shadow-lightBlue  "
                textColor={`darkGreen`}
                addDescription={true}
              />
            </div>
          )}
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default FundingProgram;
