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

export interface IMeeting {
  id: number;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
}

export interface IWorkedInterval {
  id: number;
  projectId: number;
  startDate: Date;
  endDate: Date;
  totalWorkedHours: number;
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
export enum PeoplePositions {
  FRONTEND = "Frontend ",
  BACKEND = "Backend",
  DESIGN = "Ui/Ux Design",
  DEVOPS = "DevOps",
}
