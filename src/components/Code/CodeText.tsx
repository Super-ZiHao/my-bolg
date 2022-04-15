export interface CodeTextProps {}

const CodeText: React.FC<CodeTextProps> = ({ children }) => {
  return (
    <div className="flex items-center pl-12 pt-4 pb-4" style={{ borderLeft: '2px solid #606871', backgroundColor: 'rgba(0, 0, 0, .1' }}>
      {children}
    </div>
  )
}

export default CodeText