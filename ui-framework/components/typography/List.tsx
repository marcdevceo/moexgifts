import { ListsProps } from "./types-typography";
import { textColorClass } from "../../theme";
import clsx from "clsx";

export default function List<T>({
  color = "neutral",
  lists,
  renderItem,
}: ListsProps<T>) {
  return (
    <ul className={clsx("list-disc pl-6", textColorClass[color])}>
      {lists.map((item, index) => renderItem(item, index))}
    </ul>
  );
}
