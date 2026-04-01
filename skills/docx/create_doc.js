const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, AlignmentType,
        HeadingLevel, BorderStyle, WidthType, ShadingType, VerticalAlign, LevelFormat } = require('docx');
const fs = require('fs');

const tableBorder = { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' };
const cellBorders = { top: tableBorder, bottom: tableBorder, left: tableBorder, right: tableBorder };

const children = [];

// 标题
children.push(new Paragraph({
  heading: HeadingLevel.TITLE,
  children: [new TextRun('8寸热敏打印机产线试产阶段详细规划')]
}));

// 总体时间规划
children.push(new Paragraph({
  heading: HeadingLevel.HEADING_1,
  children: [new TextRun('总体时间规划')]
}));

children.push(new Paragraph({
  children: [new TextRun('时间周期：2个月（8周）')]
}));

children.push(new Paragraph({
  children: [new TextRun('试产目标：验证生产可行性，发现并解决问题，为量产奠定基础')]
}));

// 第1-2周
children.push(new Paragraph({
  heading: HeadingLevel.HEADING_1,
  children: [new TextRun('第1-2周：设备安装调试')]
}));

children.push(new Paragraph({
  heading: HeadingLevel.HEADING_2,
  children: [new TextRun('1. 厂房装修验收')]
}));

children.push(new Paragraph({
  heading: HeadingLevel.HEADING_3,
  children: [new TextRun('第1周：基础设施验收')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('电力系统：800KVA变压器调试')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('空调系统：恒温恒湿系统调试（22±2℃，55±10%RH）')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('压缩空气：0.6-0.8MPa供气系统')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('排水系统：工业废水处理设施')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('消防系统：烟感、喷淋、应急照明验收')]
}));

children.push(new Paragraph({
  heading: HeadingLevel.HEADING_3,
  children: [new TextRun('车间环境验证')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('防静电地板：接地电阻≤10Ω')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('照明度：组装区800lux，检验区1000lux')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('洁净度：ISO Class 8（十万级）')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('噪音控制：≤75dB')]
}));

children.push(new Paragraph({
  heading: HeadingLevel.HEADING_2,
  children: [new TextRun('2. 设备安装调试')]
}));

children.push(new Paragraph({
  heading: HeadingLevel.HEADING_3,
  children: [new TextRun('SMT生产线调试（第1-2周）')]
}));

children.push(new Paragraph({
  children: [new TextRun({ text: '调试流程：', bold: true })]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('第1天：设备就位')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('第2天：水电气连接')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('第3-4天：参数设置')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('第5-7天：试运行')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('第8-10天：产能验证')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('第11-14天：稳定性测试')]
}));

children.push(new Paragraph({
  children: [new TextRun({ text: '关键参数设定：', bold: true })]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('贴片精度：±0.05mm')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('炉温曲线：预热150-180℃→回流230-250℃→冷却')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('生产节拍：≤15秒/片')]
}));

children.push(new Paragraph({
  heading: HeadingLevel.HEADING_3,
  children: [new TextRun('组装线设备调试')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('输送线速度：3-5米/分钟（可调）')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('自动锁螺丝机：扭矩精度±3%')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('点胶机：胶量精度±0.01g')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('超声波焊接：焊接强度≥2.5N/mm²')]
}));

children.push(new Paragraph({
  heading: HeadingLevel.HEADING_3,
  children: [new TextRun('测试设备验证（第2周）')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('ICT测试程序开发')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('FCT测试架制作验证')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('老化测试程序编写')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('打印测试样品制作')]
}));

// 第3-4周
children.push(new Paragraph({
  heading: HeadingLevel.HEADING_1,
  children: [new TextRun('第3-4周：工艺验证与人员培训')]
}));

children.push(new Paragraph({
  heading: HeadingLevel.HEADING_2,
  children: [new TextRun('4. 工艺流程验证')]
}));

children.push(new Paragraph({
  heading: HeadingLevel.HEADING_3,
  children: [new TextRun('工艺文件验证')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('30份SOP（标准作业程序）')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('15份检验规范')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('10份设备操作规程')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('工艺流程图现场确认')]
}));

