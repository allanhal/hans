async function listReviews() {
  const accountId = account.value;
  const locationId = location.value;
  const apiKey = api.value;

  const response = await fetch(
    //   `https://mybusiness.googleapis.com/v4/${accountId}/locations/${locationId}/reviews`,
    "https://mybusiness.googleapis.com/v4/accounts",
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    }
  );
  const reviews = await response.json();
  console.log(reviews);
}

function executar() {
  listReviews();
}

console.log("Carreguei completo");
