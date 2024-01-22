import Image from "next/image";
import { Box, Typography } from "@mui/material";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Technika OZE test",
  description: "Technika OZE to usługi specjalizujące się w ...",
};
export default function HomeMeta({ children }: any) {
  return <div>{children}</div>;
}
