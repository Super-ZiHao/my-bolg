interface Props {
  title: string
  date: string
}
const Title: React.FC<Props> = ({ title, date }) => {
  return (
    <div className="w-full flex justify-between color-white fw-500">
      <div>{title}</div>
      <div className="ml-32 no-wrap">{date}</div>
    </div>
  )
}

export default Title