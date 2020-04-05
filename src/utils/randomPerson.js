export const getRandomPerson = () => {
  const persons = [
    {
      name: "Daenerys",
      last_name: "Targaryen",
      affordability_id: 1,
    },
    {
      name: "John",
      last_name: "Snow",
      affordability_id: 2,
    },
    {
      name: "Arya",
      last_name: "Stark",
      affordability_id: 3,
    },
    {
      name: "Khal",
      last_name: "Drogo",
      affordability_id: 4,
    },
    {
      name: "Khal",
      last_name: "Drogo",
      affordability_id: 5,
    },
    {
      name: "Theon",
      last_name: "Greyjoy",
      affordability_id: 6,
    },
    {
      name: "Tyrion",
      last_name: "Lannister",
      affordability_id: 7,
    },
  ];

  return persons[Math.floor(Math.random() * 7)];
};
