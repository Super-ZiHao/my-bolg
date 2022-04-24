import React from 'react'
import { Descriptions, Avatar } from 'antd'
import HeadIcon from './HeadIcon'

type Props = {}

const AboutMe: React.FC<Props> = ({ children }) => {
  return (
    <div className="about-me card w-full h-full bg-white p-16 animate__animated animate__zoomIn">
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
        <Descriptions.Item label="兴趣爱好">研究新鲜玩意</Descriptions.Item>
        <Descriptions.Item label="当前住址">深圳市 宝安区 洪浪北地铁站附近</Descriptions.Item>
      </Descriptions>
    </div>
  )
}

export default AboutMe
