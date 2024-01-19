// Send a POST request
await axios({
    method: "post",
    url: `${BASE_URL}transaction/initiate`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      "amount":300000,
      "email":"eemmanuel.idoko@gmail.com",
      "currency":"NGN",
      "initiate_type": "inline",
      "transaction_ref":uuidv4(),
      // "callback_url":"http://squadco.com",
      "callback_url":"http://localhost:3000/home#"
  },
  }).then(function (response) {
      console.log(response.data.data.checkout_url)
      setUrl(response.data.data.checkout_url)
      // navigate(response.data.data.checkout_url);
      window.open(response.data.data.checkout_url, '_blank', 'noreferrer');

    });