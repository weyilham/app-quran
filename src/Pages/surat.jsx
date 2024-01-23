import { Fragment, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailSurat } from "../services/getApiQuran";
import HeaderDetail from "../componens/Fragments/HeaderDetail";
import Header from "../componens/Fragments/Header";
import CardSuratDetail from "../componens/Fragments/CardSurat";

const SuratPage = (props) => {
  const { nomor } = useParams();
  const [surat, setSurat] = useState({});
  const AyatReff = useRef(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDetailSurat(nomor);
        setSurat(data.data);
      } catch (error) {
        console.error("Error fetching surat details:", error);
      }
    };

    fetchData();
    // console.log(surat);
  }, [nomor]);

  const handleAyatChange = () => {
    const selectedOption = AyatReff.current;
    const selectedValue = selectedOption.value;

    if (selectedValue) {
      // Temukan elemen yang sesuai dengan nilai yang dipilih
      const selectedElement = document.getElementById(selectedValue);

      if (selectedElement) {
        // Scroll ke elemen yang dipilih
        selectedElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  {
  }
  return (
    <Fragment>
      <div className="lg:w-5/6 p-5 mx-auto">
        <HeaderDetail
          judul={surat.nama}
          namaLatin={surat.namaLatin}
          tempatTurun={surat.tempatTurun}
          jumlahAyat={surat.jumlahAyat}
          arti={surat.arti}
        />
        <div className="container mx-auto my-2">
          <p className="text-center bg-teal-500 text-white p-2">
            Klik pada teks arab untuk mendengarkan audio per-ayat.
          </p>
        </div>

        <select
          id="pilihAyat"
          onChange={handleAyatChange}
          ref={AyatReff}
          className="bg-gray-50 border border-teal-500 my-2 text-teal-500 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option disabled>Pilih Ayat</option>
          {Object.keys(surat).length > 0 &&
            surat.ayat.map((ayat) => {
              return (
                <option key={ayat.nomorAyat} value={ayat.nomorAyat}>
                  {ayat.nomorAyat}
                </option>
              );
            })}
        </select>

        <Header
          judul="بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ"
          clasname="text-teal-500"
          bg="bg-slate-50"
        />
        {Object.keys(surat).length > 0 &&
          surat.ayat.map((ayat) => {
            return (
              <CardSuratDetail
                key={ayat.nomorAyat}
                id={ayat.nomorAyat}
                nomorAyat={ayat.nomorAyat}
                teksArab={ayat.teksArab}
                teksLatin={ayat.teksLatin}
                teksIndonesia={ayat.teksIndonesia}
                audio={ayat.audio}
              />
            );
          })}
      </div>
    </Fragment>
  );
};

export default SuratPage;
