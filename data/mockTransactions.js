export const mockTransactions = Array.from({ length: 1000 }, (_, i) => {
  const year = 2021 + Math.floor(Math.random() * 3);
  const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, "0");
  const day = String(Math.floor(Math.random() * 28) + 1).padStart(2, "0");
  const txId = Math.random().toString(36).substring(2, 9);
  const usernames = [
    "johndoe",
    "janedoe",
    "bobsmith",
    "alicejones",
    "charliebrwn",
    "davidmiller",
    "evawilson",
    "frankmoore",
    "gracetaylor",
    "henryanderson",
    "ivythomas",
    "jackjackson",
    "karenwhite",
    "leoharris",
    "miamartin",
    "noahthompson",
    "oliviagarcia",
    "petermartinez",
    "quinnrobinson",
    "rachelclark",
  ];
  return {
    txId,
    user: usernames[Math.floor(Math.random() * usernames.length)],
    date: `${year}-${month}-${day}`,
    cost: (Math.random() * 500 + 1).toFixed(2),
  };
});
