
# Multi-Function Calculator App

A modern multi-function website built with Next.js 15 and TypeScript, featuring online calculation tools and multi-language support.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **State Management**: React Context API
- **Internationalization**: Custom multi-language system

## ✨ Main Features

### 🧮 Online Calculator
- **Basic Operations**: Addition, subtraction, multiplication, division
- **Percentage Calculation**: Calculate A as percentage of B
- **Change Rate Calculation**: Calculate A relative change to B
- **Real-time Calculation**: Click buttons to display results immediately
- **Error Handling**: Division by zero error prompts
- **Input Validation**: Only allows numbers and decimal points

### 🌐 Multi-language Support
- Support for Chinese and English interfaces
- Language toggle button in top right corner
- Language settings local storage
- Complete internationalization translation system

### 📱 Responsive Design
- Adapts to desktop, tablet, and mobile
- Modern UI design
- Smooth animations
- Elegant user experience

### 🗂️ Page Structure
- **Home** (`/`): Calculator functionality showcase
- **About Us** (`/about`): Team introduction and technical features
- **Services** (`/services`): Detailed functionality description
- **Contact** (`/contact`): Contact methods and feedback forms

## 🛠️ 项目结构

```
src/
├── app/                    # Next.js App Router 页面
│   ├── about/             # 关于我们页面
│   ├── services/          # 服务介绍页面
│   ├── contact/           # 联系我们页面
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页
│   ├── not-found.tsx      # 404 页面
│   └── globals.css        # 全局样式
├── components/            # React 组件
│   ├── Navbar.tsx         # 导航栏组件
│   └── Calculator.tsx     # 计算器组件
├── contexts/              # React Context
│   └── LanguageContext.tsx # 语言上下文
└── lib/                   # 工具库
    └── i18n.ts            # 国际化配置
```

## 🚀 快速开始

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 启动生产服务器
```bash
npm start
```

## 📋 功能详细说明

### 计算器功能

1. **基本运算**
   - 输入两个数值 A 和 B
   - 点击 +、-、*、/ 按钮进行运算
   - 结果立即显示

2. **百分比计算**
   - 计算 A 是 B 的百分之多少
   - 公式: `(A / B) * 100`
   - 结果自动添加 % 符号

3. **增减幅计算**
   - 计算 A 相对 B 的增减幅度
   - 公式: `((A - B) / B) * 100`
   - 正数显示"增加"，负数显示"减少"

4. **错误处理**
   - 除零错误提示
   - 输入验证（只允许数字）
   - 用户友好的错误信息

### 多语言系统

- **语言切换**: 点击右上角的中文/English 按钮
- **本地存储**: 语言选择会保存到浏览器
- **完整翻译**: 所有界面文本都支持中英文

### 响应式设计

- **桌面端**: 完整功能展示，侧边栏导航
- **平板端**: 适配中等屏幕尺寸
- **手机端**: 移动端优化，触摸友好

## 🎨 UI/UX 特色

- **现代化设计**: 使用 Tailwind CSS 构建的美观界面
- **流畅动画**: 按钮悬停、页面切换动画
- **直观交互**: 清晰的视觉反馈和操作提示
- **无障碍设计**: 良好的键盘导航和屏幕阅读器支持

## 🔧 技术实现

### 组件化架构
- 高度模块化的组件设计
- 可复用的 UI 组件
- 清晰的数据流和状态管理

### 性能优化
- Next.js 自动代码分割
- 静态页面生成 (SSG)
- 优化的包大小和加载速度

### 开发体验
- TypeScript 类型安全
- ESLint 代码规范
- 热重载开发环境

## 📱 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 📞 联系方式

- 项目链接: [https://github.com/your-username/calculator-app](https://github.com/your-username/calculator-app)
- 问题反馈: [Issues](https://github.com/your-username/calculator-app/issues)

---

**享受使用我们的多功能计算器！** 🎉

