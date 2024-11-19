export type ChartType = "scatter" | "heatmap" | "parallel";

export type EVData = {
    vehicle_id: "EV001" | "EV002" | "EV003" | "EV004" | "EV005",
    distance_traveled: number,
    charging_time: number,
    average_speed: number,
    region: "North" | "East" | "West" | "South",
    date: string
}

export type Filters = {
    vehicle_id?: "EV001" | "EV002" | "EV003" | "EV004" | "EV005",
    region?: "North" | "East" | "West" | "South",
    date?: string
}