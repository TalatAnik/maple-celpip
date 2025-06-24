const qrCodeImg = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=WeChatMapleCELPIP'
const mapEmbedUrl =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.507934964215!2d-79.38393468450001!3d43.65322607912106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d6b6e6b6e7%3A0x7e7e7e7e7e7e7e7e!2z5Lit5Zu95YyX5Lqs5YyF5aSn5a2m!5e0!3m2!1szh-CN!2sca!4v1680000000000!5m2!1szh-CN!2sca'

const Contact: React.FC = () => (
  <main className="bg-white">
    <section className="w-full h-[320px] md:h-[400px] flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}images/slider2.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: 'rgba(149, 109, 81, 0.4)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
          zIndex: 1,
        }}
      />
      <h1
        className="relative z-10 text-white text-4xl md:text-5xl font-bold text-center"
        style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}
      >
        联系我们
      </h1>
    </section>

    <section className="max-w-screen-lg mx-auto px-4 sm:px-6 py-16 sm:py-24">
      {/* First Row */}
      <div className="flex flex-col md:flex-row gap-12 mb-20">
        {/* Contact Form */}
        <div className="flex-1 bg-gray-50 rounded-xl p-8 shadow">
          <h2 className="text-xl font-bold text-[var(--color-primary)] mb-6 underline decoration-2 underline-offset-4">发送信息</h2>
          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 mb-1">姓名</label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[var(--color-primary)]" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">邮箱</label>
              <input type="email" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[var(--color-primary)]" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">信息</label>
              <textarea className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[var(--color-primary)]" rows={4} />
            </div>
            <button
              type="submit"
              className="w-full bg-[var(--color-primary)] text-white font-semibold py-2 rounded hover:bg-opacity-90 transition"
            >
              发送
            </button>
          </form>
        </div>
        {/* Google Map */}
        <div className="flex-1 flex items-center justify-center">
          <div
            className="w-full h-72 rounded-xl overflow-hidden shadow"
            style={{
              border: '3px solid var(--color-primary)',
            }}
          >
            <iframe
              title="Maple CELPIP Location"
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* QR Code */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center">
            <img src={qrCodeImg} alt="WeChat QR Code" className="w-48 h-48 mb-4" />
            <span className="text-[var(--color-primary)] font-semibold text-lg mt-2">微信扫码关注我们</span>
            <span className="text-gray-500 text-sm mt-1">Find us on WeChat</span>
          </div>
        </div>
        {/* Address */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <div className="bg-gray-50 rounded-xl shadow p-8 w-full">
            <h2 className="text-xl font-bold text-[var(--color-primary)] mb-4 underline decoration-2 underline-offset-4">我们的地址</h2>
            <p className="text-gray-700 mb-2">Maple CELPIP 教育中心</p>
            <p className="text-gray-700 mb-2">123 Yonge Street, Toronto, ON, Canada</p>
            <p className="text-gray-700">邮箱: info@maplecelpip.com</p>
            <p className="text-gray-700">电话: +1 123-456-7890</p>
          </div>
        </div>
      </div>
    </section>
  </main>
)

export default Contact