// Tipos para estados específicos
export type ProductStatus = 'in_stock' | 'low_stock' | 'out_of_stock';
export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'completed' | 'cancelled';
export type ReviewStatus = 'published' | 'pending' | 'hidden';
export type CampaignStatus = 'active' | 'paused' | 'completed' | 'draft';

// Interface principal para Product
export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  stock: number;
  sales: number;
  status: ProductStatus;
  image: string;
}

// Interface para Order
export interface Order {
  id: string;
  customer: string;
  date: string;
  amount: string;
  status: OrderStatus;
  payment: string;
  items: number;
}

// Interface para Campaign
export interface Campaign {
  id: string;
  name: string;
  channel: string;
  budget: string;
  spent: string;
  status: CampaignStatus;
  startDate: string;
  endDate: string;
  conversion: string;
}

// Interface para Review
export interface Review {
  id: string;
  product: string;
  customer: string;
  rating: number;
  date: string;
  comment: string;
  status: ReviewStatus;
}


// Interface para Report
export interface Report {
  id: string;
  name: string;
  type: string;
  period: string;
  format: 'PDF' | 'Excel' | 'CSV' | 'HTML';
  generated: string;
  downloads: number;
  size: string;
}

// Interface para estadísticas
export interface StatItem {
  label: string;
  value: string;
  change: string;
}