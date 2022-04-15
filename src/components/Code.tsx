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
  return <div className="flex items-center pl-12" style={{ borderLeft: '2px solid #606871' }}>{children}</div>
}

interface Props {
  className?: string
}
interface CodeAttribute {
  Label: React.FC<LabelProps>
  Text: React.FC<TextProps>
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

export default Code
