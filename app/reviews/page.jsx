"use client";

import { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";

export default function ReviewsPage() {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [suggestion, setSuggestion] = useState("");

  useEffect(() => {
    const storedReviews = localStorage.getItem("reviews");
    if (storedReviews) setReviews(JSON.parse(storedReviews));
  }, []);

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !suggestion || rating === 0) return;

    const newReview = { name, rating, suggestion };
    setReviews([...reviews, newReview]);
    setCurrentUser(name);

    setName("");
    setRating(0);
    setHoverRating(0);
    setSuggestion("");
  };

  const handleDelete = (index) => {
    if (confirm("Are you sure you want to delete this review?")) {
      const updatedReviews = reviews.filter((_, i) => i !== index);
      setReviews(updatedReviews);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-pink-600">
        Reviews & Suggestions
      </h1>

      {/* Reviews List */}
      <div className="space-y-6 mb-12 max-h-96 overflow-y-auto pr-2">
        {reviews.length === 0 && (
          <p className="text-gray-500 text-center">No reviews yet. Be the first to add one!</p>
        )}

        {reviews.map((review, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-r from-pink-50 to-pink-100 border border-pink-200 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 flex flex-col gap-3"
          >
            {/* Delete button only for author */}
            {currentUser === review.name && (
              <button
                onClick={() => handleDelete(index)}
                className="absolute top-4 right-4 flex items-center justify-center w-9 h-9 rounded-full bg-red-100 text-red-500 hover:bg-red-200 hover:text-red-700 transition-shadow shadow-md hover:scale-110"
                title="Delete Review"
              >
                <FaTrash size={16} />
              </button>
            )}

            <div className="flex items-center justify-between">
              <span className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-700">
                {review.name}
              </span>
              <span className="text-amber-500 text-2xl">
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </span>
            </div>

            <p className="text-gray-700 text-base leading-relaxed">{review.suggestion}</p>
          </div>
        ))}
      </div>

      {/* Add Review Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-3xl shadow-xl space-y-6 border border-pink-100"
      >
        <h2 className="text-2xl font-bold text-pink-600 mb-4">Add Your Review</h2>

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
        />

        <textarea
          placeholder="Your Suggestion"
          value={suggestion}
          onChange={(e) => setSuggestion(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded-lg h-24 focus:outline-none focus:ring-2 focus:ring-pink-400 transition resize-none"
        />

        <div className="flex items-center gap-3">
          <span className="font-medium text-gray-700">Rating:</span>
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              className={`text-3xl transition-colors ${
                star <= (hoverRating || rating) ? "text-amber-500" : "text-gray-300"
              }`}
            >
              ★
            </button>
          ))}
        </div>

        <button
          type="submit"
          className="w-full bg-pink-500 text-white font-bold px-6 py-3 rounded-3xl hover:bg-pink-600 transition shadow-md hover:shadow-lg"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
}
