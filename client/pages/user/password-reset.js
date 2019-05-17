import React from "react";
import Head from "next/head";
import checkLoggedIn from "../../lib/checkLoggedIn";
import redirect from "../../lib/redirect";
import Form from "../../components/Form/PasswordReset/Form";

const PasswordReset = ({ token }) => {
  return (
    <>
      <Head>
        <title>🎬 Theater - Password reset</title>
      </Head>
      <Form token={token} />
    </>
  );
};

PasswordReset.getInitialProps = async ctx => {
  if (!ctx.query.token) {
    redirect(ctx, "/");
  }
  const { currentUser } = await checkLoggedIn(ctx.apolloClient);
  if (currentUser) {
    redirect(ctx, "/");
  }
  return { token: ctx.query.token };
};

export default PasswordReset;
