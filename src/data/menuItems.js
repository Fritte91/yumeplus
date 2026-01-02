/**
 * MENU ITEMS DATA
 *
 * Uses local images from the public folder
 * - Images are referenced as /filename.jpg (Vite serves public folder at root)
 * - Adds optional imageAlt for accessibility (EN/TH)
 */

export const menuItems = [
  // Premium Sushi Category
  {
    id: 1,
    category: 'sushi',
    name: {
      en: 'Sashimi Boat',
      th: 'เรือซาชิมิ'
    },
    description: {
      en: 'Thick slices of Norwegian Salmon, Hamachi, and Tuna. Freshly cut by our sushi master.',
      th: 'แซลมอนนอร์เวย์ ฮามาจิ และทูน่าหนาชิ้น ตัดสดโดยเชฟซูชิ'
    },
    image: "/sashimi.jpg",
    imageAlt: {
      en: 'Assorted sushi and sashimi platter served on a wooden boat',
      th: 'ซูชิและซาชิมิรวมเสิร์ฟบนเรือไม้'
    },
    badge: {
      en: 'Imported',
      th: 'นำเข้า'
    },
    tag: {
      en: 'Japanese • Raw',
      th: 'ญี่ปุ่น • ดิบ'
    }
  },
  {
    id: 2,
    category: 'sushi',
    name: {
      en: 'Wagyu Aburi',
      th: 'วากิวอบูริ'
    },
    description: {
      en: 'A5 Wagyu beef sushi, lightly torched with truffle oil and topped with foie gras.',
      th: 'ซูชิเนื้อวากิว A5 ย่างเบาๆ ด้วยน้ำมันทรัฟเฟิล ราดด้วยฟัวกราส์'
    },
    image: '/sushi1.jpg',
    imageAlt: {
      en: 'Sushi rolls being torched with flames (aburi style)',
      th: 'ซูชิถูกพ่นไฟ (สไตล์อบูริ)'
    },
    badge: {
      en: 'Premium',
      th: 'พรีเมียม'
    },
    tag: {
      en: 'Fusion • Beef',
      th: 'ฟิวชั่น • เนื้อ'
    }
  },
  {
    id: 3,
    category: 'sushi',
    name: {
      en: 'Dragon Roll',
      th: 'มังกรโรล'
    },
    description: {
      en: 'Eel and cucumber roll topped with avocado and eel sauce.',
      th: 'โรลปลาไหลและแตงกวา ราดด้วยอะโวคาโดและซอสปลาไหล'
    },
    image: '/sushi2.jpg',
    imageAlt: {
      en: 'Avocado-topped sushi roll lifted with chopsticks',
      th: 'โรลซูชิโปะอะโวคาโดคีบด้วยตะเกียบ'
    },
    badge: {
      en: 'Popular',
      th: 'ยอดนิยม'
    },
    tag: {
      en: 'Japanese • Roll',
      th: 'ญี่ปุ่น • โรล'
    }
  },

  // Seafood Category
  {
    id: 4,
    category: 'seafood',
    name: {
      en: 'Giant River Prawns',
      th: 'กุ้งแม่น้ำยักษ์'
    },
    description: {
      en: 'Grilled fresh on charcoal, served with our secret recipe spicy lime and chilli dipping sauce.',
      th: 'ย่างสดบนถ่าน เสิร์ฟพร้อมน้ำจิ้มเผ็ดสูตรลับ'
    },
    image: '/shrimp1.jpg',
    imageAlt: {
      en: 'Shrimp grilling over hot coals',
      th: 'กุ้งย่างบนเตาถ่านร้อน'
    },
    badge: {
      en: 'Must Try',
      th: 'ต้องลอง'
    },
    tag: {
      en: 'Thai Style • Grilled',
      th: 'สไตล์ไทย • ย่าง'
    }
  },
  {
    id: 5,
    category: 'seafood',
    name: {
      en: 'Lobster Thermidor',
      th: 'ล็อบสเตอร์เทอร์มิดอร์'
    },
    description: {
      en: 'Fresh lobster baked with creamy cheese sauce and herbs.',
      th: 'ล็อบสเตอร์สดอบด้วยซอสชีสครีมและสมุนไพร'
    },
    image: '/shrimp2.jpg',
    imageAlt: {
      en: 'Cooked lobster dish plated for dinner',
      th: 'เมนูล็อบสเตอร์เสิร์ฟบนจาน'
    },
    badge: {
      en: 'Premium',
      th: 'พรีเมียม'
    },
    tag: {
      en: 'French • Baked',
      th: 'ฝรั่งเศส • อบ'
    }
  },
  {
    id: 6,
    category: 'seafood',
    name: {
      en: 'Crab Legs',
      th: 'ขาปู'
    },
    description: {
      en: 'Steamed Alaskan king crab legs with garlic butter.',
      th: 'ขาปูอลาสก้าต้มสุกพร้อมเนยกระเทียม'
    },
    image: '/salmon1.jpg',
    imageAlt: {
      en: 'Crab legs served on ice',
      th: 'ขาปูเสิร์ฟบนน้ำแข็ง'
    },
    badge: {
      en: 'Fresh',
      th: 'สด'
    },
    tag: {
      en: 'Steamed • Premium',
      th: 'ต้ม • พรีเมียม'
    }
  },

  // Teppanyaki Category
  {
    id: 7,
    category: 'teppanyaki',
    name: {
      en: 'Wagyu Teppanyaki',
      th: 'วากิวเทปปันยากิ'
    },
    description: {
      en: 'Premium A5 Wagyu beef cooked on hot iron plate with vegetables.',
      th: 'เนื้อวากิว A5 พรีเมียมปรุงบนแผ่นเหล็กร้อนพร้อมผัก'
    },
    image: '/eat1.jpg',
    imageAlt: {
      en: 'Meat grilling on a hot grill plate',
      th: 'เนื้อย่างบนเตา/แผ่นร้อน'
    },
    badge: {
      en: 'Premium',
      th: 'พรีเมียม'
    },
    tag: {
      en: 'Japanese • Grilled',
      th: 'ญี่ปุ่น • ย่าง'
    }
  },
  {
    id: 8,
    category: 'teppanyaki',
    name: {
      en: 'Seafood Teppanyaki',
      th: 'ซีฟู้ดเทปปันยากิ'
    },
    description: {
      en: 'Fresh prawns, scallops, and squid cooked on hot plate with special sauce.',
      th: 'กุ้ง หอยเชลล์ และปลาหมึกสดปรุงบนแผ่นร้อนพร้อมซอสพิเศษ'
    },
    image: '/eating1.jpg',
    imageAlt: {
      en: 'Chef preparing food on a teppanyaki grill',
      th: 'เชฟกำลังปรุงอาหารบนเตาเทปปันยากิ'
    },
    badge: {
      en: 'Chef Special',
      th: 'พิเศษจากเชฟ'
    },
    tag: {
      en: 'Japanese • Seafood',
      th: 'ญี่ปุ่น • ซีฟู้ด'
    }
  },

  // Thai Desserts Category
  {
    id: 9,
    category: 'desserts',
    name: {
      en: 'Mango Sticky Rice',
      th: 'ข้าวเหนียวมะม่วง'
    },
    description: {
      en: 'Sweet sticky rice with fresh mango and coconut cream.',
      th: 'ข้าวเหนียวหวานพร้อมมะม่วงสดและกะทิ'
    },
    image: '/dessert1.jpg',
    imageAlt: {
      en: 'Mango sticky rice served on a white plate',
      th: 'ข้าวเหนียวมะม่วงเสิร์ฟบนจานสีขาว'
    },
    badge: {
      en: 'Classic',
      th: 'คลาสสิก'
    },
    tag: {
      en: 'Thai • Traditional',
      th: 'ไทย • แบบดั้งเดิม'
    }
  },
  {
    id: 10,
    category: 'desserts',
    name: {
      en: 'Thai Tea Bingsu',
      th: 'บิงซูชาไทย'
    },
    description: {
      en: 'Shaved ice with Thai tea flavor, topped with condensed milk and toppings.',
      th: 'น้ำแข็งไสรสชาไทย ราดด้วยนมข้นหวานและท็อปปิ้ง'
    },
    image: '/dessert1.jpg',
    imageAlt: {
      en: 'Mango shaved ice dessert in a bowl (bingsu style)',
      th: 'บิงซู/น้ำแข็งไสเสิร์ฟในชาม'
    },
    badge: {
      en: 'Popular',
      th: 'ยอดนิยม'
    },
    tag: {
      en: 'Thai • Ice',
      th: 'ไทย • ไอซ์'
    }
  }
];

// Category definitions
export const categories = [
  {
    id: 'all',
    name: {
      en: 'All Items',
      th: 'ทั้งหมด'
    }
  },
  {
    id: 'sushi',
    name: {
      en: 'Premium Sushi',
      th: 'ซูชิพรีเมียม'
    }
  },
  {
    id: 'seafood',
    name: {
      en: 'Seafood on Ice',
      th: 'ซีฟู้ดบนน้ำแข็ง'
    }
  },
  {
    id: 'teppanyaki',
    name: {
      en: 'Teppanyaki',
      th: 'เทปปันยากิ'
    }
  },
  {
    id: 'desserts',
    name: {
      en: 'Thai Desserts',
      th: 'ของหวานไทย'
    }
  }
];