children.push(new Paragraph({
  heading: HeadingLevel.HEADING_3,
  children: [new TextRun('PFMEA更新')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('识别高风险工序（RPN≥100）')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('制定控制措施')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('更新控制计划')]
}));

children.push(new Paragraph({
  heading: HeadingLevel.HEADING_2,
  children: [new TextRun('5. 首件试制（第3周）')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('试制数量：50台')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('试制目的：验证工艺可行性')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('记录：首件检验报告')]
}));

children.push(new Paragraph({
  heading: HeadingLevel.HEADING_2,
  children: [new TextRun('6. 人员培训（第3-4周）')]
}));

children.push(new Paragraph({
  heading: HeadingLevel.HEADING_3,
  children: [new TextRun('管理层培训（第3周）')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('精益生产管理：3天')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('质量管理体系：2天')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('班组长管理技能：2天')]
}));

children.push(new Paragraph({
  heading: HeadingLevel.HEADING_3,
  children: [new TextRun('技术培训（第4周）')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('设备操作培训：每人8小时')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('工艺要求培训：每人4小时')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('质量标准培训：每人4小时')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('安全培训：每人2小时')]
}));

children.push(new Paragraph({
  heading: HeadingLevel.HEADING_3,
  children: [new TextRun('考核认证')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('理论考试：≥80分合格')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('实操考核：独立完成操作')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('上岗证发放')]
}));

// 第5-6周
children.push(new Paragraph({
  heading: HeadingLevel.HEADING_1,
  children: [new TextRun('第5-6周：小批量试产')]
}));

children.push(new Paragraph({
  heading: HeadingLevel.HEADING_2,
  children: [new TextRun('7. PPAP试产（第5周）')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('试产数量：500台')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('试产目的：验证生产能力和产品质量')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('试产周期：5天')]
}));

children.push(new Paragraph({
  children: [new TextRun({ text: '试产产能规划：', bold: true })]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('D1：50台 → D2：100台 → D3：150台 → D4：150台 → D5：50台（验证稳定性）')]
}));

children.push(new Paragraph({
  children: [new TextRun({ text: '质量目标：', bold: true })]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('一次合格率：≥85%')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('直通率：≥80%')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('不良率：≤15%')]
}));

children.push(new Paragraph({
  heading: HeadingLevel.HEADING_2,
  children: [new TextRun('8. 数据收集与分析（第6周）')]
}));

children.push(new Paragraph({
  heading: HeadingLevel.HEADING_3,
  children: [new TextRun('生产数据收集')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('产能数据：实际产能 vs 目标产能')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('效率数据：OEE设备综合效率')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('质量数据：不良率统计')]
}));

children.push(new Paragraph({
  heading: HeadingLevel.HEADING_3,
  children: [new TextRun('Pareto分析')]
}));

children.push(new Paragraph({
  children: [new TextRun({ text: 'TOP3不良项目：', bold: true })]
}));

children.push(new Paragraph({
  numbering: { reference: 'numbered-list', level: 0 },
  children: [new TextRun('打印头不良（35%）')]
}));

children.push(new Paragraph({
  numbering: { reference: 'numbered-list', level: 0 },
  children: [new TextRun('电路板焊接不良（25%）')]
}));

children.push(new Paragraph({
  numbering: { reference: 'numbered-list', level: 0 },
  children: [new TextRun('外壳装配不良（15%）')]
}));

children.push(new Paragraph({
  heading: HeadingLevel.HEADING_2,
  children: [new TextRun('9. 问题整改（第6周）')]
}));

children.push(new Paragraph({
  heading: HeadingLevel.HEADING_3,
  children: [new TextRun('工艺优化')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('贴片参数调整')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('炉温曲线优化')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('组装工装改进')]
}));

children.push(new Paragraph({
  heading: HeadingLevel.HEADING_3,
  children: [new TextRun('设备改进')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('夹具精度提升')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('测试程序优化')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('自动化程度提高')]
}));

children.push(new Paragraph({
  heading: HeadingLevel.HEADING_3,
  children: [new TextRun('质量改进')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('IQC检验标准升级')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('IPQC巡检频次增加')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('OQC抽检方案调整')]
}));

