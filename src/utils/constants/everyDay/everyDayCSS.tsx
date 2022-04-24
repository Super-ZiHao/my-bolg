import CodeTitle from '@/components/CodeTitle'
import Highlight from '@/components/Highlight'
import Title from './components/Title'
import { everyDayListType } from './index'

export const everyDayCSSList: everyDayListType[] = [
  {
    id: 1,
    title: <Title title="简单的说一下:root" date="2022 - 04 - 08" />,
    value: (
      <>
        <CodeTitle>:root 相当于 html，但是权级要比 html 高</CodeTitle>
        <Highlight>{`:root {
  color: red; /* :root 优先级更高，生效 */
}
html {
  color: pink; /* html 被 :root 覆盖 */
}`}</Highlight>
      </>
    )
  },
  {
    id: 2,
    title: <Title title="我们经常看到 a 的 margin-bottom 和 b 的 margin-top 的值重叠了。如何解决？" date="2022 - 04 - 11" />,
    value: (
      <>
        <CodeTitle>块级元素的上边距与下边距有时候会合并为单哥外边距，这种现象称为 margin 合并</CodeTitle>
        <Highlight>{`/* 解决方式 */
  /* 1、浮动 */
  /* 2、定位(absolute | fixed) */
  /* 3、修改 dom 结构 */
  例:
    <div class="top" style="margin-bottom: 20px;"></div>
    <div class="box">
      <div class="bottom" style="margin-top: 20px;"></div>
    </div>`}</Highlight>
      </>
    )
  },
  {
    id: 3,
    title: <Title title="父子关系的 box 会产生BFC 吗？" date="2022 - 04 - 12" />,
    value: ''
  },
  {
    id: 4,
    title: <Title title="从一个没有滚动条的页面切换到一个有滚动条的页面会发生抖动？" date="2022 - 04 - 13" />,
    value: (
      <>
        <CodeTitle>因为滚动条占有一部分宽度，从没有到出现就会造成此现象</CodeTitle>
        <Highlight>{`/*  解决方式  */
  /* 1、浏览器一直显示滚动条 —— 不美观 */
  body { overflow: scroll }
  /* 2、滚动条宽度不参与计算 —— 属性不兼容 火狐 IE */
  body { overflow: overlay }
  /* 3、滚动条宽度设为 0 —— 属性不兼容 火狐 IE */
  ::-webkit-scrollbar{ width: 0px }
  /* 4、计算出滚动条的宽度，并特殊处理 */
  body { margin-left: calc(100vw - 100%) } /* 或 */ body { padding-left: calc(100vw - 100%) }
`}</Highlight>
      </>
    )
  },
  {
    id: 5,
    title: <Title title="什么是重排？重绘？" date="2022 - 04 - 15" />,
    value: ''
  },
  {
    id: 6,
    title: <Title title="用 display: flex align-items: center 之后发现字体没有垂直居中?" date="2022 - 04 - 18" />,
    value: (
      <>
        <CodeTitle>这中情况在小程序和 h5 比较常见</CodeTitle>
        <Highlight>{`/* 针对字体设置一下 line-height: normal 就好了 */`}</Highlight>
      </>
    )
  },
  {
    id: 7,
    title: <Title title="回过头复习一下样式的复合写法？" date="2022 - 04 - 19" />,
    value: (
      <Highlight>
        {`margin 与 padding 一样
    4：上  右  下  左
    3：上  左/右  下
    2：上/下   左/右

border-radius
    4: 左上  右上  右下  左下
    3：左上  右上/左下  右下
    2：左上/右下  左下/右上

border: width style color

font: style weight size/line-height family

background: color image position/size repeat`}
      </Highlight>
    )
  },
  {
    id: 8,
    title: <Title title="关于打印时候可能会用到的一个样式" date="科普" />,
    value: (
      <Highlight>
        {`{
  color-adjust: economy; 默认值
    economy英文直译意思是“经济”，“节省”。
    表现为，浏览器（或其他客户端）对于元素进行样式上的调整，调整的规则由浏览器自己决定，以免达到更好的输出效果。
    例如，当打印时，浏览器会选择省略所有背景图像，并调整文本颜色，以确保对比度对于白纸上的阅读是最佳的。
  color-adjust: exact;
    exact则是“精确”，“准确”的意思。意思是告诉浏览器，
    我设置的这些颜色，背景啥的都是有必要的，精确匹配的，你不要自作聪明帮我做调整。
}`}
      </Highlight>
    )
  }
]
