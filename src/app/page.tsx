'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const menus = [
    { id: 1, name: '초바단', description: '바나나맛 우유와 초코우유의 달콤한 만남 🍌🍫', price: '5,000원' },
    { id: 2, name: '솔솔청청', description: '솔의 눈과 청포도 에이드의 상쾌한 조화 🌲🍇', price: '5,000원' },
    { id: 3, name: '초코 폭탄 아포가또', description: '진한 초코우유와 달콤한 빵빠레의 환상적인 만남 🍫🍦', price: '5,000원' },
    { id: 4, name: '죠리퐁 라떼', description: '고소한 시리얼 우유와 바삭한 조리퐁의 달콤한 만남 🥛🌾', price: '5,000원' },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText('카카오뱅크 3333116617661 주진휘 5000원');
    alert('계좌번호가 복사되었습니다!');
  };

  return (
    <div className="min-h-screen bg-[#F9F8F4] text-[#33312E] font-sans pb-12">
      {/* Header / Logo Area */}
      <header className="pt-10 pb-4 px-4 flex flex-col items-center justify-center mb-6">
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 mb-6">
          <Image src="/logo.jpg" alt="이상한음료가게 로고" fill className="object-contain" priority />
        </div>
        <div className="bg-white border border-[#E8E6DF] text-[#5C574F] px-5 py-2.5 rounded-full font-bold text-sm sm:text-base shadow-sm flex items-center gap-2">
          <span className="text-red-400">💖</span> 이상한음료가게 수익금은 전액 기부 됩니다 <span className="text-red-400">💖</span>
        </div>
      </header>

      {/* Menu Section */}
      <main className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {menus.map((menu) => (
            <div
              key={menu.id}
              onClick={() => setSelectedImage(`/menu${menu.id}.jpg`)}
              className="bg-white rounded-3xl p-3 sm:p-4 flex flex-row items-center shadow-sm border border-[#E8E6DF] hover:shadow-md transition-all active:scale-[0.98] cursor-pointer"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 bg-[#F0EFEB] rounded-2xl flex-shrink-0 flex items-center justify-center overflow-hidden relative">
                <Image src={`/menu${menu.id}.jpg`} alt={menu.name} fill className="object-cover" />
              </div>
              <div className="ml-4 flex flex-col justify-center flex-grow">
                <h2 className="text-xl sm:text-2xl font-bold text-[#33312E] mb-1">{menu.name}</h2>
                <p className="text-xs sm:text-sm text-[#7A7469] mb-2 line-clamp-2 leading-relaxed">{menu.description}</p>
                <div className="text-base sm:text-lg font-extrabold text-[#33312E]">{menu.price}</div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Payment Footer */}
      <footer className="mt-10 max-w-2xl mx-auto px-4">
        <div className="bg-[#3E3A34] text-[#F9F8F4] rounded-[2rem] p-6 text-center shadow-lg">
          <h3 className="text-lg sm:text-xl font-bold mb-3">💳 결제 안내</h3>
          <p className="mb-4 text-sm sm:text-base font-medium text-[#D1CDC7]">계좌이체 또는 현금결제만 가능합니다.</p>
          <div className="bg-[#4D4942] rounded-2xl p-4 mt-2 inline-block text-left w-full sm:w-auto shadow-inner">
            <p className="text-[#A39D93] text-xs sm:text-sm mb-2">계좌번호 (예금주: 주진휘)</p>
            <div className="flex items-center justify-between gap-4 bg-[#2A2723] p-3 rounded-xl border border-[#3E3A34]">
              <p className="text-base sm:text-lg font-mono font-bold tracking-wider text-[#F9F8F4]">
                카카오뱅크 3333116617661
                <span className="text-[#A39D93] text-sm font-sans tracking-normal ml-2 sm:ml-3">5,000원</span>
              </p>
              <button 
                onClick={handleCopy}
                className="bg-[#F9F8F4] text-[#3E3A34] px-4 py-2 rounded-lg text-xs font-bold hover:bg-white active:scale-95 transition-all shrink-0 shadow-sm"
              >
                복사
              </button>
            </div>
          </div>
        </div>
        <p className="text-center text-[#A39D93] text-xs mt-6">
          © 2026 더함공동체 청년부 이상한음료가게
        </p>
      </footer>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white/80 hover:text-white w-12 h-12 flex items-center justify-center font-light text-4xl z-50"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <div className="relative w-full h-[80vh] max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <Image src={selectedImage} alt="메뉴 크게 보기" fill className="object-contain" priority />
          </div>
        </div>
      )}
    </div>
  );
}