type Props = {}
const CodeTitle: React.FC<Props> = ({ children }) => {
  return <div className="pt-4 pb-4 pl-8 color-white mb-8" style={{ backgroundColor: '#7c7c7c', borderLeft: '4px solid #b0b0b0', borderRight: '4px solid #b0b0b0', borderRadius: '8px' }}>{children}</div>
}

export default CodeTitle
