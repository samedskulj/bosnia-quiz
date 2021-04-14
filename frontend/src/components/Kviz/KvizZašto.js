import React from "react";
import "./KvizZašto.css";
const KvizZašto = () => {
  return (
    <>
      <main className="kvizzasto">
        <div className="kvizzasto_div">
          <h3>Zbog čega je znanje o državi bitno?</h3>
          <p>
            Moramo znati prošlost kako ne bismo ponovili ono što se dogodilo.
            Istorija je doslovno zbirka kolektivnih studija slučaja. Ako znamo
            šta se dogodilo u prošlosti, i odgovori koji dolaze sa onim što se
            događa ako neko napravi X, sada imamo znanje da potkrepimo odluke
            koje donosimo za naše pojedinačne zemlje. Ljudi uče na svojim
            greškama. Istorija je puna kolektivnih grešaka koje je čovječanstvo
            činilo. Čovječanstvo bi moglo naučiti iz toga. Izvan negativnog
            aspekta neponavljanja grešaka, poznavanje istorije vlastite zemlje
            daje vam bolji osjećaj ko ste.
          </p>
        </div>
        <div className="kvizzasto_div_slike">
          <div className="kvizzasto_slika1"></div>
          <div className="kvizzasto_slika2">s</div>
        </div>
      </main>
    </>
  );
};

export default KvizZašto;
