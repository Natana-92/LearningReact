import React, { createContext, useState, useContext } from "react";
import colorData from "../data/colors.json";
import { v4 } from "uuid";

const ColorContext = createContext();
// consumer
export const useColors = () => useContext(ColorContext);

// provider
export function ColorProvider({ children }) {
    const [colors, setColors] = useState(colorData);

    const addColor = (title, color) => {
        setColors([
            ...colors,
            {
                id: v4(),
                rating: 0,
                title,
                color,
            },
        ]);
    };

    const rateColor = (id, rating) => {
        setColors(
            colors.map((color) =>
                color.id === id ? { ...color, rating } : color
            )
        );
    };

    const removeColor = (id) =>
        setColors(colors.filter((color) => color.id !== id));

    return (
        <ColorContext.Provider
            value={{ colors, addColor, rateColor, removeColor }}>
            {children}
        </ColorContext.Provider>
    );
}
