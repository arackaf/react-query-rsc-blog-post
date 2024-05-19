import Link from "next/link";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="flex gap-5 text-blue-800">
      <Link href="/rsc">RSC Version</Link>
      <Link href="/react-query">React Query Version</Link>
    </div>
  );
}
