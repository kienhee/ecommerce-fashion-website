import "./heading.scss";
export default function index(props) {
  return (
    <>
      <div className="heading__container">
        <h1 className="heading">{props.heading}</h1>
        <p className="heading-sub">{props.subHeading}</p>
      </div>
    </>
  );
}
