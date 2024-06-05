import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="w-full text-white text-xl bg-neutral-900 h-[5rem] flex justify-center items-center gap-6 ">
        <Link href="/#">WOMENS</Link>
        <Link href="/#">MENS</Link>
        <Link href="/#">KIDS</Link>
        <Link href="/#">ACCESSORIES</Link>
        <Link href="/#">ON SALE</Link>
      </div>
    </main>
  );
}
