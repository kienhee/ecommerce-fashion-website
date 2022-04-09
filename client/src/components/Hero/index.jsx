import "./hero.scss";
export default function index(props) {
  return (
    <div className="hero">
      <img className="hero__img" src={props.image} alt="" />
      <div className="hero__container container"></div>
      <h1 className="hero__title ">{props.title}</h1>
    </div>
  );
}
