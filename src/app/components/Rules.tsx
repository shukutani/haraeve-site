import { Shield, AlertTriangle, Heart, Sparkles } from "lucide-react";

export function Rules() {
  return (
    <section className="px-4 py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl text-slate-800">
            ルール・配慮事項
          </h2>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full" />
          <p className="mt-6 text-base md:text-lg text-slate-600 px-4">
            全ての参加者が安心して楽しめるよう、以下のルールを設けています
          </p>
        </div>

        {/* 安心してご参加ください */}
        <div className="mb-8 md:mb-12 rounded-3xl bg-gradient-to-br from-blue-100 to-cyan-100 p-6 md:p-8 text-slate-800 shadow-lg border-2 border-blue-200">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-6 w-6 md:h-8 md:w-8 shrink-0 text-blue-600" />
            <h3 className="text-xl md:text-2xl text-blue-800">安心してご参加ください</h3>
          </div>
          <p className="leading-relaxed text-sm md:text-base mb-4 text-slate-700">
            すべての参加者が安心して楽しめる環境づくりを最優先にしています。<br />
            性別、年齢、経験を問わず、誰もが歓迎される居心地の良い空間を提供します。
          </p>
          <div className="grid gap-3 sm:grid-cols-2 text-sm md:text-base text-slate-700">
            <div className="flex items-start gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0 mt-2" />
              <p>スタッフが常駐してサポート</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0 mt-2" />
              <p>プライバシーの保護を徹底</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0 mt-2" />
              <p>困ったことは気軽に相談</p>
            </div>
          </div>
        </div>

        {/* 禁止事項 */}
        <div className="mb-8 md:mb-12 rounded-3xl border-2 border-red-200 bg-red-50 p-6 md:p-8 shadow-lg">
          <div className="mb-4 md:mb-6 flex items-center gap-3">
            <div className="rounded-xl bg-red-100 p-2.5 md:p-3 text-red-600 shrink-0">
              <AlertTriangle className="h-6 w-6 md:h-8 md:w-8" />
            </div>
            <h3 className="text-xl md:text-2xl text-red-800">
              禁止事項
            </h3>
          </div>
          
          <p className="mb-4 md:mb-6 text-sm md:text-base text-red-800 leading-relaxed">
            参加者間の以下の行為は一切禁止しております。
          </p>

          <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
            <div className="flex items-start gap-3 bg-white rounded-xl p-3 md:p-4 border border-red-200">
              <div className="mt-1 text-red-600 text-lg md:text-xl shrink-0">⚠️</div>
              <p className="text-sm md:text-base text-slate-800">
                <strong className="text-red-700">ネットワークビジネス・宗教の勧誘</strong>
              </p>
            </div>
            <div className="flex items-start gap-3 bg-white rounded-xl p-3 md:p-4 border border-red-200">
              <div className="mt-1 text-red-600 text-lg md:text-xl shrink-0">⚠️</div>
              <p className="text-sm md:text-base text-slate-800">
                <strong className="text-red-700">セクハラ・ストーカー・暴力等の迷惑行為</strong>
              </p>
            </div>
            <div className="flex items-start gap-3 bg-white rounded-xl p-3 md:p-4 border border-red-200">
              <div className="mt-1 text-red-600 text-lg md:text-xl shrink-0">⚠️</div>
              <p className="text-sm md:text-base text-slate-800">
                <strong className="text-red-700">類似イベントの勧誘</strong>
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-white p-4 md:p-6 border border-red-200 mb-4 md:mb-6">
            <p className="text-sm md:text-base text-slate-700 leading-relaxed">
              苦情が多い方や迷惑行為を繰り返す方、悪意が感じられる同業者の方は、参加禁止にさせていただく場合がございますので、ご了承ください。
            </p>
          </div>

          <div className="rounded-xl bg-orange-100 p-4 md:p-6 border border-orange-300">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 text-orange-600 shrink-0">🎲</div>
              <div>
                <h4 className="text-base md:text-lg text-orange-800 mb-2">ゲームの取り扱いについて</h4>
                <p className="text-sm md:text-base text-orange-900 leading-relaxed">
                  会で使われるゲームはいずれもどなたかの<strong>私物</strong>になります。プレイの際には、丁寧に取り扱っていただきますようお願いいたします。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 大切にしていること */}
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 mb-8 md:mb-12">
          <div className="rounded-2xl border-2 border-orange-100 bg-white p-6 md:p-8 shadow-sm">
            <div className="mb-4 md:mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-orange-100 p-2.5 md:p-3 text-orange-600 shrink-0">
                <Heart className="h-6 w-6 md:h-7 md:w-7" />
              </div>
              <h3 className="text-lg md:text-xl text-slate-800">
                思いやりを大切に
              </h3>
            </div>
            <div className="space-y-2 md:space-y-3 text-sm md:text-base text-slate-700">
              <div className="flex items-start gap-2">
                <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                <p>初心者への丁寧な説明</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                <p>勝敗にこだわりすぎない</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                <p>全員が楽しめるよう配慮</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                <p>お互いを尊重する姿勢</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border-2 border-orange-100 bg-white p-6 md:p-8 shadow-sm">
            <div className="mb-4 md:mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-orange-100 p-2.5 md:p-3 text-orange-600 shrink-0">
                <Sparkles className="h-6 w-6 md:h-7 md:w-7" />
              </div>
              <h3 className="text-lg md:text-xl text-slate-800">
                快適に過ごすために
              </h3>
            </div>
            <div className="space-y-2 md:space-y-3 text-sm md:text-base text-slate-700">
              <div className="flex items-start gap-2">
                <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                <p>明るく気さくな雰囲気</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                <p>清潔な会場環境を維持</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                <p>時間厳守でスムーズな運営</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                <p>フィードバック歓迎</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-orange-50 p-6 md:p-8 text-center border border-orange-100">
          <p className="text-base md:text-lg text-slate-700 leading-relaxed">
            ご不明な点やご質問がございましたら、お気軽にお問い合わせください。
            <br className="hidden sm:block" />
            皆様のご参加を心よりお待ちしております。
          </p>
        </div>
      </div>
    </section>
  );
}