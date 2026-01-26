import { 
  Product, 
  Order, 
  Campaign, 
  Review, 
  Report,
  ProductStatus,
  OrderStatus,
  CampaignStatus,
  ReviewStatus
} from '../types';

// Datos para Orders
export const ordersData: Order[] = [
  {
    id: '#ORD-7842',
    customer: 'John Smith',
    date: '2024-01-15',
    amount: '$149.99',
    status: 'completed' as OrderStatus,
    payment: 'Credit Card',
    items: 3
  },
  {
    id: '#ORD-7841',
    customer: 'Maria Garcia',
    date: '2024-01-15',
    amount: '$89.99',
    status: 'processing' as OrderStatus,
    payment: 'PayPal',
    items: 1
  },
  {
    id: '#ORD-7840',
    customer: 'Robert Johnson',
    date: '2024-01-14',
    amount: '$239.99',
    status: 'shipped' as OrderStatus,
    payment: 'Credit Card',
    items: 5
  },
  {
    id: '#ORD-7839',
    customer: 'Sarah Williams',
    date: '2024-01-14',
    amount: '$59.99',
    status: 'pending' as OrderStatus,
    payment: 'Apple Pay',
    items: 2
  },
  {
    id: '#ORD-7838',
    customer: 'Michael Brown',
    date: '2024-01-13',
    amount: '$199.99',
    status: 'completed' as OrderStatus,
    payment: 'Credit Card',
    items: 4
  },
  {
    id: '#ORD-7837',
    customer: 'Emily Davis',
    date: '2024-01-13',
    amount: '$129.99',
    status: 'cancelled' as OrderStatus,
    payment: 'PayPal',
    items: 3
  },
  {
    id: '#ORD-7836',
    customer: 'David Wilson',
    date: '2024-01-12',
    amount: '$79.99',
    status: 'completed' as OrderStatus,
    payment: 'Google Pay',
    items: 1
  },
  {
    id: '#ORD-7835',
    customer: 'Lisa Miller',
    date: '2024-01-12',
    amount: '$299.99',
    status: 'processing' as OrderStatus,
    payment: 'Credit Card',
    items: 6
  }
];

// Datos para Products
export const productsData: Product[] = [
  {
    id: 'PROD-001',
    name: 'Levi\'s T-Shirt',
    category: 'Clothing',
    price: '$49.99',
    stock: 150,
    sales: 320,
    status: 'in_stock' as ProductStatus,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC01V6NxqP26MRD_lV4Jki_bUMDXKArZj-fLS79Nee2YZhB-TIvQ2ut99sCYBrgF-MouuATvrOXNgKt9vATE0T0WERRkLM886Ol_RO48QLQcCAP17ivOT9DDA3Zc8QaKiMP-1IvMzLh30ux2vmATXUpY449RWBtb_N8jgcG_gu_O1x66yJGAK1ji34eSaeMV4Yb0K1RwCbIG0785dXRFBsZBSN-mo7_LjqOfarwVVINhlU4cg7pdCEBwmS81MACnSKv7QJp518DBPg'
  },
  {
    id: 'PROD-002',
    name: 'Denim Jacket',
    category: 'Clothing',
    price: '$129.99',
    stock: 45,
    sales: 89,
    status: 'in_stock' as ProductStatus,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdiaXhzEyJbqqopDYRvFbI-ArjxkGiC1k6-U-eCssZMXMjThU_GeJfYVOoEXjyj_61l1c4ROWOB1oIp9qcMMrX2x0dNVyeZ6jOYDZmHuvR_7nWB6EesxqlYl_SLSnmXaUlDgeXMsOjahkC3y_KGYqlfOB6CmKQhITKj3ZIhmR1s0U8_bCB0NaSMvAIZdRdWvxtEJ-tMu2tM7Ip-ZtrsymVKO6rhc2YL7WOw9FZur5buYZsY5rBQ8kklruFXpcwNuFxNYj4bBxvi9Q'
  },
  {
    id: 'PROD-003',
    name: 'Sports Cap',
    category: 'Accessories',
    price: '$20.99',
    stock: 200,
    sales: 210,
    status: 'in_stock' as ProductStatus,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBo2gL7_o64-ou1UAinHC7WQN81z_N5Kvc1yFOxG-OXF1TPOyhPdzh6GfuSJkcdy0QLHen1hEudVBPxR8OiUkDri18Qnpq4UB1P6V59b3Ywz1yaZZYd8rd8wStZAOdeo-T8_Veqg30CDZJySYrYlOPi4kspLfl4fgyBaS5nmro0m5ARMN1hX8Ubo15gL2aGBT1XOk-OETscOLxUFt7kc0dGFcs5-Exh93_XNlVWAUtycEg8IoOGQ2OhHL2TrGzH138WdSUjzQGPcwo'
  },
  {
    id: 'PROD-004',
    name: 'Adidas Pants',
    category: 'Sportswear',
    price: '$89.99',
    stock: 30,
    sales: 67,
    status: 'low_stock' as ProductStatus,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrkfB7y0-od-jN3AvOsMAwofEJtfe3lOhiV4iJepx_fjB2WVBRIbM7cFIO8uzMY2Iq9UlF8LUcKp3IGYth8xiPnhNgQ06CbRDdEzwhU8jRAvQHuosIr8LD935kBuR4S2E7LR4wCF73CYExyL3o71nDr73VM_YIHOw7tGbNe6VPlohvLVQB6GRUcTLtOjdennqnZx7vlkFtM18grUmBQFkhY2xaSjWY-3mrR86BfcZOreTDHUmnbcEqkItZCfDV_oItrqXp0xMQrnY'
  },
  {
    id: 'PROD-005',
    name: 'Running Shoes',
    category: 'Footwear',
    price: '$119.99',
    stock: 0,
    sales: 145,
    status: 'out_of_stock' as ProductStatus,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop'
  },
  {
    id: 'PROD-006',
    name: 'Smart Watch',
    category: 'Electronics',
    price: '$249.99',
    stock: 75,
    sales: 92,
    status: 'in_stock' as ProductStatus,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w-400&h=400&fit=crop'
  }
];

