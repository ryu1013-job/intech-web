import { Highlighter } from "@/components/ui/highlighter"
import { Text } from "@/components/ui/text"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

type Blog = {
  title: string
  url: string
  iconUrl: string
}

const BLOGS: Blog[] = [
  {
    title: "Discord/サークルの運営について",
    url: "https://sizu.me/official/posts/5dx98za2osrx",
    iconUrl: "/member-icons/ryu.png",
  },
  {
    title: "Discordチャンネルの棲み分け方法",
    url: "https://sizu.me/official/posts/5dx98za2osrx",
    iconUrl: "/member-icons/ryu.png",
  },
  {
    title: "InTechに入ってみた",
    url: "https://sizu.me/official/posts/5dx98za2osrx",
    iconUrl: "/member-icons/ryu.png",
  },
  {
    title: "InTechというサークルに入った感想",
    url: "https://sizu.me/official/posts/5dx98za2osrx",
    iconUrl: "/member-icons/ryu.png",
  },
  {
    title: "サークルのサイトを作ってみた",
    url: "https://sizu.me/official/posts/5dx98za2osrx",
    iconUrl: "/member-icons/ryu.png",
  }
]
export const Blog = () => {
  return (
    <>
      <Text>ブログ</Text>
      <ul className="text-fg/70 text-sm leading-[2.35em] list-disc list-inside">
        {BLOGS.map((blog, index) => (
          <li key={index} className="group font-semibold w-fit">
            <a href={blog.url} target="_blank">
              <Image
                src={blog.iconUrl}
                width={24}
                height={24}
                alt=""
                className="rounded-md inline-block mr-2"
              />
              <span className="group-hover:text-fg transition-colors duration-200 mr-1">
                {blog.title}
              </span>
              <ArrowUpRight className="inline-block size-4 mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}