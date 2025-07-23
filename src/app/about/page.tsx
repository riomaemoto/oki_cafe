"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";

export default function AboutPage() {
  const { t } = useLanguage();
  const [randomImages, setRandomImages] = useState<string[]>([]);

  // Generate contextually relevant images on component mount
  useEffect(() => {
    const images = [
      // Local Ingredients - tropical vegetables/local produce
      `https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=64&h=64&fit=crop&crop=center`,
      // Premium Coffee - coffee cup/latte art
      `https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=64&h=64&fit=crop&crop=center`,
      // Okinawan Nature - palm trees/tropical paradise
      `https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=64&h=64&fit=crop&crop=center`,
    ];
    setRandomImages(images);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12 pt-50">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {t("about.title")}
          </h1>
          <p className="text-xl text-amber-700 font-medium">
            {t("about.subtitle")}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="h-64 relative">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=256&fit=crop&crop=center"
              alt="Beautiful Okinawan Sea"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-6 right-6">
              <h2 className="text-white text-2xl font-bold mb-2">
                沖縄の美しい海
              </h2>
              <p className="text-white text-sm opacity-90">
                Beautiful Okinawan Sea
              </p>
            </div>
          </div>

          <div className="p-8">
            <p className="text-gray-700 text-lg leading-relaxed font-light">
              {t("about.story")}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="text-center bg-white rounded-lg p-6 shadow-md">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
              {randomImages[0] && (
                <img
                  src={randomImages[0]}
                  alt="Local Ingredients"
                  className="w-full h-full object-cover rounded-full"
                />
              )}
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">地元の食材</h3>
            <p className="text-gray-600 text-sm">Local Ingredients</p>
          </div>

          <div className="text-center bg-white rounded-lg p-6 shadow-md">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
              {randomImages[1] && (
                <img
                  src={randomImages[1]}
                  alt="Premium Coffee"
                  className="w-full h-full object-cover rounded-full"
                />
              )}
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">上質なコーヒー</h3>
            <p className="text-gray-600 text-sm">Premium Coffee</p>
          </div>

          <div className="text-center bg-white rounded-lg p-6 shadow-md">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
              {randomImages[2] && (
                <img
                  src={randomImages[2]}
                  alt="Okinawan Nature"
                  className="w-full h-full object-cover rounded-full"
                />
              )}
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">沖縄の自然</h3>
            <p className="text-gray-600 text-sm">Okinawan Nature</p>
          </div>
        </div>
      </div>
    </div>
  );
}
