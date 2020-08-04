<template>
	
		
    <!-- Sidebar -->
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

      <!-- Sidebar - Brand -->
      <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="fas fa-laugh-wink"></i>
        </div>
        <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
      </a>

      <!-- Divider -->
      <hr class="sidebar-divider my-0">

      <!-- Nav Item - Dashboard -->
      <li class="nav-item active">
      <router-link to="/" class="nav-link">
        <!-- <a class="nav-link" href="index.php"> -->
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span> </router-link>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider">

      <!-- Heading -->
      <div class="sidebar-heading">
        Module
      </div>

      <!-- Nav Item - student Collapse Menu -->
      <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
          <i class="fas fa-fw fa-cog"></i>
          <span>Student</span>
        </a>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Student Components:</h6>
            <router-link to="/admission" class="collapse-item">Registration</router-link>	
            <a class="collapse-item" href="cards.html">Update Details</a>
            <router-link to="/allstudents" class="collapse-item">Students Details</router-link>
            <a class="collapse-item" href="cards.html">ICard</a>
          </div>
        </div>
      </li>
      <!-- Nav Item - course Collapse Menu -->
      <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
          <i class="fas fa-fw fa-wrench"></i>
          <span>Course</span>
        </a>
        <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Course Components:</h6>
            <router-link to="/Add-course" class="collapse-item">Add New</router-link>
            <router-link to="/courses" class="collapse-item">All Courses</router-link>
            </div>
        </div>
      </li>

      <!-- Nav Item - Batch Collapse Menu -->
      <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseBatch" aria-expanded="true" aria-controls="collapseBatch">
          <i class="fas fa-fw fa-wrench"></i>
          <span>Batch</span>
        </a>
        <div id="collapseBatch" class="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Batch Components:</h6>
             <router-link to="/add-batch" class="collapse-item">Add New</router-link>
            <router-link to="/batches" class="collapse-item">All Batches</router-link>
            </div>
        </div>
      </li>
       <!-- Nav Item - FESS Collapse Menu -->
      <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseFess" aria-expanded="true" aria-controls="collapseFess">
          <i class="fas fa-fw fa-wrench"></i>
          <span>Fess</span>
        </a>
        <div id="collapseFess" class="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Fess Components:</h6>
            <a class="collapse-item" href="utilities-color.html">Deposit</a>
            <a class="collapse-item" href="utilities-border.html">Search</a>
            <a class="collapse-item" href="utilities-color.html">Statement</a>
            <a class="collapse-item" href="utilities-border.html">Outstanding</a>
            </div>
        </div>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider">

      <!-- Heading -->
      <div class="sidebar-heading">
        Addons
      </div>

      <!-- Nav Item - Pages Collapse Menu -->
      <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
          <i class="fas fa-fw fa-folder"></i>
          <span>Pages</span>
        </a>
        <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Login Screens:</h6>
            <a class="collapse-item" href="//login.html">Login</a>
            <a class="collapse-item" href="//register.html">Register</a>
            <a class="collapse-item" href="forgot-password.html">Forgot Password</a>
            <div class="collapse-divider"></div>
            <h6 class="collapse-header">Other Pages:</h6>
            <a class="collapse-item" href="404.html">404 Page</a>
            <a class="collapse-item" href="blank.html">Blank Page</a>
          </div>
        </div>
      </li>

      <!-- Nav Item - Charts -->
      <li class="nav-item">
        <a class="nav-link" href="charts.html">
          <i class="fas fa-fw fa-chart-area"></i>
          <span>Charts</span></a>
      </li>

      <!-- Nav Item - Tables -->
      <li class="nav-item">
        <a class="nav-link" href="tables.html">
          <i class="fas fa-fw fa-table"></i>
          <span>Tables</span></a>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider d-none d-md-block">

      <!-- Sidebar Toggler (Sidebar) -->
      <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
      </div>

    </ul>
    <!-- End of Sidebar -->
	

<!-- <Header/> -->

</template>

<script>
 
	export default {
	name: "Sidebar"
	}
</script>
