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
const ServiceOffers = ({ offers }: Offer[]) => {
  return (
    <Box style={{ marginTop: "80px" }}>
      <Box>
        <section id="kij"></section>
        {offers.map((e: any, idx: number) => {
          return (
            <div
              key={idx * 10}
              className={"service-map-container"}
              id={e.title}
              //   ref={elementRef}
              //   ref={elementRefs[element.id]}
            >
              <section id={e.urll}>
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
                  <Box style={{ width: "50%" }}>
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
