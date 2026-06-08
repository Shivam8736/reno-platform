import { useState } from "react";

export default function NoticeForm({ onSubmit, initialData = {} }) {
  const [formData, setFormData] = useState({
    title: initialData.title || "",
    body: initialData.body || "",
    category: initialData.category || "General",
    priority: initialData.priority || "Normal",
    publishDate: initialData.publishDate
      ? initialData.publishDate.split("T")[0]
      : "",
    image: initialData.image || "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl shadow-lg space-y-4"
    >
      <input
        type="text"
        name="title"
        placeholder="Notice Title"
        value={formData.title}
        onChange={handleChange}
        className="w-full border p-3 rounded-lg font-bold text-gray-500 mb-6"
        required
      />

      <textarea
        name="body"
        placeholder="Notice Description"
        value={formData.body}
        onChange={handleChange}
        className="w-full border p-3 rounded-lg font-bold text-gray-500 mb-6"
        rows="4"
        required
      />

      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        className="w-full border p-3 rounded-lg font-bold text-gray-500 mb-6"
      >
        <option>Exam</option>
        <option>Event</option>
        <option>General</option>
      </select>

      <select
        name="priority"
        value={formData.priority}
        onChange={handleChange}
        className="w-full border p-3 rounded-lg font-bold text-gray-500 mb-6"
      >
        <option>Normal</option>
        <option>Urgent</option>
      </select>

      <input
        type="date"
        name="publishDate"
        value={formData.publishDate}
        onChange={handleChange}
        className="w-full border p-3 rounded-lg font-bold text-gray-500 mb-6"
        required
      />

      <input
        type="text"
        name="image"
        placeholder="Image URL (Optional)"
        value={formData.image}
        onChange={handleChange}
        className="w-full border p-3 rounded-lg font-bold text-gray-500 mb-6"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
      >
        Save Notice
      </button>
    </form>
  );
}