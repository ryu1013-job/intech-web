import { Text } from "@/components/ui/text"

export const Member = () => {
  return (
    <>
      <Text>メンバー</Text>
      <Text variant="secondary">メンバーについてわかりやすい一文</Text>
      <ul className="text-fg/70 text-sm leading-[2.35em] list-disc list-inside">
        <li>xxx専攻</li>
        <li>xxx専攻</li>
        <li>xxx専攻</li>
        <li>xxx専攻</li>
      </ul>
      <Text variant="secondary">など約50名が所属しています。</Text>
    </>
  )
}