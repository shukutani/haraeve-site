export function Footer() {
  return (
    <footer className="bg-white border-t border-orange-100 px-4 py-10 md:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 md:mb-8 text-center">
          <h3 className="mb-2 text-2xl md:text-3xl tracking-wider text-slate-800">ハライベ</h3>
          <p className="text-sm md:text-base text-slate-600">Board Game Circle</p>
        </div>

        <div className="border-t border-orange-100 pt-6 md:pt-8 text-center">
          <p className="text-xs md:text-sm text-slate-500">
            © 2025 ハライベ. All rights reserved.
          </p>
          <p className="mt-2 text-xs md:text-sm text-slate-600">
            皆様と楽しい時間を共有できることを楽しみにしています
          </p>
        </div>
      </div>
    </footer>
  );
}