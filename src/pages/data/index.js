const Data = () => {
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {num.map((d, i) => (
        <h2 key={i}>{d}</h2>
      ))}
    </>
  );
};

export default Data;
