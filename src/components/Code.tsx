import { Style } from 'util'

interface LabelProps {
  title: string
  type?: string
}
const Label: React.FC<LabelProps> = ({ title, type = 'double', children }) => {
  if (type === 'double') {
    return (
      <>
        <span style={{ color: '#57e86a' }}>&lt;{title}&gt;</span>
        {children}
        <span style={{ color: '#57e86a' }}>&lt;/{title}&gt;</span>
      </>
    )
  }
  return (
    <span style={{ color: '#57e86a' }}>
      &lt;{type === 'header' ? '' : '/'}
      {children}&gt;
    </span>
  )
}

interface TextProps {}
const Text: React.FC<TextProps> = ({ children }) => {
  return (
    <div className="flex items-center pl-12 pt-4 pb-4" style={{ borderLeft: '2px solid #606871', backgroundColor: 'rgba(0, 0, 0, .1' }}>
      {children}
    </div>
  )
}

interface StyleSelectProps {
  selected: string
  data: any
}
const StyleSelect: React.FC<StyleSelectProps> = ({ selected, data }) => {
  const keys = Object.keys(data)
  return (
    <pre>{`${selected}{
}`}</pre>
  )
}

interface Props {
  className?: string
}
interface CodeAttribute {
  Label: React.FC<LabelProps>
  Text: React.FC<TextProps>
  StyleSelect: React.FC<StyleSelectProps>
}
const Code: React.FC<Props> & CodeAttribute = ({ className, children }) => {
  return (
    <div className={`p-16 ${className}`} style={{ backgroundColor: '#333333', borderRadius: '12px', color: '#9abfc6' }}>
      {children}
    </div>
  )
}

Code.Label = Label
Code.Text = Text
Code.StyleSelect = StyleSelect

export default Code
