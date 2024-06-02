const DETAILS =
  "https://jvvkjy8utk.execute-api.eu-central-1.amazonaws.com/tourist/api/countries/by-cca3";

export type CountryDetails = {
    	
name:{	
common:string,
official: string
}
cca3:	string,
flags:{	
png: string,
svg: string,
alt: string,
},
borders: Array<string>
};

export default async function getCountryDetails(cca3: string): Promise<CountryDetails> {
    const response = await fetch(`${DETAILS}/${cca3}`)
    const details = await response.json();
    return details;
    }