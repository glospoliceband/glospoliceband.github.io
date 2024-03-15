import Link from "next/link";

export const Copyright = () => (
  <p>
    © {new Date().getFullYear()}{" "}
    <Link href="/" className="hover:underline">
      The Band of the Gloucestershire Constabulary
    </Link>
    .
  </p>
);
