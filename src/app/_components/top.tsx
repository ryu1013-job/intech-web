import { Highlighter } from "@/components/ui/highlighter"
import { Text } from "@/components/ui/text"

export const Top = () => {
  return (
    <>
      <Highlighter action="underline" color="#000" padding={0}>
        <h1>TECH.C. InTechサークル</h1>
      </Highlighter>
      <Text variant="secondary">
        かっこよくてイケてるInTechを表すキャッチコピーのような一文
      </Text>
    </>
  )
}