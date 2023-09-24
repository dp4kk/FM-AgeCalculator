import React, { useState } from 'react'
import {useForm} from 'react-hook-form'

const calculateAge=(day,month,year)=>{
    const currentDate= new Date();
    const birthDate = new Date(year, month-1, day)

     let ageInYears = currentDate.getFullYear() - birthDate.getFullYear();
     let ageInMonths = currentDate.getMonth() - birthDate.getMonth();
     let ageInDays = currentDate.getDate() - birthDate.getDate();

     // Adjust for negative months or days
     if (ageInDays < 0) {
       ageInMonths--;
       const lastDayOfMonth = new Date(
         currentDate.getFullYear(),
         currentDate.getMonth(),
         0
       ).getDate();
       ageInDays += lastDayOfMonth;
     }
     if (ageInMonths < 0) {
       ageInYears--;
       ageInMonths += 12;
     }
     if(ageInYears<10){
      ageInYears="0"+ageInYears
     }
     if(ageInMonths<10){
      ageInMonths="0"+ageInMonths
     }
     if(ageInDays<10){
      ageInDays="0"+ageInDays
     }
     return {
       years: ageInYears,
       months: ageInMonths,
       days: ageInDays,
     };
}


const Home = () => {
  const {register, handleSubmit,formState:{errors}} =useForm()
  const [age,setAge]=useState({})
  const onSubmit=(data)=>{
    if(data){
      setAge(calculateAge(data.day,data.month,data.year))
    }
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-300">
      <div className="w-[90%] max-w-[500px]  bg-white rounded-tl-xl rounded-br-[30%] rounded-tr-xl rounded-bl-xl p-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-4 border-b pb-8 relative">
            <div>
              <p
                className={`uppercase text-[0.65rem] tracking-widest font-bold ${
                  errors.day || errors.month || errors.year
                    ? "text-red-500"
                    : "text-gray-600"
                }`}
              >
                day
              </p>
              <input
                {...register("day", {
                  required: {
                    value: true,
                    message: "Required",
                  },
                  min: {
                    value: 1,
                    message: "Must be a valid day",
                  },
                  max: {
                    value: 31,
                    message: "Must be a valid day",
                  },
                  valueAsNumber: true,
                })}
                className={`border ${
                  errors.day || errors.month || errors.year
                    ? "border-red-500"
                    : "border-gray-300"
                } w-[100px] py-1 px-2 mt-0.5 rounded-sm font-semibold text-lg focus:outline-none`}
                placeholder="DD"
              />
              {errors.day && (
                <p className="text-[0.65rem] italic mt-0.5 text-red-500">
                  {errors.day.message}
                </p>
              )}
            </div>

            <div>
              <p
                className={`uppercase text-[0.65rem] tracking-widest font-bold ${
                  errors.day || errors.month || errors.year
                    ? "text-red-500"
                    : "text-gray-600"
                }`}
              >
                month
              </p>
              <input
                {...register("month", {
                  required: {
                    value: true,
                    message: "Required",
                  },
                  min: {
                    value: 1,
                    message: "Must be a valid month",
                  },
                  max: {
                    value: 12,
                    message: "Must be a valid month",
                  },
                  valueAsNumber: true,
                })}
                className={`border ${
                  errors.day || errors.month || errors.year
                    ? "border-red-500"
                    : "border-gray-300"
                } w-[100px] py-1 px-2 mt-0.5 rounded-sm font-semibold text-lg focus:outline-none`}
                placeholder="MM"
              />
              {errors.month && (
                <p className="text-[0.65rem] italic mt-0.5 text-red-500">
                  {errors.month.message}
                </p>
              )}
            </div>

            <div>
              <p
                className={`uppercase text-[0.65rem] tracking-widest font-bold ${
                  errors.day || errors.month || errors.year
                    ? "text-red-500"
                    : "text-gray-600"
                }`}
              >
                year
              </p>
              <input
                {...register("year", {
                  required: {
                    value: true,
                    message: "Required",
                  },
                  min: {
                    value: 1,
                    message: "Must be a valid month",
                  },
                  max: {
                    value: new Date().getFullYear(),
                    message: "Must be in the past",
                  },
                  valueAsNumber: true,
                })}
                className={`border ${
                  errors.day || errors.month || errors.year
                    ? "border-red-500"
                    : "border-gray-300"
                } w-[100px] py-1 px-2 mt-0.5 rounded-sm font-semibold text-lg focus:outline-none`}
                placeholder="YYYY"
              />
              {errors.year && (
                <p className="text-[0.65rem] italic mt-0.5 text-red-500">
                  {errors.year.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="bg-violet-500 inline-block absolute p-4 rounded-full bottom-0 right-0 mb-[-24px] hover:bg-black duration-300 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 46 44"
              >
                <g fill="none" stroke="#FFF" stroke-width="2">
                  <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
                </g>
              </svg>
            </button>
          </div>
        </form>
        <div className="mt-8">
          <p className="text-7xl italic font-bold">
            <span className="text-violet-500 ">
              {age.years ? age.years : "--"}
            </span>{" "}
            years
          </p>
          <p className="text-7xl italic font-bold">
            <span className="text-violet-500">
              {age.months ? age.months : "--"}
            </span>{" "}
            months
          </p>
          <p className="text-7xl italic font-bold">
            <span className="text-violet-500">
              {age.days ? age.days : "--"}
            </span>{" "}
            days
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home