import React from "react";

import { Box } from "@mui/material";
import Image from "next/image";
import "./serviceoffers.css";
type Offer = {
  title: string;
  li_items: string[];
  img: string;
  urll: string;
};
const ServiceOffers = (offers: any) => {
  console.log(offers);
  const off = offers.offers;
  console.log(off);
  return (
    <Box style={{ marginTop: "80px" }}>
      <Box>
        {off.map((e: Offer, idx: number) => {
          return (
            <div
              key={idx * 10}
              className={"service-map-container"}
              id={e.title}
              //   ref={elementRef}
              //   ref={elementRefs[element.id]}
            >
              <section id={e.urll} style={{ width: "100%" }}>
                <Box style={{ paddingLeft: "40px" }}>{e.title}</Box>
                <Box
                  className={"service-li-img-container"}
                  style={{
                    display: "flex",
                    flexDirection: idx % 2 === 0 ? "row" : "row-reverse",
                    padding: "40px",
                  }}
                >
                  <Box style={{ width: "50%" }}>
                    <ul style={{ padding: 0, paddingRight: "40px" }}>
                      {e.li_items.map((el: any) => {
                        return <li key={el}>{el}</li>;
                      })}
                    </ul>
                  </Box>
                  <Box
                    style={{
                      width: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image src={e.img} width={400} height={300} alt={e.title} />
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

export default ServiceOffers;
