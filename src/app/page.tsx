"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen h-[120vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2070&auto=format&fit=crop"
            alt="Beautiful Okinawa Beach Cafe"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/30 via-transparent to-orange-900/30"></div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-white animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 rounded-full bg-white animate-bounce"></div>
          <div className="absolute bottom-32 left-32 w-20 h-20 rounded-full bg-white animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 rounded-full bg-white animate-bounce"></div>
        </div>

        <div className="text-center z-10 px-4 max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-2xl mb-4 animate-fade-in">
              {t("hero.title")}
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-6 rounded-full"></div>
          </div>

          <p className="text-xl md:text-2xl text-amber-200 font-medium mb-6 animate-slide-up drop-shadow-lg">
            {t("hero.subtitle")}
          </p>

          <p className="text-lg text-white mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up-delayed drop-shadow-md">
            {t("hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-delayed">
            <Link
              href="/menu"
              className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {t("home.viewMenu")}
            </Link>
            <Link
              href="/about"
              className="border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-600 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              {t("nav.about")}
            </Link>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-12 w-16 h-16 rounded-full overflow-hidden opacity-30 animate-float">
            <img
              src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=200&auto=format&fit=crop"
              alt="Coffee"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-1/2 right-16 w-14 h-14 rounded-full overflow-hidden opacity-30 animate-float-delayed">
            <img
              src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=200&auto=format&fit=crop"
              alt="Flower"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-1/4 left-16 w-12 h-12 rounded-full overflow-hidden opacity-30 animate-float">
            <img
              src="https://images.unsplash.com/photo-1586444248902-2f64eddc13df?q=80&w=200&auto=format&fit=crop"
              alt="Pastry"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-3/4 right-12 w-14 h-14 rounded-full overflow-hidden opacity-30 animate-float-delayed">
            <img
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=200&auto=format&fit=crop"
              alt="Tropical"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t("home.whyUs")}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=200&auto=format&fit=crop"
                  alt="Ocean Nature"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {t("home.nature")}
              </h3>
              <p className="text-gray-600">{t("home.natureDesc")}</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=200&auto=format&fit=crop"
                  alt="Premium Coffee"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {t("home.coffee")}
              </h3>
              <p className="text-gray-600">{t("home.coffeeDesc")}</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=200&auto=format&fit=crop"
                  alt="Local Ingredients"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {t("home.ingredients")}
              </h3>
              <p className="text-gray-600">{t("home.ingredientsDesc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Menu Items */}
      <section className="py-20 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t("home.popularMenu")}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=987&auto=format&fit=crop"
                  alt="Okinawa Blend Coffee"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {t("menu.items.okinawa_coffee.name")}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t("menu.items.okinawa_coffee.description")}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-600">
                    ¥580
                  </span>
                  <button className="bg-amber-600 text-white px-4 py-2 rounded-full hover:bg-amber-700 transition-colors hover:scale-105 transform duration-200">
                    {t("home.order")}
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=1021&auto=format&fit=crop"
                  alt="Matcha Latte"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {t("menu.items.matcha_latte.name")}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t("menu.items.matcha_latte.description")}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-600">
                    ¥550
                  </span>
                  <button className="bg-amber-600 text-white px-4 py-2 rounded-full hover:bg-amber-700 transition-colors hover:scale-105 transform duration-200">
                    {t("home.order")}
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1553979459-d2229ba7433a?q=80&w=1068&auto=format&fit=crop"
                  alt="Club Sandwich"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {t("menu.items.sandwich.name")}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t("menu.items.sandwich.description")}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-600">
                    ¥890
                  </span>
                  <button className="bg-amber-600 text-white px-4 py-2 rounded-full hover:bg-amber-700 transition-colors hover:scale-105 transform duration-200">
                    {t("home.order")}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="inline-block bg-amber-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-amber-700 transition-colors duration-300 transform hover:scale-105"
            >
              {t("home.seeAllMenu")}
            </Link>
          </div>
        </div>
      </section>

      {/* Atmosphere Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t("home.atmosphere")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=500&auto=format&fit=crop"
                alt="Ocean View"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="text-center text-white">
                  <p className="font-medium text-lg drop-shadow-lg">
                    {t("home.oceanView")}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=500&auto=format&fit=crop"
                alt="Natural Space"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="text-center text-white">
                  <p className="font-medium text-lg drop-shadow-lg">
                    {t("home.naturalSpace")}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=500&auto=format&fit=crop"
                alt="Bright Interior"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="text-center text-white">
                  <p className="font-medium text-lg drop-shadow-lg">
                    {t("home.brightInterior")}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=500&auto=format&fit=crop"
                alt="Relaxing Music"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="text-center text-white">
                  <p className="font-medium text-lg drop-shadow-lg">
                    {t("home.relaxMusic")}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=500&auto=format&fit=crop"
                alt="Reading Corner"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="text-center text-white">
                  <p className="font-medium text-lg drop-shadow-lg">
                    {t("home.readingCorner")}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=500&auto=format&fit=crop"
                alt="Comfortable Seating"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="text-center text-white">
                  <p className="font-medium text-lg drop-shadow-lg">
                    {t("home.comfortableSeats")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t("home.customerReviews")}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="mb-4">
                <span className="text-yellow-400 text-2xl">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "沖縄の美しい景色を見ながら飲むコーヒーは格別です。スタッフの方も親切で、また来たいと思います。"
              </p>
              <div className="font-semibold text-gray-800">田中 美咲</div>
              <div className="text-gray-500 text-sm">東京都</div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="mb-4">
                <span className="text-yellow-400 text-2xl">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "地元の食材を使った料理が本当に美味しい！特にサンドイッチがおすすめです。"
              </p>
              <div className="font-semibold text-gray-800">佐藤 健</div>
              <div className="text-gray-500 text-sm">大阪府</div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="mb-4">
                <span className="text-yellow-400 text-2xl">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "雰囲気が最高で、仕事の合間にリラックスできる場所です。Wi-Fiも完備されていて助かります。"
              </p>
              <div className="font-semibold text-gray-800">山田 花子</div>
              <div className="text-gray-500 text-sm">沖縄県</div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Events */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t("home.events")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-lg overflow-hidden mr-4 flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=150&auto=format&fit=crop"
                    alt="Live Music"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {t("home.liveMusic")}
                  </h3>
                  <p className="text-amber-600 font-medium">
                    {t("home.liveMusicTime")}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {t("home.liveMusicDesc")}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-lg overflow-hidden mr-4 flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=150&auto=format&fit=crop"
                    alt="Coffee Class"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {t("home.coffeeClass")}
                  </h3>
                  <p className="text-amber-600 font-medium">
                    {t("home.coffeeClassTime")}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {t("home.coffeeClassDesc")}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-lg overflow-hidden mr-4 flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=150&auto=format&fit=crop"
                    alt="Art Exhibition"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {t("home.artExhibit")}
                  </h3>
                  <p className="text-amber-600 font-medium">
                    {t("home.artExhibitTime")}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {t("home.artExhibitDesc")}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-lg overflow-hidden mr-4 flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
                    alt="Book Club"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {t("home.bookClub")}
                  </h3>
                  <p className="text-amber-600 font-medium">
                    {t("home.bookClubTime")}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {t("home.bookClubDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">{t("home.visitNow")}</h2>
          <p className="text-xl mb-8 opacity-90">{t("home.visitDesc")}</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="bg-white text-amber-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105 inline-block"
            >
              {t("home.viewStore")}
            </Link>
            <Link
              href="/menu"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors duration-300 transform hover:scale-105 inline-block"
            >
              {t("home.viewMenu")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
