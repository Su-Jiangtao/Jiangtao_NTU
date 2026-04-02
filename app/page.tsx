export default function Home() {
  return (
    <div className="space-y-16">

      {/* HERO */}
      <section>
        <h1 className="text-5xl font-bold">Xiaoqi Zhao</h1>
        <p className="mt-4 text-xl text-gray-600">
          Building General Visual Intelligence for AI4X
        </p>

        <p className="mt-4 text-gray-500">
          Assistant Professor @ NTU <br />
          Former Yale Postdoc | NRF Fellow
        </p>

        <div className="mt-6 space-x-4 text-sm">
          <a href="#" className="underline">Google Scholar</a>
          <a href="#" className="underline">CV</a>
          <a href="#" className="underline">Email</a>
        </div>
      </section>

      {/* RESEARCH */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Research</h2>

        <div className="space-y-6">

          <div>
            <h3 className="font-semibold">Unified Visual Intelligence</h3>
            <p className="text-gray-600">
              Developing unified models across perception, reasoning, and generation.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Self-Supervised Learning</h3>
            <p className="text-gray-600">
              Scaling representation learning without heavy annotation.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">AI4X</h3>
            <p className="text-gray-600">
              Bridging research and real-world deployment.
            </p>
          </div>

        </div>
      </section>

      {/* SELECTED PUBLICATIONS */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Selected Publications</h2>

        <div className="space-y-4">

          <div>
            <p className="font-medium">
              Paper Title Here
            </p>
            <p className="text-sm text-gray-500">
              Xiaoqi Zhao, ... | CVPR 2024
            </p>
            <div className="text-sm space-x-3">
              <a href="#" className="underline">Paper</a>
              <a href="#" className="underline">Code</a>
            </div>
          </div>

          <div>
            <p className="font-medium">
              Another Strong Paper
            </p>
            <p className="text-sm text-gray-500">
              NeurIPS 2023
            </p>
          </div>

        </div>
      </section>

      {/* IMPACT */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Impact</h2>

        <ul className="text-gray-600 space-y-2">
          <li>4000+ citations</li>
          <li>NRF Fellowship</li>
          <li>Startup (Series B)</li>
          <li>Real-world AI deployment</li>
        </ul>
      </section>

      {/* CONTACT */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-600">
          Email: your@email.com
        </p>
      </section>

    </div>
  );
}
