const faker = require("faker");
const currentYear = new Date().getFullYear();
const people = faker.helpers.times(100, (n) => {
  const hireDate = faker.date.between(
    new Date(currentYear - 16, 0, 1),
    new Date(currentYear, 0, 1)
  );
  const birthdate = faker.date.between(
    new Date(hireDate.getFullYear() - 18, 0, 1),
    new Date(hireDate.getFullYear() - 50, 0, 1)
  );
  return {
    employeeId: n + 1,
    name: {
      first: faker.name.firstName(),
      middle: faker.name.firstName(),
      last: faker.name.lastName(),
    },
    birthdate: birthdate,
    hireDate: hireDate,
    ssn: faker.random.number({ min: 100000000, max: 999999999 }),
    gender: faker.random.arrayElement(["male", "female"]),
    maritalStatus: faker.random.arrayElement(["single", "married", "divorced"]),
    address: faker.address.streetAddress(),
    email: faker.internet.email(),
  };
});
console.log(people);

console.log(people);
