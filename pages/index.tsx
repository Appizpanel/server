import Image from "next/image";
import { Inter } from "next/font/google";
import { GetServerSideProps, NextPage } from "next";

import Error from "next/error";

const inter = Inter({ subsets: ["latin"] });

export default function IndexPage(props: IndexProps) {}

interface IndexProps {
  title?: string;
  statusCode?: number;
}

export const getServerSideProps: GetServerSideProps<IndexProps> = async (
  context
) => {
  return {
    redirect: {
      destination: "/api", // API path'ine yönlendir
      permanent: false,
    },
  };
};
