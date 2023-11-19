import { Inter } from "next/font/google";
import { GetServerSideProps } from "next";


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
      destination: "/api", 
      permanent: false,
    },
  };
};
