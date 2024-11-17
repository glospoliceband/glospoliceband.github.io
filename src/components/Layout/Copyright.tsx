import Link from "next/link";

export const Copyright = () => (
  <p>
    © {new Date().getFullYear()}{" "}
    <Link href="/" className="hover:underline">
      Gloucestershire Police Band
    </Link>
    .
  </p>
);