// 第7周
children.push(new Paragraph({
  heading: HeadingLevel.HEADING_1,
  children: [new TextRun('第7周：中批量试产')]
}));

children.push(new Paragraph({
  heading: HeadingLevel.HEADING_2,
  children: [new TextRun('10. 产能爬坡')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('试产数量：1500台')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('日产能目标：300台/天')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('工作时间：10小时/天')]
}));

children.push(new Paragraph({
  children: [new TextRun({ text: '产能爬坡曲线：', bold: true })]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('周一：200台（67%）')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('周二：250台（83%）')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('周三：300台（100%）')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('周四：300台（100%）')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('周五：300台（100%）')]
}));

children.push(new Paragraph({
  heading: HeadingLevel.HEADING_2,
  children: [new TextRun('11. 稳定性验证')]
}));

children.push(new Paragraph({
  children: [new TextRun({ text: '连续3天稳定生产：', bold: true })]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('每日产能：≥300台')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('每日合格率：≥90%')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('设备故障率：≤3%')]
}));

children.push(new Paragraph({
  children: [new TextRun({ text: '工时统计：', bold: true })]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('标准工时测定')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('生产线平衡率：≥85%')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('人员配置优化')]
}));

// 第8周
children.push(new Paragraph({
  heading: HeadingLevel.HEADING_1,
  children: [new TextRun('第8周：试产总结与优化')]
}));

children.push(new Paragraph({
  heading: HeadingLevel.HEADING_2,
  children: [new TextRun('12. 试产总结报告')]
}));

children.push(new Paragraph({
  heading: HeadingLevel.HEADING_3,
  children: [new TextRun('生产总结')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('累计试产量：2050台')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('平均日产能：260台')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('平均合格率：88%')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('产能达成率：87%')]
}));

children.push(new Paragraph({
  heading: HeadingLevel.HEADING_3,
  children: [new TextRun('质量总结')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('不良品率：12%')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('返工率：8%')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('废品率：4%')]
}));

children.push(new Paragraph({
  heading: HeadingLevel.HEADING_3,
  children: [new TextRun('成本分析')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('材料成本：根据实际核算')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('人工成本：根据实际核算')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('制造费用：根据实际核算')]
}));

children.push(new Paragraph({
  heading: HeadingLevel.HEADING_2,
  children: [new TextRun('13. 量产前优化')]
}));

children.push(new Paragraph({
  heading: HeadingLevel.HEADING_3,
  children: [new TextRun('工艺优化')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('优化瓶颈工序')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('减少作业浪费')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('提升自动化率')]
}));

children.push(new Paragraph({
  heading: HeadingLevel.HEADING_3,
  children: [new TextRun('质量提升')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('完善检验标准')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('优化测试程序')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('加强供应商管理')]
}));

children.push(new Paragraph({
  heading: HeadingLevel.HEADING_3,
  children: [new TextRun('人员优化')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('调整人员配置')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('加强多能工培训')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('优化绩效考核')]
}));

// 关键指标
children.push(new Paragraph({
  heading: HeadingLevel.HEADING_1,
  children: [new TextRun('试产阶段关键指标')]
}));

children.push(new Paragraph({
  heading: HeadingLevel.HEADING_2,
  children: [new TextRun('质量指标')]
}));

children.push(new Paragraph({
  children: [new TextRun('质量指标达成情况表')]
}));

