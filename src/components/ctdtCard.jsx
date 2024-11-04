export default function CtdtCard({ icon, count = 0, title = "" }) {
  return <>
    <div className="card-container d-flex flex-column align-items-center">
      <div style={{ width: 192, height: 192, backgroundColor: "#C6DCFD", borderRadius: 100 }} className="position-relative">
        <div className="position-absolute "></div>
      </div>
      <div style={{ fontSize: 20, fontWeight: 'bold' }}>
        {count}
      </div>
      <div style={{ fontSize: 30, fontWeight: 'bold' }}>
        {title}
      </div>
    </div>
  </>
}