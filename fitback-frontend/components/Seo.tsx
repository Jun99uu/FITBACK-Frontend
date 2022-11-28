import Head from "next/head";

interface headProps {
  title: string;
}

export default function Seo(props: headProps) {
  const { title } = props;
  return (
    <Head>
      <link rel="shortcut icon" href="/logo.png" />
      <link rel="apple-touch-icon" href="/logo.png" />
      <link rel="icon" type="image/png" href="/logo.png" />
      <link rel="icon" type="image/png" href="/logo.png" />
      <title>{title} | FITBACK, 나에게 딱 맞는 IT 피드백!</title>
    </Head>
  );
}
