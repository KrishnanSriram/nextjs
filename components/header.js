import React from "react";
import Head from "next/head";
// import Link

export const config = { amp: true }
const Header = () => {
  return (
      <Head>
        <title>A simple Dynamic NextJS</title>
        <link
          rel="stylesheet"
          href="https://blackrockdigital.github.io/startbootstrap-one-page-wonder/vendor/bootstrap/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="/static/one-page-wonder.min.css" />
        <link
          href="https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i"
          rel="stylesheet"
        />
      </Head>
  );
};

export default Header;
