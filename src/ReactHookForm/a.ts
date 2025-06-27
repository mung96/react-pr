function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}
let num = returnFirstValue([0, "a", 2]);

type A = {
  name: string;
  level: number;
};

type B = {
  name: string;
  point: number;
};

type Union = A | B;

type Intersect = A & B;

const c: Union = {
  name: "",
  //   level: 0,
  point: 0,
};

const d: Intersect = {
  name: "",
  level: 0,
  point: 0,
};
