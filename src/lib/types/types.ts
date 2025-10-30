export interface ApiError {
    message: string;
    status?: string;
}

export interface Restaurant {
  id: string;
  name: string;
  image_url: string;
  filter_ids: string[];
  delivery_time_minutes: number;
  price_range_id: string;
};

export interface RestaurantWithStatus extends Restaurant {
  is_open?: boolean;
};

export interface RestaurantResponse {
  restaurants: Restaurant[];
}

export interface PriceRange {
  id: string;
  range: string;
}

export interface Filter {
  id: string;
  name: string;
  image_url: string;
}
