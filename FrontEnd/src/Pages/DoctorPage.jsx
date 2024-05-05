import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router";
import { Footer, Header } from "../Components";
import { useTranslation } from "react-i18next";

const DoctorPage = () => {
  const { t, i18n } = useTranslation();
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    const fetchDoctorProfile = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/doctor_view/${id}`);
        setDoctor(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDoctorProfile();
  }, [id]);

  return (
    <>
      <Header />
      <div className="container my-10 mx-auto md:px-6">
       
          <div className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] bg-[url('https://prontopro.fr/drancy-institut-veterinaire')] h-[300px]"></div>

          <div className="container px-6 md:px-12">
            <div className="block rounded-lg bg-[hsla(0,0%,100%,0.7)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 mt-[-100px] backdrop-blur-[30px]">
              <div className="flex flex-wrap justify-center text-center lg:text-left">
                <div className="w-full shrink-0 grow-0 basis-auto md:px-6 xl:w-10/12">
                  <div className="grid items-center gap-x-6 lg:grid-cols-2 ">
                    <div className=" flex border-r-4 ">
                      <img src="/img/Rectangle 3.png" alt="" className=' w-[250px] h-[250px] rounded-full ' />
                      {doctor && <span className='mt-[100px] mx-5'>{doctor.firstname} {doctor.lastname}</span>}
                    </div>
                    <div className="flex flex-wrap">
                      <div className="w-full md:w-6/12 md:px-3 lg:px-6">
                        <div className="flex items-start">
                          <div className="inline-block rounded-md bg-primary-100 p-4">
                            <i class="fa-regular fa-user-doctor"></i>
                          </div>
                          <div className="ml-6 grow">
                            {doctor &&
                              <p className="text-neutral-500 dark:text-neutral-200 align-middle inline-block">
                                {doctor.specialite}
                              </p>
                            }
                          </div>
                        </div>
                      </div>
                      <div className="mb-12 w-full md:w-6/12 md:px-3 lg:px-6">
                        <div className="flex items-start">
                          <div className="inline-block rounded-md bg-primary-100 p-4">
                            <i className="fa-solid fa-phone-office"></i>
                          </div>
                          <div className="ml-6 grow">
                            {doctor &&
                              <p className="text-neutral-500 dark:text-neutral-200">
                                {doctor.address_cabinet}
                              </p>
                            }
                          </div>
                        </div>
                      </div>
                      <div className="mb-12 w-full md:w-6/12 md:px-3 lg:px-6">
                        <div className="align-start flex">
                          <div className="inline-block rounded-md bg-primary-100 p-4">
                            <i class="fa-solid fa-hospital"></i>
                          </div>
                          <div className="ml-6 grow">
                            {doctor &&
                              <p className="text-neutral-500 dark:text-neutral-200">
                                {doctor.nom_cabinet}
                              </p>
                            }
                          </div>
                        </div>
                      </div>
                      <div className="mb-12 w-full md:w-6/12 md:px-3 lg:px-6">
                        <div className="align-start flex">
                          <div className="inline-block rounded-md bg-primary-100 p-4">
                            <i class="fa-solid fa-phone"></i>
                          </div>
                          <div className="ml-6 grow">
                            {doctor &&
                              <p className="text-neutral-500 dark:text-neutral-200">
                                {doctor.phoneNumber}
                              </p>
                            }
                          </div>
                        </div>
                      </div>

                    </div>                
                      </div>

                </div>
              </div>
            </div>
          </div>
        

 
       
      </div>

      <Footer />
    </>
  );
};

export default DoctorPage;
