import {
    TbBrandGithubFilled
  } from "react-icons/tb";
  import { FaLinkedinIn } from "react-icons/fa6";
  import { RiInstagramFill } from "react-icons/ri";
  import { motion } from "framer-motion";
  
  function Footer() {
    return (
      <footer className="bg-black text-white">
  
        {/* TOP SECTION */}
        <div className="max-w-[1300px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
  
          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-bold">
              <span className="text-[#fac039]">Goodshopp</span>ing
            </h2>
            <p className="text-gray-400 mt-4 text-sm">
              Create to change everything for the better. For everyone.
            </p>
  
            {/* SOCIAL */}
            {/* SOCIAL */}
<div className="flex gap-4 mt-6">

  {/* Github */}
  <motion.a
    href="https://github.com/VaradSutar30"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2 }}
    className="bg-zinc-800 p-2 rounded-full hover:bg-[#fac039] hover:text-black transition"
  >
    <TbBrandGithubFilled size={18} />
  </motion.a>

  {/* LinkedIn */}
  <motion.a
    href="https://linkedin.com/in/varad-sutar-8a936b287"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2 }}
    className="bg-zinc-800 p-2 rounded-full hover:bg-[#fac039] hover:text-black transition"
  >
    <FaLinkedinIn size={18} />
  </motion.a>

  {/* Instagram */}
  <motion.a
    href="https://instagram.com/_varadsutar_"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2 }}
    className="bg-zinc-800 p-2 rounded-full hover:bg-[#fac039] hover:text-black transition"
  >
    <RiInstagramFill size={18} />
  </motion.a>

</div>
          </div>
  
          {/* SERVICES */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white">Bonus Programs</a></li>
              <li><a href="#" className="hover:text-white">Gift Cards</a></li>
              <li><a href="#" className="hover:text-white">Credit & Payments</a></li>
              <li><a href="#" className="hover:text-white">Offers</a></li>
            </ul>
          </div>
  
          {/* SUPPORT */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white">Find an Order</a></li>
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white">Guarantee</a></li>
              <li><a href="#" className="hover:text-white">FAQs</a></li>
            </ul>
          </div>
  
          {/* NEWSLETTER */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to get latest offers and updates.
            </p>
  
            <div className="flex">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full px-3 py-2 rounded-l-md text-black outline-none"
              />
              <button className="bg-[#fac039] px-4 rounded-r-md text-black font-semibold hover:opacity-90">
                Join
              </button>
            </div>
          </div>
  
        </div>
  
        {/* BOTTOM */}
        <div className="border-t border-zinc-800 text-center py-4 text-gray-500 text-sm">
          © {new Date().getFullYear()} Goodshopping. All rights reserved.
        </div>
  
      </footer>
    );
  }
  
  export default Footer;