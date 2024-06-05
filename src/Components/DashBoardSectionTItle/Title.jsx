
const Title = ({head,subHead}) => {
  return (
    <div className="mt-10 mb-10">
          <h2  className="text-xl font-bold text-blue-800">{subHead}</h2>
          <h2 className="text-2xl md:text-3xl xl:text-4xl capitalize text-blue-900 font-bold">{head}</h2>
    </div>
  )
}

export default Title