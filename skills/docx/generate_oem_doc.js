const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, AlignmentType,
        HeadingLevel, BorderStyle, WidthType, ShadingType, VerticalAlign, LevelFormat, PageBreak } = require('docx');
const fs = require('fs');

const tableBorder = { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' };
const cellBorders = { top: tableBorder, bottom: tableBorder, left: tableBorder, right: tableBorder };

const doc = new Document({
  styles: {
    default: { document: { run: { font: '宋体', size: 24 } } },
    paragraphStyles: [
      { id: 'Title', name: 'Title', basedOn: 'Normal',
        run: { size: 40, bold: true, color: '000000', font: '黑体' },
        paragraph: { spacing: { before: 240, after: 240 }, alignment: AlignmentType.CENTER } },
      { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 32, bold: true, color: '000000', font: '黑体' },
        paragraph: { spacing: { before: 240, after: 180 }, outlineLevel: 0 } },
      { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 28, bold: true, color: '000000', font: '黑体' },
        paragraph: { spacing: { before: 180, after: 120 }, outlineLevel: 1 } }
    ]
  },
  numbering: {
    config: [
      { reference: 'bullet-list',
        levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: 'numbered-list',
        levels: [{ level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] }
    ]
  },
  sections: [{
    properties: {
      page: { margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } }
    },
    children: [
      // Title
      new Paragraph({ heading: HeadingLevel.TITLE, children: [new TextRun('小篆便携式打印机OEM定制方案')] }),
      new Paragraph({ children: [new TextRun('')] }),

      // Section 1: OEM Process
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun('一、产品OEM流程')] }),
      new Paragraph({ children: [new TextRun('定制周期说明：')] }),
      new Paragraph({ numbering: { reference: 'numbered-list', level: 0 }, children: [new TextRun('对于带Wi-Fi机型，目前由于SRRC无线入网认证不能派生，认证需3~4个月，定制周期为4~5个月；')] }),
      new Paragraph({ numbering: { reference: 'numbered-list', level: 0 }, children: [new TextRun('对于不带Wi-Fi机型，定制周期为2个月。')] }),

      new Paragraph({ children: [new PageBreak()] }),

      // Section 2: R&D Costs
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun('二、OEM定制研发费用')] }),

      new Table({
        columnWidths: [800, 2800, 2000, 1200, 2400, 1000],
        margins: { top: 100, bottom: 100, left: 180, right: 180 },
        rows: [
          new TableRow({
            tableHeader: true,
            children: [
              new TableCell({ borders: cellBorders, width: { size: 800, type: WidthType.DXA }, shading: { fill: 'D5E8F0', type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '序号', bold: true })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2800, type: WidthType.DXA }, shading: { fill: 'D5E8F0', type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '费用项目', bold: true })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2000, type: WidthType.DXA }, shading: { fill: 'D5E8F0', type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '费用说明', bold: true })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 1200, type: WidthType.DXA }, shading: { fill: 'D5E8F0', type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '完成时间', bold: true })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2400, type: WidthType.DXA }, shading: { fill: 'D5E8F0', type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '备注', bold: true })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 1000, type: WidthType.DXA }, shading: { fill: 'D5E8F0', type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '金额(万元)', bold: true })] })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('1')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2800, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('打印机设备端定制费')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('含Logo、厂商名、型号等')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 1200, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('3周')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2400, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('X1100/X1200每款1.5万元（如需更改外观费用需另计）')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 1000, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('2.0')] })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('2')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2800, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('PC驱动软件定制费')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('Windows/Linux/麒麟/UOS/鸿蒙')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 1200, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('4周')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2400, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('驱动程序每款0.5万元')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 1000, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('0.5')] })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('3')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2800, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('App软件定制费')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('Android/iOS/鸿蒙')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 1200, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('4周')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2400, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('App每平台0.8万元')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 1000, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('0.8')] })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('4')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2800, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('微信小程序定制费')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('微信小程序')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 1200, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('4周')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2400, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('云服务器费用每年0.8万')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 1000, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('1.2')] })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2800, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: '未税费用小计', bold: true })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 1200, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2400, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 1000, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '4.5', bold: true })] })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2800, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('税费')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('研发服务费按6%计算')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 1200, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2400, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 1000, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('0.27')] })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 800, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2800, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: '含税费用合计', bold: true })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 1200, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2400, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 1000, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '4.77', bold: true })] })] })
            ]
          })
        ]
      }),

      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ children: [new TextRun({ text: '报价说明：', bold: true })] }),
      new Paragraph({ numbering: { reference: 'numbered-list', level: 0 }, children: [new TextRun('以上报价是基于不修改外观的前提下，如客户需要新的外观，新外观的开模费用及设计费用需另行评估。')] }),
      new Paragraph({ numbering: { reference: 'numbered-list', level: 0 }, children: [new TextRun('如客户提出深度定制需求，将针对具体需求再进行评估。')] }),

      new Paragraph({ children: [new PageBreak()] }),

      // Section 3: Certification
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun('三、认证时间及费用清单')] }),

      new Table({
        columnWidths: [1000, 2600, 1500, 1500, 1500, 1500, 2000],
        margins: { top: 100, bottom: 100, left: 180, right: 180 },
        rows: [
          new TableRow({
            tableHeader: true,
            children: [
              new TableCell({ borders: cellBorders, width: { size: 1000, type: WidthType.DXA }, shading: { fill: 'D5E8F0', type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '序号', bold: true })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2600, type: WidthType.DXA }, shading: { fill: 'D5E8F0', type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '认证项目', bold: true })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 1500, type: WidthType.DXA }, shading: { fill: 'D5E8F0', type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '是否强制', bold: true })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 1500, type: WidthType.DXA }, shading: { fill: 'D5E8F0', type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '能否派生', bold: true })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 1500, type: WidthType.DXA }, shading: { fill: 'D5E8F0', type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '认证费用', bold: true })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 1500, type: WidthType.DXA }, shading: { fill: 'D5E8F0', type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '认证时间', bold: true })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2000, type: WidthType.DXA }, shading: { fill: 'D5E8F0', type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '备注', bold: true })] })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 1000, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('1')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2600, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('CCC强制认证')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 1500, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('强制')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 1500, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('能')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 1500, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('4,000元')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 1500, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('2周')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('')] })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 1000, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('2')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2600, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('SRRC无线入网认证')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 1500, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('强制')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 1500, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('不能')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 1500, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('4,000元')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 1500, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('3~4个月')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('仅Wi-Fi机型需要')] })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 1000, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('3')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2600, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('能效认证')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 1500, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('强制')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 1500, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('不能')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 1500, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('3,000元')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 1500, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('2周')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('')] })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 1000, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('4')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2600, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('节能')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 1500, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('非强制')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 1500, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('-')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 1500, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('-')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 1500, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('-')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('')] })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 1000, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('5')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2600, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('RoHS')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 1500, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('非强制')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 1500, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('-')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 1500, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('-')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 1500, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('-')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('')] })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 1000, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('6')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2600, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('十环')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 1500, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('非强制')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 1500, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('-')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 1500, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('-')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 1500, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('-')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('')] })] })
            ]
          })
        ]
      }),

      new Paragraph({ children: [new PageBreak()] }),

      // Section 4: Customer Materials
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun('四、客户需提供的资料清单')] }),

      new Paragraph({ numbering: { reference: 'numbered-list', level: 0 }, children: [new TextRun('品牌中英文名称')] }),
      new Paragraph({ numbering: { reference: 'numbered-list', level: 0 }, children: [new TextRun('公司Logo文件')] }),
      new Paragraph({ numbering: { reference: 'numbered-list', level: 0 }, children: [new TextRun('产品名称及型号')] }),
      new Paragraph({ numbering: { reference: 'numbered-list', level: 0 }, children: [new TextRun('产品1284字符串')] }),
      new Paragraph({ numbering: { reference: 'numbered-list', level: 0 }, children: [new TextRun('网站、电话、邮件、地址等')] }),
      new Paragraph({ numbering: { reference: 'numbered-list', level: 0 }, children: [new TextRun('USB VID/PID（如有）')] }),
      new Paragraph({ numbering: { reference: 'numbered-list', level: 0 }, children: [new TextRun('外包装箱修改设计内容')] }),
      new Paragraph({ numbering: { reference: 'numbered-list', level: 0 }, children: [new TextRun('机器上的标签logo铭牌')] }),
      new Paragraph({ numbering: { reference: 'numbered-list', level: 0 }, children: [new TextRun('墨盒上的标签logo铭牌')] }),
      new Paragraph({ numbering: { reference: 'numbered-list', level: 0 }, children: [new TextRun('电池上的标签logo铭牌')] }),
      new Paragraph({ numbering: { reference: 'numbered-list', level: 0 }, children: [new TextRun('用户协议（驱动及App安装）')] }),
      new Paragraph({ numbering: { reference: 'numbered-list', level: 0 }, children: [new TextRun('售后保修卡内容等')] }),
      new Paragraph({ numbering: { reference: 'numbered-list', level: 0 }, children: [new TextRun('APP名称')] }),
      new Paragraph({ numbering: { reference: 'numbered-list', level: 0 }, children: [new TextRun('客户定制需求表')] }),

      new Paragraph({ children: [new PageBreak()] }),

      // Section 5: Profitability Analysis
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun('五、定价与收益分析')] }),

      // 5.1 前期投入
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun('5.1 前期投入')] }),
      new Table({
        columnWidths: [4000, 2000, 3000],
        margins: { top: 100, bottom: 100, left: 180, right: 180 },
        rows: [
          new TableRow({
            tableHeader: true,
            children: [
              new TableCell({ borders: cellBorders, width: { size: 4000, type: WidthType.DXA }, shading: { fill: 'D5E8F0', type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '项目', bold: true })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2000, type: WidthType.DXA }, shading: { fill: 'D5E8F0', type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '金额', bold: true })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA }, shading: { fill: 'D5E8F0', type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '说明', bold: true })] })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 4000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('OEM定制研发费用（含税）')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2000, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('4.77万元')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('含设备端、驱动、App、小程序')] })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 4000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('CCC强制认证')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2000, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('0.40万元')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('强制认证')] })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 4000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('SRRC无线入网认证')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2000, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('0.40万元')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('仅Wi-Fi机型需要')] })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 4000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('能效认证')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2000, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('0.30万元')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('强制认证')] })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 4000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: '合计', bold: true })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2000, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '5.87万元', bold: true })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '前期总投入', bold: true })] })] })
            ]
          })
        ]
      }),

      new Paragraph({ children: [new TextRun('')] }),

      // 5.2 定价分析
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun('5.2 定价分析')] }),
      new Table({
        columnWidths: [3000, 3000, 3000],
        margins: { top: 100, bottom: 100, left: 180, right: 180 },
        rows: [
          new TableRow({
            tableHeader: true,
            children: [
              new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA }, shading: { fill: 'D5E8F0', type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '项目', bold: true })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA }, shading: { fill: 'D5E8F0', type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '数值', bold: true })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA }, shading: { fill: 'D5E8F0', type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '说明', bold: true })] })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('产品成本')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('469元/台')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('含生产、物料等')] })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('目标毛利率')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('≥45%')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('市场定价参考')] })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: '建议售价', bold: true })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '853元/台', bold: true })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('毛利率45%')] })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('备选售价')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('799元/台')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('更具市场竞争力')] })] })
            ]
          })
        ]
      }),

      new Paragraph({ children: [new TextRun('')] }),

      // 5.3 年度收益分析（售价853元）
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun('5.3 年度收益分析（年销3000台，售价853元）')] }),
      new Table({
        columnWidths: [3500, 2500, 2500],
        margins: { top: 100, bottom: 100, left: 180, right: 180 },
        rows: [
          new TableRow({
            tableHeader: true,
            children: [
              new TableCell({ borders: cellBorders, width: { size: 3500, type: WidthType.DXA }, shading: { fill: 'D5E8F0', type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '项目', bold: true })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2500, type: WidthType.DXA }, shading: { fill: 'D5E8F0', type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '运营成本25%', bold: true })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2500, type: WidthType.DXA }, shading: { fill: 'D5E8F0', type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '运营成本30%', bold: true })] })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 3500, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('年营收')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2500, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('255.90万元')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2500, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('255.90万元')] })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 3500, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('产品成本')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2500, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('140.70万元')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2500, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('140.70万元')] })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 3500, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('运营成本')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2500, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('63.98万元')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2500, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('76.77万元')] })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 3500, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: '年度净利', bold: true })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2500, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '51.22万元', bold: true })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2500, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '38.43万元', bold: true })] })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 3500, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: '回本周期', bold: true })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2500, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '42天', bold: true })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2500, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '56天', bold: true })] })] })
            ]
          })
        ]
      }),

      new Paragraph({ children: [new TextRun('')] }),

      // 5.4 盈亏平衡分析
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun('5.4 盈亏平衡分析')] }),
      new Table({
        columnWidths: [3000, 2500, 2500, 2000],
        margins: { top: 100, bottom: 100, left: 180, right: 180 },
        rows: [
          new TableRow({
            tableHeader: true,
            children: [
              new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA }, shading: { fill: 'D5E8F0', type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '售价', bold: true })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2500, type: WidthType.DXA }, shading: { fill: 'D5E8F0', type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '运营成本占比', bold: true })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2500, type: WidthType.DXA }, shading: { fill: 'D5E8F0', type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '盈亏平衡销量', bold: true })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2000, type: WidthType.DXA }, shading: { fill: 'D5E8F0', type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '回本天数', bold: true })] })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '853元', bold: true })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2500, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('25%')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2500, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('344台')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2000, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('42天')] })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '853元', bold: true })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2500, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('30%')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2500, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('459台')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2000, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('56天')] })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 3000, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('799元')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2500, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('30%')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2500, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('650台')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 2000, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('79天')] })] })
            ]
          })
        ]
      }),

      new Paragraph({ children: [new TextRun('')] }),

      // 5.5 利润率分析
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun('5.5 利润率分析（售价853元）')] }),
      new Table({
        columnWidths: [4500, 4500],
        margins: { top: 100, bottom: 100, left: 180, right: 180 },
        rows: [
          new TableRow({
            tableHeader: true,
            children: [
              new TableCell({ borders: cellBorders, width: { size: 4500, type: WidthType.DXA }, shading: { fill: 'D5E8F0', type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '指标', bold: true })] })] }),
              new TableCell({ borders: cellBorders, width: { size: 4500, type: WidthType.DXA }, shading: { fill: 'D5E8F0', type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '数值', bold: true })] })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 4500, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('毛利率')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 4500, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('45%')] })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 4500, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('净利率（运营成本25%）')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 4500, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('20%')] })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: cellBorders, width: { size: 4500, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('净利率（运营成本30%）')] })] }),
              new TableCell({ borders: cellBorders, width: { size: 4500, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('15%')] })] })
            ]
          })
        ]
      }),

      new Paragraph({ children: [new PageBreak()] }),

      // Section 6: Company Info
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun('六、公司信息')] }),

      new Paragraph({ children: [new TextRun({ text: '公司名称：', bold: true }), new TextRun('广州市小篆科技有限公司')] }),
      new Paragraph({ children: [new TextRun({ text: '税号：', bold: true }), new TextRun('91440112MA59AUQD26')] }),
      new Paragraph({ children: [new TextRun({ text: '地址：', bold: true }), new TextRun('广州市番禺区东环街市桥东环路128号9号楼308室')] }),
      new Paragraph({ children: [new TextRun({ text: '电话：', bold: true }), new TextRun('020-66363996')] }),
      new Paragraph({ children: [new TextRun({ text: '开户银行：', bold: true }), new TextRun('中国民生银行股份有限公司广州珠江支行')] }),
      new Paragraph({ children: [new TextRun({ text: '银行账号：', bold: true }), new TextRun('696125365')] }),

      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ children: [new TextRun('')] }),
      new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun('广州市小篆科技有限公司')] }),
      new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun('2025年11月18日')] })
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync('C:\\Users\\Administrator\\Desktop\\小篆便携式打印机OEM定制方案.docx', buffer);
  console.log('Word document generated successfully!');
});
