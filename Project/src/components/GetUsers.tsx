const GetUsers = async () => {
  const response = await fetch("https://fakestoreapi.com/users");
  const data = await response.json();
  return data;
};

export default GetUsers;
