export interface CodeLabelProps {
  title: string
  type?: string
}
const CodeLabel: React.FC<CodeLabelProps> = ({ title, type = 'double', children }) => {
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

export default CodeLabel