// 质量指标表格
children.push(new Table({
  columnWidths: [3120, 2340, 2340, 1560],
  margins: { top: 100, bottom: 100, left: 180, right: 180 },
  rows: [
    new TableRow({
      tableHeader: true,
      children: [
        new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA }, shading: { fill: 'D5E8F0', type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '指标', bold: true })] })] }),
        new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, shading: { fill: 'D5E8F0', type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '目标值', bold: true })] })] }),
        new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, shading: { fill: 'D5E8F0', type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '实际值', bold: true })] })] }),
        new TableCell({ borders: cellBorders, width: { size: 1560, type: WidthType.DXA }, shading: { fill: 'D5E8F0', type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '达成率', bold: true })] })] })
      ]
    }),
    new TableRow({ children: [
      new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('一次合格率')] })] }),
      new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('≥85%')] })] }),
      new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('88%')] })] }),
      new TableCell({ borders: cellBorders, width: { size: 1560, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('✓')] })] })
    ]}),
    new TableRow({ children: [
      new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('直通率')] })] }),
      new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('≥80%')] })] }),
      new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('82%')] })] }),
      new TableCell({ borders: cellBorders, width: { size: 1560, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('✓')] })] })
    ]}),
    new TableRow({ children: [
      new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('不良率')] })] }),
      new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('≤15%')] })] }),
      new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('12%')] })] }),
      new TableCell({ borders: cellBorders, width: { size: 1560, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('✓')] })] })
    ]}),
    new TableRow({ children: [
      new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('客户退货率')] })] }),
      new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('≤1%')] })] }),
      new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('0.5%')] })] }),
      new TableCell({ borders: cellBorders, width: { size: 1560, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('✓')] })] })
    ]})
  ]
}));

children.push(new Paragraph({
  heading: HeadingLevel.HEADING_2,
  children: [new TextRun('效率指标')]
}));

children.push(new Table({
  columnWidths: [3120, 2340, 2340, 1560],
  margins: { top: 100, bottom: 100, left: 180, right: 180 },
  rows: [
    new TableRow({
      tableHeader: true,
      children: [
        new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA }, shading: { fill: 'D5E8F0', type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '指标', bold: true })] })] }),
        new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, shading: { fill: 'D5E8F0', type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '目标值', bold: true })] })] }),
        new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, shading: { fill: 'D5E8F0', type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '实际值', bold: true })] })] }),
        new TableCell({ borders: cellBorders, width: { size: 1560, type: WidthType.DXA }, shading: { fill: 'D5E8F0', type: ShadingType.CLEAR }, verticalAlign: VerticalAlign.CENTER, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '达成率', bold: true })] })] })
      ]
    }),
    new TableRow({ children: [
      new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('日产能')] })] }),
      new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('300台')] })] }),
      new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('260台')] })] }),
      new TableCell({ borders: cellBorders, width: { size: 1560, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('87%')] })] })
    ]}),
    new TableRow({ children: [
      new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('生产周期')] })] }),
      new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('≤5天')] })] }),
      new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('5天')] })] }),
      new TableCell({ borders: cellBorders, width: { size: 1560, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('✓')] })] })
    ]}),
    new TableRow({ children: [
      new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('OEE')] })] }),
      new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('≥70%')] })] }),
      new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('68%')] })] }),
      new TableCell({ borders: cellBorders, width: { size: 1560, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('✗')] })] })
    ]}),
    new TableRow({ children: [
      new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun('人员利用率')] })] }),
      new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('≥85%')] })] }),
      new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('90%')] })] }),
      new TableCell({ borders: cellBorders, width: { size: 1560, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun('✓')] })] })
    ]})
  ]
}));

// 成功标准
children.push(new Paragraph({
  heading: HeadingLevel.HEADING_1,
  children: [new TextRun('试产阶段成功标准')]
}));

children.push(new Paragraph({
  heading: HeadingLevel.HEADING_2,
  children: [new TextRun('必须达成（一票否决）')]
}));

children.push(new Paragraph({
  numbering: { reference: 'numbered-list-2', level: 0 },
  children: [new TextRun({ text: '质量合格：', bold: true }), new TextRun('产品符合技术规格书要求')]
}));

children.push(new Paragraph({
  numbering: { reference: 'numbered-list-2', level: 0 },
  children: [new TextRun({ text: '产能达标：', bold: true }), new TextRun('连续3天日产能≥250台（83%达成率）')]
}));

children.push(new Paragraph({
  numbering: { reference: 'numbered-list-2', level: 0 },
  children: [new TextRun({ text: '工艺稳定：', bold: true }), new TextRun('不良率呈下降趋势')]
}));

children.push(new Paragraph({
  numbering: { reference: 'numbered-list-2', level: 0 },
  children: [new TextRun({ text: '安全零事故：', bold: true }), new TextRun('无重大安全事故')]
}));

children.push(new Paragraph({
  heading: HeadingLevel.HEADING_2,
  children: [new TextRun('期望达成')]
}));

