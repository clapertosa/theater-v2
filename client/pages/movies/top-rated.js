import React from "react";
import Head from "next/head";
import MediaList from "../../containers/MediaList";
import { TOP_RATED_QUERY } from "../../apollo/queries";

const Popular = ({ initialData }) => {
  return (
    <>
      <Head>
        <title>🎬 Theater - Top rated Movies</title>
      </Head>
      <MediaList
        initialData={initialData}
        query={TOP_RATED_QUERY}
        mediaType="movie"
      />
    </>
  );
};

Popular.getInitialProps = async ({ apolloClient }) => {
  const res = await apolloClient.query({
    query: TOP_RATED_QUERY,
    variables: { media_type: "movie" }
  });
  return { initialData: res.data.topRated };
};

export default Popular;
