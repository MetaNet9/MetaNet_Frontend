

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
  review?: number;
}

export interface modelAdvanced{
    id?: number;
    title?: string;
    description?: string;
    modelUrl?: string;
    image1Url?: string;
    image2Url?: string;
    image3Url?: string;
    tags?: string[];
    downloadType?: string;
    license?: string;
    format?: string;
    price?: number;
    downloads?: number;
    likes?: number;
    createdAt?: string;
    review?: number;
}



export interface modelResponse {
  data: modelAdvanced[];
}

interface revenue {categoryName:string, totalRevenue:string}
export interface Statistics {
  totalModels?: number;
  totalUsers?: number;
  totalRevenue?: string;
  totalPurchases?: number;
  totalLikes?: string;
  totalDownloads?: string;
  mostPopularModel?: modelAdvanced;
  lastMonthRevenue: revenue[];
  lastWeekRevenue?: any[];
  newModelsLastWeek?: number;
  newUsersLastWeek?: number;
  moderatorsCount?: number;
  sellersCount?: number;
  pendingRequests?: number;
  totalCategories?: number;
  totalBuyers?: number;
  improvement?: {
    models: number,
    users: number,
    revenue: number,
    sellers: number,
    pendingRequests: number,
    buyers: number
  }

}

// export interface advannce{
//   totalModels?: number;
//   totalUsers?: number;
//   totalRevenue?: number;
//   totalPurchases?: number;
//   totalLikes?: number;
//   totalDownloads?: number;
//   mostPopularModel?: model;
//   lastMonthRevenue?: number;
//   lastWeekRevenue?: number;
//   newModelsLastWeek?: number;
//   newUsersLastWeek?: number;
//   moderatorsCount?: number;
//   sellersCount?: number;
//   pendingRequests?: number;
//   totalCategories?: number;
//   totalBuyers?: number;
//   improvement?: {
//     models: number,
//     users: number,
//     revenue: number,
//     sellers: number,
//     pendingRequests: number,
//     buyers: number
//   }
// }

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
export interface moderatorContributions{
  user: string;
  contributions: number;
}

export interface actions{
  model: modelAdvanced;
  action: string;
}

export interface ModeratorStats{
  modelstoReview: number;
  modelsReviewed: number;
  modelsReview: number;
  recentActions: actions[];
  modelContributions: moderatorContributions[];
}
