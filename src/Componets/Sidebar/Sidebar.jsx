import "./Sidebar.css"

const Sidebar=()=>{
    return(
<div className="bg-light rounded-start p-3">
  <div className="d-flex justify-content-between align-items-center mb-3">
    <div className="fw-bold">All contacts</div>
    <div className=" align-self-start">10</div>
  </div>
  <div className="mb-3 d-flex justify-content-between border-bottom pb-2">
    <div className="contacts_div bg_color_cont_1 text-white px-3 py-2 rounded">
      Work
    </div>
    <div className="rounded bg_color_cont_1  bg_color_cont">{2}</div>
  </div>
  <div className="mb-3 d-flex justify-content-between border-bottom pb-2">
    <div className="contacts_div bg_color_cont_2 text-white px-3 py-2 rounded">
      Family
    </div>
    <div className="rounded bg_color_cont_2 bg_color_cont">{3}</div>
  </div>
  <div className="mb-3 d-flex justify-content-between border-bottom pb-2">
    <div className="contacts_div bg_color_cont_3 text-white px-3 py-2 rounded">
      Private
    </div>
    <div className="rounded bg_color_cont_3 bg_color_cont">{2}</div>
  </div>
  <div className="mb-3 d-flex justify-content-between border-bottom pb-2">
    <div className="contacts_div bg_color_cont_4 text-white px-3 py-2 rounded">
      Friends
    </div>
    <div className="rounded bg_color_cont_4 bg_color_cont">{2}</div>
  </div>
</div>



    )
}
export default Sidebar