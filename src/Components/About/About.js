// import React from 'react'
// import './About.css'
// import experince from '../../images/About1.png'
// import storeImage from '../../images/storeImage.png'
// import locationIcon from '../../images/Location.png'


// const StoreCard = ({ location, image }) => {
//   return (
//     <div className="store-card">
//       <div className="store-image-wrapper">
//         <img
//           src={image}
//           alt={`Aquapot RO Store ${location}`}
//           className="store-image"
//         />
//         <div className="store-location">
//           <img
//             src={locationIcon}
//             alt="Location Icon"
//             className="location-icon"
//           />
//           <span className="location-name">{location}</span>
//         </div>
//       </div>
//       <div className="store-overlay">
//         <h3>KARNATAKA - {location.toUpperCase()}</h3>
//         <div className="store-details">
//           <p>BRO STORE {location.toUpperCase()}</p>
//           <p>No. 11/1(193), Chaitanya Ground Floor,</p>
//           <p>K.P. Puttanna Chetty Road,</p>
//           <p>5th Main Road Chamrajpet,</p>
//           <p>{location}, Karnataka - 560018</p>
//           <p>Tel: +91 9393936142, 9642972325</p>
//           <p>Email: <a href={`mailto:rostore${location.toLowerCase()}@gmail.com`}>
//             rostore{location.toLowerCase()}@gmail.com
//           </a></p>
//           <p>Toll free: 1800-425-3648</p>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default function About() {

//   return (
//     <div className='about-section'>
//       <div className="header-section-about">
//         <h1>About Us</h1>
//       </div>

//       <div className="section-container">
//         <div className="content-wrapper">
//           <div className="text-content">
//             <h2>We work with you to address your most critical priorities.</h2>
//             <p>
//               We are ready to provide you with any financial, legal and
//               auditing help as well as prepare a business plan, marketing
//               or anti-crisis strategy and help with its implementation to
//               your business. We are ready to provide you with any
//               financial, legal and auditing help as well as prepare a
//             </p>
//           </div>
//           <div className="image-container">
//             <img
//               src={experince}
//               alt="Business meeting with professionals"
//               className="meeting-image"
//             />
//           </div>
//         </div>
//       </div>

//       <div className="vision-mission-container">
//         <div className="vision-box">
//           <h3>Our Vision</h3>
//           <p>To bring comfort and wellness into every home by providing smarter water solutions that improve water quality and enhance everyday living.</p>
//         </div>
//         <div className="mission-box">
//           <h3>Our Mission</h3>
//           <p>We strive to solve water-related challenges with reliable, easy-to-use products that soften water, protect appliances, and improve health and hygiene for families everywhere.</p>
//         </div>
//       </div>


//       <div className="stores-section">
//         <div className="stores-header">
//           <h2>Our Stores</h2>
//         </div>
//         <div className="stores-grid">
//           {Array(12).fill(null).map((_, index) => (
//             <StoreCard
//               key={index}
//               image={storeImage}
//               location="Nizamabad"
//             />
//           ))}
//         </div>
//       </div>

//     </div>

