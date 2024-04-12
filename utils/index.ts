import { CarProps, FilterProps } from "@/types";

export async function fetchCars (filters: FilterProps) {
   const {manufacturer, year, model, limit, fuel } = filters;
 const headers = {
    'X-RapidAPI-Key': '10b2b5bb32msh378abeb90b89485p12cf4fjsnadbf5db65db0',
	'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
 }

 const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {headers: headers}
 );

 const result = await response.json()
 return result
}


export const generateCarImageUrl = (car: CarProps, angle?: string) => {
   const url = new URL("https://cdn.imagin.studio/getimage");
   const { make, model, year } = car;
 
   url.searchParams.append('customer', 'hrjavascript-mastery');
   url.searchParams.append('make', make);
   url.searchParams.append('modelFamily', model.split(" ")[0]);
   url.searchParams.append('zoomType', 'fullscreen');
   url.searchParams.append('modelYear', `${year}`);
   // url.searchParams.append('zoomLevel', zoomLevel);
   url.searchParams.append('angle', `${angle}`);
 
   return `${url}`;
 }
 
 
 export const updateSearcParams= (type: string, value: string) => {
   const searchParams = new URLSearchParams(window.location.search)

    searchParams.set(type, value)
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
   return newPathname
   }
   

   export const deleteSearchParams = (type: string) => {
      // Set the specified search parameter to the given value
      const newSearchParams = new URLSearchParams(window.location.search);
    
      // Delete the specified search parameter
      newSearchParams.delete(type.toLocaleLowerCase());
    
      // Construct the updated URL pathname with the deleted search parameter
      const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;
    
      return newPathname;
    };