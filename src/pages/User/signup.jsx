import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { motion } from "framer-motion";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      setLoading(false);
      return;
    }

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      
      // Update user profile with display name
      await userCredential.user.updateProfile({
        displayName: displayName
      });

      console.log("User created:", userCredential.user);
      // Redirect to main website (Home page)
      navigate("/");
    } catch (error) {
      console.error("Signup error:", error);
      switch (error.code) {
        case "auth/email-already-in-use":
          setError("Email is already registered");
          break;
        case "auth/invalid-email":
          setError("Invalid email address");
          break;
        case "auth/weak-password":
          setError("Password should be at least 6 characters");
          break;
        default:
          setError("Signup failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fac039]/10 to-yellow-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full space-y-8 bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/50"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            <span className="text-[#fac039]">Goodshoo</span>ping
          </h2>
          <p className="text-gray-600">Create your account to start shopping</p>
        </div>

        {error && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-sm"
          >
            {error}
          </motion.div>
        )}

        <form className="space-y-6" onSubmit={handleSignup}>
          {/* Display Name */}
          <div>
            <label htmlFor="displayName" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              id="displayName"
              type="text"
              required
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#fac039] focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#fac039] focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#fac039] focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
              placeholder="Create a password (min 6 characters)"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#fac039] focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
              placeholder="Confirm your password"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-[#fac039] to-yellow-500 text-white py-3 px-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </motion.button>
        </form>

        {/* Login Link */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="font-medium text-[#fac039] hover:text-yellow-600 transition-colors">
              Sign in here
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;