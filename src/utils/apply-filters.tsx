export function matchesCategory(r: any, selectedFilters: string[]): boolean {
  const categoryFilters = selectedFilters.filter((f) => f.startsWith("cat-"));
  if (categoryFilters.length === 0) return true;
  return r.filter_ids.some((fid: string) =>
    categoryFilters.includes(`cat-${fid}`)
  );
}

export function matchesDelivery(r: any, selectedFilters: string[]): boolean {
  const deliveryFilters = selectedFilters.filter((f) => f.startsWith("deliv-"));
  if (deliveryFilters.length === 0) return true;

  const time = r.delivery_time_minutes;
  if (deliveryFilters.includes("deliv-fast") && time < 15) return true;
  if (deliveryFilters.includes("deliv-medium") && time >= 15 && time < 30)
    return true;
  if (deliveryFilters.includes("deliv-slow") && time >= 30 && time < 60)
    return true;
  if (deliveryFilters.includes("deliv-long") && time >= 60) return true;

  return false;
}

export function matchesPrice(r: any, selectedFilters: string[]): boolean {
  const priceFilters = selectedFilters.filter((f) => f.startsWith("price-"));
  if (priceFilters.length === 0) return true;
  return priceFilters.includes(`price-${r.price_range_id}`);
}

export function matchesOpenNow(r: any, selectedFilters: string[]): boolean {
  const openFilters = selectedFilters.filter((f) => f === "open-now");
  if (openFilters.length === 0) return true;
  return r.is_open === true; 
  // need a separate call (`${BASE_URL}/open/{id} (where id is specific restaurant's)
  // api gives boolean "is_open": false or true
}

export function applyFilters(restaurants: any[], selectedFilters: string[]) {
  if (!selectedFilters || selectedFilters.length === 0) return restaurants;

  return restaurants.filter(
    (r) =>
      matchesCategory(r, selectedFilters) &&
      matchesDelivery(r, selectedFilters) &&
      matchesPrice(r, selectedFilters) &&
      matchesOpenNow(r, selectedFilters)
  );
}
