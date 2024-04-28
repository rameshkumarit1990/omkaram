import "./ExploreContainer.css";

type Props = {
  name: string;
}

const ExploreContainer = (props: Props) => {
  const { name } = props;
  return (
    <div id="container">
      <strong>{name}</strong>
    </div>
  );
};

export default ExploreContainer;
