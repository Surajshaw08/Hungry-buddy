// import React from "react";
// import { FaInstagram, FaFacebookF, FaPinterest, FaTwitter, FaLinkedinIn } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-100 text-gray-800 py-10">
//       <div className="container mx-auto px-4">
//         {/* Main Footer Section */}
//         <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
//           {/* Logo Section */}
//           <div>
//             <h2 className="text-2xl font-bold text-orange-500 flex items-center">
//               🍽 Hungry buddy
//             </h2>
//             <p className="mt-2 text-gray-500">© 2025 Hungry buddy Limited</p>
//           </div>

//           {/* Company Section */}
//           <div>
//             <h3 className="font-semibold">Company</h3>
//             <ul className="mt-2 space-y-2">
//               <li>About Us</li>
//               <li>Hungry buddy</li>
//               <li>Careers</li>
//               <li>Team</li>
//               <li>Hungry buddy One</li>
//               <li>Hungry buddy Instamart</li>
//               <li>Hungry buddy Dineout</li>
//               <li>Hungry buddy Genie</li>
//               <li>Minis</li>
//             </ul>
//           </div>

//           {/* Contact Section */}
//           <div>
//             <h3 className="font-semibold">Contact us</h3>
//             <ul className="mt-2 space-y-2">
//               <li>Help & Support</li>
//               <li>Partner With Us</li>
//               <li>Ride With Us</li>
//             </ul>
//             <h3 className="font-semibold mt-4">Legal</h3>
//             <ul className="mt-2 space-y-2">
//               <li>Terms & Conditions</li>
//               <li>Cookie Policy</li>
//               <li>Privacy Policy</li>
//             </ul>
//           </div>

//           {/* Available Locations */}
//           <div>
//             <h3 className="font-semibold">Available in:</h3>
//             <ul className="mt-2 space-y-2">
//               <li>Bangalore</li>
//               <li>Gurgaon</li>
//               <li>Hyderabad</li>
//               <li>Delhi</li>
//               <li>Mumbai</li>
//               <li>Pune</li>
//             </ul>
//             <select className="mt-3 p-2 border rounded-md">
//               <option>685 cities</option>
//             </select>
//           </div>

//           {/* Social Links */}
//           <div>
//             <h3 className="font-semibold">Life at Hungry buddy</h3>
//             <ul className="mt-2 space-y-2">
//               <li>Explore With Hungry buddy</li>
//               <li>Hungry buddy News</li>
//               <li>Snackables</li>
//             </ul>
//             <h3 className="font-semibold mt-4">Social Links</h3>
//             <div className="flex gap-3 mt-2 text-lg">
//               <FaLinkedinIn className="cursor-pointer" />
//               <FaInstagram className="cursor-pointer" />
//               <FaFacebookF className="cursor-pointer" />
//               <FaPinterest className="cursor-pointer" />
//               <FaTwitter className="cursor-pointer" />
//             </div>
//           </div>
//         </div>

//         {/* App Download Section */}
//         <div className="mt-8 border-t pt-6 text-center">
//           <p className="text-sm font-medium">
//             For better experience, download the Hungry buddy app now
//           </p>
//           <div className="flex justify-center gap-4 mt-3">
//             <img
//               src="https://www.logo.wine/a/logo/App_Store_(iOS)/App_Store_(iOS)-Badge-Logo.wine.svg"
//               alt="App Store"
//               className="w-36 cursor-pointer bg-blend-color-burn"
//             />
//             <img
//               src="https://w7.pngwing.com/pngs/859/487/png-transparent-google-play-computer-icons-android-google-text-label-logo.png"
//               alt="Google Play"
//               className="w-36 cursor-pointer bg-blend-color-burn"
//             />
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


//======================================================================================

import React from "react";
import { FaInstagram, FaFacebookF, FaPinterest, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        {/* Main Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
          {/* Logo Section */}
          <div>
            <h2 className="text-2xl font-bold text-orange-500 flex items-center">
              🍽 Hungry buddy
            </h2>
            <p className="mt-2 text-gray-400">© 2025 Hungry buddy Limited</p>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="font-semibold">Company</h3>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li>About Us</li>
              <li>Hungry buddy</li>
              <li>Careers</li>
              <li>Team</li>
              <li>Hungry buddy One</li>
              <li>Hungry buddy Instamart</li>
              <li>Hungry buddy Dineout</li>
              <li>Hungry buddy Genie</li>
              <li>Minis</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-semibold">Contact us</h3>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li>Help & Support</li>
              <li>Partner With Us</li>
              <li>Ride With Us</li>
            </ul>
            <h3 className="font-semibold mt-4">Legal</h3>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li>Terms & Conditions</li>
              <li>Cookie Policy</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Available Locations */}
          <div>
            <h3 className="font-semibold">Available in:</h3>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li>Bangalore</li>
              <li>Gurgaon</li>
              <li>Hyderabad</li>
              <li>Delhi</li>
              <li>Mumbai</li>
              <li>Pune</li>
            </ul>
            <select className="mt-3 p-2 border rounded-md bg-black text-white border-gray-500">
              <option>685 cities</option>
            </select>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold">Life at Hungry buddy</h3>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li>Explore With Hungry buddy</li>
              <li>Hungry buddy News</li>
              <li>Snackables</li>
            </ul>
            <h3 className="font-semibold mt-4">Social Links</h3>
            <div className="flex gap-3 mt-2 text-lg">
              <FaLinkedinIn className="cursor-pointer" />
              <FaInstagram className="cursor-pointer" />
              <FaFacebookF className="cursor-pointer" />
              <FaPinterest className="cursor-pointer" />
              <FaTwitter className="cursor-pointer" />
            </div>
          </div>
        </div>

        {/* App Download Section */}
        <div className="mt-8 border-t border-gray-500 pt-6 text-center">
          <p className="text-sm font-medium">
            For better experience, download the Hungry buddy app now
          </p>
          <div className="flex justify-center gap-4 mt-3">
            <img
              src="https://www.logo.wine/a/logo/App_Store_(iOS)/App_Store_(iOS)-Badge-Logo.wine.svg"
              alt="App Store"
              className="w-36 cursor-pointer bg-blend-color-burn"
            />
            <img
              src="https://w7.pngwing.com/pngs/859/487/png-transparent-google-play-computer-icons-android-google-text-label-logo.png"
              alt="Google Play"
              className="w-36 cursor-pointer bg-blend-color-burn"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
