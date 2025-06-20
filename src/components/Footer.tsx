import React from 'react'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--color-primary)] text-white py-10">
      <div className="max-w-screen-lg mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">联系我们</h3>
            <p className="text-sm mb-2">地址: 多伦多, 加拿大</p>
            <p className="text-sm mb-2">电话: +1 123-456-7890</p>
            <p className="text-sm">邮箱: info@maplecelpip.com</p>
          </div>

          {/* QR Code Section */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">关注我们的微信</h3>
            <div className="bg-white p-4 rounded">
              <img
                src="https://via.placeholder.com/128" // Placeholder QR code
                alt="WeChat QR Code"
                className="w-32 h-32"
              />
            </div>
            <p className="text-sm mt-2">扫描二维码关注我们</p>
          </div>

          {/* Navigation Links */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold mb-4">快速链接</h3>
            <ul className="text-sm space-y-2">
              <li>
                <Link to="/" className="hover:underline">
                  主页
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">
                  关于我们
                </Link>
              </li>
              <li>
                <Link to="/why-choose-us" className="hover:underline">
                  为什么选择我们
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  联系我们
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center border-t border-white/20 pt-4">
          <p className="text-sm">
            © 2025 Maple CELPIP. 保留所有权利。
          </p>
          <p className="text-sm mt-1">
            技术支持: Maple CELPIP 技术团队
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer