export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  emailAddress: string;
  password: string;
  profileImageUrl: string;
}

export interface IProject {
  id: number;
  title: string;
  description: string;
  status: ProjectStatusEnum;
  startDate: Date;
  endDate: Date;
  deadline: Date;
}

export interface IPerson {
  id: number;
  firstName: string;
  lastName: string;
  position: PersonPosition;
}

export enum ProjectStatusEnum {
  IN_PROGRESS = "IN_PROGRESS",
  PENDING = "PENDING",
  ON_HOLD = "ON_HOLD",
  FINISHED = "FINISHED",
}

export enum DashboardCardDataType {
  PROJECTS,
  PEOPLES,
}
export enum PersonPosition {
  FRONTEND = "Frontend ",
  BACKEND = "Backend",
  DESIGN = "Ui/Ux Design",
  DEVOPS = "DevOps",
}
