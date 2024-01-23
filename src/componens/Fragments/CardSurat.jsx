import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const CardDetailSurat = (props) => {
  const { nomorAyat, teksArab, teksLatin, teksIndonesia, keys, audio, id } =
    props;
  // const [suara, setSuara] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioFinished, setAudioFinished] = useState(false);
  const [textColor, setTextColor] = useState("text-teal-500");
  let audioPlay = audio["05"];
  const audioRef = useRef(new Audio(audioPlay));
  const navigate = useNavigate();

  const toggleAudio = () => {
    const currentAudio = audioRef.current;

    if (isPlaying) {
      currentAudio.pause();
      setTextColor("text-teal-500");
    } else {
      if (currentAudio.currentTime === currentAudio.duration) {
        currentAudio.currentTime = 0;
      }
      currentAudio.play();
      setTextColor("text-teal-600");
    }

    setIsPlaying(!isPlaying);
  };

  const handleAudioEnd = () => {
    setAudioFinished(true);
    setTextColor("text-teal-500");
  };

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
        setAudioFinished(false);
        setCurrentText(teksArab);
        // Memberikan instruksi ke browser untuk tidak menyimpan state ketika kembali
        navigate("/", { replace: true });
      }
    };

    const currentAudio = audioRef.current;
    currentAudio.addEventListener("ended", handleAudioEnd);

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      currentAudio.removeEventListener("ended", handleAudioEnd);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isPlaying, navigate]);

  return (
    <div
      className={`bg-slate-50 container p-4 mx-auto my-2 border border-teal-600 text-teal-500`}
      key={keys}
      id={id}
    >
      <p>1.{nomorAyat}</p>
      <h4
        className={`text-xl font-bold text-right mt-5 cursor-pointer ${textColor}`}
        onClick={() => {
          toggleAudio();
        }}
      >
        {teksArab}
      </h4>
      <p className={`text-base ${textColor} font-semibold mt-5`}>{teksLatin}</p>
      <hr className="my-2 border-t-2 border-teal-500" />
      <p className="text-base">{teksIndonesia}</p>
    </div>
  );
};

export default CardDetailSurat;
