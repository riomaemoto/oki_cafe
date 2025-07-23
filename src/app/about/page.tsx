'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {t('about.title')}
          </h1>
          <p className="text-xl text-amber-700 font-medium">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="h-64 bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 relative">
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <div className="absolute bottom-4 left-6 right-6">
              <h2 className="text-white text-2xl font-bold mb-2">沖縄の美しい海</h2>
              <p className="text-white text-sm opacity-90">Beautiful Okinawan Sea</p>
            </div>
          </div>
          
          <div className="p-8">
            <p className="text-gray-700 text-lg leading-relaxed font-light">
              {t('about.story')}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="text-center bg-white rounded-lg p-6 shadow-md">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌺</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">地元の食材</h3>
            <p className="text-gray-600 text-sm">Local Ingredients</p>
          </div>
          
          <div className="text-center bg-white rounded-lg p-6 shadow-md">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">☕</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">上質なコーヒー</h3>
            <p className="text-gray-600 text-sm">Premium Coffee</p>
          </div>
          
          <div className="text-center bg-white rounded-lg p-6 shadow-md">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏝️</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">沖縄の自然</h3>
            <p className="text-gray-600 text-sm">Okinawan Nature</p>
          </div>
        </div>
      </div>
    </div>
  )
}