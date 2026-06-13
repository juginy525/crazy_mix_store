import Image from 'next/image';

export default function Home() {
  const menus = [
    { id: 1, name: '초바단', description: '바나나맛 우유와 초코우유의 달콤한 만남 🍌🍫', price: '5,000원' },
    { id: 2, name: '솔솔청청', description: '솔의 눈과 청포도 에이드의 상쾌한 조화 🌲🍇', price: '5,000원' },
    { id: 3, name: '메뉴 3', description: '메뉴 준비 중...', price: '₩0' },
    { id: 4, name: '메뉴 4', description: '메뉴 준비 중...', price: '₩0' },
  ];

  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900 font-sans pb-12">
      {/* Header / Logo Area */}
      <header className="pt-12 pb-8 px-4 flex flex-col items-center justify-center bg-white shadow-sm rounded-b-[3rem] mb-10">
        <div className="relative w-48 h-48 md:w-64 md:h-64 mb-4">
          <Image src="/logo.jpg" alt="이상한음료가게 로고" fill className="object-contain" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-center mb-2 text-black drop-shadow-sm">
          이상한 음료가게 🧪
        </h1>
        <p className="text-lg font-medium text-neutral-600">더함공동체 청년부 예배 후 다목적실</p>
      </header>

      {/* Menu Section */}
      <main className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {menus.map((menu) => (
            <div
              key={menu.id}
              className="bg-white rounded-3xl p-4 flex flex-row items-center shadow-md hover:shadow-lg transition-shadow border-2 border-transparent hover:border-black"
            >
              <div className="w-28 h-28 bg-neutral-200 rounded-2xl flex-shrink-0 flex items-center justify-center border border-dashed border-neutral-400 overflow-hidden relative">
                {menu.id <= 2 ? (
                  <Image src={`/menu${menu.id}.jpg`} alt={menu.name} fill className="object-cover" />
                ) : (
                  <span className="text-neutral-400 text-xs font-semibold">메뉴 이미지 {menu.id}</span>
                )}
              </div>
              <div className="ml-5 flex flex-col justify-center flex-grow">
                <h2 className="text-2xl font-bold text-black mb-1">{menu.name}</h2>
                <p className="text-sm text-neutral-500 mb-3 line-clamp-2">{menu.description}</p>
                <div className="text-lg font-extrabold text-neutral-800">{menu.price}</div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Payment Footer */}
      <footer className="mt-16 max-w-2xl mx-auto px-4">
        <div className="bg-black text-white rounded-3xl p-6 text-center shadow-xl">
          <h3 className="text-xl font-bold mb-4">💳 결제 안내</h3>
          <p className="mb-2 font-medium">계좌이체 또는 현금결제만 가능합니다.</p>
          <div className="bg-neutral-800 rounded-xl p-4 mt-4 inline-block text-left w-full sm:w-auto">
            <p className="text-neutral-300 text-sm mb-1">계좌번호 (예금주: 홍길동)</p>
            <p className="text-lg font-mono font-bold tracking-wider">국민 123456-78-901234</p>
          </div>
        </div>
        <p className="text-center text-neutral-400 text-xs mt-6">
          © 2026 더함공동체 청년부 이상한음료가게
        </p>
      </footer>
    </div>
  );
}