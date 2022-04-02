import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

// 打印 PDF
export const printPDF = () => {
  html2canvas(document.getElementsByTagName('body')[0]).then((canvas) => {
    // 通过 html2canvas 将 html 渲染成 canvas，然后获取图片数据
    var imgData = canvas.toDataURL('image/jpeg')
    // 设置pdf 格式
    var doc = new jsPDF('p', 'mm')
    // 设置 a4 纸尺寸
    doc.addImage(imgData, 'jpeg', 0, 0, 1600, 900)
    // 打印输出的文件名
    doc.save('content.pdf')
  })
}
