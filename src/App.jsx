import "./App.css";
import React from "react";
function App() {
  const [aramaMetni, setAramaMetni] = React.useState(
    localStorage.getItem("aranan") || ("React"));
  const yaziListesi = [
    {
      baslik: "React Öğreniyorum",
      url: "www.sdu.edu.tr",
      yazar: "Sinan Yüksel",
      yorum_sayisi: 3,
      puan: 4,
      id: 0
    },
    {
      baslik: "Web Teknolojileri ve Programlama",
      url: "wwww.google.com.tr",
      yazar: "Asım Yüksel",
      yorum_sayisi: 2,
      puan: 5,
      id: 1
    },
    {
      baslik: "Veri Madenciliği",
      url: "wwww.google.com.tr",
      yazar: "Ecir Küçüksille",
      yorum_sayisi: 4,
      puan: 5,
      id: 2
    },
    {
      baslik: "Veri İletişimi",
      url: "wwww.google.com.tr",
      yazar: "Mevlüt Ersoy",
      yorum_sayisi: 3,
      puan: 4,
      id: 3
    },
    {
      baslik: "İşletim Sistemi",
      url: "wwww.google.com.tr",
      yazar: "Mevlüt Ersoy",
      yorum_sayisi: 6,
      puan: 3,
      id: 4
    },
  ];
  const arananYazilar = yaziListesi.filter(function (yazi) {
    return yazi.baslik.toLowerCase().includes(aramaMetni.toLowerCase()) || yazi.yazar.toLowerCase().includes(aramaMetni.toLowerCase());
  });

  const handleSearch = (event) => {
    setAramaMetni(event.target.value);
  };
  React.useEffect(()=>{
    localStorage.setItem("aranan",aramaMetni);
  },[aramaMetni]);
  return (
    <div>
      <h1>Yazılar</h1>
      <Arama aramaMetni={aramaMetni} onSearch={handleSearch} />
      <hr />
      <Liste yazilar={arananYazilar} />
    </div>
  );
}
function Arama({aramaMetni,onSearch}) {
  return (
    <div>
      <label htmlFor="arama">Ara: </label>
      <input
        id="arama"
        type="text"
        onChange={onSearch}
        value={aramaMetni}
      />
    </div>
  );
}
function Liste({yazilar}) {
  return (
    <div>
      <ul>
        {yazilar.map(function (yazi) {
          return <Yazi key={yazi.id} {...yazi} />;
        })}{" "}
      </ul>
    </div>
  );
}
function Yazi({url,baslik,yazar,yorum_sayisi,puan}) {
  return (
    <li>
      <span>
        <a href={url}>{baslik}</a>,
      </span>
      <span>
        <b>Yazar:</b> {yazar},{" "}
      </span>
      <span>
        <b>Yorum Sayısı:</b> {yorum_sayisi},{" "}
      </span>
      <span>
        <b>Puan:</b> {puan}
      </span>
    </li>
  );
}
export default App;