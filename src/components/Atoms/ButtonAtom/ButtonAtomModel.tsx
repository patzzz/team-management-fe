export interface IProps {
  text?: String;
  iconType?: String;
  hasIcon?: Boolean;
  selected?: Boolean;
  handleClick?: (event: Event) => void;
  buttonStyle?: String;
}
