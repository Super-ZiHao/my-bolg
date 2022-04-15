// #ea9235
export interface CodeRemarksProps {}

const CodeRemarks: React.FC<CodeRemarksProps> = ({ children }) => {
  return (
    <span>
      {'//'} {children}
    </span>
  )
}

export default CodeRemarks
