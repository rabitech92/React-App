import React from 'react'

function Main() {
  return (
    <div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto col-md-2 col-xl-2 px-sm-2 px-0  text-black " style={{backgroundColor: (`#cd5c5c`)}}>
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">Menu</span>                    
                </a>              
                 <hr/>
                 <ul>Patient</ul>
                 <ul>Doctor</ul>
                
                <div class="footer pb-4">
                    
                    
                </div>
            </div>
        </div>
        <div class="col py-3">
            Content area...
        </div>
    </div>
</div>
  )
}

export default Main