const BASE_URL = "https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api"

export async function getRestaurants(params?: Record<string, string>) {
  try {
    const res = await fetch(`${BASE_URL}/restaurants`, { cache: "no-store" }
    )

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json()
    return data.restaurants;
    
  } catch (error) {
    if (error instanceof Error) {
      console.error("Fetch Error:", error.message)
    } else {
      console.error("Fetch Error:", error)
    }
    throw error
  }
}

export async function getPriceRangeById(id: string) {
  try {
    const res = await fetch(`${BASE_URL}/price-range/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    return await res.json();
  } catch (error: any) {
    console.error("Fetch Error:", error.message || error);
    throw error;
  }
}

// export async function getDeliveryTimes() {
//   return getRestaurants(restaurants.delivery_time_minutes);
// }

// export async function getOpenRestaurants() {
//   return getRestaurants({ openNow: true });
// }

export async function getRestaurantFilters() {
  try {
    const res = await fetch(
      `${BASE_URL}/filter`, { cache: "no-store" }
    )
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`)
    }
    const data = await res.json()
    return { data }
    
  } catch (error) {
    if (error instanceof Error) {
      console.error("Fetch Error:", error.message)
    } else {
      console.error("Fetch Error:", error)
    }
    throw error
  }
}





