import React, { useContext } from 'react'
import { TheContextApi } from '../contextApi/TheContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate()
  const {
    keyword, setKeyword
    
  } = useContext(TheContextApi);

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  

  const handleChange = (e)=>setTimeout(()=>{
        setKeyword(e.target.value);
  }, 600)
  return (
    <>
    
    <nav  class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
     
      <form class="d-flex "  style={{marginRight: "auto"}}>
        <input class="form-control me-2" type="text" onChange={(e)=> handleChange(e)} placeholder="Search Product" aria-label="Search" />
        
      </form>
      <button class="btn btn-outline-success" type="submit" style={{marginLeft: "auto"}} onClick={logout}>Logout</button>
    </div>
  </div>
</nav>
    
    </>
  )
}

export default Navbar