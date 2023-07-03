import React from "react";

const Services = () => {
  const services = [
    {
      name: "Techno-Commercial Designing",
      desc: "The Techno-Commercial Designing plays an important role for the calculation of Air Conditioning requirement for any commercial building.",
      id: 1,
      img: "https://www.vrvhome.com/sites/all/themes/vrvh/images/home-2nd-blog.jpg",
    },
    {
      name: "Technical calculation",
      desc: "Technical calculation gives the tonnage load required for the building, which also gives how much electrical load is required.",
      id: 2,
      img: "https://www.mitcalc.com/images/HoA.jpg",
    },
    {
      name: "Commercial designing",
      desc: "Commercial designing gives how much expenditure is required for the project as per customer choice of equipment (For 5 to 15 years of equipment life).",
      id: 3,
      img: "https://foyr.com/learn/wp-content/uploads/2019/03/wunderman-fitout-slider8.jpg",
    },
    {
      name: "COMMERCIAL AIRCONDITIONING/HVAC",
      desc: "Finally, we provide proper Techno-Commercial Designing for the COMMERCIAL AIRCONDITIONING/HVAC projects to our esteemed customers/end users.",
      id: 4,
      img: "https://cielowigle.com/wp-content/uploads/2022/08/commercial-hvac-1.jpg",
    },
  ];
  return (
    <section id="services" className="w-full mt-4 px-8 py-4">
      <h1 className="font-serif text-2xl mb-4 font-bold sm:text-4xl text-Primary-Color text-center">
        Our Services
      </h1>
      <div className="flex flex-wrap gap-10 mx-auto px-2 justify-between">
        {services.map((service) => {
          return (
            <div
              key={service.id}
              className="flex h-[200px] w-full sm:w-1/4 shadow-lg rounded-md flip-card"
            >
              <div
                className="flip-card-inner w-full rounded-md bg-cover bg-center"
                style={{ backgroundImage: `url(${service.img})` }}
              >
                <div className="flex items-center justify-center flip-card-front">
                  {/* Content for the front side of the card */}
                  <h2 className="text-white font-bold px-4 py-2 my-auto mx-auto bg-black/60 rounded-md">
                    {service.name}
                  </h2>
                </div>
                <div className="flex items-center justify-center flip-card-back bg-black/70 rounded-md">
                  {/* Content for the back side of the card */}
                  <p className="text-gray-200 text-sm px-4">{service.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