//   )
// }
import React from 'react';
import './About.css';
import experince from '../../images/About1.png';
import locationIcon from '../../images/Location.png';
const StoreCard = ({ city, address, logoUrl }) => {
  return (
    <div className="store-card">
      <div className="store-header">
        <img src={logoUrl} alt={`RO Store ${city}`} className="store-logo" />
      </div>
      
      <h3 className="store-city">{city}</h3>
      
         
      <div className="store-address">
        {/* Blue location icon */}
       <div className='location-icon'>
       <svg width="16" height="16" viewBox="0 0 384 512">
        <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" fill="#0066FF"></path>
</svg>
       </div>
        <p className='address'>{address}</p>
      </div>
    </div>
  );
};
export default function About() {
  // Store data with image URLs
  const stores = [
    {
      city: "Hyderabad",
      address: "AQUAPOT RO TECHNOLOGIES 1-5 SURVEY NO-92, KOMPALLY, QUTHBULLAPUR MANDAL HYDERABAD-500014 GST NO-36ANYPB7126P1Z8",
      logoUrl: "https://aquapot.in/wp-content/uploads/2025/01/hyderabad.png"
    },
    {
      city: "Bangalore",
      address: "GROUND FLOOR, NO 11/1 193, CHAITANYA, KPPUTTANNA CHETTY ROAD, 5th MAIN ROAD CHAMARAJPET, KARNATAKA BENGALORE URBAN : Karnataka : India : 560018",
      logoUrl: "https://aquapot.in/wp-content/uploads/2025/01/banglore.png"
    },
    {
      city: "Chennai",
      address: "RO STORE CHENNAI : PLOT NO.56&81, 4 Th Street, ANNAI NAGAR, KORRATTUR, CHENNAI-600076 TAMIL NADU - 600076",
      logoUrl: "https://aquapot.in/wp-content/uploads/2025/01/chennai.png"
    },
    {
      city: "Tirupati",
      address: "First Floor, 5-11-8/1, Rukhminamma Nilaya, Lingamma Cheruvu, Gandhi Statue, Somala Village and Mandal Somala, Chittoor, Andhra Pradesh, 517257",
      logoUrl: "https://aquapot.in/wp-content/uploads/2025/01/tirupati.png"
    },
    {
      city: "Vijayawada",
      address: "41-1-181, HARINADHPURAM, MAINROAD, KRISHNALANKA, Vijayawada-520013 Andhra Pradesh, India : 520013",
      logoUrl: "https://aquapot.in/wp-content/uploads/2025/01/Vijayawada.png"
    },
    {
      city: "Kovai",
      address: "#GANAPATHY SUB POST OFFICE, DOOR NUMBER 39 40 41, ATHIPALAYAM ROAD, WARD NUMBER-19, GANAPATHY, COIMBATORE, TAMILNADU-641006",
      logoUrl: "https://aquapot.in/wp-content/uploads/2025/01/kovai.png"
    },
    {
      city: "Vizag",
      address: "PLOT NO :D-38, APIIC INDUSTRIAL ESTATE, 104 AREA, BEHIND ORANGE TRAVELS, POST-CANCHARAPALEM, VISAKHAPATNAM-530007 ANDHRA PRADESH",
      logoUrl: "https://aquapot.in/wp-content/uploads/2025/01/vizag.png"
    },
    {
      city: "Kurnool",
      address: "76/97-36-9 AND 76/97-36-9-1, NTR Buildings, Indira Gandhi Nagar Road, Kurnool, Andhra Pradesh, 518003",
      logoUrl: "https://aquapot.in/wp-content/uploads/2025/01/kurnool.png"
    },
    {
      city: "Ongole",
      address: "AQUAPOT ONGOLE D. NO-4-1, REVENUE WARD NO-31, SATYA NARAYANA PURAM, ONGOLE, PRAKASAM DIST-523001 ANDHRA PRADESH",
      logoUrl: "https://aquapot.in/wp-content/uploads/2025/01/ongole.png"
    },
    {
      city: "Nizamabad",
      address: "SR AQUA SOLUTIONS : NIZAMABAD RO Store RO STIER ROson : Telangana India : 503001",
      logoUrl: "https://aquapot.in/wp-content/uploads/2025/01/nizamabad.png"
    },
    {
      city: "Hubli",
      address: "Sri Sai Enterprises : Shop.No.17, Opp: Old Bus Stand, Dhammangi Prestige Plaza, Hubballi, Karnataka 580029",
      logoUrl: "https://aquapot.in/wp-content/uploads/2025/01/hubli.png"
    },
    {
      city: "Madanapalli",
      address: "KISAN AGROS AND POWER TOOLS 12-206, NEW PET, MADANAPALLI ROAD, PALAMANER, Chittoor, Andhra Pradesh, 517408",
      logoUrl: "https://aquapot.in/wp-content/uploads/2025/01/nadanapali.png"
    },
    {
      city: "Srikakulam",
      address: "D No 2, Rella Veedhi Illisipuram, Srikakulam City, Srikakulam - 532001 (Near Sri Chaitanya College)",
      logoUrl: "https://aquapot.in/wp-content/uploads/2025/01/madurai.png"
    },
    {
      city: "Nanded",
      address: "Airport Road Sangvi Naka near DRM office Nanded-431605",
      logoUrl: "https://aquapot.in/wp-content/uploads/2025/01/madurai.png"
    },
    {
      city: "Siricilla",
      address: "PURE AQUA WATER SOLUTIONS (Ts) H. NO-6-6-114, GEETHA NAGAR, SIDOUALWADA, KONDAPUR, SIRICILLA 505301, RAJANNA CIRCILLA DIST, TELANGANA",
      logoUrl: "https://aquapot.in/wp-content/uploads/2025/01/madurai.png"
    },
    {
      city: "Chittoor",
      address: "KISAN AGROS AND POWER TOOLS 12-206, NEW PET, MADANAPALLI ROAD, PALAMANER, Chittoor, Andhra Pradesh, 517408",
      logoUrl: "https://aquapot.in/wp-content/uploads/2025/01/madurai.png"
    }
  ];
  

  return (
    <div className='about-section'>
      <div className="header-section-about">
        <h1>About Us</h1>
      </div>

      <div className="section-container">
        <div className="content-wrapper">
          <div className="text-content">
            <h2>We work with you to address your most critical priorities.</h2>
            <p>
              We are ready to provide you with any financial, legal and
              auditing help as well as prepare a business plan, marketing
              or anti-crisis strategy and help with its implementation to
              your business. We are ready to provide you with any
              financial, legal and auditing help as well as prepare a
            </p>
          </div>
          <div className="image-container">
            <img
              src={experince}
              alt="Business meeting with professionals"
              className="meeting-image"
            />
          </div>
        </div>
      </div>

      <div className="vision-mission-container">
        <div className="vision-box">
          <h3>Our Vision</h3>
          <p>To bring comfort and wellness into every home by providing smarter water solutions that improve water quality and enhance everyday living.</p>
        </div>
        <div className="mission-box">
          <h3>Our Mission</h3>
          <p>We strive to solve water-related challenges with reliable, easy-to-use products that soften water, protect appliances, and improve health and hygiene for families everywhere.</p>
        </div>
      </div>

      <div className="stores-section">
        <div className="stores-header">
          <h2>Our Stores</h2>
        </div>
        <div className="stores-grid">
          {stores.map((store, index) => (
            <StoreCard
              key={index}
              city={store.city}
              address={store.address}
              logoUrl={store.logoUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}