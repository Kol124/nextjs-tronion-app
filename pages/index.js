import Link from "next/link";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import { Heading } from "@/components/common";

export default function HomePage({ props }) {
  return (
    <Layout title="Tronion | Home">
      <Hero />
    </Layout>
  );
}

// export async function getStaticProps() {
//   const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=3`);
//   const events = await res.json();

//   return {
//     props: { events },
//     revalidate: 1,
//   };
// }
