import { useState } from "react";
import { Link } from "react-router-dom";

function LostItem() {
  const [formData, setFormData] = useState({
    itemName: "",
    category: "",
    description: "",
    location: "",
    date: "",
    reward: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Form submitted successfully! (Firebase integration coming next)");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <Link
          to="/dashboard"
          className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium mb-6"
        >
          ← Back to Dashboard
        </Link>

        <h1 className="text-3xl font-bold text-emerald-600 mb-2">
          Report Lost Item
        </h1>

        <p className="text-gray-500 mb-8">
          Fill in the details below to report your lost item.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="block font-medium mb-2">
              Item Name
            </label>

            <input
              type="text"
              name="itemName"
              value={formData.itemName}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              placeholder="e.g. Black Wallet"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Category
            </label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            >
              <option value="">Select Category</option>
              <option>Wallet</option>
              <option>Mobile Phone</option>
              <option>Laptop</option>
              <option>Bag</option>
              <option>Keys</option>
              <option>ID Card</option>
              <option>Documents</option>
              <option>Others</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-2">
              Description
            </label>

            <textarea
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              placeholder="Describe the item..."
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Location Lost
            </label>

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              placeholder="e.g. College Library"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Date Lost
            </label>

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Reward (Optional)
            </label>

            <input
              type="number"
              name="reward"
              value={formData.reward}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              placeholder="e.g. 500"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Upload Image
            </label>

            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Submit Report
          </button>

        </form>
      </div>
    </div>
  );
}

export default LostItem;