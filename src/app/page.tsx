import { Header } from "./_components/header";
import { Work } from "./_components/work";
import { Top } from "./_components/top";
import { Member } from "./_components/member";
import { Blog } from "./_components/blog";
import { History } from "./_components/history";

export default function Home() {
  return (
    <div className="min-h-screen max-w-2xl mx-auto w-full bg-white bg-[linear-gradient(90deg,transparent_0%,transparent_50%,#fff_50%,#fff_100%),linear-gradient(180deg,#ccc_1px,transparent_1px)] bg-size-[6px_100%,100%_1.6em] leading-[1.7em] pb-20 mt-12 overflow-y-auto px-2">
      <Header />
      <Top />
      <br />
      <Work />
      <br />
      <Member />
      <br />
      <Blog />
      <br />
      <History />
    </div>
  )
}
