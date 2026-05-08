import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fac039]/10 to-yellow-100 flex items-center justify-center py-12 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full text-center space-y-8 bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-12 border border-white/50"
      >
        <div className="space-y-4">
          <div className="w-24 h-24 mx-auto bg-gray-100 rounded-3xl flex items-center justify-center">
            <span className="text-4xl">🚫</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            404
          </h1>
          <p className="text-xl text-gray-600 font-medium">
            Page Not Found
          </p>
          <p className="text-gray-500">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="space-y-4 pt-8 border-t border-gray-200">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/")}
            className="w-full bg-gradient-to-r from-[#fac039] to-yellow-500 text-white py-4 px-6 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-200"
          >
            Go to Homepage
          </motion.button>
          
          <div className="grid grid-cols-2 gap-4 pt-4">
            <NavLink
              to="/catalog"
              className="py-3 px-4 bg-white/50 hover:bg-white rounded-xl text-gray-700 font-medium hover:shadow-md transition-all duration-200 border border-gray-200 hover:border-gray-300"
            >
              Catalog
            </NavLink>
            <NavLink
              to="/cart"
              className="py-3 px-4 bg-white/50 hover:bg-white rounded-xl text-gray-700 font-medium hover:shadow-md transition-all duration-200 border border-gray-200 hover:border-gray-300"
            >
              Cart
            </NavLink>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;