const ALL =
  "https://jvvkjy8utk.execute-api.eu-central-1.amazonaws.com/tourist/api/countries/all";

export type Country = {
  name: {
    common: string;
    official: string;
  };
  cca3: string;
  capitals: Array<string>;
};

export default async function getCountries(): Promise<Country[]> {
  const response = await fetch(ALL);
  const countries = await response.json();
  return countries;
}
