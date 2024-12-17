import { BasketItem, Product } from "@/types";

interface SetQuantityProps {
  removeItem: (id: string) => void;
  addItem: (product: Product) => void;
  getItemCount: (id: string) => number;
  item: BasketItem;
}
const SetQuantity = ({
  item,
  addItem,
  removeItem,
  getItemCount,
}: SetQuantityProps) => {
  return (
    <div className="flex gap-1.5 items-center overflow-hidden rounded-md border-base border shrink-0">
      <button
        onClick={() => removeItem(item?.product?.id)}
        className="lg:h-7 lg:w-6 h-8 w-6  text-base border-base hover:bg-base hover:text-white rounded-none group flex items-center justify-center"
      >
        <span className="h-[1.5px] w-2 bg-base group-hover:bg-white" />
      </button>
      <span className="text-sm text-gray-500">
        {getItemCount(item?.product?.id)}
      </span>
      <button
        onClick={() => addItem(item?.product)}
        className="lg:h-7 lg:w-6 h-8 w-6  text-base border-base hover:bg-base hover:text-white rounded-none"
      >
        +
      </button>
    </div>
  );
};

export default SetQuantity;
