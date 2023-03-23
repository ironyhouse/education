/**
 * Array
 */
let fruits: string[] = ['Apple', 'Orange', 'Banana'];
let fruits1: Array<string> = ['Apple', 'Orange', 'Banana'];

// Multi Type Array
let values: (string | number)[] = ['Apple', 2, 'Orange', 3, 4, 'Banana'];

// Readonly Array
let user: readonly [number, string] = [1, 'Banana'];
let user1: ReadonlyArray<string> = ['Apple', 'Banana'];

// Tuples array
let employee: [number, string] = [1, 'Steve'];
let person: [number, string, boolean] = [1, 'Steve', true];

/**
 * Enum
 */
// auto increment
enum Status {
  ERROR, // 0
  NORMAL, // 1
}
enum Direction {
  Up = 1, // 1
  Down, // 2
  Left, // 3
  Right, // 3
}

enum RespStatus {
  ERROR, // 0
  NORMAL = 'normal', // 'normal'
  GENERATE = getSomeValue(),
}
function getSomeValue() {
  return 1;
}
// enum RespStatus1 {
//   GENERATE = getSomeValue()
//   NORMAL //  !ERROR (can’t increment)
// }
// enum RespStatus2 {
//   NORMAL = 'normal', // 'normal'
//   GENERATE // !ERROR (can’t increment)
// }

// usage
enum UserResponse {
  No = 0,
  Yes = 1,
}
function respond(recipient: string, message: UserResponse): void {
  // ...
}
respond('Princess Caroline', UserResponse.Yes);

/**
 * Interface
 */
interface UserInterface {
  readonly firstName: string;
  pointsCount?: number; // optional parameter
  log: (id: number) => string;
  [propName: string]: any;
}
interface RoleInterface {
  role: string;
}
// interface extends
interface userWithRole extends UserInterface, RoleInterface {
  createAt: Date;
}
let userInterface: userWithRole = {
  name: 'rectangle', // name: 'rectangle' => [propName: string]: any;
  firstName: 'Abc',
  pointsCount: 20,
  role: 'Support',
  createAt: new Date(),
  log(id) {
    return 'abc' + id;
  },
};

// interfaces with the same name
interface User1 {
  name: string;
}
interface User1 {
  role: string;
}
let userIntersection1: User1 = {
  name: 'testName',
  role: 'admin',
};

// interface example
interface SquareConfig {
  color?: string;
  width?: number;
}
function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: 'white', area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}
let mySquare = createSquare({ color: 'black' });

//
//
//
/**
 * Union
 */
type NumberOrString = number | string;
let val: NumberOrString = 10;
let val1: NumberOrString = '10';

/**
 * Intersection
 */
type User = {
  name: string;
};
type Role = {
  role: string;
};
let userIntersection: User & Role = {
  name: 'testName',
  role: 'admin',
};

/**
 * type vs interface
 */
type Test = {
  name: string;
};
// interface Test {} // !ERROR (can't use type and interface with same name)

//
//
//
// pointsCount?: number; // optional parameter
// Variables use const whereas properties use readonly.
// Assertions: "as"