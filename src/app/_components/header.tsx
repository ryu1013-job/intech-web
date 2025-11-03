import { Highlighter } from "@/components/ui/highlighter"
import Image from "next/image"

export const Header = () => {
  return (
    <header className="fixed z-30 top-0 right-0 w-full py-2 bg-white/10 backdrop-blur-md">
      <div className="max-w-2xl w-full mx-auto flex justify-between">
        <Image
          src="/intech.webp"
          alt="Intech Logo"
          width={30}
          height={30}
          className="scale-80"
        />
        <Highlighter action="circle" color="#000" padding={4}>
          <a href="#" target="_blank">InTechに入る</a>
        </Highlighter>
      </div>
    </header>
  )

}