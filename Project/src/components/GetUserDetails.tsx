const GetUserDetails = async (id: number) => {
  const response = await fetch(`https://fakestoreapi.com/users/${id}`);
  const data = await response.json();
  return data;
};

export default GetUserDetails;
