import CtdtCard from '../components/ctdtCard'
export default function HomePage() {
  return <>
    <div className="container d-flex flex-column align-items-center">
      code today update
      <div className="d-flex mt-5">
        <CtdtCard count={100} title={"Lớp"} />
        <CtdtCard count={100} title={"Lớp"} />
        <CtdtCard count={100} title={"Lớp"} />
      </div>
    </div>
  </>
}
