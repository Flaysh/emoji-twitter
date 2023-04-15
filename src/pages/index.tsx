import { SignIn, SignInButton } from "@clerk/nextjs";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Emoji Twitter</title>
        <meta name="description" content="Emoji Twitter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen py-2">
       <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up"/>
       <SignInButton />
      </main>
    </>
  );
};

export default Home;
