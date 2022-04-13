import { Collapse } from "antd"

type Props = {

}
const Everyday: React.FC<Props> = () => {
  const { Panel } = Collapse
  return (
    <div className="w-full h-full">
      <Collapse className="everyday-main">
        {
          Array.from({length: 20}).map((item, index) => (
            <Panel className="everyday-item"  header="asd" key={index}>123</Panel>
          ))
        } 
      </Collapse>
    </div>
  )
}

export default Everyday