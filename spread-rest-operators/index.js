// spread operator
const myArray = [0];
const newArray = [...oldArray, 1, 2];

const oldObject = { name: 'max' };
const newObject = { ...oldObject, newProp: 5 };

// rest operator
const filter = (...args) => {
	return args.filter((el) => el === 1);
};

console.log(filter(1, 2, 3, 4));
