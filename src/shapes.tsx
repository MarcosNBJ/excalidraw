import {
  ArrowIcon,
  DiamondIcon,
  EllipseIcon,
  EraserIcon,
  FreedrawIcon,
  ImageIcon,
  LineIcon,
  RectangleIcon,
  SelectionIcon,
  TextIcon,
} from "./components/icons";
import { KEYS } from "./keys";

export const SHAPES = [
  {
    icon: FreedrawIcon,
    value: "freedraw",
    key: [KEYS.P, KEYS.X],
    numericKey: KEYS["1"],
    fillable: false,
  },
  {
    icon: EraserIcon,
    value: "eraser",
    key: KEYS.E,
    numericKey: KEYS["2"],
    fillable: false,
  },
  {
    icon: SelectionIcon,
    value: "selection",
    key: KEYS.V,
    numericKey: KEYS["3"],
    fillable: true,
  },
  {
    icon: RectangleIcon,
    value: "rectangle",
    key: KEYS.R,
    numericKey: KEYS["4"],
    fillable: true,
  },
  {
    icon: DiamondIcon,
    value: "diamond",
    key: KEYS.D,
    numericKey: KEYS["5"],
    fillable: true,
  },
  {
    icon: EllipseIcon,
    value: "ellipse",
    key: KEYS.O,
    numericKey: KEYS["6"],
    fillable: true,
  },
  {
    icon: ArrowIcon,
    value: "arrow",
    key: KEYS.A,
    numericKey: KEYS["7"],
    fillable: true,
  },
  {
    icon: LineIcon,
    value: "line",
    key: KEYS.L,
    numericKey: KEYS["8"],
    fillable: true,
  },
  {
    icon: TextIcon,
    value: "text",
    key: KEYS.T,
    numericKey: KEYS["9"],
    fillable: false,
  },
  {
    icon: ImageIcon,
    value: "image",
    key: null,
    numericKey: KEYS["0"],
    fillable: false,
  },
  // TODO: frame, create icon and set up numeric key
  // {
  //   icon: RectangleIcon,
  //   value: "frame",
  //   key: KEYS.F,
  //   numericKey: KEYS.SUBTRACT,
  //   fillable: false,
  // },
] as const;

export const findShapeByKey = (key: string) => {
  const shape = SHAPES.find((shape, index) => {
    return (
      (shape.numericKey != null && key === shape.numericKey.toString()) ||
      (shape.key &&
        (typeof shape.key === "string"
          ? shape.key === key
          : (shape.key as readonly string[]).includes(key)))
    );
  });
  return shape?.value || null;
};
