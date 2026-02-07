import { Link } from "react-router";
import { Library } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-orange-100 px-4 py-10 md:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 md:mb-8 text-center">
          <h3 className="mb-2 text-2xl md:text-3xl tracking-wider text-slate-800">ハライベ</h3>
          <p className="text-sm md:text-base text-slate-600">Board Game Circle</p>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center mb-6 md:mb-8">
          <Link
            to="/games"
            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors text-sm md:text-base font-medium"
          >
            <Library className="h-5 w-5" />
            ボードゲーム一覧
          </Link>
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