// Datos para Marketing Campaigns
export const campaignsData: Campaign[] = [
  {
    id: 'CAMP-001',
    name: 'Summer Sale 2024',
    channel: 'Email & Social',
    budget: '$5,000',
    spent: '$3,245',
    status: 'active' as CampaignStatus,
    startDate: '2024-06-01',
    endDate: '2024-08-31',
    conversion: '4.2%'
  },
  {
    id: 'CAMP-002',
    name: 'Black Friday',
    channel: 'PPC & Social',
    budget: '$15,000',
    spent: '$12,890',
    status: 'completed' as CampaignStatus,
    startDate: '2024-11-20',
    endDate: '2024-11-30',
    conversion: '8.7%'
  },
  {
    id: 'CAMP-003',
    name: 'New Year Launch',
    channel: 'Influencer',
    budget: '$8,000',
    spent: '$4,500',
    status: 'active' as CampaignStatus,
    startDate: '2024-12-15',
    endDate: '2024-01-15',
    conversion: '6.1%'
  },
  {
    id: 'CAMP-004',
    name: 'Spring Collection',
    channel: 'Social Media',
    budget: '$3,500',
    spent: '$1,890',
    status: 'paused' as CampaignStatus,
    startDate: '2024-03-01',
    endDate: '2024-04-30',
    conversion: '3.8%'
  },
  {
    id: 'CAMP-005',
    name: 'Loyalty Program',
    channel: 'Email',
    budget: '$2,000',
    spent: '$980',
    status: 'active' as CampaignStatus,
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    conversion: '12.4%'
  }
];

// Datos para Rates & Reviews
export const reviewsData: Review[] = [
  {
    id: 'REV-001',
    product: 'Levi\'s T-Shirt',
    customer: 'John Smith',
    rating: 5,
    date: '2024-01-10',
    comment: 'Excellent quality! Fits perfectly and very comfortable.',
    status: 'published' as ReviewStatus
  },
  {
    id: 'REV-002',
    product: 'Denim Jacket',
    customer: 'Maria Garcia',
    rating: 4,
    date: '2024-01-09',
    comment: 'Good quality but runs a bit large. Still love it!',
    status: 'published' as ReviewStatus
  },
  {
    id: 'REV-003',
    product: 'Running Shoes',
    customer: 'Robert Johnson',
    rating: 3,
    date: '2024-01-08',
    comment: 'Comfortable but the sole wore out quickly.',
    status: 'pending' as ReviewStatus
  },
  {
    id: 'REV-004',
    product: 'Sports Cap',
    customer: 'Sarah Williams',
    rating: 5,
    date: '2024-01-07',
    comment: 'Perfect fit and great quality fabric!',
    status: 'published' as ReviewStatus
  },
  {
    id: 'REV-005',
    product: 'Smart Watch',
    customer: 'Michael Brown',
    rating: 2,
    date: '2024-01-06',
    comment: 'Battery life is poor. Would not recommend.',
    status: 'hidden' as ReviewStatus
  }
];

// Datos para Reports
export const reportsData: Report[] = [
  {
    id: 'REP-001',
    name: 'Monthly Sales Report',
    type: 'Sales',
    period: 'December 2024',
    generated: '2024-01-05',
    downloads: 45,
    size: '2.4 MB'
  },
  {
    id: 'REP-002',
    name: 'Customer Analytics',
    type: 'Analytics',
    period: 'Q4 2024',
    generated: '2024-01-03',
    downloads: 32,
    size: '3.1 MB'
  },
  {
    id: 'REP-003',
    name: 'Inventory Report',
    type: 'Inventory',
    period: 'Weekly',
    generated: '2024-01-10',
    downloads: 28,
    size: '1.8 MB'
  },
  {
    id: 'REP-004',
    name: 'Marketing Performance',
    type: 'Marketing',
    period: 'Monthly',
    generated: '2024-01-08',
    downloads: 19,
    size: '4.2 MB'
  },
  {
    id: 'REP-005',
    name: 'Annual Revenue',
    type: 'Financial',
    period: '2024',
    generated: '2024-01-01',
    downloads: 67,
    size: '5.6 MB'
  }
];

// Datos para estadísticas de marketing
export const marketingStats = [
  { label: 'Email Opens', value: '42.3K', change: '+12.5%' },
  { label: 'Click Rate', value: '4.7%', change: '+0.8%' },
  { label: 'Conversions', value: '1,234', change: '+23.1%' },
  { label: 'ROI', value: '8.2x', change: '+1.4x' }
];

// Datos para estadísticas de productos
export const productStats = [
  { label: 'Total Products', value: '156', change: '+8' },
  { label: 'Low Stock', value: '12', change: '-3' },
  { label: 'Out of Stock', value: '5', change: '+2' },
  { label: 'New Arrivals', value: '23', change: '+7' }
];

// Tipo para estadísticas
export interface StatItem {
  label: string;
  value: string;
  change: string;
}