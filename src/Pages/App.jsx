import { useEffect, useState } from "react";
import Input from "../componens/Elements/Input/Input";
import Header from "../componens/Fragments/Header";
import { getDataSurat } from "../services/getApiQuran";
import { Link } from "react-router-dom";
import CardSurat from "../componens/Fragments/Card";
import Footer from "../componens/Fragments/Footer";

function App() {
  const [getSurat, setSurat] = useState({});
  const [search, setSearch] = useState("");
  useEffect(() => {
    getDataSurat((data) => {
      setSurat(data.data);
    });
  });

  const handleKeyPress = (event) => {
    console.log(event.target.value);
    // setSearch(event.target.value);
  };
  return (
    <>
      <div className="lg:w-5/6 p-5 mx-auto">
        <Header
          judul="بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ"
          clasname={`text-xl md:text-2xl lg:text-3xl font-bold text-white text-center text-white`}
          bg="bg-teal-500"
        />

        <Input
          type="text"
          placeholder="Cari Surat..."
          id="cari-surat"
          onkeypress={handleKeyPress}
        />
        <div className=" mt-2 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {Object.keys(getSurat).length > 0 &&
            getSurat.map((surat) => {
              return (
                <Link to={`surat/${surat.nomor}`} key={surat.nomor}>
                  <CardSurat
                    // key={surat.nomor}
                    nomor={surat.nomor}
                    surat={surat.namaLatin}
                    arab={surat.nama}
                    terjemah={surat.arti}
                    tempatTurun={surat.tempatTurun}
                  />
                </Link>
              );
            })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
