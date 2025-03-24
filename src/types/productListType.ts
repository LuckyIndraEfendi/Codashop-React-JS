export interface ProductListTypes {
  id: string;
  name: string;
  slug_name: string;
  thumbnail: string;
  product_link: string;
}

export interface ProductDetailsTypes {
  product_name: string;
  product_banner: string;
  description: string;
  app_links: AppLinks;
  user_player: UserPlayer;
  product_list: ProductItem[];
  payment_list: PaymentItem[];
}

export interface AppLinks {
  app_store: string;
  google_play: string;
}

export interface PlayerData {
  label: string;
  type: string;
  input_placeholder: string;
  player_example_banner: string;
}

export interface UserPlayer {
  player_data: PlayerData[];
  placeholder: string;
}

export interface ProductItem {
  id: number;
  title: string;
  price: number;
  is_sold_out: boolean;
  is_limited_time: boolean;
  is_free: boolean;
  quantity: number;
  cashback_price?: number;
  is_popularity: boolean;
}

export interface PaymentItem {
  id: number;
  payment_name: string;
  payment_icon: string;
  payment_method: string;
  is_ppn: boolean;
  is_ppn_rate: number;
  is_free: boolean;
  is_popularity: boolean;
}

export interface Product {
  id: number;
  name: string;
  slug_name: string;
  thumbnail: string;
  product_link: string;
  details_products: ProductDetailsTypes;
}

export interface ResultUserIDCheck {
  status: string;
  server_time: string;
  message: string;
  nickname: string;
  type_name: string;
}
