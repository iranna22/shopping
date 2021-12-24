import { Button } from "react-bootstrap";
import { CartState } from "../context/Context";

const Filters = () => {
  const { productDispatch } = CartState();
  return (
    <div className="filters">
      <Button
        variant="light"
        onClick={() =>
          productDispatch({
            type: "CLEAR_FILTERS",
          })
        }
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filters;
