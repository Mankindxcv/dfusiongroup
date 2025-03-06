import { useState } from "react";
import "../Styles/global.css"; // Ensure styles are updated

const reviews = [
  {
    id: 1,
    name: "Sachin Burdak",
    rating: 5,
    review:
      "I am so happy to find elfsight. Affordable, efficient, and great support team. Thanks, elfsight!",
    profilePic: "S",
  },
  {
    id: 2,
    name: "Hadi Rezai",
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit numquam dolores consequatur praesentium labore quod, quae nemo id tempore eius!",
    profilePic: "H",
  },
  {
    id: 3,
    name: "Sergio Florez",
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit numquam dolores consequatur praesentium labore quod, quae nemo id tempore eius!",
    profilePic: "S",
  },
  {
    id: 4,
    name: "Semaj95",
    rating: 4,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit numquam dolores consequatur praesentium labore quod, quae nemo id tempore eius!",
    profilePic: "S",
  },
];

const ReviewSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 5,
    review: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.review) {
      reviews.unshift({
        ...newReview,
        id: reviews.length + 1,
        profilePic: newReview.name[0],
      });
      setNewReview({ name: "", rating: 5, review: "" });
      setShowForm(false);
    }
  };

  return (
    <div className="review-section">
      <h2>What our customers say</h2>

      {/* Rating Summary */}
      <div className="rating-summary">
        <div className="overall-rating">
          <span className="rating-score">4.6</span>
          <span className="stars">★★★★★</span>
        </div>
        <button className="btn btn-danger mt-2" onClick={() => setShowForm(true)}>
          Write a Review
        </button>
      </div>

      {/* Reviews */}
      <div className="review-container">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-header">
              <div className="profile-pic">{review.profilePic}</div>
              <div>
                <p className="review-author">{review.name}</p>
                <span className="stars">{"★".repeat(review.rating)}</span>
              </div>
            </div>
            <p className="review-text">{review.review}</p>
          </div>
        ))}
      </div>

      {showForm && (
        <div className="popup-overlay d-flex justify-content-center align-items-center">
          <div className="popup p-4">
            <h3 className="text-center mb-3">Add Your Review</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={newReview.name}
                onChange={(e) =>
                  setNewReview({ ...newReview, name: e.target.value })
                }
                className="mb-3"
                required
              />
              <textarea
                placeholder="Your Review"
                value={newReview.review}
                onChange={(e) =>
                  setNewReview({ ...newReview, review: e.target.value })
                }
                className="mb-3"
                required
              ></textarea>

              <div className="text-center">
                <button type="submit" className="btn btn-danger me-2">
                  Submit
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewSection;
