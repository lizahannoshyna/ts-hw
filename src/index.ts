// 1. Базові типи
let age: number = 50;
let name: string = 'Max';
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined = undefined;
let callback: (a: number) => number = (a) => { return 100 + a };

console.log('--- Task 1 ---');
console.log('Age:', age, '| Name:', name, '| Callback:', callback(5));

// 2
let anything: unknown = -20;
anything = 'Text';
anything = {};

console.log('--- Task 2 ---');
console.log('Anything:', anything);

// 3
let some: unknown;
some = 'Text';

let str: string;

if (typeof some === 'string') {
  str = some;
  console.log('--- Task 3 ---');
  console.log('String result:', str);
}

// 4
let person: readonly [string, number] = ['Max', 21];

console.log('--- Task 4 ---');
console.log('Person:', person[0], person[1]);

// 5
enum LoadingStatus {
  LOADING = 'LOADING',
  READY = 'READY',
}

let currentStatus: LoadingStatus = LoadingStatus.LOADING;
console.log('--- Task 5 ---');
console.log('Початковий статус:', currentStatus); 

currentStatus = LoadingStatus.READY;
console.log('Оновлений статус:', currentStatus); 

// 6
let value: string | number;
value = 'Текст'; 
value = 100; 

console.log('--- Task 6 ---');
console.log('Union value:', value);

// 7
let statusState: 'enable' | 'disable';
statusState = 'enable';
console.log('--- Task 7 ---');
console.log('Поточний стан:', statusState); 

statusState = 'disable';
console.log('Оновлений стан:', statusState); 

// 8
console.log('--- Task 8 ---');
function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}

showMessage('Hello, TypeScript!');

const result = calc(5, 10);
console.log('Результат calc:', result); 

try {
  customError();
} catch (error) {
  console.log('Спіймали помилку:', (error as Error).message);
}

// 9
console.log('--- Task 9 ---');
type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: 'open' | 'close';
  details?: {
    createAt: Date;
    updateAt: Date;
  };
};

const page1: Page = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  },
};

const page2: Page = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
};

console.log('Page 1:', page1.title, '| Status:', page1.status);
console.log('Page 2:', page2.title, '| Status:', page2.status);