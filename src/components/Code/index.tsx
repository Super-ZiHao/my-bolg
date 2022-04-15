import CodeLabel, { CodeLabelProps } from './CodeLabel'
import CodeText, { CodeTextProps } from './CodeText'
import CodeRemarks, { CodeRemarksProps } from './CodeRemarks'

interface Props {
  className?: string
}
interface CodeAttribute {
  Label: React.FC<CodeLabelProps>
  Text: React.FC<CodeTextProps>
  Remarks: React.FC<CodeRemarksProps>
}
const Code: React.FC<Props> & CodeAttribute = ({ className, children }) => {
  return (
    <div className={`p-16 ${className}`} style={{ backgroundColor: '#333333', borderRadius: '12px', color: '#9abfc6' }}>
      {children}
    </div>
  )
}

Code.Label = CodeLabel
Code.Text = CodeText
Code.Remarks = CodeRemarks

export default Code
