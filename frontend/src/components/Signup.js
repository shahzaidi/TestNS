import { useFormik } from 'formik';
import React, { useContext, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { registerInitialValues, registerValidationSchema } from '../common/Validation';
import { TheContextApi } from '../contextApi/TheContext';
import { useDispatch } from 'react-redux';
import { registerUserAction } from '../redux/actions/userActions';
import Loading from './Loading';

const Signup = () => {


    const navigate = useNavigate();
    const location = useLocation();

    const {
       
        loginSignUpLoading,
        setLoginSignUpLoading,
       
       
       
      } = useContext(TheContextApi);


      useEffect(() => {
        if (localStorage.getItem("user") && Object.keys(JSON.parse(localStorage.getItem("user"))).length !==0 && location.pathname === "/signup") {
          navigate("/products");
        }
      }, [location.pathname,  loginSignUpLoading]);

    const dispatch = useDispatch();

    const registerSubmit = () => {
    
    
        if (
          Object.keys(formik.errors).length === 0
         
        ) {
          dispatch(registerUserAction(formik?.values, setLoginSignUpLoading));
        }
      };
  
    const formik = useFormik({
      initialValues: registerInitialValues,
      onSubmit: registerSubmit,
      validationSchema: registerValidationSchema,
    });


  return (
    <>
    
    <div className='container shadow-lg p-3 mb-5 bg-body rounded' style={{width: "500px", marginTop: "200px"}}>
    <form>

    <div className="form-group row">
    <label for="staticName" className="col-sm-2 col-form-label">Name</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="staticName" placeholder='Name' name="name" value={formik?.values?.name}
                  onChange={formik.handleChange} />
    </div>
  </div>
  {/* {formik?.touched?.name && formik?.errors?.name ? ( */}
  <p   className="danger" style={{color: "red", paddingRight: "180px", marginTop: "10px"}}>{formik?.errors?.name}</p>
{/* ) : null} */}

  <div className="form-group row" style={{marginTop: "10px"}}>
    <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="staticEmail" name="email" placeholder='Email'  value={formik?.values?.email}
                  onChange={formik.handleChange} />
    </div>
  </div>
  {formik?.touched?.email && formik?.errors?.email ? (
  <p   className="danger" style={{color: "red", paddingRight: "180px",  marginTop: "10px"}}>{formik?.errors?.email}</p>
) : null}
  <div className="form-group row"  style={{marginTop: "10px"}}>
    <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control"  name="password" value={formik?.values?.password}
                  onChange={formik.handleChange} id="inputPassword" placeholder="Password" />
    </div>
  </div>
  {formik?.touched?.password && formik?.errors?.password ? (
  <p   className="danger" style={{color: "red", paddingRight: "150px", marginTop: "10px"}}>{formik?.errors?.password}</p>
) : null}
  <div className="col-12" style={{marginTop: "10px"}}>
    <button className="btn btn-primary" type="submit" onClick={formik?.handleSubmit} >{loginSignUpLoading ? <Loading /> : "Submit"}</button>
  </div>
  <button className="btn btn-primary" id="signUpLink" onClick={()=>navigate("/login")} style={{marginTop: "10px"}} >Login</button>
</form>

    </div>
    
    
    </>
  )
}

export default Signup