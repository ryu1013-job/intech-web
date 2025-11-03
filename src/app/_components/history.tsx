import { Text } from "@/components/ui/text"

const HISTORY = [
  {
    date: "2024/7",
    event: "InTech開設",
  },
  {
    date: "2024/7",
    event: "InTech開設",
  },
  {
    date: "2024/7",
    event: "InTech開設",
  },
  {
    date: "2024/7",
    event: "InTech開設",
  },
  {
    date: "2024/7",
    event: "InTech開設",
  },
]

export const History = () => {
  return (
    <>
      <Text>歴史</Text>
      <div className="flex">
        <div className="w-0.5 ml-2 rounded-full bg-fg/50"></div>
        <div>
          {HISTORY.map((item, index) => (
            <div
              key={index}
              className="before:content-[''] before:absolute before:left-0 before:w-1 before:h-0.5 before:rounded-r-full before:bg-fg/50 relative pl-3 flex gap-2 items-center"
            >
              <Text variant="secondary">
                {item.date}
              </Text>
              <Text className="text-sm">
                {item.event}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}