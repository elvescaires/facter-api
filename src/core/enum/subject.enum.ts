export enum SubjectEnum {
  Company = 'Company',
  User = 'User',
  Project = 'Project',
  Fleet = 'Fleet',
  Carrier = 'Carrier',
  Service = 'Service',
  Checklist = 'Checklist',
  Part_Request = 'PartRequest',
}

export type TSubject = keyof typeof SubjectEnum;