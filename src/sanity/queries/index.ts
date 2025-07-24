import { sanityFetch } from "../lib/live";
import { BLOG_CATEGORIES, BRAND_QUERY, DEAL_PRODUCTS, LATEST_BLOG, ORDERS_QUERY, OTHERS_BLOG_QUERY, PRODUCT_BY_SLUG_QUERY, SINGLE_BLOG_QUERY, SLUG_BRAND_QUERY } from "./query";

const getCategories = async (quantity?: number) => {
    try {
      const query = quantity
        ? `*[_type == 'category'] | order(name asc) [0...$quantity] {
            ...,
            "productCount": count(*[_type == "product" && references(^._id)])
          }`
        : `*[_type == 'category'] | order(name asc) {
            ...,
            "productCount": count(*[_type == "product" && references(^._id)])
          }`;
      const { data } = await sanityFetch({
        query,
        params: quantity ? { quantity } : {},
      });
      return data;
    } catch (error) {
      console.log("Error fetching categories", error);
      return [];
    }
  };

const getBrands =  async () => {
  try{
    const { data } = await sanityFetch({
      query: BRAND_QUERY
    })
    return data ?? []
  }catch (error){
    console.log("Error Fetching Brands", error)
    return []
  }
}

const getLatestBlog =  async () => {
  try{
    const { data } = await sanityFetch({
      query: LATEST_BLOG
    })
    return data ?? []
  }catch (error){
    console.log("error fetching latest blogs", error)
    return []
  }
}

const getDealProducts = async () => {
  try{
    const {data} = await sanityFetch({
      query: DEAL_PRODUCTS
    })
    return data ?? []
  }catch (error){
    console.log("Error fecthing Deals", error)
    return []
  }
}

const getSlugProducts = async (slug: string) => {
  try{
    const {data} = await sanityFetch({
      query: PRODUCT_BY_SLUG_QUERY,
      params: {
        slug
      }
    })
    return data ?? null
  }catch (error){
    console.log("Error fecthing slug products", error)
    return []
  }
}

const getSlugBrandName = async (slug: string) => {
  try{
    const {data} = await sanityFetch({
      query: SLUG_BRAND_QUERY,
      params: {
        slug
      }
    })
    return data ?? []
  }catch (error){
    console.log("Error fecthing slug products", error)
    return []
  }
}

const getOrdersData = async (userId: string) => {
  try{
    const {data} = await sanityFetch({
      query: ORDERS_QUERY,
      params: {
        userId
      }
    })
    return data 
  }catch (error){
    console.log("Error fecthing Orders", error)
    return []
  }
}

const getSingleBlog = async (slug: string) => {
  try{
    const {data} = await sanityFetch({
      query: SINGLE_BLOG_QUERY,
      params: { slug }
    })
    return data ?? null
  }catch (error){
    console.log("Error fecthing Orders", error)
    return null
  }
}

const getBlogCategories = async () => {
  try {
    const { data } = await sanityFetch({
      query: BLOG_CATEGORIES,
    });
    return data ?? [];
  } catch (error) {
    console.log("Error fetching all brands:", error);
    return [];
  }
};

const getOthersBlog = async (slug: string, quantity: number) => {
  try {
    const { data } = await sanityFetch({
      query: OTHERS_BLOG_QUERY,
      params: { slug, quantity },
    });
    return data ?? [];
  } catch (error) {
    console.log("Error fetching all brands:", error);
    return [];
  }
};

export { getCategories };
export { getBrands };
export { getLatestBlog };
export { getDealProducts };
export { getSlugProducts };
export { getSlugBrandName };
export { getOrdersData };
export { getSingleBlog };
export { getBlogCategories };
export { getOthersBlog };