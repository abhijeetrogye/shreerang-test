import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FiUploadCloud, FiSend, FiCheckCircle } from "react-icons/fi";

const UserTestimony = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  // Handles the image selection and creates a preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle file upload and form data submission here.
    console.log({ name, email, image, rating, comment });
    setSubmitted(true);
  };

  // Handles the 5-second countdown and redirect after submission
  useEffect(() => {
    if (submitted) {
      // Update the countdown every second
      const interval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown > 0 ? prevCountdown - 1 : 0);
      }, 1000);

      // Redirect after 5 seconds
      const timer = setTimeout(() => {
        navigate("/");
      }, 5000);

      // Cleanup function to clear the timers if the component unmounts
      return () => {
        clearInterval(interval);
        clearTimeout(timer);
      };
    }
  }, [submitted, navigate]);
  
  // Base classes for form inputs for consistency
  const inputClasses = "w-full border border-slate-300 rounded-lg p-3 text-sm text-slate-600 focus:ring-2 focus:ring-rose-300 focus:border-rose-500 transition duration-150 ease-in-out";

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-rose-50 to-amber-100 py-12 px-4 font-sans">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-2xl p-6 sm:p-8 md:p-12">
        
        {/* Form Header */}
        <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
                Share Your Experience
            </h2>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
                Your feedback helps us improve. Please be respectful and constructive in your review.
            </p>
        </div>

        {submitted ? (
          // Thank You / Submitted State
          <div className="text-center p-8 bg-green-50 border-2 border-dashed border-green-300 rounded-xl transition-all duration-500">
            <FiCheckCircle className="mx-auto text-5xl text-green-500 mb-4" />
            <h3 className="text-2xl font-semibold text-green-800 mb-2">
              Thank You for Your Testimony!
            </h3>
            <p className="text-slate-600">
              We've received your review and will process it shortly. You'll be notified via email once it's published.
            </p>
            <p className="text-slate-500 text-sm mt-4">
              Redirecting to homepage in {countdown} seconds...
            </p>
          </div>
        ) : (
          // Form State
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div>
                <label className="block text-slate-700 font-medium mb-2 text-sm">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className={inputClasses}
                  placeholder="e.g., Jane Doe"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-slate-700 font-medium mb-2 text-sm">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={inputClasses}
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Custom File Upload */}
            <div>
              <label className="block text-slate-700 font-medium mb-2 text-sm">
                Upload Profile Picture
              </label>
              <div className="flex items-center gap-4">
                {imagePreview && (
                    <img src={imagePreview} alt="Profile preview" className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md" />
                )}
                <label className="flex-1 flex flex-col items-center justify-center w-full h-32 border-2 border-slate-300 border-dashed rounded-xl cursor-pointer bg-slate-50 hover:bg-slate-100 transition">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <FiUploadCloud className="w-10 h-10 mb-3 text-slate-400"/>
                        <p className="mb-2 text-sm text-slate-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-slate-400">PNG, JPG, or GIF (MAX. 800x400px)</p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
                </label>
              </div>
            </div>

            {/* Star Rating */}
            <div>
              <label className="block text-slate-700 font-medium mb-2 text-sm">
                How would you rate your experience?
              </label>
              <div className="flex items-center space-x-2">
                {Array.from({ length: 5 }, (_, i) => i + 1).map((star) => (
                  <FaStar
                    key={star}
                    size={32}
                    className={`cursor-pointer transition-all duration-200 hover:scale-110 ${
                      star <= (hoverRating || rating)
                        ? "text-yellow-400"
                        : "text-slate-300"
                    }`}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                  />
                ))}
              </div>
            </div>

            {/* Comments Textarea */}
            <div>
              <label className="block text-slate-700 font-medium mb-2 text-sm">
                Your Review
              </label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
                rows={5}
                className={inputClasses}
                placeholder="Share details of your own experience..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#8e182f] text-white font-semibold rounded-full shadow-lg hover:bg-[#6b1023] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out"
              >
                <FiSend />
                Submit Testimony
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default UserTestimony;

