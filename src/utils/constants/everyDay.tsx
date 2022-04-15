import Code from '@/components/Code'
import { ReactNode } from 'react'

const { Label, Text } = Code

interface TitleProps {
  title: string
  date: string
}
const Title: React.FC<TitleProps> = ({ title, date }) => {
  return (
    <div className="w-full flex justify-between color-white fw-500">
      <div>{title}</div>
      <div className="ml-32 no-wrap">{date}</div>
    </div>
  )
}

type everyDayListType = {
  id: number
  title: string | ReactNode
  value: string | ReactNode
}
export const everyDayCSSList: everyDayListType[] = [
  {
    id: 1,
    title: <Title title="简单的说一下:root" date="2022 - 04 - 08" />,
    value: (
      <>
        <Code>
          <Text>相当于是 HTML，但是权级比html要高</Text>
          <div></div>
        </Code>
        <Code className="mt-8">
          <div>:root{}</div>
          <div>html{'{  }'}</div>
        </Code>
      </>
    )
  },
  {
    id: 2,
    title: (
      <Title title="我们经常看到 a 的 margin-bottom 和 b 的 margin-top 的值重叠了。什么原因造成的？如何解决？" date="2022 - 04 - 11" />
    ),
    value: <Code></Code>
  },
  {
    id: 3,
    title: <Title title="父子关系的 box 会产生BFC 吗？" date="2022 - 04 - 12" />,
    value: <Code></Code>
  },
  {
    id: 4,
    title: <Title title="从一个没有滚动条的页面切换到一个有滚动条的页面会发生抖动？" date="2022 - 04 - 13" />,
    value: <Code></Code>
  },
  {
    id: 5,
    title: <Title title="什么是重排？重绘？" date="2022 - 04 - 15" />,
    value: (
      <Code>
        <Label title="html">你好</Label>
      </Code>
    )
  }
]

export const everyDayJSList: everyDayListType[] = []
