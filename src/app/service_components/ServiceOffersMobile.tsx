import { Box } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

type Offer = {
  title: string;
  li_items: string[];
  img: string;
  urll: string;
};
const ServiceOffersMobile = ({ offers }: any) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box style={{ width: windowWidth }}>
      <Box>
        {offers.map((e: Offer, idx: number) => {
          return (
            <div key={e.title + 10} id={e.title} style={{ padding: "0 20px" }}>
              <section id={e.urll}>
                <Box
                  style={{
                    width: "100%",
                    fontFamily: "Jura",
                    fontWeight: "700",
                    fontSize: "16px",
                    lineHeight: "18.93px",
                    letterSpacing: "18%",
                    textAlign: idx % 2 == 0 ? "left" : "right",
                  }}
                >
                  {e.title}
                </Box>
                <Box>
                  <Box>
                    <ul style={{ padding: 0 }}>
                      {e.li_items.map((el: any) => {
                        return <li key={el}>{el} </li>;
                      })}
                    </ul>
                  </Box>
                  <Box
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: "60px",
                    }}
                  >
                    <Image src={e.img} width={300} height={200} alt={e.title} />
                  </Box>
                </Box>
              </section>
            </div>
          );
        })}
      </Box>
    </Box>
  );
};

export default ServiceOffersMobile;
