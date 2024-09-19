import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteProductAction, getAllProducts } from '../redux/actions/productActions';
import { TheContextApi } from '../contextApi/TheContext';

const ProductsList = () => {

  const {
    keyword, setKeyword
    
  } = useContext(TheContextApi);

  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(0);
 

 
  const deleteProduct = (id)=>{

    const isConfirmed = window.confirm(`Are you sure want to delete product`);

    if(isConfirmed){
      dispatch(deleteProductAction(id));
      dispatch(getAllProducts(keyword, currentPage));
    }else{
      return
    }

  }



  const dispatch = useDispatch();
  const bannersPerPage = 5;
  const {
    loading,
    products,
    error,
    productCount,
    productCountWithApiFeatures,
  } = useSelector((state) => state?.products);

  
  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected + 1);
    // setCurrentPage(e);
  };

  useEffect(() => {
    dispatch(
      getAllProducts(
        keyword,
        currentPage
      )
    );
  }, [
    keyword,
   
    currentPage,
    dispatch,
  ]);

  return (
    <>
     <div  style={{marginTop: "20px"}}>
     <Navbar />
     
    <table class="table bg-dark">
  <thead className='bg-dark'>
    <tr >
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Selling Price</th>
      <th scope="col">Recommended</th>
      <th scope="col">Best Seller</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {products && products?.map((product, index)=>(

<tr>
<th scope="row">{index + 1}</th>
<td>{product?.title}</td>
<td>{product?.price}</td>
<td>
  <div class="form-check form-switch" style={{display: "inline-block"}}>
<input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={product?.recommended ? true : false}/>
</div>
</td>
<td>
<div class="form-check form-switch" style={{display: "inline-block"}}>
<input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={product?.bestSeller ? true : false} />
</div>
</td>
<td>     

  <div class="form-check form-switch" style={{display: "inline-block"}}>
  <i class="fa-solid fa-trash" onClick={()=>deleteProduct(product?._id)}></i>
  <i class="fas fa-edit" style={{marginLeft: "10px"}}></i>
<input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
</div>
</td>
</tr>

    ))}
   
   

  </tbody>
</table>
{products && productCount <= 5 ? "" :
<ReactPaginate
            forcePage={0}
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
      
            pageCount={Math.ceil(
              Math.max(
                0,
                typeof productCountWithApiFeatures === "number" &&
                  productCountWithApiFeatures >= 0
                  ? productCountWithApiFeatures
                  : typeof productCount === "number" && productCount >= 0
                  ? productCount
                  : 0
              ) / bannersPerPage
            )}
            marginPagesDisplayed={1}
            pageRangeDisplayed={1}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
}
    </div>
    
    </>
  )
}

export default ProductsList