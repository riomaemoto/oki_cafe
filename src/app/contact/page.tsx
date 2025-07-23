"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-teal-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {t("contact.title")}
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">店舗情報</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-700 mb-2 flex items-center">
                  <span className="mr-2">📍</span>
                  {t("contact.address")}
                </h3>
                <p className="text-gray-600 ml-6">
                  {t("contact.address_text")}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700 mb-2 flex items-center">
                  <span className="mr-2">📞</span>
                  {t("contact.phone")}
                </h3>
                <p className="text-gray-600 ml-6">{t("contact.phone_text")}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700 mb-2 flex items-center">
                  <span className="mr-2">🕒</span>
                  {t("contact.hours")}
                </h3>
                <p className="text-gray-600 ml-6">{t("contact.hours_text")}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-64 bg-gradient-to-r from-teal-400 to-blue-500 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-2">地図</h3>
                <p className="text-sm opacity-90">Map Location</p>
                <div className="mt-4 w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl">🗺️</span>
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-semibold text-gray-800 mb-3">
                お問い合わせフォーム
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    お名前 / Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    メールアドレス / Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    メッセージ / Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-600 text-white py-2 px-4 rounded-md hover:bg-amber-700 transition-colors font-medium"
                >
                  送信 / Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
