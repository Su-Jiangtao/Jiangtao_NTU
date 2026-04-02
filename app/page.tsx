export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white p-8">
      <h1 className="text-6xl font-extrabold mb-4">Jiangtao's PI Website</h1>
      <p className="text-xl max-w-xl text-center">
        欢迎来到我的个人网站，这是顶级 PI 风格的基础模板！
      </p>
      <div className="mt-8 flex gap-4">
        <a href="#" className="px-6 py-3 bg-white text-purple-600 font-bold rounded-lg hover:scale-105 transition-transform">About Me</a>
        <a href="#" className="px-6 py-3 bg-white text-purple-600 font-bold rounded-lg hover:scale-105 transition-transform">Projects</a>
      </div>
    </main>
  );
}
