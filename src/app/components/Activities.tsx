import { Calendar, Gamepad2, UserCheck } from "lucide-react";

export function Activities() {
  const activities = [
    {
      icon: UserCheck,
      title: "ボードゲームイベント",
      description: "毎月1回、週末の午後（土・日 14:00〜17:00）に開催",
      details: [
        "各テーブルで運営スタッフが、ルール説明や進行をサポート",
        "会話や交流を楽しめる雰囲気を大切にしています。",
        "お酒を飲みながらボードゲームを楽しめます。",
      ],
    },
    {
      icon: Gamepad2,
      title: "豊富なゲームライブラリ",
      description: "幅広いジャンルのボードゲームを豊富に取り揃えています！",
      details: ["協力ゲーム", "戦略ゲーム", "パーティーゲーム"],
    },
  ];

  return (
    <section className="bg-white px-4 py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl text-slate-800">
            活動内容
          </h2>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full" />
          <p className="mt-6 text-base md:text-lg text-slate-600 px-4">
            ボードゲームを通して、気軽に楽しめる交流の場を提供しています。
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 sm:grid-cols-2">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow border border-orange-100"
            >
              <div className="mb-4 flex items-center gap-3 md:gap-4">
                <div className="rounded-xl bg-gradient-to-br from-orange-400 to-amber-500 p-2.5 md:p-3 text-white shrink-0 shadow-sm">
                  <activity.icon className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <h3 className="text-xl md:text-2xl text-slate-800">
                  {activity.title}
                </h3>
              </div>
              <p className="mb-4 text-sm md:text-base text-slate-600">
                {activity.description}
              </p>
              <ul className="space-y-2">
                {activity.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm md:text-base text-slate-600">
                    <div className="h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}