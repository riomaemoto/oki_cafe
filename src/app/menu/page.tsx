"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const menuItems = [
  { id: "americano", price: 450, category: "coffee" },
  { id: "latte", price: 520, category: "coffee" },
  { id: "cappuccino", price: 500, category: "coffee" },
  { id: "okinawa_coffee", price: 580, category: "coffee" },
  { id: "matcha_latte", price: 550, category: "drinks" },
  { id: "tropical_smoothie", price: 680, category: "drinks" },
  { id: "sandwich", price: 890, category: "food" },
  { id: "pasta", price: 1280, category: "food" },
  { id: "cake", price: 650, category: "food" },
];

export default function MenuPage() {
  const { t } = useLanguage();

  const coffeeItems = menuItems.filter((item) => item.category === "coffee");
  const drinkItems = menuItems.filter((item) => item.category === "drinks");
  const foodItems = menuItems.filter((item) => item.category === "food");

  const MenuSection = ({
    title,
    items,
  }: {
    title: string;
    items: typeof menuItems;
  }) => (
    <div className="mb-12">
      <h3 className="text-2xl font-bold text-amber-700 mb-6 border-b-2 border-amber-200 pb-2">
        {title}
      </h3>
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item) => {
          const imageUrls = {
            americano:
              "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?q=80&w=500&auto=format&fit=crop",
            latte:
              "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=500&auto=format&fit=crop",
            cappuccino:
              "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=500&auto=format&fit=crop",
            okinawa_coffee:
              "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=500&auto=format&fit=crop",
            matcha_latte:
              "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=500&auto=format&fit=crop",
            tropical_smoothie:
              "https://images.unsplash.com/photo-1570197788417-0e82375c9371?q=80&w=500&auto=format&fit=crop",
            sandwich:
              "https://images.unsplash.com/photo-1553979459-d2229ba7433a?q=80&w=500&auto=format&fit=crop",
            pasta:
              "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=500&auto=format&fit=crop",
            cake: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=500&auto=format&fit=crop",
          };

          return (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src={imageUrls[item.id]}
                  alt={t(`menu.items.${item.id}.name`)}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/10 hover:bg-black/5 transition-colors duration-300"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-lg font-bold text-amber-600">
                    {t("common.price")}
                    {item.price}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-xl font-bold text-gray-800">
                    {t(`menu.items.${item.id}.name`)}
                  </h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {t(`menu.items.${item.id}.description`)}
                </p>
                <button className="w-full bg-amber-600 text-white py-2 px-4 rounded-full hover:bg-amber-700 transition-colors duration-300 hover:scale-105 transform font-medium">
                  {t("common.order_now")}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop"
            alt="Woman enjoying coffee in cafe"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/30 via-transparent to-orange-900/30"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl mb-6 animate-fade-in">
            {t("menu.title")}
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-amber-200 max-w-2xl mx-auto drop-shadow-lg font-light">
            {t("menu.subtitle")}
          </p>
        </div>

        {/* Floating decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-10 w-12 h-12 rounded-full overflow-hidden opacity-20 animate-float">
            <img
              src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=150&auto=format&fit=crop"
              alt="Coffee"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-1/3 right-10 w-10 h-10 rounded-full overflow-hidden opacity-20 animate-float-delayed">
            <img
              src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=150&auto=format&fit=crop"
              alt="Flower"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <div className="bg-gradient-to-b from-white to-amber-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <MenuSection title={t("menu.coffee")} items={coffeeItems} />
          <MenuSection title={t("menu.drinks")} items={drinkItems} />
          <MenuSection title={t("menu.food")} items={foodItems} />
        </div>
      </div>
    </div>
  );
}