children.push(new Paragraph({
  numbering: { reference: 'numbered-list-3', level: 0 },
  children: [new TextRun({ text: '成本控制：', bold: true }), new TextRun('试产成本≤预算的110%')]
}));

children.push(new Paragraph({
  numbering: { reference: 'numbered-list-3', level: 0 },
  children: [new TextRun({ text: '人员到位：', bold: true }), new TextRun('人员到岗率≥90%')]
}));

children.push(new Paragraph({
  numbering: { reference: 'numbered-list-3', level: 0 },
  children: [new TextRun({ text: '产能达成：', bold: true }), new TextRun('周产能达成率≥85%')]
}));

children.push(new Paragraph({
  heading: HeadingLevel.HEADING_2,
  children: [new TextRun('挑战目标')]
}));

children.push(new Paragraph({
  numbering: { reference: 'numbered-list-4', level: 0 },
  children: [new TextRun({ text: '高质量：', bold: true }), new TextRun('一次合格率≥90%')]
}));

children.push(new Paragraph({
  numbering: { reference: 'numbered-list-4', level: 0 },
  children: [new TextRun({ text: '高效率：', bold: true }), new TextRun('OEE≥75%')]
}));

children.push(new Paragraph({
  numbering: { reference: 'numbered-list-4', level: 0 },
  children: [new TextRun({ text: '低成本：', bold: true }), new TextRun('制造成本≤目标成本的95%')]
}));

// 会议安排
children.push(new Paragraph({
  heading: HeadingLevel.HEADING_1,
  children: [new TextRun('试产阶段会议安排')]
}));

children.push(new Paragraph({
  heading: HeadingLevel.HEADING_2,
  children: [new TextRun('每日例会')]
}));

children.push(new Paragraph({
  children: [new TextRun({ text: '时间：', bold: true }), new TextRun('每天早上8:30')]
}));

children.push(new Paragraph({
  children: [new TextRun({ text: '时长：', bold: true }), new TextRun('15分钟')]
}));

children.push(new Paragraph({
  children: [new TextRun({ text: '参加人员：', bold: true }), new TextRun('班组长以上')]
}));

children.push(new Paragraph({
  children: [new TextRun({ text: '议程：', bold: true })]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('前一日产能达成情况')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('今日生产计划')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('需要协调的问题')]
}));

children.push(new Paragraph({
  heading: HeadingLevel.HEADING_2,
  children: [new TextRun('每周总结会')]
}));

children.push(new Paragraph({
  children: [new TextRun({ text: '时间：', bold: true }), new TextRun('每周五下午')]
}));

children.push(new Paragraph({
  children: [new TextRun({ text: '时长：', bold: true }), new TextRun('1小时')]
}));

children.push(new Paragraph({
  children: [new TextRun({ text: '参加人员：', bold: true }), new TextRun('全体管理人员')]
}));

children.push(new Paragraph({
  children: [new TextRun({ text: '议程：', bold: true })]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('本周产能、质量、成本分析')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('问题讨论和解决方案')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('下周工作计划')]
}));

children.push(new Paragraph({
  heading: HeadingLevel.HEADING_2,
  children: [new TextRun('阶段评审会')]
}));

children.push(new Paragraph({
  children: [new TextRun({ text: '时间：', bold: true }), new TextRun('第2、4、6、8周末')]
}));

children.push(new Paragraph({
  children: [new TextRun({ text: '时长：', bold: true }), new TextRun('2小时')]
}));

children.push(new Paragraph({
  children: [new TextRun({ text: '参加人员：', bold: true }), new TextRun('项目组全体+高层领导')]
}));

children.push(new Paragraph({
  children: [new TextRun({ text: '议程：', bold: true })]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('阶段目标达成情况')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('重大问题汇报')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('下阶段计划调整')]
}));

// 风险管控
children.push(new Paragraph({
  heading: HeadingLevel.HEADING_1,
  children: [new TextRun('风险管控')]
}));

children.push(new Paragraph({
  heading: HeadingLevel.HEADING_2,
  children: [new TextRun('主要风险点')]
}));

children.push(new Paragraph({
  numbering: { reference: 'numbered-list-5', level: 0 },
  children: [new TextRun({ text: '产能爬坡不达标', bold: true })]
}));

