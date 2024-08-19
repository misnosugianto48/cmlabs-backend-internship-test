async function getData() {
  const url = 'https://cmlabs-career.com/api/user/1';
  try {
    await fetch(url)
      .then((res) => res.json())
      .then((res) => console.log(res.data));
  } catch (error) {
    console.error(error.message);
  }
}

getData();
