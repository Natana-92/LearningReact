import StarRating from "./StarRating";
import { FaTrash } from "react-icons/fa";
import { useColors } from "../customHook/color-hooks";
export default function Color({ id, title, color, rating }) {
    const { rateColor, removeColor } = useColors();
    return (
        <section>
            <h1>{title}</h1>
            <div style={{ height: 50, backgroundColor: color }} />
            <button onClick={() => removeColor(id)}>
                <FaTrash />
            </button>
            <StarRating
                selectedStars={rating}
                onRate={(rating) => rateColor(id, rating)}
            />
        </section>
    );
}
