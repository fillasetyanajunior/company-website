export interface Dashboard{
      product: number;
      transactionProduct: number;
      transactionService: number;
      warrantie: number;
      date: [];
}

export interface DashboardActions{
      url: string;
      choices: number;
      token: string | undefined;
}