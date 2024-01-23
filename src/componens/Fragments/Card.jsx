const CardSurat = (props) => {
  const { arab, surat, terjemah, tempatTurun, nomor } = props;
  return (
    <div className="w-full h-40  bg-teal-500 p-3 flex justify-between text-white hover:bg-teal-600 hover:cursor-pointer ">
      <p>
        {nomor}. {surat} <span className="font-bold"> ({tempatTurun})</span>
      </p>
      <div className="flex flex-col justify-end">
        <p className="text-2xl font-bold text-right">{arab}</p>
        <p>{terjemah}</p>
      </div>
    </div>
  );
};

export default CardSurat;
