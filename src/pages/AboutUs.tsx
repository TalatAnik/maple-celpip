const heroImage = `${import.meta.env.BASE_URL}images/slider4.jpg` // Make sure this image exists

const AboutUs: React.FC = () => (
  <main className="bg-white">
    {/* Hero Section */}
    <section
      className="w-full h-[320px] md:h-[400px] flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
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
        关于我们
      </h1>
    </section>

    <section className="max-w-screen-lg mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] text-center mb-8 tracking-widest underline decoration-2 underline-offset-8">
        我们是谁
      </h2>
      <p className="text-center text-gray-700 mb-16 max-w-2xl mx-auto">
        Maple CELPIP 致力于为华人群体提供最专业、最贴心的 CELPIP 考试培训服务。我们拥有一支经验丰富的教师团队，结合科学的教学体系和丰富的备考资源，帮助每一位学员实现移民梦想。
      </p>
      <div className="flex flex-col md:flex-row gap-12 mb-16">
        <div className="flex-1 bg-gray-50 rounded-xl p-8 shadow text-center">
          <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-3 underline decoration-2 underline-offset-4">我们的使命</h3>
          <p className="text-gray-600">
            帮助每一位学员高效备考，顺利通过CELPIP考试，开启加拿大新生活。
          </p>
        </div>
        <div className="flex-1 bg-gray-50 rounded-xl p-8 shadow text-center">
          <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-3 underline decoration-2 underline-offset-4">我们的价值观</h3>
          <p className="text-gray-600">
            专业、诚信、关怀、创新。我们相信每个人都值得被尊重和支持。
          </p>
        </div>
      </div>
      <div className="bg-[var(--color-primary)] rounded-xl shadow p-10 text-white text-center max-w-2xl mx-auto mt-20">
        <h3 className="text-xl font-bold mb-4 underline decoration-2 underline-offset-4">为什么选择我们？</h3>
        <ul className="list-disc list-inside text-base text-white/90 space-y-2 text-left mx-auto max-w-md">
          <li>官方认证讲师团队，教学经验丰富</li>
          <li>小班授课，个性化辅导</li>
          <li>全真模拟，丰富备考资料</li>
          <li>贴心服务，答疑解惑无忧</li>
        </ul>
      </div>
    </section>
  </main>
)

export default AboutUs