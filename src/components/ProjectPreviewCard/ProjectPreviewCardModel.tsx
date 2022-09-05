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
}
