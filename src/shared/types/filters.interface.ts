export interface Filters {
  status?: string;
  startDate?: Date;
  endDate?: Date;
}

export interface IEventFilters {
  page?: number;
  perPage?: number;
  event?: string;
  subject?: string;
  startDate?: Date;
  endDate?: Date;
}
