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
        <p>Loading...</p>
      ) : notices.length === 0 ? (
        <p>No notices available.</p>
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