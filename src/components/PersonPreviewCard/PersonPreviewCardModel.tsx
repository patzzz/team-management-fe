// MISC
import { IPerson, IProject } from "models/interfaces";

export interface IProps {
  key: string;
  person: IPerson;
  onSelect: (person: IPerson) => void;
}
