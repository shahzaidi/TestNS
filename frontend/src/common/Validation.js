import * as Yup from "yup";

// product validation

export const productInitialValues = {
 
  name: "",

  price: "",

  //   discount: "",
  variantsAndPrices: [],
  sku: "",
  status: "",
  metaDescription: "",
  metaTitle: "",
  metaKeyword: "",
  bestSeller: false,
  bestOffer: false,
  featuredProduct: false,
};


export const productValidationSchema = Yup.object({
  name: Yup.string()
    .max(100, "Product name not more than least 100 char..")
    .required("Product name is required")
    .min(4, "Product name must be at least 4 char.."),
  variantsAndPrices: Yup.array()
    // .of(
    //   Yup.object().shape({
    //     name: Yup.string().required("Variant is required"),
    //     price: Yup.number().required("Variant Price is required"),
    //   })
    // )
    .min(1, "At least one Variants is required"),
  
  price: Yup.number()
    .required("Price is required")
    .typeError("Price must be a number"),
  manufacturer: Yup.string().required("Product  manufacturer is required"),

  strength: Yup.string().required("Product  strength is required"),
  dosage: Yup.string().required("Product  dosage is required"),
  slug: Yup.string()
    .max(200, "Product  slug not more than least 200 char..")
    .required("Product  slug is required")
    .min(2, "Product  slug must be at least 2 char.."),
  sku: Yup.string()
    .max(20, "Product  sku not more than least 20 char..")
    .required("Product  sku is required")
    .min(2, "Product  sku must be at least 2 char.."),
  status: Yup.string().required("Status is required"),
  metaDescription: Yup.string()
    .max(100000, "Product Meta description not more than least 500 char..")
    .min(7, "Product Meta description must be at least 7 char..")
    .required("Product Meta description is required"),
  metaTitle: Yup.string()
    .max(10000, "Product Meta title not more than least 500 char..")
    .required("Product Meta title is required")
    .min(7, "Product Meta title must be at least 7 char.."),
  metaKeyword: Yup.string()
    .max(10000, "Product Meta keyword not more than least 500 char..")
    .required("Product Meta keyword is required")
    .min(7, "Product Meta keyword must be at least 7 char.."),
});


// Register User

// user register

export const registerInitialValues = {
  name: "",
  email: "",
  password: "",
};

export const registerValidationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  name: Yup.string()
    .max(20, "Name not more than least 20 char..")
    .required("Name is required")
    .min(2, "Name must be at least 2 char.."),
  password: Yup.string()
    .max(20, "Password not more than least 20 char..")
    .required("Password is required")
    .min(8, "Password must be at least 8 char.."),

});

// Login User

export const loginInitialValues = {
  email: "",
  password: "",
};

export const loginValidationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
  .max(20, "Password not more than least 20 char..")
  .required("Password is required")
  .min(8, "Password must be at least 8 char.."),
});









