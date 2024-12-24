import "./section.css"

const Section = (props) => {
  return (
    <>
      <div className="news container rounded-3 mt-4">
        <h3 className="rounded">
          {props.title}
        </h3>
        <p>
          {props.description}
        </p>
      </div>
    </>
  )
}

export default Section;
