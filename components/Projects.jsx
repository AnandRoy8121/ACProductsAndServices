import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "EAST-COAST RAILWAY (Bhubaneswar & Visakhapatnam)",
      id: 1,
      img: "https://assets.thehansindia.com/hansindia-bucket/ecor_2457.jpg",
    },
    {
      name: "IOCL (Bhubaneswar & Paradeep)",
      id: 2,
      img: "https://upload.wikimedia.org/wikipedia/commons/7/70/Indian_Oil_regional_office_in_Bhubaneswar.jpg",
    },
    {
      name: "National Law University(ODISHA)",
      id: 3,
      img: "https://gumlet.assettype.com/barandbench%2Fimport%2F2017%2F12%2FNLU-Odisha-e1513692900337.jpg?rect=0%2C53%2C1000%2C563&auto=format%2Ccompress&fit=max&w=1200",
    },
    {
      name: "CBSE Regional Office(Bhubaneswar, ODISHA)",
      id: 4,
      img: "https://newsroomodisha.com/wp-content/uploads/2020/07/CBSE-450x300.jpeg",
    },
    {
      name: "IMIS(Bhubaneswar)",
      id: 5,
      img: "https://images.shiksha.com/mediadata/images/1510554730phpvxpMlY.jpeg",
    },
    {
      name: "XIMB(Bhubaneswar)",
      id: 6,
      img: "https://i.ytimg.com/vi/qm55doR0j7E/maxresdefault.jpg",
    },
    {
      name: "OWSSB(Bhubaneswar, ODISHA)",
      id: 7,
      img: "data:image/jpeg;base64,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",
    },
    {
      name: "ATC(Air Traffic Control) Tower (Bhubaneswar)",
      id: 8,
      img: "https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2019/05/15/Pictures/_38b44aa0-76ad-11e9-b041-b8edd22396b2.jpg",
    },
    {
      name: "GMR Township(Kamalinga, Anugul, ODISHA)",
      id: 9,
      img: "https://content3.jdmagicbox.com/comp/hyderabad/d8/040pxx40.xx40.170919132107.u6d8/catalogue/gmr-township-shamshabad-rangareddy-qe0mzn4rb3.jpg",
    },
    {
      name: "ITER(Bhubaneswar)",
      id: 10,
      img: "https://odishabytes.com/wp-content/uploads/2022/06/iter.jpg",
    },
    {
      name: "SWOSTI CHILKA RESORTS(Swosti Group ODISHA)",
      id: 11,
      img: "https://imgcld.yatra.com/ytimages/image/upload/t_seo_Hotel_w_930_h_550_c_fill_g_auto_q_40_f_jpg/v1553000205/Hotel/00124278/AKS_2347_RKO7MX.jpg",
    },
    {
      name: "HOTEL PAHIDI ROURKELA (ODISHA)",
      id: 12,
      img: "https://pix10.agoda.net/hotelImages/28831384/-1/2c18e4f82d7c170fc0dd12b814a9739f.jpg?ce=0&s=414x232&ar=16x9",
    },
    {
      name: "AUDI SHOWROOM(BHUBANESWAR)",
      id: 13,
      img: "https://www.india.com/wp-content/uploads/2018/09/4e8287805247c444c867602b18850fd3_555X416_1.jpg",
    },
    {
      name: "HARLEY DAVIDSON SHOW ROOM(ODISHA)",
      id: 14,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Padma_Gateway_Building_-_Konark_Harley_Davidson_Showroom_-_NH_16_-_Pahal_-_Bhubaneswar_2018-01-26_0195.JPG/2560px-Padma_Gateway_Building_-_Konark_Harley_Davidson_Showroom_-_NH_16_-_Pahal_-_Bhubaneswar_2018-01-26_0195.JPG",
    },
    {
      name: "SNM HOUSE(Bhubaneswar)",
      id: 15,
      img: "https://im.proptiger.com/1/1445138/6/shubh-aarambh-villas-images-for-elevation-of-kalky-infracon-pvt-ltd-shubh-aarambh-villas-7384985.jpeg",
    },
    {
      name: "MARUTI SUZUKI OFFICE(Bhubaneswar ODISHA)",
      id: 16,
      img: "https://content.jdmagicbox.com/comp/bhubaneshwar/j3/0674px674.x674.171201224621.l7j3/catalogue/nexa-cyber-city-infocity-bhubaneshwar-car-dealers-maruti-suzuki-kg6osb4g42.jpg?clr=",
    },
    {
      name: "SAI INTERNATIONAL SCHOOL (Bhubaneswar ODISHA)",
      id: 17,
      img: "https://images.jdmagicbox.com/comp/bhubaneshwar/18/0674p674std20518/catalogue/sai-international-school-infocity-bhubaneshwar-schools-2hzyb8k.jpg",
    },
    {
      name: "PERFECTOUS SOLUTIONS PVT.LTD(Bhubaneswar ODISHA)",
      id: 18,
      img: "",
    },
    {
      name: "ACE COMMERCIAL COMPANY PVT.LTD(Bhubaneswar)",
      id: 19,
      img: "",
    },
    {
      name: "STEEL-CITY SECURITES LTD OFFICE(Visakhapatnam)",
      id: 20,
      img: "https://www.bizzbuzz.news/h-upload/2021/02/04/1500x900_935025-steel-plant.jpg",
    },
    {
      name: "DRM BUILDING & RAILWAY HOSPITAL(Visakhapatnam)",
      id: 21,
      img: "https://i.ytimg.com/vi/twpR4PnRbkQ/maxresdefault.jpg",
    },
    {
      name: "SRI BALAJI HOTELS & RESORTS(Visakhapatnam)",
      id: 22,
      img: "https://media-cdn.tripadvisor.com/media/photo-s/28/24/eb/81/exterior.jpg",
    },
    {
      name: "HDFC CALL CENTRE(BHUBANESWAR, ODISHA)",
      id: 23,
      img: "https://2.bp.blogspot.com/-fKtE9zESkmM/WnxjQjV4ppI/AAAAAAAAEWk/W2mBrxlc0-IMf_OtKhnsYxSphJl2EnbIwCLcBGAs/s1600/HDFC.jpg",
    },
    {
      name: "OCPL TOWNSHIP(BELPAHAR, ODISHA)",
      id: 24,
      img: "https://i.ytimg.com/vi/UJcX40eEHOw/maxresdefault.jpg",
    },
    {
      name: "SP VIGILLANCE OFFICE(BHUBANESWAR, ODISHA)",
      id: 25,
      img: "",
    },
    {
      name: "IFFCO CONVENSION CENTER (PARADEEP, ODISHA)",
      id: 26,
      img: "https://cdn3.f-cdn.com//files/download/160693818/IFFCO%20head%20office.png?fit=crop",
    },
    {
      name: "Andhra University, Visakhapatnam",
      id: 27,
      img: "https://www.andhrauniversity.edu.in/img/slider/1.jpg",
    },
    {
      name: "INDIAN OVERSES BANK RO VISAKHAPATNAM",
      id: 28,
      img: "https://vizagdekho.com/wp-content/uploads/2021/12/Indian-Overseas-Bank-IOB.png",
    },
  ];
  const currentProjects = [
    {
      name: "MES INS KALINGA(VISAKHAPATNAM)",
      id: 1,
      img: "https://images.jdmagicbox.com/comp/visakhapatnam/v4/0891px891.x891.180414015732.w9v4/catalogue/ins-circars-eastern-naval-command-naval-base-visakhapatnam-visakhapatnam-indian-navy-bases-5el69d2t7e.jpg",
    },
    {
      name: "PURI WORLD CLASS RAILWAY STATION",
      id: 2,
      img: "https://newsroompost.com/wp-content/uploads/2023/05/Puri-railway-station-future-look-1.jpg",
    },
    {
      name: "SLDC / OPTCL OFFICE BHUBANESWAR",
      id: 3,
      img: "https://www.sldcorissa.org.in/Writereaddata/Slideimage//SLDCslider-10.jpg",
    },
    {
      name: "CIPET UNIVERSITY BHUBANESWAR",
      id: 4,
      img: "https://images.shiksha.com/mediadata/images/1509621184phpjCh1HT.jpeg",
    },
    {
      name: "OUAT AGRICULTARAL UNIVERSITY AUDITORIUM BHUBANESWAR)",
      id: 5,
      img: "https://ouat.nic.in/sites/default/files/node_gallery/dsc_8293.jpg",
    },
    {
      name: "HOTEL(LEMON TREE GROUP) AT BHARATOUR BHUBANESWAR)",
      id: 6,
      img: "https://m.lemontreehotels.com/getattachment/75c6507c-9e56-4d42-8cda-d161cec26cbe/Facade.aspx",
    },
  ];
  return (
    <section id="projects" className="w-full mt-4 px-8 py-4">
      <h1 className="font-serif text-2xl mb-4 font-bold sm:text-4xl text-Primary-Color text-center">
        Our Projects
      </h1>
      {/* Projects */}
      <div className="min-w-[300px] sm:min-w-[750px] flex gap-2 mx-2 my-2 sm:my-6 sm:mx-10 overflow-x-scroll no-scrollbar rounded-md">
        {/* <div className='min-h-[200px] min-w-[200px] overflow-hidden relative'>
          <img className='object-cover rounded-lg' src={currentUser.profilePic} alt="" />
          <button className='absolute bottom-7 left-2 bg-blue-500 text-white font-semibold px-2 py-1 rounded-full'>+</button>
          <span className='absolute left-2 bottom-2 font-semibold text-white'>{currentUser.name}</span>
        </div> */}
        {projects.map((project) => (
          <div
            className="min-h-[250px] min-w-[350px] overflow-hidden relative bg-transparent/40 rounded-md"
            key={project.id}
          >
            {project.img?.length > 0 ? (
              <img
                className="object-cover rounded-lg max-h-[200px] w-full"
                src={project.img}
                alt={project.name}
              />
            ) : (
              <div className="max-h-[200px] w-full bg-gray-400"></div>
            )}
            <h2 className="text-Primary-Color font-bold text-center mt-4">
              {project.name}
            </h2>
          </div>
        ))}
      </div>
      {/* On going projects */}
      <h1 className="font-serif text-xl mb-4 font-bold sm:text-2xl text-Primary-Color text-center">
        OUR ON GOING PROJECTS
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-7 mx-auto px-4 py-2">
        {currentProjects.map((cureentProject) => {
          return (
            <div
              className="h-[260px] w-[350px] overflow-hidden relative bg-transparent/40 rounded-md hover:scale-110 duration-150"
              key={cureentProject.id}
            >
              <img
                className="object-cover rounded-lg h-[200px] w-full"
                src={cureentProject.img}
                alt={cureentProject.name}
              />

              <h2 className="text-Primary-Color font-bold text-center mt-2">
                {cureentProject.name}
              </h2>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
