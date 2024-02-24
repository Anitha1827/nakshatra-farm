import Image from "next/image";
import img from "@/../public/assets/aboutus.png";
import catbg from "@/../public/assets/shopbycatbg.png";
import catmilkbg from "@/../public/assets/shopbycatmilkbg.png";
import shopcat from "@/../public/assets/shopcatimg.png";
import milk1 from "@/../public/assets/process1.png";
import milk2 from "@/../public/assets/process2.png";
import milk3 from "@/../public/assets/process3.png";
import brand from "@/../public/assets/ourprocess.png";

export default function Aboutus() {
  const cardsData = [
    {
      image: milk1,
      title: "Card 1Selection of Quality Milk",
      color: "#B76FF0",
      description:
        "The first step in making A2 organic Ghee is to select high-quality milk from cows that produce A2 beta-casein protein. A2 milk is sourced from cows that naturally produce only A2 beta-casein protein, which is believed to be easier to digest for some individuals compared to A1 beta-casein protein found in conventional cow's milk.",
    },
    {
      image: milk2,
      title: "Traditional Churning",
      color: "#F6CC5E",
      description:
        "Once the milk is sourced, it is then boiled and allowed to cool down to room temperature. After cooling, the cream is separated from the milk and churned using traditional methods. Churning helps separate the butterfat from the buttermilk. This process may involve using a hand churn or a mechanical churner, depending on the scale of production",
    },
    {
      image: milk3,
      title: "Clarification and Straining",
      color: "#C4E454",
      description:
        "The churned butterfat is then gently heated in a pot until it reaches a specific temperature, causing the water content to evaporate, and the milk solids to separate from the pure butterfat. The mixture is simmered until the milk solids caramelize, giving the Ghee its characteristic nutty flavor. The clarified butter is then strained to remove the milk solids, resulting in pure golden Ghee.",
    },
  ];

  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 p-11">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Image Column */}
          <div>
            <Image
              src={img}
              alt="Image"
              width={"350"}
              height={"350"}
              className="w-full h-auto"
            />
          </div>

          {/* Content Column */}
          <div className="ml-10">
            <h2 className="text-xl font-bold mb-4">About Us</h2>
            <h4 className="text-[#602D89] font-bold text-[25px]">
              Welcome To Nakshatar <br />
              Farms
            </h4>
            <p className="text-[#000000] pr-[7.5rem] mt-8">
              Your destination for pure and traditional products. Indulge in the
              richness of our A2 Ghee, experience the sanctity of our Pooja
              Essentials, and explore the holistic benefits of our Cow Dung
              Products. Dive into the essence of nature with our Organic Oils,
              carefully crafted to nurture your body and soul. At Nakshatra
              Farms, we blend ancient wisdom with modern sustainability,
              ensuring each product reflects our commitment to purity and
              tradition. Join us in celebrating the divine bond between nature
              and humanity. Welcome to a world where purity meets tradition
            </p>
            <button class="bg-[#602D89] flex flex-row hover:bg-purple-700 text-white  py-2 px-4 rounded lg:mt-[12%]">
              View More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className=" h-6 ml-3"
              >
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* shop by catogory */}
      <div className="relative mb-[15%]">
        <Image src={catbg} alt="Image" className="w-full h-auto bg-[#602D89]" />

        {/* Text Container */}
        <div className="absolute inset-0 flex justify-center ">
          <div className="text-center text-white">
            <p className="text-gray-300">
              <Image
                src={shopcat}
                alt="shopimage"
                className="w-full h-auto z-[10] relative"
              />
            </p>
          </div>
        </div>
        <Image
          src={catmilkbg}
          alt="milkImage"
          className="absolute top-[33%] left-0 w-full h-auto z-[5]"
        />
      </div>

      <div className="p-10">
        <div className="flex justify-center items-center">
          <Image src={brand} alt="Shop By Brand" />
        </div>
        <p className="text-black flex justify-center items-center p-9">
          <span className="lg:w-[40%]">
            We have a responsibility to inform you about how we produce your
            Ghee, and it is your right to be aware of our process.
          </span>
        </p>

        <div className="flex flex-wrap justify-center ">
          {cardsData.map((card, index) => (
            <>
              <div
                key={index}
                className="max-w-sm rounded overflow-hidden sm:mb-[10px] shadow-lg mx-2"
                style={{ backgroundColor: `${card.color}` }}
              >
                <Image
                  src={card.image}
                  className="w-full object-fill p-4"
                  alt="Card Image"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{card.title}</div>
                  <p className="text-gray-700 text-base">{card.description}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
