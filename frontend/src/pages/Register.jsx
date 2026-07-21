import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import Navbar from "../components/landing/Navbar";
function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Account created successfully!");

      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md p-8 rounded-2xl shadow-lg bg-white">

          <h1 className="text-3xl font-bold text-center mb-6">
            Create Account
          </h1>

          <form
            className="space-y-4"
            onSubmit={handleRegister}
          >

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-3 rounded-lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border p-3 rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border p-3 rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full border p-3 rounded-lg"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button
              type="submit"
              className="w-full bg-emerald-600 text-white py-3 rounded-lg"
            >
              Sign Up
            </button>

          </form>

          <p className="text-center mt-4 text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-emerald-600 font-medium"
            >
              Login
            </Link>
          </p>

        </div>
      </div>
    </>
  );
}

export default Register;