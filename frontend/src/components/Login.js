import React, { useContext, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useFormik } from "formik";
import { loginInitialValues, loginValidationSchema } from '../common/Validation';
import { TheContextApi } from '../contextApi/TheContext';
import { useDispatch } from 'react-redux';
import { loginUserAction } from '../redux/actions/userActions';
import Loading from './Loading';

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    const {
     
        loginSignUpLoading,
        setLoginSignUpLoading,
      
        
      } = useContext(TheContextApi);


      useEffect(() => {
        if (localStorage.getItem("user") && Object.keys(JSON.parse(localStorage.getItem("user"))).length !==0 && location.pathname === "/login") {
          navigate("/products");
        }
      }, [location.pathname, loginSignUpLoading]);

    const loginSubmit = (e) => {
              e.preventDefault()
        if (Object.keys(formik.errors).length === 0) {
          dispatch(loginUserAction(formik?.values, setLoginSignUpLoading));
        }
      };

    const formik = useFormik({
        initialValues: loginInitialValues,
        onSubmit: loginSubmit,
        validationSchema: loginValidationSchema,
      });
  return (
    <>
    
    <div className='container shadow-lg p-3 mb-5 bg-body rounded' style={{width: "500px", marginTop: "200px"}}>
    <form onSubmit={formik?.handleSubmit}>
  <div className="form-group row">
    <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="staticEmail" name="email" placeholder='Email' value={formik?.values?.email} onChange={formik.handleChange} />
      
    </div>
  </div>
  {formik?.touched?.email && formik?.errors?.email ? (
  <p   className="danger" style={{color: "red", paddingRight: "180px", marginTop: "10px"}}>{formik?.errors?.email}</p>
) : null}
  <div className="form-group row"  style={{marginTop: "10px"}}>
    <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" name="password" id="inputPassword" placeholder="Password" value={formik?.values?.password}
                  onChange={formik.handleChange} />
    </div>
  </div>
  {formik?.touched?.password && formik?.errors?.password ? (
  <p   className="danger" style={{color: "red", paddingRight: "150px", marginTop: "10px"}}>{formik?.errors?.password}</p>
) : null}
  
  <div className="col-12" style={{marginTop: "10px"}}>
    <button className="btn btn-primary" type="submit"  >{loginSignUpLoading ? <Loading /> : "Submit"}</button>
  </div>

  {/* <label for="signUpLink" className="col-sm-2 col-form-label">Here:-</label> */}
  <button className="btn btn-primary" id="signUpLink" onClick={()=>navigate("/signup")} style={{marginTop: "10px"}} >SignUp</button>
</form>
    
    </div>
    
    
    </>
  )
}

export default Login