import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ticket from "../assets/images/Mask4.png";

const Join = ({ timeLeft }) => {
  const api_endpoint = "http://127.0.0.1:8000/api/create/";
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    collegename: "",
    department: "",
    year: "",
  });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.mobile || !formData.mobile.match(/^[6-9]\d{9}$/))
      tempErrors.mobile = "Invalid mobile number";
    if (
      !formData.email ||
      !formData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    )
      tempErrors.email = "Invalid email";
    if (!formData.collegename)
      tempErrors.collegename = "College name is required";
    if (!formData.department) tempErrors.department = "Department is required";
    if (!formData.year) tempErrors.year = "Select a year";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setServerError("🚨 Please fix the errors!");
      setSuccessMessage(null);
      return;
    }

    setLoading(true);
    setServerError(null);
    setSuccessMessage(null);

    try {
      const response = await fetch(api_endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.error && data.error.includes("already registered")) {
          throw new Error(
            "🚨 User already registered with this email or mobile number."
          );
        }
        throw new Error(
          data.error ||
            "Registration unsuccessful. Please use a unique email ID and unique mobile number."
        );
      }

      setSuccessMessage("✅ Registration successful! Welcome to the event 🎉");
      setFormData({
        name: "",
        mobile: "",
        email: "",
        collegename: "",
        department: "",
        year: "",
      });
      setErrors({});
    } catch (err) {
      setServerError(err.message || "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" conatiner mx-auto w-full  flex justify-center items-center md:overflow-hidden overflow-auto m-5">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="md:w-[700px] h-[auto] w-full m-5 p-8 border-4 border-pink-600 rounded-2xl shadow-xl bg-black flex flex-col items-center justify-center"
      >
        <h2 className="font-squid text-3xl text-center m-5 p-3 bg-gradient-to-b from-pink-600 to-gray-200 bg-clip-text text-transparent">
          ⭕ Join Us 🔺
        </h2>
        <h2 className="font-courier text-xl text-center text-gray-300 m-2">
          Join us as soon as possible because only{" "}
          <span className=" font-semibold text-2xl text-center text-wrap ">
            {`${timeLeft.days} days ${timeLeft.hours}h ${timeLeft.minutes}m and ${timeLeft.seconds}s `}
          </span>{" "}
          left, and the clock is ticking!
        </h2>
        <div className="flex flex-col justify-center items-center p-3">
          <motion.div
            className="w-[220px] h-[170px]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={ticket}
              alt="Join Us"
              className="w-[220px] h-[170px] object-contain rounded-xl hover:scale-110 transition-transform duration-300 ease-in-out"
            />
          </motion.div>
        </div>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScwQ5Fz1ZPBzkJUSEu_C_2FdmqHpw9mpkKqG0KTDBlZKTcXYw/viewform?embedded=true"
          width="640"
          height="1560"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </motion.div>
    </div>
  );
};

export default Join;
