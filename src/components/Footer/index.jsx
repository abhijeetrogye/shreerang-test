import React, { useState } from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineAutorenew, MdOutlinePayment } from "react-icons/md";
import { GoGift } from "react-icons/go";
import { BiSupport } from "react-icons/bi";
import { FiPackage, FiMail } from "react-icons/fi";
import { BsBuilding } from "react-icons/bs";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
    botcheck: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^[6-9]\d{9}$/.test(formData.phone.trim()))
      newErrors.phone = "Enter a valid 10-digit mobile number";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters";
    if (!captchaToken) newErrors.recaptcha = "Please verify reCAPTCHA";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    if (!validate()) return;
    if (formData.botcheck) return;

    setLoading(true);
    setStatus("Sending...");

    try {
      const payload = new FormData();
      payload.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY");
      payload.append("name", formData.name.trim());
      payload.append("phone", formData.phone.trim());
      payload.append("message", formData.message.trim());
      payload.append("g-recaptcha-response", captchaToken);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });

      const data = await res.json();

      if (data.success) {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 4000);
        setFormData({ name: "", phone: "", message: "", botcheck: "" });
        setCaptchaToken(null);
        setErrors({});
        setStatus("Message sent successfully!");
      } else {
        setStatus(data.message || "Failed to send. Please try again.");
      }
    } catch (err) {
      setStatus("An error occurred. Please try again later.");
      console.error("Form submission error:", err);
    } finally {
      setLoading(false);
    }
  };

  const featureItems = [
    {
      icon: <LiaShippingFastSolid />,
      title: "Free Shipping",
      desc: "For Orders Above ₹799",
    },
    {
      icon: <MdOutlineAutorenew />,
      title: "7 Days Returns",
      desc: "For An Exchange Product",
    },
    {
      icon: <MdOutlinePayment />,
      title: "Secured Payments",
      desc: "Integrated Payment Gateway",
    },
    {
      icon: <GoGift />,
      title: "Special Gifts",
      desc: "To Our Loyal Customers",
    },
    {
      icon: <BiSupport />,
      title: "Support 24/7",
      desc: "Contact us anytime",
    },
  ];

  return (
    <footer className="bg-neutral-50 text-neutral-800 pt-10">
      <div className="container mx-auto px-4">
        {/* ✅ Features Row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {featureItems.map((item, i) => (
            <Link
              key={i}
              to={item.to}
              className="group flex flex-col items-center text-center p-3 transition-transform duration-300 hover:-translate-y-2 hover:scale-105"
            >
              <div className="text-4xl text-neutral-600 transition-colors duration-300 group-hover:text-[#8e182f]">
                {item.icon}
              </div>
              <h3 className="text-base font-medium mt-3">{item.title}</h3>
              <p className="text-xs text-neutral-500 mt-1">{item.desc}</p>
            </Link>
          ))}
        </div>

        <hr className="border-neutral-200" />

        {/* ✅ Main Footer Content with Vertical Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-10">
          {/* Column 1 */}
          <div className="md:col-span-2 lg:col-span-2 border-r border-neutral-200 pr-6">
            <div className="bg-white border border-neutral-200 shadow-sm rounded-xl p-6 h-full">
              <h2 className="text-xl font-semibold text-[#8e182f] mb-4">
                Get in Touch
              </h2>
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-4">
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#8e182f]/50 focus:border-[#8e182f]"
                    type="text"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>
                <div className="mb-4">
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#8e182f]/50 focus:border-[#8e182f]"
                    type="tel"
                    placeholder="10-digit mobile number"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>
                <div className="mb-4">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#8e182f]/50 focus:border-[#8e182f]"
                    placeholder="Write your message..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>
                <input
                  type="text"
                  name="botcheck"
                  className="hidden"
                  tabIndex="-1"
                  autoComplete="off"
                />
                <div className="mb-4">
                  <ReCAPTCHA
                    sitekey="6LeIxAcbAAAAAGG-vHG1pkc89GfrZ7_1g-aX7yJ_"
                    onChange={(token) => setCaptchaToken(token)}
                  />
                  {errors.recaptcha && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.recaptcha}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center items-center gap-2 bg-[#8e182f] text-white font-semibold py-2.5 rounded-lg hover:bg-[#7a1528] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading && (
                    <svg
                      className="animate-spin h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      ></path>
                    </svg>
                  )}
                  {loading ? "Sending..." : "Send Message"}
                </button>
                {status && (
                  <p
                    className={`mt-3 text-center text-sm ${
                      status.includes("successfully")
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {status}
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <FiPackage className="text-[#8e182f]" /> Products
            </h3>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>
                <Link to="/prices-drop" className="hover:text-[#8e182f]">
                  Prices Drop
                </Link>
              </li>
              <li>
                <Link to="/new-products" className="hover:text-[#8e182f]">
                  New Products
                </Link>
              </li>
              <li>
                <Link to="/best-sales" className="hover:text-[#8e182f]">
                  Best Sales
                </Link>
              </li>
              <li>
                <Link
                  to="https://maps.app.goo.gl/HvgLHz7NuApiwKu28"
                  className="hover:text-[#8e182f]"
                >
                  Find Our Store
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="hover:text-[#8e182f]">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <BsBuilding className="text-[#8e182f]" /> Our Store
            </h3>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>
                <Link to="/about" className="hover:text-[#8e182f]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/delivery" className="hover:text-[#8e182f]">
                  Delivery
                </Link>
              </li>
              <li>
                <Link to="/legal-notice" className="hover:text-[#8e182f]">
                  Legal Notice
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-[#8e182f]">
                  Terms And Conditions
                </Link>
              </li>
              <li>
                <Link to="/developer" className="hover:text-[#8e182f]">
                  Contact Developer
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <FiMail className="text-[#8e182f]" /> Newsletter
            </h3>
            <p className="text-sm text-neutral-600 mb-4">
              Get news about special discounts and new arrivals.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full p-2 border border-neutral-300 rounded-md text-sm outline-none focus:ring-2 focus:ring-[#8e182f]/50 focus:border-[#8e182f]"
                required
              />
              <button
                type="submit"
                className="bg-[#8e182f] hover:bg-[#7a1528] text-white text-sm font-semibold py-2 rounded-md transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
            <h3 className="text-lg font-semibold mt-6 mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-neutral-500 hover:text-[#8e182f]"
                aria-label="Facebook"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                className="text-neutral-500 hover:text-[#8e182f]"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-neutral-500 hover:text-[#8e182f]"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-neutral-500 hover:text-[#8e182f]"
                aria-label="YouTube"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-neutral-500 border-t border-neutral-200 py-4">
          © {new Date().getFullYear()} Shreerang Sarees. All Rights Reserved.
        </div>
      </div>

      {showToast && (
        <div className="fixed bottom-5 right-5 bg-green-600 text-white px-5 py-3 rounded-lg shadow-lg animate-bounce">
          Message sent successfully!
        </div>
      )}
    </footer>
  );
};

export default Footer;
