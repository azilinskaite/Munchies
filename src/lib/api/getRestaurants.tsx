const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
import { RestaurantResponse, PriceRange, RestaurantWithStatus, Filter } from "../types/types";

export async function gatewayFetcher<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  try {
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      cache: "no-store",
      ...options,
    });

    if (!response.ok) {
      throw new Error(
        `Networks response was not ok: ${response.status} ${response.statusText}`
      );
    }

    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error", error);
    throw error;
  }
}

export async function getRestaurants(): Promise<RestaurantResponse> {
  return gatewayFetcher<RestaurantResponse>("restaurants");
}

export async function getPriceRangeById(id: string): Promise<PriceRange> {
  return gatewayFetcher<PriceRange>(`price-range/${id}`);
}

export async function getRestaurantFilters(): Promise<Filter[]> {
  const { filters } = await gatewayFetcher<{ filters: Filter[] }>("filter");
  return filters;
}

export async function getRestaurantOpenStatus(id: string): Promise<boolean> {
  const { is_open } = await gatewayFetcher<{ is_open: boolean }>(`open/${id}`);
  return is_open;
}

// export async function getRestaurantOpenStatus(id: string): Promise<OpenStatus> {
//   try {
//     const result = await fetch(`${baseUrl}/open/${id}`, { cache: "no-store" });
//     if (!result.ok) throw new Error(`HTTP error! Status: ${result.status}`);
//     const json = await result.json();
//     return json.is_open as boolean;
//   } catch (error: any) {
//     console.error("Fetch Error:", error.message);
//     throw error;
//   }
// }
