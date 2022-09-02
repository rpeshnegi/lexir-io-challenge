import Layout from "@components/Layouts/Layout";
import { axiosInstance } from "@config/axiosInstance";
import { InferGetServerSidePropsType } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";

const Home = dynamic(() => import('@components/Home'))

export default function Index({ bottles }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Layout>
      <Head>
        <title>Lexir Frontend Assessment!</title>
        <meta name="description" content="Lexir Frontend Assessment!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home bottles={bottles} />
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const res = await axiosInstance.get('api/products');
  const data = res.data;
  return {
    props: { bottles: data }, // will be passed to the page component as props
  };
}
