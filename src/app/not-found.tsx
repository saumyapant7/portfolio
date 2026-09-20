import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="shell section">
        <p className="label">404</p>
        <h1 className="hero__title">Nothing here yet.</h1>
        <p className="hero__lead">
          Try the <Link href="/#work">work page</Link>.
        </p>
      </main>
      <Footer />
    </>
  );
}
