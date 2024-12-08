import React from "react";
import Image from "next/image";
import Payment from "../product-list-page/Payment";

const Pricing = () => {
  return (
    <section className="flex justify-center items-center flex-col pt-40  text-black bg-white ">
      <div className="w-full mx-auto">
        {/* Pricing header */}
        <div className="flex justify-center items-center flex-col gap-5 mt-12">
          <h2 className="text-myGry font-semibold text-xl">PRICING</h2>
          <h2 className="text-3xl sm:text-5xl font-bold text-myHeading ">
            Simple Pricing
          </h2>
          <div className="flex justify-center items-center gap-4 font-semibold mt-3 pb-12">
            <h3>Home</h3>
            <Image
              src={"/icons/left-icon.png"}
              alt="left"
              width={8.62}
              height={16}
            />
            <h3 className="text-myGry">Pricing</h3>
          </div>
        </div>

        <div className="bg-[#fafafa] pt-24 w-full">
          {/* Pricing */}
          <div className="flex justify-center items-center flex-col text-center gap-3">
            <h2 className="text-4xl font-bold text-myHeading">Pricing</h2>
            <p className="text-myGry font-semibold">
              Problems trying to resolve the conflict between <br /> the two
              major realms of Classical physics: Newtonian mechanics
            </p>
            <div className="flex justify-center items-center flex-col sm:flex-row gap-4 font-bold text-myHeading">
              <span>Monthly</span>
              <div className="border-2 border-myBlue rounded-3xl w-16 h-8 "></div>
              <span>Yearly</span>
              <div className="bg-myBlue/40 text-myBlue px-4 py-2 rounded-3xl">
                Save 25%
              </div>
            </div>
          </div>
          {/* plans */}
          <div className="flex justify-center items-center gap-[1px] mt-24 flex-wrap px-6 ">
            {/* plan 1 */}
            <div className="flex flex-col justify-center items-center gap-4 border-2 border-myBlue rounded-lg px-7 py-8">
              <h1 className="text-xl font-bold text-myHeading">FREE</h1>
              <p className="text-lg text-myGry font-semibold">
                Organize across all apps by hand
              </p>
              <div className="text-myBlue flex justify-center items-center font-bold text-lg gap-2">
                <h3 className="text-4xl">0</h3>
                <div>
                  <h4>$</h4>
                  <h4>Per month</h4>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-5">
                <div className="flex gap-2">
                  <Image
                    src={"/icons/tick.png"}
                    className="p-3 rounded-[50%] bg-[#2DC071]"
                    alt=""
                    width={16}
                    height={16}
                  />
                  <p className="text-base text-myGry font-semibold">
                    Unlimited Product updates
                  </p>
                </div>
                <div className="flex gap-2">
                  <Image
                    src={"/icons/tick.png"}
                    className="p-3 rounded-[50%] bg-[#2DC071]"
                    alt=""
                    width={16}
                    height={16}
                  />
                  <p className="text-base text-myGry font-semibold">
                    Unlimited Product updates
                  </p>
                </div>
                <div className="flex gap-2">
                  <Image
                    src={"/icons/tick.png"}
                    className="p-3 rounded-[50%] bg-[#2DC071]"
                    alt=""
                    width={16}
                    height={16}
                  />
                  <p className="text-base text-myGry font-semibold">
                    Unlimited Product updates
                  </p>
                </div>
                <div className="flex gap-2">
                  <Image
                    src={"/icons/tick.png"}
                    className="p-3 rounded-[50%] bg-[#2DC071]"
                    alt=""
                    width={16}
                    height={16}
                  />
                  <p className="text-base text-myGry font-semibold">
                    Unlimited Product updates
                  </p>
                </div>
              </div>
            </div>
            {/* plan 2 */}
            <div className="flex flex-col justify-center items-center -mt-16 bg-gray-800 gap-4 border-2 border-myBlue rounded-lg px-7 py-8">
              <h1 className="text-xl font-bold text-white">FREE</h1>
              <p className="text-lg text-white font-semibold">
                Organize across all apps by hand
              </p>
              <div className="text-myBlue flex justify-center items-center font-bold text-lg gap-2">
                <h3 className="text-4xl">9.99</h3>
                <div>
                  <h4>$</h4>
                  <h4>Per month</h4>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-5 text-white">
                <div className="flex gap-2 text-white">
                  <Image
                    src={"/icons/tick.png"}
                    className="p-3 rounded-[50%] bg-[#2DC071]"
                    alt=""
                    width={16}
                    height={16}
                  />
                  <p className="text-base font-semibold">
                    Unlimited Product updates
                  </p>
                </div>
                <div className="flex gap-2">
                  <Image
                    src={"/icons/tick.png"}
                    className="p-3 rounded-[50%] bg-[#2DC071]"
                    alt=""
                    width={16}
                    height={16}
                  />
                  <p className="text-base font-semibold">
                    Unlimited Product updates
                  </p>
                </div>
                <div className="flex gap-2">
                  <Image
                    src={"/icons/tick.png"}
                    className="p-3 rounded-[50%] bg-[#2DC071]"
                    alt=""
                    width={16}
                    height={16}
                  />
                  <p className="text-base  font-semibold">
                    Unlimited Product updates
                  </p>
                </div>
                <div className="flex gap-2">
                  <Image
                    src={"/icons/tick.png"}
                    className="p-3 rounded-[50%] bg-[#2DC071]"
                    alt=""
                    width={16}
                    height={16}
                  />
                  <p className="text-base font-semibold">
                    Unlimited Product updates
                  </p>
                </div>
              </div>
            </div>
            {/* plan 3 */}
            <div className="flex flex-col justify-center items-center gap-4 border-2 border-myBlue rounded-lg px-7 py-8">
              <h1 className="text-xl font-bold text-myHeading">FREE</h1>
              <p className="text-lg text-myGry font-semibold">
                Organize across all apps by hand
              </p>
              <div className="text-myBlue flex justify-center items-center font-bold text-lg gap-2">
                <h3 className="text-4xl">0</h3>
                <div>
                  <h4>$</h4>
                  <h4>Per month</h4>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-5">
                <div className="flex gap-2">
                  <Image
                    src={"/icons/tick.png"}
                    className="p-3 rounded-[50%] bg-[#2DC071]"
                    alt=""
                    width={16}
                    height={16}
                  />
                  <p className="text-base text-myGry font-semibold">
                    Unlimited Product updates
                  </p>
                </div>
                <div className="flex gap-2">
                  <Image
                    src={"/icons/tick.png"}
                    className="p-3 rounded-[50%] bg-[#2DC071]"
                    alt=""
                    width={16}
                    height={16}
                  />
                  <p className="text-base text-myGry font-semibold">
                    Unlimited Product updates
                  </p>
                </div>
                <div className="flex gap-2">
                  <Image
                    src={"/icons/tick.png"}
                    className="p-3 rounded-[50%] bg-[#2DC071]"
                    alt=""
                    width={16}
                    height={16}
                  />
                  <p className="text-base text-myGry font-semibold">
                    Unlimited Product updates
                  </p>
                </div>
                <div className="flex gap-2">
                  <Image
                    src={"/icons/tick.png"}
                    className="p-3 rounded-[50%] bg-[#2DC071]"
                    alt=""
                    width={16}
                    height={16}
                  />
                  <p className="text-base text-myGry font-semibold">
                    Unlimited Product updates
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* trusted */}
          <div className="flex justify-center items-center mt-20 flex-col">
            <h1 className="text-myGry font-semibold text-lg text-center">
              Trusted by Over 4000 Big companies
            </h1>
            <Payment />
          </div>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className="flex justify-center items-center flex-col mt-20">
            <h1 className="text-4xl font-bold">Pricing FAQs</h1>
            <p className="text-base font-semibold text-myGry text-center">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics
            </p>
          </div>
          <div className="flex items-center justify-center flex-wrap px-6 py-12">
            <div>
              <div>
                <Image src={"/icons/left.png"} alt="" width={8} height={16} />
                <h2 className="font-bold text-myHeading text-2xl">
                  the quick fox jumps over
                </h2>
              </div>
              <h5 className="text-myGry font-semibold">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </h5>
            </div>
            <div>
              <div>
                <Image src={"/icons/left.png"} alt="" width={8} height={16} />
                <h2 className="font-bold text-myHeading text-2xl">
                  the quick fox jumps over
                </h2>
              </div>
              <h5 className="text-myGry font-semibold">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </h5>
            </div>
            <div>
              <div>
                <Image src={"/icons/left.png"} alt="" width={8} height={16} />
                <h2 className="font-bold text-myHeading text-2xl">
                  the quick fox jumps over
                </h2>
              </div>
              <h5 className="text-myGry font-semibold">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </h5>
            </div>
            <div>
              <div>
                <Image src={"/icons/left.png"} alt="" width={8} height={16} />
                <h2 className="font-bold text-myHeading text-2xl">
                  the quick fox jumps over
                </h2>
              </div>
              <h5 className="text-myGry font-semibold">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </h5>
            </div>
            <div>
              <div>
                <Image src={"/icons/left.png"} alt="" width={8} height={16} />
                <h2 className="font-bold text-myHeading text-2xl">
                  the quick fox jumps over
                </h2>
              </div>
              <h5 className="text-myGry font-semibold">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </h5>
            </div>
            <div>
              <div>
                <Image src={"/icons/left.png"} alt="" width={8} height={16} />
                <h2 className="font-bold text-myHeading text-2xl">
                  the quick fox jumps over
                </h2>
              </div>
              <h5 className="text-myGry font-semibold">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </h5>
            </div>
          </div>
          <h2 className="text-myGry font-semibold mt-8 text-center">
            Haven't got your answer? Contact our support
          </h2>
        </div>
        <div className="mt-20">
          <div className="flex justify-center items-center flex-col gap-4">
            <h1 className="text-myHeading font-bold text-3xl text-center">
              Start your 14 days free trial
            </h1>
            <p className="md:w-1/3 text-base font-semibold text-myGry text-center">
              {" "}
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent
            </p>
            <button className="bg-myBlue px-8 py-4 font-bold rounded-xl text-white">
              Try it free now
            </button>
            <div className="flex justify-center items-center gap-3 mt-5">
              <Image src={"/icons/x-blu.png"} alt="" width={30} height={30} />
              <Image src={"/icons/fb-blue.png"} alt="" width={30} height={30} />
              <Image
                src={"/icons/insta-blu.png"}
                alt=""
                width={30}
                height={30}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
