import Head from 'next/head';
import Image from 'next/image';
import help2 from '../assest/help2.png';
import logo_1 from '../assest/logo_1.png';
import help1 from '../assest/help1.PNG';
import { useEffect } from 'react';
import { COnnectButton } from '../components/connectButton';
import { useRouter } from 'next/router';
import { useAccount } from 'wagmi';
import styles from '../styles/Home.module.css';

// LOGIN PAGE
export default function Home() {
  const { isConnecting, isConnected, isDisconnected } = useAccount();
  const router = useRouter();
  useEffect(() => {
    if (isConnected) {
      router.push('/Home');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConnecting, isConnected]);

  const account = useAccount({
    onDisconnect() {
      console.log('Disconnected');
      router.push('/');
    }
  });

  return (
    <div className="flex justify-center items-center bg-Text-green ">
      <Head>
        <title>Login page</title>
        <meta name="description" content="Web3 funding project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* green side */}
      <div className={styles.loginGreenSide}>
        <div className="flex flex-row justify-center items-center space-x-4 mt-8">
          <Image src={logo_1} alt="logo" className="  " />
          <h1 className=" lg:text-5xl md:text-4xl text-3xl font-normal text-white-background tracking-wide mt-1 font-sans">
            Web3 Charity Project
          </h1>
        </div>

        <div className="flex flex-row justify-center items-center">
          <h1 className=" text-3xl font-normal text-white-background tracking-widest mt-8 ml-12 justify-center  font-sans">
            Help us build a better World
          </h1>
        </div>

        <div className="flex flex-row justify-center items-center">
          <Image src={help2} alt="help2" />
        </div>
      </div>

      {/* white side  */}
      <div className={styles.loginWhiteSide}>
        <div className="flex flex-row justify-center items-center ml-20 mt-20">
          <Image src={help1} alt="help1" />
        </div>

        <div className="flex flex-row justify-center items-center ml-12 mt-8 ">
          <COnnectButton />
        </div>

        <div className="flex flex-row justify-center items-center ml-12   ">
          <p className=" text-gray mt-4 text-center">
            Connect your wallet to sign up
          </p>
        </div>
      </div>
    </div>
  );
}
