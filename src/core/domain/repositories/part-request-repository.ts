import { CompanyInstance } from "src/core/company/company-instance";
import { PartRequest } from "../entities/part-request";
import { RejectPartRequestDTO } from "src/application/part-request/dto/reject-part-request-dto";
import { ApprovePartRequestDTO } from "src/application/part-request/dto/approve-part-request-dto";
import { Filters } from "src/shared/types/filters.interface";
import { IPartRequestsRelationalDataList } from "src/shared/types/part-request/part-request-relational-data";

export abstract class PartRequestRepository {
  abstract create(companyInstance: CompanyInstance, data: PartRequest): Promise<void>;
  abstract createBatch(data: PartRequest[]): Promise<PartRequest[]>;
  abstract findById(companyInstance: CompanyInstance, id: string): Promise<any>;
  abstract list(
    companyInstance: CompanyInstance,
    page: number,
    perPage: number,
    filters?: Filters,
  ): Promise<IPartRequestsRelationalDataList>;
  abstract listByWorkOrder(companyInstance: CompanyInstance, workOrderId: string): Promise<PartRequest[]>;
  abstract reject(companyInstance: CompanyInstance, rejectData: RejectPartRequestDTO): Promise<void>;
  abstract approve(companyInstance: CompanyInstance, approveData: ApprovePartRequestDTO): Promise<void>;
}