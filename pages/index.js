import { useState } from "react";
import khodamData from "@/services/khodam.json";
import Input from "@/components/Input";
import Head from "next/head";

const Home = () => {
  const [name, setName] = useState("");
  const [khodamName, setKhodamName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") {
      setError("Nama tidak boleh kosong");
    } else {
      // Contoh logika untuk menampilkan nama khodam
      const khodamIndex = Math.floor(Math.random() * khodamData.khodam.length);
      setKhodamName(khodamData.khodam[khodamIndex]);
      setError("");
    }
  };

  return (
    <>
      <Head>
        <title>Khodam</title>
      </Head>
      <div className="max-w-md mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4">Nama Khodam Finder</h1>
        <form onSubmit={handleSubmit}>
          <Input
            label="Nama Anda"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={error}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Cari Khodam
          </button>
        </form>
        {khodamName && (
          <p className="mt-4 font-semibold text-green-600">
            Nama Khodam: {khodamName}
          </p>
        )}
        <p className="mt-2 flex items-center space-x-1">
          <span>Source code:</span>
          <a
            className="text-blue-500 hover:underline"
            href="https://github.com/fsholehan/cek-khodam"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cek Khodam
          </a>
        </p>
      </div>
    </>
  );
};

export default Home;
