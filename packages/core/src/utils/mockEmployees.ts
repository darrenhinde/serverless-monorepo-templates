import { CreateEmployeeSchema } from "@nextsystems/schemas/EmployeeSchema";

export const mockEmployees = (count: number): CreateEmployeeSchema[] => {
  const firstNames = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Emma",
    "Frank",
    "Grace",
    "Henry",
    "Ivy",
    "Jack",
  ];
  const lastNames = [
    "Smith",
    "Johnson",
    "Williams",
    "Brown",
    "Jones",
    "Garcia",
    "Miller",
    "Davis",
    "Rodriguez",
    "Martinez",
  ];
  const domains = [
    "example.com",
    "test.com",
    "mockmail.com",
    "fakemail.org",
    "dummymail.net",
  ];
  const jobs = [
    "Software Engineer",
    "Product Manager",
    "Designer",
    "Marketing Manager",
    "Sales Manager",
  ];

  function getRandomElement<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }

  function generateEmail(firstName: string, lastName: string): string {
    return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${getRandomElement(domains)}`;
  }

  function generateAvatarUrl(name: string): string {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`;
  }

  return Array.from({ length: count }, () => {
    const firstName = getRandomElement(firstNames);
    const lastName = getRandomElement(lastNames);
    const fullName = `${firstName} ${lastName}`;

    return {
      name: fullName,
      job: getRandomElement(jobs),
      email: generateEmail(firstName, lastName),
      image: generateAvatarUrl(fullName),
    };
  });
};
