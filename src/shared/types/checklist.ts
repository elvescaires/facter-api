import { TypeOfMaintenance } from "src/core/enum/type-of-maintenance.enum";
import { ITrailerWithAxles } from "src/shared/types/trailer/trailer-with-axles";

export interface IChecklistRelationalDataPrismaResponse {
  id: string;
  workOrderId: string;
  templateId: string;
  startAt: string | null;
  endAt: string | null;
  isCanceled: boolean;
  createdAt: string;
  updatedAt: string;
  template: {
    id: string;
    name: string;
    icon: string | null;
    checklistCategories: {
      id: string;
      name: string;
      description: string;
      ChecklistItemTemplate: {
        id: string;
        description: string;
        weight: number;
      }[];
    }[];
  };
  workOrder: {
    id: string;
    displayId: string;
    typeOfMaintenance: TypeOfMaintenance;
    fleet: {
      id: string;
      fleetNumber: string;
      trailers: ITrailerWithAxles[];
    };
  };
}

export interface IChecklistTransformedResponse {
  id: string;
  workOrderId: string;
  templateId: string;
  startAt: string | null;
  endAt: string | null;
  isCanceled: boolean;
  createdAt: string;
  updatedAt: string;
  template: {
    id: string;
    name: string;
    icon: string | null;
    templateCategories: {
      id: string;
      name: string;
      description: string;
      templateItems: {
        id: string;
        description: string;
        weight: number;
      }[];
    }[];
  };
  workOrder: {
    id: string;
    displayId: string;
    typeOfMaintenance: TypeOfMaintenance;
    fleet: {
      id: string;
      fleetNumber: string;
      trailers: ITrailerWithAxles[];
    };
  };
}