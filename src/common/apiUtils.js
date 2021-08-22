export const fetchJustEatByPostCode = async () => {
  const res = await fetch('/api/justeat/postcode?q=tw92jx', () => {
    return res;
  });
  return res.json();
};
