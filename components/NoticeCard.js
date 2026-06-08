import Link from "next/link";

export default function NoticeCard({ notice }) {
  const handleDelete = async () => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this notice?"
    );

    if (!confirmDelete) return;

    const res = await fetch(`/api/notices/${notice.id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      alert("Notice Deleted Successfully");
      window.location.reload();
    } else {
      alert("Delete Failed");
    }
  };


  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      {/* Notice Image */}
     

      <div className="p-5">
        {/* Header */}
        <div className="flex justify-between items-start mb-3">
          <h2 className="text-xl font-bold text-gray-800">
            {notice.title}
          </h2>

          {notice.priority === "Urgent" && (
            <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">
              Urgent
            </span>
          )}
        </div>

        {/* Body */}
        <p className="text-gray-600 mb-4">
          {notice.body}
        </p>

        {/* Category */}
        <div className="mb-3">
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
            {notice.category}
          </span>
        </div>

        {/* Publish Date */}
        <p className="text-sm text-gray-500 mb-4">
          📅 {new Date(notice.publishDate).toLocaleDateString()}
        </p>

        {/* Buttons */}
        <div className="flex gap-2">
          <Link
            href={`/edit/${notice.id}`}
            className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-center hover:bg-blue-700"
          >
            Edit
          </Link>

          <button
            onClick={handleDelete}
            className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}