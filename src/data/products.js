export const products = [
  {
    id: 'ultra-gaming-laptop-x15',
    name: 'Ultra Gaming Laptop X15',
    category: 'Laptops',
    price: 2399,
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'High-refresh QHD gaming laptop with next-gen cooling and RTX visuals.',
    description:
      'Engineered for elite gaming and demanding creative workloads, the X15 combines a premium alloy build, advanced thermal architecture, and immersive high-resolution visuals.',
    specifications: ['15.6" QHD 240Hz display', 'Intel Core i9 processor', '32GB DDR5 RAM', '1TB NVMe SSD', 'RTX 4080 Laptop GPU'],
    features: ['Per-key RGB keyboard', 'Vapor chamber cooling', 'Wi-Fi 6E connectivity', 'Thunderbolt 4 support'],
  },
  {
    id: 'titan-desktop-pro-rtx',
    name: 'Titan Desktop Pro RTX',
    category: 'Gaming PCs',
    price: 3299,
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Flagship desktop tower built for 4K gaming, streaming, and pro rendering.',
    description:
      'Titan Desktop Pro RTX is built for performance enthusiasts with premium components, precision airflow, and silent operation under heavy workloads.',
    specifications: ['Intel Core i9 14900K', '64GB DDR5 RAM', '2TB NVMe SSD', 'RTX 4090 Graphics', '850W Gold PSU'],
    features: ['Tempered glass chassis', 'ARGB liquid cooling', 'Tool-less expansion', 'Low-noise fan tuning'],
  },
  {
    id: 'nova-mechanical-keyboard',
    name: 'Nova Mechanical Keyboard',
    category: 'Accessories',
    price: 179,
    rating: 4,
    image:
      'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Premium tactile keyboard with hot-swappable switches and dynamic RGB.',
    description:
      'Nova Mechanical Keyboard offers satisfying key feel, durable PBT keycaps, and responsive control for gaming sessions and long productivity days.',
    specifications: ['75% layout', 'Hot-swappable switches', 'PBT double-shot caps', 'USB-C wired mode', 'N-key rollover'],
    features: ['RGB effects engine', 'Sound-damped frame', 'Detachable cable', 'Programmable macros'],
  },
  {
    id: 'quantum-wireless-mouse',
    name: 'Quantum Wireless Mouse',
    category: 'Accessories',
    price: 129,
    rating: 4,
    image:
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Ultra-light wireless mouse with precision sensor and long battery life.',
    description:
      'Designed for speed and precision, Quantum Wireless Mouse blends ergonomic comfort with esports-grade tracking and low-latency wireless performance.',
    specifications: ['26K DPI optical sensor', '78g lightweight shell', 'Dual wireless + wired', 'Up to 90-hour battery', 'PTFE glide feet'],
    features: ['Customizable side buttons', 'RGB charging dock compatible', 'Textured side grips', 'Onboard memory profiles'],
  },
  {
    id: 'vision-4k-monitor',
    name: 'Vision 4K Monitor',
    category: 'Monitors',
    price: 699,
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1200&q=80',
    shortDescription: '32-inch 4K monitor with vibrant color, HDR support, and slim bezels.',
    description:
      'Vision 4K Monitor delivers crystal-clear visuals for immersive entertainment, gaming, and creative workflows with exceptional color accuracy.',
    specifications: ['32" 4K UHD panel', '144Hz refresh rate', '1ms response time', 'HDR600 support', 'HDMI 2.1 + DisplayPort'],
    features: ['Factory-calibrated color', 'Adaptive sync support', 'Low blue light mode', 'Ergonomic stand'],
  },
  {
    id: 'phantom-rtx-graphics-card',
    name: 'Phantom RTX Graphics Card',
    category: 'Graphics Cards',
    price: 1199,
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1591489378430-ef2f4c626b35?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'High-end GPU for ultra settings, real-time ray tracing, and AI workflows.',
    description:
      'Phantom RTX Graphics Card unlocks elite visual fidelity and frame rates with advanced architecture, robust cooling, and creator-ready acceleration.',
    specifications: ['24GB GDDR6X VRAM', 'Boost clock 2.5GHz', 'Ray tracing cores', 'Triple-fan cooling', 'PCIe 4.0 interface'],
    features: ['Reinforced backplate', 'Dual BIOS modes', 'ARGB sync support', 'Silent fan stop'],
  },
  {
    id: 'speedcore-processor',
    name: 'SpeedCore Processor',
    category: 'Processors',
    price: 549,
    rating: 4,
    image:
      'https://images.unsplash.com/photo-1555617778-02518510b9fa?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Multi-core processor built for high FPS gaming and heavy multitasking.',
    description:
      'SpeedCore Processor is tuned for responsive gameplay and creation pipelines, offering high clock speeds and efficient thermal behavior.',
    specifications: ['16 cores / 24 threads', 'Max boost 5.7GHz', 'Unlocked multiplier', 'PCIe 5.0 ready', 'DDR5 memory support'],
    features: ['Integrated AI acceleration', 'Enhanced cache architecture', 'Advanced overclock controls', 'Optimized power profile'],
  },
  {
    id: 'rgb-gaming-headset',
    name: 'RGB Gaming Headset',
    category: 'Accessories',
    price: 159,
    rating: 4,
    image:
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Surround sound headset with crystal voice pickup and memory foam comfort.',
    description:
      'RGB Gaming Headset delivers immersive audio, noise-isolated microphone clarity, and all-day comfort for marathon gaming or remote teamwork.',
    specifications: ['7.1 virtual surround', '50mm drivers', 'Detachable mic', 'USB + 3.5mm support', 'Memory foam ear cushions'],
    features: ['Custom EQ presets', 'RGB edge illumination', 'Inline controls', 'Lightweight steel frame'],
  },
]

export const homeCategories = [
  { name: 'Gaming PCs', icon: 'Cpu', description: 'Extreme power for competitive gaming.' },
  { name: 'Laptops', icon: 'Laptop', description: 'Portable performance for work and play.' },
  { name: 'Processors', icon: 'Microchip', description: 'Cutting-edge chips for faster systems.' },
  { name: 'Graphics Cards', icon: 'Badge', description: 'Ultra visuals with smooth frame rates.' },
  { name: 'Monitors', icon: 'Monitor', description: 'Color-accurate displays with high refresh.' },
  { name: 'Accessories', icon: 'Headphones', description: 'Precision tools for your setup.' },
]

export const categoriesGrid = [
  'Gaming Computers',
  'Business Laptops',
  'PC Components',
  'Accessories',
  'Monitors',
  'Networking',
]

export const reviews = [
  {
    name: 'Mason Carter',
    role: 'Esports Coach',
    comment: 'The design feels premium and trustworthy. Exactly what I expect from a modern tech brand.',
  },
  {
    name: 'Lina Farouk',
    role: 'Creative Director',
    comment: 'Elegant visuals, clear product sections, and responsive layout. Perfect client-ready presentation quality.',
  },
  {
    name: 'Ethan Wu',
    role: 'IT Consultant',
    comment: 'Strong UX flow from browsing to cart. It already feels like a real commercial storefront.',
  },
]

export const whyChooseUs = [
  { title: 'Curated Premium Gear', text: 'Top-tier demo inventory selected for gamers, creators, and professionals.' },
  { title: 'Future-Ready Technology', text: 'Showcasing high-performance products designed around modern workflows.' },
  { title: 'Client-Focused Experience', text: 'Refined visuals and smooth interactions built to impress stakeholders.' },
]
