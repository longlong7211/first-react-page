import CtdtCard from '../components/ctdtCard'
export default function HomePage() {
  return <>
    <div className="container d-flex flex-column align-items-center">
      <h1>TUYỂN SINH</h1>
      <div>Đại học Lạc Hồng là trường đào tạo đa ngành, đa lĩnh vực</div>
      <div className="d-flex">
        <CtdtCard icon={<></>} count={1000} title="Chuong trinh dao tao tien si" />
        <CtdtCard icon={<></>} count={200} title="Chuong trinh dao tao thac si" />
        <CtdtCard icon={<></>} count={10} title="Chuong trinh dao tao dai hoc" />
        <CtdtCard icon={<></>} count={5} title="Chuong trinh dao tao thac si" />
      </div>
    </div>
  </>
}