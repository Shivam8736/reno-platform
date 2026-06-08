import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import NoticeCard from "../components/NoticeCard";

export default function Home() {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const res = await fetch("/api/notices");
      const data = await res.json();

      setNotices(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      {loading ? (
        <div className="text-center py-10">
          <h2 className="text-xl font-semibold">
            Loading Notices...
          </h2>
        </div>
      ) : notices.length === 0 ? (
        <div className="bg-white rounded-xl p-10 text-center shadow">
          <h2 className="text-2xl font-bold mb-2">
            No Notices Found
          </h2>

          <p className="text-gray-500">
            Click Add Notice to create your first notice.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notices.map((notice) => (
            <NoticeCard
              key={notice.id}
              notice={notice}
            />
          ))}
        </div>
      )}
    </Layout>
  );
}