const React = require('react');
const ReactDOMServer = require('react-dom/server');
const sharp = require('sharp');
const {
  FaShoppingCart,    // 超市/商超
  FaCoffee,          // 奶茶/餐饮
  FaTruck,           // 物流/快递
  FaIndustry,        // 工业/工厂
  FaMedical,         // 医疗
  FaFileAlt,         // 办公/文档
  FaBox,             // 仓储/包装
  FaHome,            // 家用
  FaTag,             // 标签
  FaReceipt          // 票据
} = require('react-icons/fa');

async function createIconPng(IconComponent, color, size, filename) {
  const svgString = ReactDOMServer.renderToStaticMarkup(
    React.createElement(IconComponent, { color: color, size: size })
  );

  await sharp(Buffer.from(svgString))
    .resize(200, 200)
    .png()
    .toFile(filename);

  console.log(`Created: ${filename}`);
  return filename;
}

async function createAllIcons() {
  const iconSize = "256";
  const orange = "#E67E22";
  const white = "#FFFFFF";
  const darkBlue = "#2E4053";

  // 超市/商超场景
  await createIconPng(FaShoppingCart, orange, iconSize, 'workspace/icons/supermarket.png');
  await createIconPng(FaTag, darkBlue, iconSize, 'workspace/icons/price-tag.png');

  // 餐饮/奶茶场景
  await createIconPng(FaCoffee, orange, iconSize, 'workspace/icons/cafe.png');
  await createIconPng(FaReceipt, darkBlue, iconSize, 'workspace/icons/receipt.png');

  // 物流/快递场景
  await createIconPng(FaTruck, orange, iconSize, 'workspace/icons/logistics.png');
  await createIconPng(FaBox, darkBlue, iconSize, 'workspace/icons/package.png');

  // 工业场景
  await createIconPng(FaIndustry, orange, iconSize, 'workspace/icons/factory.png');

  // 医疗场景
  await createIconPng(FaMedical, darkBlue, iconSize, 'workspace/icons/medical.png');

  // 家用/办公场景
  await createIconPng(FaHome, orange, iconSize, 'workspace/icons/home.png');
  await createIconPng(FaFileAlt, darkBlue, iconSize, 'workspace/icons/document.png');

  console.log('All icons created successfully!');
}

createAllIcons().catch(console.error);
