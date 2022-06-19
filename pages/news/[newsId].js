import { useRouter } from "next/router";

function DetailsPage() {
  const router = useRouter();
  return <h1>{router.query.newsId}</h1>;
}

export default DetailsPage;
