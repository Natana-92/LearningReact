import React from "react";
import Star from "./Star";

export default function StarRating({ totalStar = 5, style = {}, selectedStars}) {
    const createArray = (length) => [...Array(length)];
    
    return (
        <div style={{ padding: "5px", ...style }} >
            {createArray(totalStar).map((n, i) => (
                <Star
                    key={i}
                    selected={selectedStars > i}
                />
            ))}
            <p>
                {selectedStars} / {totalStar}
            </p>
        </div>
    );
}
