const List = ({ data }) => {
  console.log({ data });
  return (
    <div>
      {data.map((d) => {
        return <> <p>{`${d.id} ${d.name} ${d.description}\n`}</p><br/></>;
      })}
    </div>
  );
};

export const getStaticProps = () => {
  return {
    props: {
      data: [
        {
          id: 1,
          name: "test 1",
          description: "description 1",
        },
        {
          id: 2,
          name: "test 2",
          description: "description 2",
        },
      ],
    },
  };
};

export default List;
