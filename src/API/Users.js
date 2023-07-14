// obtenemo los datos ramdon de perfles en el server
const getUserData = async () => {
  const reponse = await fetch("https://randomuser.me/api/");
  const data = await reponse.json();



  // retornamos los datos del el elemento results, 
//   y especificamos cual es con la posicion en la que está
  return data.results[0];
};

export { getUserData };
