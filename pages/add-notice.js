import { useRouter } from "next/router";
import Layout from "../components/Layout";
import NoticeForm from "../components/NoticeForm";

export default function AddNotice() {
  const router = useRouter();

  const handleSubmit = async (formData) => {
    const res = await fetch("/api/notices", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Notice Added Successfully");
      router.push("/");
    }
  };

  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Add New Notice
      </h2>

      <NoticeForm onSubmit={handleSubmit} />
    </Layout>
  );
}