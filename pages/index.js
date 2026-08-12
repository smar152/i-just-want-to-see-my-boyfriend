import Head from "next/head";
import comics from "../data/comics";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { getMetaTags } from "../util";

export default function Home({ data, redirectUrl }) {
  const { push } = useRouter();
  const imageUrl = data?.images?.[0]?.url;
  useEffect(() => {
    push(redirectUrl);
  }, []);
  return (
    <Head>
      <title></title>
      <link rel="icon" href="/favicon.ico" />
      {getMetaTags({
        title: "I Just Want To See My Boyfriend",
        description: "A webcomic by Smar",
        imageUrl,
      })}
    </Head>
  );
}

export function getStaticProps() {
  const lastComicPageNumber = comics.length;
  const redirectUrl = `/page/${lastComicPageNumber}`;

  return {
    props: {
      redirectUrl,
      data: comics?.[lastComicPageNumber - 1],
    },
  };
}
