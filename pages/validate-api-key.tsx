import React from "react";
import { GetServerSideProps } from "next";

const ValidateAPIKeyPage = (props: ValidateAPIKeyPageProps) => {
  return <div>

  </div>;
};

interface ValidateAPIKeyPageProps {
  title?: string;
  statusCode?: number;
}

export const getServerSideProps: GetServerSideProps<ValidateAPIKeyPageProps> = async (context) => {
  const apiKeyHeader = context.req.headers['appizpanel-api-key']; 

  if (!apiKeyHeader || apiKeyHeader !== '') {
    return {
      props: {
        title:''
      },
    };
  }

  // Eğer API anahtarı doğrulandıysa, istediğiniz verileri alabilir ve props'a ekleyebilirsiniz
  const props: ValidateAPIKeyPageProps = {
    // Verileri burada set edin
  };

  return {
    props,
  };
};

export default ValidateAPIKeyPage;
