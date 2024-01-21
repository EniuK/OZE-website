import { Box } from "@mui/material";
import ServicesIcons from "../components/ServicesIcons";
import ServiceOffers from "../service_components/ServiceOffers";
const text = [
  {
    title: "PROJEKTOWANIE",
    li_items: [
      "Instalacje klimatyzacji",
      "Instalacje wentylacji mechanicznej",
      "Instalacje rekuperacji",
      "Instalacje ogrzewania",
      "Pompy ciepła,",
      "Kotły gazowe",
      "Instalacje gazu ziemnego i gazu zbiornikowego,",
      "Instalacje wod-kan",
      "Przyłącza wod-kan",
      "Sieci wod-kan",
      "Przydomowe oczyszczalnie ścieków",
      "Certyfikaty energetyczne i Świadectwa energetyczne",
      "Audyty",
    ],
    img: "/projektowanie.jpeg",
    urll: "projektowanie",
  },
  {
    title: "REALIZACJA",
    li_items: [
      "Instalacje ogrzewania",
      "Pompy ciepła powietrze-woda",
      "Pompy ciepła gruntowe (solanka-woda)",
      "Pompy ciepła powietrze-powietrze",
      "Kotłownie gazowe",
      "Instalacje wod-kan",
      "Instalacje klimatyzacji Split, Multi Split, VRV, VRF",
      "Instalacje gazu ziemnego i zbiornikowego",
      "Instalacje wentylacji mechanicznej i rekuperacji",
      "Przyłącza wod-kan",
      "Przydomowe oczyszczalnie ścieków",
    ],
    img: "/realizacja.jpg",
    urll: "realizacja",
  },
  {
    title: "NADZÓR",
    li_items: [
      "Regularne kontrole, audyty i inspekcje instalacji wodnych, aby upewnić się, że są one zgodne z wymaganiami i standardami bezpieczeństwa 1",
      "Zapewnienie, że instalacje są w dobrym stanie i działają prawidłowo ",
      "Identyfikacja problemów z instalacją wodną i umożliwienie szybkich i skutecznych napraw ",
      "Wymiana uszkodzonych lub przestarzałych części instalacji wodnej",
      "Optymalizacja instalacji wodnej, aby zapewnić jej wydajność i minimalizować koszty",
      "Doradztwo w zakresie instalacji wodnych, w tym w zakresie wyboru najlepszych rozwiązań dla danego domu ",
    ],
    img: "/nadzor.jpg",
    urll: "nadzor",
  },
  {
    title: "POMIARY",
    li_items: [
      "Pomiary ciśnienia wody, przepływu wody i jakości wody, które pomagają w identyfikacji problemów z instalacją wodną i umożliwiają szybkie i skuteczne naprawy",
      "Pomiary zużycia wody, które pozwalają na monitorowanie zużycia wody i identyfikowanie obszarów, w których można zaoszczędzić ",
      "Pomiary temperatury wody, które pozwalają na monitorowanie temperatury wody i identyfikowanie obszarów, w których można zaoszczędzić",
      "Pomiary twardości wody, które pozwalają na monitorowanie twardości wody i identyfikowanie obszarów, w których można zaoszczędzić ",
      "Pomiary pH wody, które pozwalają na monitorowanie pH wody i identyfikowanie obszarów, w których można zaoszczędzić ",
      "Pomiary ilości wody, które pozwalają na monitorowanie ilości wody i identyfikowanie obszarów, w których można zaoszczędzić ",
    ],
    img: "/pomiary.jpg",
    urll: "pomiary",
  },
  {
    title: "SERWIS",
    li_items: [
      "Naprawy, konserwacje i wymiany części instalacji wodnych ",
      "Usługi awaryjne, takie jak usuwanie awarii i naprawy w przypadku nagłych problemów z instalacją wodną ",
      "Wymiana filtrów i czyszczenie instalacji wodnych",
      "Usługi związane z instalacją i konserwacją systemów grzewczych ",
      "Usługi związane z instalacją i konserwacją systemów klimatyzacyjnych",
      "Usługi związane z instalacją i konserwacją systemów wentylacyjnych ",
    ],
    img: "/serwiss.jpg",
    urll: "serwis",
  },
];
const Services = () => {
  return (
    <Box>
      <Box style={{ width: "100%", textAlign: "center" }}>
        OFEROWANE PRZEZ NAS USŁUGI:
      </Box>
      <Box>
        <ServicesIcons />
      </Box>
      <ServiceOffers offers={text} />
    </Box>
  );
};

export default Services;
