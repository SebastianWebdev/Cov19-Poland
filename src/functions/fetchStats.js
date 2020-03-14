const fetchStats = async () => {
  try {
    const response = await fetch(
      "https://coronavirus-19-api.herokuapp.com/countries"
    );
    let data = await response.json();
    console.log(data);
    return data;
  } catch {
    return [];
  }
};
export default fetchStats;
