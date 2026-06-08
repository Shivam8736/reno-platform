import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import NoticeForm from "../../components/NoticeForm";

export default function EditNotice() {
  const router = useRouter();
  const { id } = router.query;

  const [notice, setNotice] = useState(null);

  useEffect(() => {
    if (id) {
      fetchNotice();
    }
  }, [id]);

  const fetchNotice = async () => {
    const res = await fetch(`/api/notices/${id}`);
    const data = await res.json();
    setNotice(data);
  };

  const handleSubmit = async (formData) => {
    const res = await fetch(`/api/notices/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Notice Updated Successfully");
      router.push("/");
    }
  };

  if (!notice) {
    return (
      <Layout>
        <p>Loading...</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Edit Notice
      </h2>

      <NoticeForm
        initialData={notice}
        onSubmit={handleSubmit}
      />
    </Layout>
  );
}