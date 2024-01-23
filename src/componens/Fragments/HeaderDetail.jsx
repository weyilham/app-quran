import Button from "../Elements/Button/Button";
const HeaderDetail = (props) => {
  const { judul, namaLatin, tempatTurun, jumlahAyat, arti } = props;
  return (
    <div className="container bg-teal-500 p-5 mx-auto">
      <div className="header">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white text-center">
          {`${namaLatin} - ${judul}`}
        </h1>
        <p className="text-center text-white">
          {tempatTurun} . {arti} . {jumlahAyat} Ayat
        </p>
      </div>
      <div className="button mt-6">
        <Button type="button" classname="bg-white mr-2">
          Audio
        </Button>

        <Button type="button" classname="bg-white">
          Tafsir
        </Button>
      </div>
    </div>
  );
};

export default HeaderDetail;
