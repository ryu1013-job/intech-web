import { Text } from "@/components/ui/text"
import Image from "next/image"

export const Work = () => {
  return (
    <>
      <Text>活動内容</Text>
      <Text variant="secondary">
        主に
        <Image src="/discord.svg" width={18} height={18} alt="" className="inline-block mx-0.5 mb-0.5" />
        Discordを用いて活動しています。
      </Text>
      <Text variant="secondary">活動内容についてわかりやすい一文</Text>
      <div className="flex">
        <div className="flex flex-col items-center">
          <Image
            src="/Intersect.png"
            width={230}
            height={110}
            alt="InTech"
            className="rotate-1 scale-85"
          />
          <Text variant="secondary">xxx</Text>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/Intersect-1.png"
            width={230}
            height={110}
            alt="InTech"
            className="-rotate-1 scale-85"
          />
          <Text variant="secondary">xxx</Text>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/Intersect-2.png"
            width={230}
            height={110}
            alt="InTech"
            className="rotate-2 scale-85"
          />
          <Text variant="secondary">xxx</Text>
        </div>
      </div>
    </>
  )
}