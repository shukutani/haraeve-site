import { Smartphone, MapPin, Clock, Users, PartyPopper, Coffee, Droplets, Utensils, Gamepad2, ExternalLink } from "lucide-react";

export function Guide() {
  return (
    <section className="bg-white px-4 py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl text-slate-800">
            初心者ガイド
          </h2>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full" />
          <p className="mt-6 text-base md:text-lg text-slate-600 px-4">
            初めての方も安心してご参加いただけます
          </p>
        </div>

        {/* 申し込み方法 */}
        <div className="mb-12 md:mb-16">
          <h3 className="mb-6 md:mb-8 text-2xl md:text-3xl text-center text-slate-800">
            申し込み方法
          </h3>
          <div className="rounded-3xl bg-gradient-to-br from-orange-50 to-amber-50 p-6 md:p-10 border border-orange-100 shadow-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 mb-6">
              <div className="rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 p-3 md:p-4 text-white shadow-md shrink-0">
                <Smartphone className="h-6 w-6 md:h-8 md:w-8" />
              </div>
              <div>
                <h4 className="text-xl md:text-2xl text-slate-800 mb-2">
                  「つなゲート」アプリで申し込み
                </h4>
                <p className="text-sm md:text-base text-slate-600 mb-4">
                  「はらだのイベント」イベントページからお申し込みください
                </p>
                <a
                  href="https://tunagate.com/circle/85672/member_invitations/KjpoaYpn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-sm md:text-base font-medium"
                >
                  つなゲートで申し込む
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="grid gap-4 md:gap-6 sm:grid-cols-2 mt-6">
              <div className="flex items-start gap-3 bg-white rounded-xl p-4 md:p-5 border border-orange-100">
                <Clock className="h-5 w-5 md:h-6 md:w-6 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-base md:text-lg text-slate-800 mb-1">開催時間</h5>
                  <p className="text-sm md:text-base text-slate-600">14:00〜17:00</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white rounded-xl p-4 md:p-5 border border-orange-100">
                <MapPin className="h-5 w-5 md:h-6 md:w-6 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-base md:text-lg text-slate-800 mb-1">開催場所</h5>
                  <p className="text-sm md:text-base text-slate-600">大阪市内のレンタルスペース</p>
                  <p className="text-xs md:text-sm text-slate-500 mt-1">
                    ※詳細な位置情報は申し込み後、参加者のみに公開されます
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 当日の流れ */}
        <div>
          <h3 className="mb-6 md:mb-8 text-2xl md:text-3xl text-center text-slate-800">
            当日の流れ
          </h3>

          <div className="space-y-4 md:space-y-6">
            {/* タイムライン */}
            <div className="relative">
              {/* タイムライン縦線 */}
              <div className="absolute left-5 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 to-amber-500" />

              <div className="space-y-6 md:space-y-8">
                {/* 13:55 受付 */}
                <div className="relative flex gap-4 md:gap-6">
                  <div className="relative z-10 flex h-10 w-10 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-amber-500 text-white shadow-md">
                    <Clock className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <div className="flex-1 rounded-2xl bg-white p-4 md:p-6 shadow-sm border border-orange-100">
                    <div className="mb-2 text-lg md:text-xl text-orange-600">13:55</div>
                    <h4 className="mb-2 text-xl md:text-2xl text-slate-800">集合・受付開始</h4>
                    <p className="text-sm md:text-base text-slate-600">
                      会場にお越しください。スタッフが受付を行います
                    </p>
                  </div>
                </div>

                {/* 14:00 ゲーム開始 */}
                <div className="relative flex gap-4 md:gap-6">
                  <div className="relative z-10 flex h-10 w-10 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-amber-500 text-white shadow-md">
                    <Users className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <div className="flex-1 rounded-2xl bg-white p-4 md:p-6 shadow-sm border border-orange-100">
                    <div className="mb-2 text-lg md:text-xl text-orange-600">14:00</div>
                    <h4 className="mb-2 text-xl md:text-2xl text-slate-800">ゲーム開始</h4>
                    <p className="text-sm md:text-base text-slate-600 mb-3">
                      各テーブルに5〜6人に分かれてゲームスタート
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0 mt-2" />
                        <p className="text-sm md:text-base text-slate-600">
                          各テーブルに運営側のメンバーが進行役として配置
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0 mt-2" />
                        <p className="text-sm md:text-base text-slate-600">
                          初心者でも楽しめるよう軽量級のゲームからスタート
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0 mt-2" />
                        <p className="text-sm md:text-base text-slate-600">
                          中量級のゲームも取り揃えています
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 15:30 席替え */}
                <div className="relative flex gap-4 md:gap-6">
                  <div className="relative z-10 flex h-10 w-10 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-amber-500 text-white shadow-md">
                    <PartyPopper className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <div className="flex-1 rounded-2xl bg-white p-4 md:p-6 shadow-sm border border-orange-100">
                    <div className="mb-2 text-lg md:text-xl text-orange-600">15:30</div>
                    <h4 className="mb-2 text-xl md:text-2xl text-slate-800">席替え</h4>
                    <p className="text-sm md:text-base text-slate-600">
                      新しいメンバーと交流できるようテーブルを移動します
                    </p>
                  </div>
                </div>

                {/* 17:00 終了 */}
                <div className="relative flex gap-4 md:gap-6">
                  <div className="relative z-10 flex h-10 w-10 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-amber-500 text-white shadow-md">
                    <Clock className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <div className="flex-1 rounded-2xl bg-white p-4 md:p-6 shadow-sm border border-orange-100">
                    <div className="mb-2 text-lg md:text-xl text-orange-600">17:00</div>
                    <h4 className="mb-2 text-xl md:text-2xl text-slate-800">ボードゲーム会終了</h4>
                  </div>
                </div>

                {/* 17:00~ 飲み会 */}
                <div className="relative flex gap-4 md:gap-6">
                  <div className="relative z-10 flex h-10 w-10 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-amber-500 text-white shadow-md">
                    <Coffee className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <div className="flex-1 rounded-2xl bg-white p-4 md:p-6 shadow-sm border border-orange-100">
                    <div className="mb-2 text-lg md:text-xl text-orange-600">17:00〜</div>
                    <h4 className="mb-2 text-xl md:text-2xl text-slate-800">飲み会（任意参加）</h4>
                    <p className="text-sm md:text-base text-slate-600">
                      希望者のみで近くのお店で交流を深めます
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 初心者へのメッセージ */}
          <div className="mt-8 md:mt-12 rounded-2xl bg-gradient-to-br from-lime-100 to-green-100 p-6 md:p-8 text-slate-800 shadow-lg border-2 border-lime-200">
            <h4 className="mb-3 text-xl md:text-2xl text-green-800">初めての方へ</h4>
            <p className="leading-relaxed text-sm md:text-base mb-4 text-slate-700">
              ボードゲームが初めての方でも大丈夫！最初にルール説明からさせてもらうので、初心者・おひとり様もお気軽にご参加ください★
            </p>
            <div className="flex items-start gap-2 text-sm md:text-base text-slate-700">
              <div className="h-1.5 w-1.5 rounded-full bg-green-600 shrink-0 mt-2" />
              <p>途中入出・退出も自由です♪</p>
            </div>
          </div>

          {/* 持ち込み・その他の注意事項 */}
          <div className="mt-8 md:mt-12 grid gap-4 md:gap-6 sm:grid-cols-3">
            <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 p-4 md:p-6 border border-blue-100 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="rounded-lg bg-blue-100 p-2 text-blue-600 shrink-0">
                  <Droplets className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <h4 className="text-base md:text-lg text-slate-800">飲み物</h4>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-2">
                アルコール（缶チューハイ）とソフトドリンクをある程度ご用意しています。
              </p>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                飲みたいものがある方は別途持ち込んでください！
              </p>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 p-4 md:p-6 border border-green-100 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="rounded-lg bg-green-100 p-2 text-green-600 shrink-0">
                  <Utensils className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <h4 className="text-base md:text-lg text-slate-800">食べ物</h4>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                食べ物が必要な方は各自でご持参の方よろしくお願いします！
              </p>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-violet-50 p-4 md:p-6 border border-purple-100 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="rounded-lg bg-purple-100 p-2 text-purple-600 shrink-0">
                  <Gamepad2 className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <h4 className="text-base md:text-lg text-slate-800">ゲームリクエスト</h4>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                毎回全部のゲームを持ち込みはしないので、リクエストがあれば事前にご連絡くださいm（__）m
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}