import React from 'react'
import { Descriptions, Avatar } from 'antd'

type Props = {}

const AboutMe: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full h-full bg-white p-16">
      <Descriptions title={<Avatar size={128} />}>
        <Descriptions.Item label="姓名">黄子豪</Descriptions.Item>
        <Descriptions.Item label="年龄">21</Descriptions.Item>
        <Descriptions.Item label="性别">男</Descriptions.Item>
        <Descriptions.Item label="电话">13197992488</Descriptions.Item>
        <Descriptions.Item label="兴趣爱好">研究新鲜玩意</Descriptions.Item>
        <Descriptions.Item label="家庭住址">123</Descriptions.Item>
      </Descriptions>
    </div>
  )
}

export default AboutMe
