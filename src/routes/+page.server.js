
import { redirect } from '@sveltejs/kit';

export async function load() {

  const reponse = await fetch('https://guess-what-back.onrender.com/themes', {
    method: "GET", 
    headers: {
      "Content-Type": "application/json", 
    },                     
  });

  
  const result = await reponse.json();

  
  
  return {
    themes: result
  };
}
