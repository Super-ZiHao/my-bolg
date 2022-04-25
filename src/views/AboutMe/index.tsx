import React from 'react'
import { Descriptions, Avatar } from 'antd'
import HeadIcon from './HeadIcon'

type Props = {}

const AboutMe: React.FC<Props> = ({ children }) => {
  return (
    <div className="about-me card w-full h-full bg-white p-16 animate__animated animate__zoomIn">
      <div className="" style={{ width: '800px', margin: '0 auto' }}>
        <Descriptions
          title={
            <div className="flex items-center justify-center">
              <Avatar size={128} icon={<HeadIcon />} alt="无法显示" />
            </div>
          }
        >
          <Descriptions.Item label="姓名">黄子豪</Descriptions.Item>
          <Descriptions.Item label="年龄">21</Descriptions.Item>
          <Descriptions.Item label="性别">男</Descriptions.Item>
          <Descriptions.Item label="电话">13197992488</Descriptions.Item>
          <Descriptions.Item label="兴趣爱好">我自己也不知道</Descriptions.Item>
          <Descriptions.Item label="现居住地">广东省 深圳市 宝安区</Descriptions.Item>
          <Descriptions.Item label="老家">江西省 萍乡市</Descriptions.Item>
        </Descriptions>
      </div>
    </div>
  )
}

export default AboutMe
