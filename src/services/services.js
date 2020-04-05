export const fetchPerson = async (value) => await fetch(`/api/person/${value}`);

export const fetchAffordability = async (value) =>
  await fetch(`/api/affordability/${value}`);

export const fetchExposure = async (value) =>
  await fetch(`/api/exposure/${value}`);
