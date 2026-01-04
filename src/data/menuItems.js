/**
 * MENU ITEMS DATA (Tier Highlights / Exclusives)
 *
 * Goal: keep the website menu LIGHTWEIGHT.
 * - We only show “highlights / exclusives” per tier (Classic / Gold / Premium / Platinum)
 * - Full detailed menu stays in the downloadable PDF.
 *
 * Images:
 * - Uses your existing local placeholder images from /public
 * - You can swap images later per item.
 */

const placeholderImages = [
  "/sashimi.jpg",
  "/sushi1.jpg",
  "/sushi2.jpg",
  "/shrimp1.jpg",
  "/shrimp2.jpg",
  "/salmon1.jpg",
  "/eat1.jpg",
  "/eating1.jpg",
  "/dessert1.jpg"
];

const pickImg = (i) => placeholderImages[i % placeholderImages.length];

export const menuItems = [
  // =========================
  // CLASSIC (399) HIGHLIGHTS
  // =========================
  {
    id: 1,
    category: "classic",
    name: { en: "Grilled Salmon Teriyaki Nigiri", th: "ซูชิแซลมอนย่างเทริ" },
    description: {
      en: "A classic grilled salmon nigiri finished with teriyaki sauce.",
      th: "ซูชิแซลมอนย่างหอม ๆ ราดซอสเทริยากิ"
    },
    image: pickImg(0),
    imageAlt: { en: "Grilled salmon nigiri sushi", th: "ซูชิแซลมอนย่าง" },
    badge: { en: "Classic", th: "คลาสสิก" },
    tag: { en: "Sushi • Grilled", th: "ซูชิ • ย่าง" }
  },
  {
    id: 2,
    category: "classic",
    name: { en: "Shrimp Tempura Roll", th: "กุ้งเทมปุระโรล" },
    description: {
      en: "Crispy shrimp tempura roll, perfect for first timers.",
      th: "โรลกุ้งเทมปุระกรอบ ๆ กินง่าย ถูกใจทุกคน"
    },
    image: pickImg(1),
    imageAlt: { en: "Shrimp tempura sushi roll", th: "โรลกุ้งเทมปุระ" },
    badge: { en: "Popular", th: "ยอดนิยม" },
    tag: { en: "Roll • Crispy", th: "โรล • กรอบ" }
  },
  {
    id: 3,
    category: "classic",
    name: { en: "California Roll", th: "แคลิฟอร์เนียโรล" },
    description: {
      en: "A simple, satisfying roll — a buffet favorite.",
      th: "โรลยอดฮิต รสชาติกลมกล่อม กินเพลิน"
    },
    image: pickImg(2),
    imageAlt: { en: "California sushi roll", th: "แคลิฟอร์เนียโรล" },
    badge: { en: "Favorite", th: "ขายดี" },
    tag: { en: "Roll • Classic", th: "โรล • คลาสสิก" }
  },
  {
    id: 4,
    category: "classic",
    name: { en: "Takoyaki", th: "ทาโกยากิ" },
    description: {
      en: "Japanese octopus balls served hot with sauce.",
      th: "ทาโกยากิร้อน ๆ ราดซอส หอมอร่อย"
    },
    image: pickImg(3),
    imageAlt: { en: "Takoyaki on a plate", th: "ทาโกยากิ" },
    badge: { en: "Hot Dish", th: "เมนูร้อน" },
    tag: { en: "Japanese • Snack", th: "ญี่ปุ่น • ของทานเล่น" }
  },
  {
    id: 5,
    category: "classic",
    name: { en: "Miso Soup", th: "ซุปมิโซะ" },
    description: {
      en: "Warm miso soup — simple and comforting.",
      th: "ซุปมิโซะร้อน ๆ ซดสบาย ๆ"
    },
    image: pickImg(4),
    imageAlt: { en: "Bowl of miso soup", th: "ซุปมิโซะ" },
    badge: { en: "Essential", th: "ต้องมี" },
    tag: { en: "Soup • Classic", th: "ซุป • คลาสสิก" }
  },

  // =========================
  // GOLD (599) EXCLUSIVES
  // =========================
  {
    id: 6,
    category: "gold",
    name: { en: "Salmon Sashimi", th: "แซลมอนซาชิมิ" },
    description: {
      en: "Fresh salmon sashimi slices — a Gold-tier highlight.",
      th: "แซลมอนซาชิมิชิ้นสด ฟินแบบโกลด์"
    },
    image: pickImg(5),
    imageAlt: { en: "Salmon sashimi slices", th: "แซลมอนซาชิมิ" },
    badge: { en: "Gold", th: "โกลด์" },
    tag: { en: "Sashimi • Raw", th: "ซาชิมิ • ดิบ" }
  },
  {
    id: 7,
    category: "gold",
    name: { en: "Marinated Salmon (Dong)", th: "แซลมอนดอง" },
    description: {
      en: "Korean-style marinated salmon — rich, savory, and addictive.",
      th: "แซลมอนดองสไตล์เกาหลี รสเข้มข้น กินเพลิน"
    },
    image: pickImg(6),
    imageAlt: { en: "Marinated salmon dish", th: "แซลมอนดอง" },
    badge: { en: "Exclusive", th: "เฉพาะโกลด์" },
    tag: { en: "Signature • Marinated", th: "ซิกเนเจอร์ • ดอง" }
  },
  {
    id: 8,
    category: "gold",
    name: { en: "Marinated Shrimp (Dong)", th: "กุ้งดอง" },
    description: {
      en: "Marinated shrimp — sweet, juicy, and full of flavor.",
      th: "กุ้งดองเนื้อเด้ง หวานฉ่ำ รสจัดจ้าน"
    },
    image: pickImg(7),
    imageAlt: { en: "Marinated shrimp dish", th: "กุ้งดอง" },
    badge: { en: "Exclusive", th: "เฉพาะโกลด์" },
    tag: { en: "Signature • Marinated", th: "ซิกเนเจอร์ • ดอง" }
  },
  {
    id: 9,
    category: "gold",
    name: { en: "Fresh River Prawn (Shabu)", th: "กุ้งแม่น้ำสด (ชาบู)" },
    description: {
      en: "Fresh river prawn for shabu — sweet and satisfying.",
      th: "กุ้งแม่น้ำสดสำหรับชาบู หวานเด้ง"
    },
    image: pickImg(8),
    imageAlt: { en: "River prawn for hot pot", th: "กุ้งแม่น้ำสำหรับชาบู" },
    badge: { en: "Gold", th: "โกลด์" },
    tag: { en: "Shabu • Seafood", th: "ชาบู • ซีฟู้ด" }
  },
  {
    id: 10,
    category: "gold",
    name: { en: "Ribeye Beef (Shabu)", th: "เนื้อริบอาย (ชาบู)" },
    description: {
      en: "Tender ribeye slices for shabu — rich and juicy.",
      th: "เนื้อริบอายสไลซ์บาง ๆ นุ่มฉ่ำสำหรับชาบู"
    },
    image: pickImg(0),
    imageAlt: { en: "Ribeye beef slices", th: "เนื้อริบอายสไลซ์" },
    badge: { en: "Upgrade", th: "อัปเกรด" },
    tag: { en: "Shabu • Beef", th: "ชาบู • เนื้อ" }
  },

  // =========================
  // PREMIUM (799) EXCLUSIVES
  // =========================
  {
    id: 11,
    category: "premium",
    name: { en: "Unlimited Draft Beer", th: "เบียร์สดไม่อั้น" },
    description: {
      en: "Enjoy unlimited draft beer during your dining time.",
      th: "เบียร์สดไม่อั้นตลอดเวลาที่ทาน"
    },
    image: "/beer.jpg",
    imageAlt: { en: "Draft beer glass", th: "แก้วเบียร์สด" },
    badge: { en: "Premium", th: "พรีเมียม" },
    tag: { en: "Beer • Unlimited", th: "เบียร์ • ไม่อั้น" }
  },
  {
    id: 12,
    category: "premium",
    name: { en: "Tuna Sashimi", th: "ซาชิมิทูน่า" },
    description: {
      en: "Fresh tuna sashimi — clean flavor and smooth texture.",
      th: "ซาชิมิทูน่าสด รสนุ่มละมุน"
    },
    image: "/sashimi.jpg",
    imageAlt: { en: "Tuna sashimi", th: "ซาชิมิทูน่า" },
    badge: { en: "Premium", th: "พรีเมียม" },
    tag: { en: "Sashimi • Raw", th: "ซาชิมิ • ดิบ" }
  },
  {
    id: 13,
    category: "premium",
    name: { en: "Hamachi Sashimi", th: "ซาชิมิฮามาจิ" },
    description: {
      en: "Yellowtail sashimi — buttery and premium.",
      th: "ฮามาจิซาชิมิ เนื้อนุ่ม มันกำลังดี"
    },
    image: pickImg(3),
    imageAlt: { en: "Hamachi sashimi", th: "ฮามาจิซาชิมิ" },
    badge: { en: "Premium", th: "พรีเมียม" },
    tag: { en: "Sashimi • Premium", th: "ซาชิมิ • พรีเมียม" }
  },
  {
    id: 14,
    category: "premium",
    name: { en: "Kani Miso", th: "คานิมิโซะ" },
    description: {
      en: "Rich crab miso — a chef-loved Japanese delicacy.",
      th: "คานิมิโซะหอมมัน เมนูโปรดของสายญี่ปุ่น"
    },
    image: pickImg(4),
    imageAlt: { en: "Kani miso dish", th: "คานิมิโซะ" },
    badge: { en: "Chef Pick", th: "เชฟแนะนำ" },
    tag: { en: "Japanese • Special", th: "ญี่ปุ่น • พิเศษ" }
  },
  {
    id: 15,
    category: "premium",
    name: { en: "Grilled River Prawn", th: "กุ้งเผา" },
    description: {
      en: "Grilled prawns — smoky aroma and sweet meat.",
      th: "กุ้งเผาหอม ๆ เนื้อหวานแน่น"
    },
    image: pickImg(5),
    imageAlt: { en: "Grilled prawn", th: "กุ้งเผา" },
    badge: { en: "Premium", th: "พรีเมียม" },
    tag: { en: "Seafood • Grilled", th: "ซีฟู้ด • ย่าง" }
  },

  // =========================
  // PLATINUM (1099) EXCLUSIVES
  // =========================
  {
    id: 16,
    category: "platinum",
    name: { en: "Unlimited Draft Beer", th: "เบียร์สดไม่อั้น" },
    description: {
      en: "Unlimited draft beer included in Platinum tier.",
      th: "แพ็กเกจแพลตตินัมรวมเบียร์สดไม่อั้น"
    },
    image: pickImg(6),
    imageAlt: { en: "Draft beer glass", th: "แก้วเบียร์สด" },
    badge: { en: "Platinum", th: "แพลตตินัม" },
    tag: { en: "Beer • Unlimited", th: "เบียร์ • ไม่อั้น" }
  },
  {
    id: 17,
    category: "platinum",
    name: { en: "Foie Gras Nigiri", th: "ซูชิฟัวกราส" },
    description: {
      en: "Foie gras nigiri — rich, creamy, and luxurious.",
      th: "ซูชิฟัวกราส หอมมัน สายพรีเมียมห้ามพลาด"
    },
    image: pickImg(7),
    imageAlt: { en: "Foie gras nigiri sushi", th: "ซูชิฟัวกราส" },
    badge: { en: "Exclusive", th: "เฉพาะแพลตตินัม" },
    tag: { en: "Sushi • Luxury", th: "ซูชิ • พรีเมียม" }
  },
  {
    id: 18,
    category: "platinum",
    name: { en: "Ikura Gunkan (Salmon Roe)", th: "ซูชิไข่แซลมอน" },
    description: {
      en: "Ikura gunkan — bursting salmon roe with ocean flavor.",
      th: "กุนกันไข่แซลมอน เม็ดเด้ง รสทะเลเต็ม ๆ"
    },
    image: pickImg(8),
    imageAlt: { en: "Ikura gunkan sushi", th: "ซูชิไข่แซลมอน" },
    badge: { en: "Exclusive", th: "เฉพาะแพลตตินัม" },
    tag: { en: "Gunkan • Roe", th: "กุนกัน • ไข่ปลา" }
  },
  {
    id: 19,
    category: "platinum",
    name: { en: "Australian Beef Karubi", th: "วากิว karubi" },
    description: {
      en: "Tender, juicy beef slices for shabu or grill (as served).",
      th: "เนื้อสไลซ์นุ่มฉ่ำ สำหรับชาบูหรือย่างตามเมนู"
    },
    image: pickImg(0),
    imageAlt: { en: "Sliced beef for hotpot", th: "เนื้อสไลซ์สำหรับชาบู" },
    badge: { en: "Top Beef", th: "เนื้อท็อป" },
    tag: { en: "Beef • Premium", th: "เนื้อ • พรีเมียม" }
  },
  {
    id: 20,
    category: "platinum",
    name: { en: "Waffle with Ice Cream", th: "วาฟเฟิลไอศกรีม" },
    description: {
      en: "Warm waffle served with ice cream — a sweet finish.",
      th: "วาฟเฟิลอุ่น ๆ เสิร์ฟพร้อมไอศกรีม ปิดท้ายแบบฟิน"
    },
    image: pickImg(2),
    imageAlt: { en: "Waffle served with ice cream", th: "วาฟเฟิลเสิร์ฟพร้อมไอศกรีม" },
    badge: { en: "Dessert", th: "ของหวาน" },
    tag: { en: "Sweet • Dessert", th: "หวาน • ของหวาน" }
  },

  // =========================
  // PRE-ORDER SIGNATURE ITEMS
  // =========================
  {
    id: 21,
    category: "preorder",
    name: { 
      en: "Salmon Sashimi Cake (Classic Ring)", 
      th: "แซลมอนซาชิมิเค้ก (ทรงวงคลาสสิก)" 
    },
    description: {
      en: "Fresh salmon sashimi arranged in a cake-style platter for special occasions. Savory, elegant, and made-to-order.",
      th: "แซลมอนซาชิมิจัดเป็นเค้กสำหรับโอกาสพิเศษ ไม่หวาน เป็นอาหารคาว ต้องพรีออเดอร์"
    },
    image: "/cake1.jpg",
    imageAlt: { 
      en: "Salmon sashimi cake platter", 
      th: "แซลมอนซาชิมิเค้ก" 
    },
    badge: { en: "Pre-Order", th: "พรีออเดอร์" },
    tag: { en: "Salmon • Special Order", th: "แซลมอน • สั่งทำ" }
  },
  {
    id: 22,
    category: "preorder",
    name: { 
      en: "Salmon Sashimi Cake (Rose Centerpiece)", 
      th: "แซลมอนซาชิมิเค้ก (กุหลาบตรงกลาง)" 
    },
    description: {
      en: "Premium salmon sashimi cake with rose centerpiece — perfect as a surprise or gift. Made-to-order.",
      th: "เค้กแซลมอนซาชิมิจัดพรีเมียม พร้อมกุหลาบตรงกลาง เหมาะเป็นของขวัญ (ต้องพรีออเดอร์)"
    },
    image: "/cake2.jpg",
    imageAlt: { 
      en: "Salmon sashimi cake with rose centerpiece", 
      th: "แซลมอนซาชิมิเค้กกุหลาบ" 
    },
    badge: { en: "Signature", th: "ซิกเนเจอร์" },
    tag: { en: "Gift • Premium", th: "ของขวัญ • พรีเมียม" }
  },
  {
    id: 23,
    category: "preorder",
    name: { 
      en: "Salmon Sashimi Cake (Heart Shape)", 
      th: "แซลมอนซาชิมิเค้ก (ทรงหัวใจ)" 
    },
    description: {
      en: "Heart-shaped salmon sashimi cake designed for anniversaries and celebrations. Pre-order required.",
      th: "เค้กแซลมอนซาชิมิทรงหัวใจ สำหรับวันครบรอบและงานฉลอง (ต้องพรีออเดอร์)"
    },
    image: "/cake3.jpg",
    imageAlt: { 
      en: "Heart-shaped salmon sashimi cake", 
      th: "แซลมอนซาชิมิเค้กทรงหัวใจ" 
    },
    badge: { en: "Pre-Order", th: "พรีออเดอร์" },
    tag: { en: "Celebration • Limited", th: "งานฉลอง • จำนวนจำกัด" }
  },
  {
    id: 24,
    category: "preorder",
    name: { 
      en: "Salmon Sashimi Cake (Gift Box)", 
      th: "แซลมอนซาชิมิเค้ก (กล่องของขวัญ)" 
    },
    description: {
      en: "Salmon sashimi cake presented in a gift box with ribbon — savory, elegant, and memorable.",
      th: "เค้กแซลมอนซาชิมิจัดเป็นกล่องของขวัญ พร้อมริบบิ้น สวยพร้อมมอบ (ต้องพรีออเดอร์)"
    },
    image: "/cake4.jpg",
    imageAlt: { 
      en: "Boxed salmon sashimi cake", 
      th: "แซลมอนซาชิมิเค้กกล่องของขวัญ" 
    },
    badge: { en: "Gift", th: "ของขวัญ" },
    tag: { en: "Special • Made-to-Order", th: "พิเศษ • สั่งทำ" }
  }
  
];

// Category definitions (tier filters)
export const categories = [
  { id: "all", name: { en: "All Highlights", th: "ไฮไลท์ทั้งหมด" } },
  { id: "preorder", name: { en: "Signature Pre-Order", th: "พรีออเดอร์ซิกเนเจอร์" } },
  { id: "classic", name: { en: "Classic (399)", th: "คลาสสิก (399)" } },
  { id: "gold", name: { en: "Gold (599)", th: "โกลด์ (599)" } },
  { id: "premium", name: { en: "Premium (799)", th: "พรีเมียม (799)" } },
  { id: "platinum", name: { en: "Platinum (1099)", th: "แพลตตินัม (1099)" } }
];
