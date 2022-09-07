// MISC
import { IProject } from "models/interfaces";
import { MomentInput } from "moment";

export interface IProps {
  project: {
    title?: String;
    description?: String;
    status?: String;
    startDate?: MomentInput;
    endDate?: MomentInput;
    deadline?: MomentInput;
  };
  onSelect: (project: any) => void;
  onSelectPersons: (project: any) => void;
}
