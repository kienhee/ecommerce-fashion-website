import "./about_featured.scss";
import Heading from "../Heading";
export default function AboutFeatured(props) {
  return (
    <>
      <Heading
        heading={"Our new collection"}
        subHeading={"Special collection in 2022"}
      />
      <div className="about__featured">
        <div className="about__featured__container container">
          {props.featureData.map((value) => (
            <div className="about__featured__item" key={value.id}>
              <img src={value.imgUrl} className="about__featured__img" alt="" />
              <a
                href={value.urlLink}
                className="about__featured__btn btn btn-white btn-radius btn-small"
              >
                buy now
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
