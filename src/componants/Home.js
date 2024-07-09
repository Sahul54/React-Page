import React from 'react';
import Navbar from "./common/Navbar"
import Button from './Button';

function Home() {
  return (
    <div className='bg-gray w-11/12 w-100% h-100% '>
        {/* Navbar */}
        < Navbar />

        {/* Home Page */}
        <div className=" mx-auto px-4 w-10/12 py-2 flex flex-row justify-between items-center ">
        <div className='mt-28 w-50%' >
            <h1 className='text-[24px] font-bold'>One health plan for life</h1>
            <span className="text-gray-500">★★★★★</span>
            <span className="ml-2">20K+ people in NCR Delhi trust us</span>
        <div className='flex flex-row gap-6 mt-8'>
        <div className='flex flex-col gap-6 mt-8 '>
          <Button active={true} linkto={"/signup"}>
            Learn More
          </Button>

          <Button active={false} linkto={"/signup"}>
            Book a Demo
          </Button>
        </div>
        <div className='w-50%'>
            <p className="mt-8 w-10% w-1/2">
                Take our online health assessment and at-home blood test. Evaluate your health on 79-parameters in 3 days.
            </p>
        </div>
      </div>
      <div className=''>
            {/* Image */}
      </div>
    </div>
    </div>

    {/* Heading */}

    <div className='mx-auto px-4 w-10/12 py-2 flex mt-10 justify-between items-center'>
        <h1 className='text-[24px] font-bold w-1/2 text-center ml-72 items-cente'>Join the 20,000+ people who successfully reversed diseases by finding them in their early stages.</h1>
    </div>

    {/* What happen next */}

    <div className="container mx-auto px-4 py-16 mt-12 w-10/12">
      <h2 className="text-3xl font-bold text-center mb-8">How eGenome Works?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <div className="bg-white h-24 rounded-lg mb-4"></div>
          <p className="text-lg font-medium">Get your lifetime health plan for ₹999/month or ₹9999/year</p>
          <button className="mt-4 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">Get started here</button>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <div className="bg-white h-24 rounded-lg mb-4"></div>
          <p className="text-lg font-medium">Complete your health assessment and book your blood test</p>
          <button className="mt-4 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">Hug × Hug</button>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <div className="bg-white h-24 rounded-lg mb-4"></div>
          <p className="text-lg font-medium">Get your health evaluation and personalised diet, supplements & lifestyle plan in 3-days</p>
        </div>
      </div>
    </div>
  

  {/* InclusionInPlan */}
    <div className="bg-gray-100 py-16 px-8 sm:px-16 lg:px-24">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Inclusions In The Plan
        </h1>
        <p className="text-center text-gray-600 mb-12">
          at just ₹999/month{' '}
          <span className="text-gray-400">ⓘ</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 rounded-lg bg-gray-200 p-4">
              <div className="rounded-full bg-gray-400 h-10 w-10"></div>
              <div className="flex flex-col">
                <h3 className="text-lg font-medium">
                  10% OFF on your overall health evaluation report
                </h3>
                <p className="text-gray-600">
                  ₹4999 ₹999
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-lg bg-gray-200 p-4">
              <div className="rounded-full bg-gray-400 h-10 w-10"></div>
              <div className="flex flex-col">
                <h3 className="text-lg font-medium">
                  Hassle-free blood test
                </h3>
                <p className="text-gray-600">
                  at ₹3,999 Included
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-lg bg-gray-200 p-4">
              <div className="rounded-full bg-gray-400 h-10 w-10"></div>
              <div className="flex flex-col">
                <h3 className="text-lg font-medium">
                  Personalised diet plan
                </h3>
                <p className="text-gray-600">
                  ₹4,999 Included
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-lg bg-gray-200 p-4">
              <div className="rounded-full bg-gray-400 h-10 w-10"></div>
              <div className="flex flex-col">
                <h3 className="text-lg font-medium">
                  Workout and lifestyle plans
                </h3>
                <p className="text-gray-600">
                  ₹2,999 Included
                </p>
              </div>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-8">
              Join Waitlist
            </button>
            <p className="text-gray-600 mt-2 text-center">
              Want to learn more?{' '}
              <a href="#" className="text-blue-500 hover:underline">
                Here's a sample report.
              </a>
            </p>
          </div>
          <div className="bg-gray-200 rounded-lg p-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 rounded-lg bg-gray-200 p-4">
                <div className="rounded-full bg-gray-400 h-10 w-10"></div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-medium">
                    Supplements suggestions
                  </h3>
                  <p className="text-gray-600">
                    ₹1,999 Included
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-lg bg-gray-200 p-4">
                <div className="rounded-full bg-gray-400 h-10 w-10"></div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-medium">
                    FREE 24x7 access to Al doctor
                  </h3>
                  <p className="text-gray-600">
                    ₹5,999 ₹00.00 (Up to 4 interactions)
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-lg bg-gray-200 p-4">
                <div className="rounded-full bg-gray-400 h-10 w-10"></div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-medium">
                    FREE 1:1 Nutritionist Consultation
                  </h3>
                  <p className="text-gray-600">
                    ₹2000 ₹00.00 (1 consultation per month)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* what do you */}

    <div className="container mx-auto p-10 w-10/12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">What You Get?</h1>
        <h2 className="text-3xl font-bold mt-2">One Health Plan For Life</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 16h1m4-4h-1m-1-1h-5m-1 0h-2"
              />
            </svg>
          </div>
          <h3 className="text-lg font-bold">18+ Key Organs Health Score</h3>
          <p className="text-gray-600">Overall Health Evaluation of 79 parameters from blood analysis and advanced AI.</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10h18M7 15h1m4 0h-1m-4 0h-5m-1 0h-2"
              />
            </svg>
          </div>
          <h3 className="text-lg font-bold">At-Home Blood Test</h3>
          <p className="text-gray-600">Our team will collect your blood sample at home.</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 13h2m-2 0h-1m-1 16h1m4-4h-1m-1-1h-5m-1 0h-2"
              />
            </svg>
          </div>
          <h3 className="text-lg font-bold">Personalised Diet Plan</h3>
          <p className="text-gray-600">Get a plan to reach the prime of your health with the right nutrition and diet.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10h18M7 15h1m4 0h-1m-4 0h-5m-1 0h-2"
              />
            </svg>
          </div>
          <h3 className="text-lg font-bold">FREE Nutritionist Consultation</h3>
          <p className="text-gray-600">Talk to our Nutritionist anytime you have a question.</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10h18M7 15h1m4 0h-1m-4 0h-5m-1 0h-2"
              />
            </svg>
          </div>
          <h3 className="text-lg font-bold">FREE 24x7 AI Doctor</h3>
          <p className="text-gray-600">Talk to our 24x7 available AI doctor anytime you have a question.</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 13h2m-2 0h-1m-1 16h1m4-4h-1m-1-1h-5m-1 0h-2"
              />
            </svg>
          </div>
          <h3 className="text-lg font-bold">FREE Workout + Lifestyle Plans</h3>
          <p className="text-gray-600">Get workout and lifestyle recommendations to optimize your health and wellness.</p>
        </div>
      </div>
    </div>

        {/*  */}
    <div className="bg-gray-300 w-11/12 rounded-lg p-6 flex justify-between iteams-center ml-28">
      <div className="flex flex-col items-center">
        <span className="text-4xl font-bold">100%</span>
        <span className="text-sm text-gray-500">users recommended the health plan to their friends & family</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-4xl font-bold">20%</span>
        <span className="text-sm text-gray-500">improvement in overall health parameters in 90-days</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-4xl font-bold">95%</span>
        <span className="text-sm text-gray-500">people said the report was life-changing</span>
      </div>
    </div>

    {/*  */}

    <div className="flex h-screen bg-gray-100">
      <div className="w-1/2 flex flex-col justify-center items-center p-10">
        <img src="https://www.svgrepo.com/show/400796/photo-gallery.svg" alt="image" className="w-16 h-16" />
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center p-10">
        <h1 className="text-4xl font-bold mb-4">Comprehensive and Accurate Analysis with eGenome.ai</h1>
        <p className="text-lg mb-6">
          Using AI learning, we identify blood report patterns that humans can not identify.
        </p>
        <p className="text-lg mb-6">
          With AI, we can predict any potential health risk and prevent it at the earliest.
        </p>
        <div className="flex gap-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Learn More About Us
          </button>
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            See A Sample Report
          </button>
        </div>
      </div>
    </div>
 

    </div>

    
  );
}

export default Home;