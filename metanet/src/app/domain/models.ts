

export interface User {
  name?: string;
  image?: string;
}

export interface customer {
  id?: number;
  creator?:User;
  invoice?:number;
  customer?: User;
  amount?: number;
  status?: string;
}


export interface RevenueStats{
  totalRevenue?: number;
  totalSales?: number;
  mostSellingCategory?: string;
  totalRefunds?: number;
  averageRevenue?: number;
  monthlyRevenueGrowth?: number;
}

export interface AdvanceUser {
  id?: number;
  name?: string;
  email?: string;
  contact?: string;
  status?: string;
}
export interface UserList {
  users: AdvanceUser[];
  total2?: number;
  activeUsers?: number;
  deactivatedUsers?: number;
}


export interface model {
  id?: number;
  title?: string;
  image?: string;
  format?: string;
  price?: number;
  reviews?: number;
}



export interface modelResponse {
  data: model[];
}

interface revenue {categoryName:string, totalRevenue:string}
export interface Statistics {
  totalModels?: number;
  totalUsers?: number;
  totalRevenue?: string;
  totalPurchases?: number;
  totalLikes?: string;
  totalDownloads?: string;
  mostPopularModel?: model;
  lastMonthRevenue: revenue[];
  lastWeekRevenue?: any[];
  newModelsLastWeek?: number;
  newUsersLastWeek?: number;
  improvement?: {
    models: number,
    users: number,
    revenue: number
  }

}

export interface model2 {
  id?: number;
  user?: User;
  name?: string;
  image?: string;
  category?: string;
  price?: number;
  reviews?: number;
}

export interface error {
  message?: string;
  statusCode?: number;
}

