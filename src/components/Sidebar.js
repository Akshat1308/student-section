import React from 'react'
const Sidebar = () => {
    return (
         <div class="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{backgroundColor:"#2CD3E1"}}>
            <ul class="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
                <li class="nav-item mb-2 mt-3"><a class="nav-link text-dark" href="#"><h5>Students name</h5></a></li>
                <li class="nav-item mb-2 "><a class="nav-link text-dark" href="#"><i class="fas fa-user font-weight-bold"></i> <span className="ml-3">Overview</span></a></li>
                <li class="nav-item mb-2">
                    <a class="nav-link text-dark" href="#submenu1" data-toggle="collapse" data-target="#submenu1"><i class="far fa-file-word font-weight-bold"></i> <span className="ml-3"> Reports▾</span></a>
                    <ul class="list-unstyled flex-column pl-3 collapse" id="submenu1" aria-expanded="false">
                       <li class="nav-item mb-2 "><a class="nav-link text-dark" href=""><i class="fas fa-book-reader"></i> Data Report </a></li>
                       <li class="nav-item mb-2 "><a class="nav-link text-dark" href=""> <i class="fas fa-book-medical"></i> File Report </a></li>
                    </ul>
                </li>
                <li class="nav-item mb-2"><a class="nav-link text-dark" href="#"><i class="far fa-chart-bar font-weight-bold"></i> <span className="ml-3">Analytics</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-dark" href="#"><i class="fas fa-file-export font-weight-bold"></i><span className="ml-3">Export</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-dark" href="#"><i class="fas fa-tablet-alt font-weight-bold"></i><span className="ml-3">Snippets</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-dark" href="#"><i class="fas fa-atom font-weight-bold"></i> <span className="ml-3">Flex</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-dark" href="#"><i class="far fa-folder font-weight-bold"></i> <span className="ml-3">Layouts</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-dark" href="#">Templates</a></li>
                <li class="nav-item mb-2"><a class="nav-link text-dark" href="#">Themes</a></li>
            </ul>
       </div>
    )
}
 
export default Sidebar