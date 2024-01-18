import { Box } from "@mui/material";
import Image from "next/image";
import "./contactintroduction.css";

type Team = {
  src: string;
  name: string;
  firstPar: string;
  secondPar: string;
  nip: string;
  regon: string;
  email: string;
  tel: string;
};
const team: Team[] = [
  {
    src: "/Piotr.png",
    name: "Piotr Pogorzelski",
    firstPar:
      "Jestem absolwentem studiów na kierunku mechanika i budowa maszyn oraz inżynieria środowiska, które ukończyłem na Politechnice Białostockiej.",
    secondPar:
      "Swoją przygodę z instalacjami sanitarnymi rozpocząłem w 2010 roku w jednej z białostockich firm działających w branży instalacyjnej, w której zdobyłem szerokie doświadczenie w wykonawstwie, projektowaniu instalacji sanitarnych m. in. Instalacji: klimatyzacji, wentylacji, ogrzewania. W swojej pracy zajmowałem się przeróżnymi projektami.",
    nip: "5422903359",
    regon: "385364130",
    email: "biuro@technikaoze.com.pl",
    tel: "600 160 090",
  },
  {
    src: "/Monika.png",
    name: "Monika Pogorzelska",
    firstPar:
      "Ten tekst wygenerowany przez AI jak coś żeby sprawdzić ak będzie wyglądać dłuższy tekst. Jestem absolwentką studiów na kierunku Inżynieria Środowiska i Energetyka, zdobywającą wykształcenie na renomowanej Politechnice Warszawskiej.",
    secondPar:
      "Posiadam szeroką wiedzę teoretyczną wspartą praktycznym doświadczeniem, co pozwala mi skutecznie koordynować projekty od etapu planowania po serwis poinstalacyjny. Działam z pasją, dążąc do osiągnięcia najwyższych standardów w branży instalacji sanitarnych, zawsze mając na uwadze zadowolenie klienta i zrównoważony rozwój projektowanych systemów.",
    nip: "5422903359",
    regon: "5422903359",
    email: "biuro@technikaoze.com.pl",
    tel: "123 456 789",
  },
];
const ContactIntroduction = () => {
  return (
    <Box className={"contact-intro-container"}>
      <Box className={"contact-title"}>KONTAKT</Box>
      <Box className={"contact-map-container"}>
        {team.map((e: Team, idx: number) => {
          return (
            <Box
              key={e.name}
              className={"contact-box-container"}
              style={{
                display: "flex",
                flexDirection: idx === 1 ? "row-reverse" : "row",
                textAlign: "left",
                marginTop: "40px",
              }}
            >
              <Box style={{ margin: idx === 1 ? "0 0 0 40px" : "0 40px 0 0" }}>
                <Image src={e.src} width={450} height={350} alt={e.name} />
              </Box>
              <Box style={{ textAlign: idx === 1 ? "left" : "right" }}>
                <Box className={"contact-map-name"}>{e.name}</Box>
                <br />
                <Box className={"contact-map-text"}>{e.firstPar}</Box>
                <br />
                <Box className={"contact-map-text"}>{e.secondPar}</Box>
                <br />
                <Box className={"contact-map-text"}>
                  {" "}
                  NIP:{e.nip} <br />
                  REGON:{e.regon} <br />
                  E-MAIL:{e.email} <br />
                  TELEFON:{e.tel}
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default ContactIntroduction;