children.push(new Paragraph({
  children: [new TextRun({ text: '风险：', bold: true }), new TextRun('实际产能<目标的80%')]
}));

children.push(new Paragraph({
  children: [new TextRun({ text: '应对：', bold: true }), new TextRun('增加人员、延长工作时间、优化工艺')]
}));

children.push(new Paragraph({
  numbering: { reference: 'numbered-list-5', level: 0 },
  children: [new TextRun({ text: '质量问题频发', bold: true })]
}));

children.push(new Paragraph({
  children: [new TextRun({ text: '风险：', bold: true }), new TextRun('不良率>20%')]
}));

children.push(new Paragraph({
  children: [new TextRun({ text: '应对：', bold: true }), new TextRun('加强IQC、优化工艺、供应商整改')]
}));

children.push(new Paragraph({
  numbering: { reference: 'numbered-list-5', level: 0 },
  children: [new TextRun({ text: '供应链不稳定', bold: true })]
}));

children.push(new Paragraph({
  children: [new TextRun({ text: '风险：', bold: true }), new TextRun('物料缺货率>5%')]
}));

children.push(new Paragraph({
  children: [new TextRun({ text: '应对：', bold: true }), new TextRun('安全库存、多供应商策略')]
}));

children.push(new Paragraph({
  numbering: { reference: 'numbered-list-5', level: 0 },
  children: [new TextRun({ text: '人员流失', bold: true })]
}));

children.push(new Paragraph({
  children: [new TextRun({ text: '风险：', bold: true }), new TextRun('人员流失率>10%')]
}));

children.push(new Paragraph({
  children: [new TextRun({ text: '应对：', bold: true }), new TextRun('提高薪资、改善环境、加强培训')]
}));

children.push(new Paragraph({
  heading: HeadingLevel.HEADING_2,
  children: [new TextRun('应急预案')]
}));

children.push(new Paragraph({
  heading: HeadingLevel.HEADING_3,
  children: [new TextRun('产能应急')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('启用加班模式（3班倒）')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('临时增加人员')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('外协加工')]
}));

children.push(new Paragraph({
  heading: HeadingLevel.HEADING_3,
  children: [new TextRun('质量应急')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('成立质量改善小组')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('停线整改机制')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('客户沟通方案')]
}));

children.push(new Paragraph({
  heading: HeadingLevel.HEADING_3,
  children: [new TextRun('物料应急')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('紧急采购通道')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('替代物料认证')]
}));

children.push(new Paragraph({
  numbering: { reference: 'bullet-list', level: 0 },
  children: [new TextRun('供应商现场蹲点')]
}));

const doc = new Document({
  styles: {
    default: { document: { run: { font: 'Arial', size: 24 } } },
    paragraphStyles: [
      { id: 'Title', name: 'Title', basedOn: 'Normal',
        run: { size: 56, bold: true, color: '000000', font: 'Arial' },
        paragraph: { spacing: { before: 240, after: 120 }, alignment: AlignmentType.CENTER } },
      { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 32, bold: true, color: '000000', font: 'Arial' },
        paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 0 } },
      { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 28, bold: true, color: '000000', font: 'Arial' },
        paragraph: { spacing: { before: 180, after: 100 }, outlineLevel: 1 } },
      { id: 'Heading3', name: 'Heading 3', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 26, bold: true, color: '333333', font: 'Arial' },
        paragraph: { spacing: { before: 120, after: 80 }, outlineLevel: 2 } }
    ]
  },
  numbering: {
    config: [
      { reference: 'bullet-list',
        levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: 'numbered-list',
        levels: [{ level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: 'numbered-list-2',
        levels: [{ level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: 'numbered-list-3',
        levels: [{ level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: 'numbered-list-4',
        levels: [{ level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: 'numbered-list-5',
        levels: [{ level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] }
    ]
  },
  sections: [{
    properties: { page: { margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
    children: children
  }]
});

Packer.toBuffer(doc).then(buffer => fs.writeFileSync('C:\\Users\\Administrator\\8寸热敏打印机产线试产阶段规划.docx', buffer));
console.log('文档创建成功！');
