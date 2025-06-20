import React from 'react'

const Home: React.FC = () => {
  return (
    <main className="min-h-[60vh] bg-base-100 w-full">
      <section className="max-w-3xl mx-auto p-8 rounded-xl shadow-lg bg-white dark:bg-base-200 mt-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Welcome to Maple CELPIP</h1>
        <p className="text-lg text-neutral mb-6">
          Your trusted partner for CELPIP preparation and success.
        </p>
        <div className="flex gap-4">
          <button className="btn btn-primary">Get Started</button>
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </section>
    </main>
  )
}

export default Home