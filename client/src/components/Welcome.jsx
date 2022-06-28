import React from 'react';
import {AiFillPlayCircle} from 'react-icons/ai';
import {SiEthereum} from 'react-icons/si';
import {BsInfoCircle} from 'react-icons/bs';

import {Loader} from './';

// Reuse styles by creating a styles Variable and using curly braces in the className to use it for a particular element
const commonStyles = 'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-white'

const Input = ({placeholder, name, type, value, handleChange}) =>(// We created an Input Component that will return a JSx. it is passed a props.
  <input                             //when a component is returning a JSX code we use a parentheses instead of curly braces
  placeholder={placeholder} 
  type={type}
  step="0.0001"
  value={value}
  onChange={(e) => handleChange(e, name)}
  className="my-2 w-full rounded-sm p-2 outline-none text-white border-none text-sm white-glassmorphism"

  ></input>
);

const Welcome = () => {

  const connectWallet= ()=>{

  }

  const handleSUBMIT = () =>{ // The handleSubmit function we called at line 94

  }

  return (
    <div className='flex w-full justify-center items-center'>
      <div className='flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4'>
        <div className='leftContainer flex flex-1 justify-start flex-col md:mr-10' >
          <h1 className='text-3xl sm:text-5xl text-white text-gradient py-1'>
            Send Crypto <br /> across the world
          </h1>
          <p className='text-white text-left mt-5 font-light md:9/12 w-11/12 text-base'>
            Explore the crypto world. Buy and sell cryptocurrencies easily on Krypton.
          </p>
          <button 
            type='button' 
            onClick={connectWallet}  /*connectWallet is a function, so on-Click it calls the function. The function is created above*/
            className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]">
              <p className='text-white text-base font-semi-bold'>connect wallet</p>
          </button>
          <div className='grid sm:grid-cols-3 grid-cols-2 w-full mt-10'>
            <div className={`rounded-tl-2xl ${commonStyles}`}> {/*create a variable named commonStyles containing long list of styles and add it to the class using template literals. Hint: Hover over the template literal and see what it shows you*/}
              Reliability
            </div>
            <div className={commonStyles}>
              Security
            </div>
            <div className={`rounded-tr-2xl ${commonStyles}`}>
              Ethereum
            </div>
            <div className={`rounded-bl-2xl ${commonStyles}`}>
              Web3.0
            </div>
            <div className={commonStyles}>
              Blockchain
            </div>
            <div className={`rounded-br-2xl ${commonStyles}`}>
              Low fees
            </div>
          </div>
        </div>

        <div id='Right_container' className=' bg-rose flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10'>
          <div id='Crypto-card' className='p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism'>
            <div className='flex justify-between flex-col w-full h-full'>
              <div className='flex justify-between items-start'>
                <div className='w-10 h-10 rounded-full border-2 border-white flex justify-center items-center'>
                  <SiEthereum fontSize={21} color='#fff' />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className='text-white font-light text-sm'>0xghsah.....a2bda4u</p>
                <p className='text-white font-semibold text-lg mt-1'>Ethereum</p>
              </div>
            </div>
          </div>
          <div id='Input-field' className='p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism'>
            <Input placeholder="Address To" name="addressTo" type="text" handleChange={() => {}}/> {/*The Input component is being rendered*/}
            <Input placeholder="Amount(ETH)" name="amount" type="number" handleChange={() => {}}/>
            <Input placeholder="Keyword(GIF)" name="keyword" type="text" handleChange={() => {}}/>
            <Input placeholder="Enter Message" name="message" type="text" handleChange={() => {}}/> 

            <div className='h-[1px] w-full bg-gray-400 my-2' />

            {true ? (<Loader />) : (<button type='button' onClick={handleSUBMIT} className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer " >Send Now</button>)      //An isLoading State that is going to dynamically change as soon as we click the send now button. it is used in the tenary operator. i.e if true, render the loader component. if false render a button. if...else
            }

                           
          </div>
        </div>

      </div>

    </div>
  )
}

export default Welcome;