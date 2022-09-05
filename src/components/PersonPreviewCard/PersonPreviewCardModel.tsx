// MISC
import { IProject } from "models/interfaces";

export interface IProps {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
  isAvailable: boolean;
  assignedProject: IProject;
}
