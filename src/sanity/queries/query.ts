import { defineQuery } from "next-sanity";

const BRAND_QUERY = defineQuery(`*[_type == "brand"] | order(name asc)`);

const LATEST_BLOG = defineQuery(
  `*[_type == 'blog' && isLatest == true]|order(name asc){
      ...,
      blogcategories[]->{
      title
    }
    }`
);

const DEAL_PRODUCTS = defineQuery(
  `*[_type == "product" && status == "hot"] | order(name desc){
    ...,"categories":categories[]->title
  }`
) 

const PRODUCT_BY_SLUG_QUERY = defineQuery(`
    *[_type == "product" && slug.current == $slug] | order(name asc) [0]
  `)

  const SLUG_BRAND_QUERY = defineQuery(`*[_type == "product" && slug.current == $slug]{
    "brandName": brand->title
    }`)

    const ORDERS_QUERY = defineQuery(`
      *[_type == "order" && clerkUserId == $userId] | order(orderData desc){
      ..., products[]{
      ..., product->
      }
      }
      `)

    const SINGLE_BLOG_QUERY = defineQuery(`
      *[_type == "blog" && slug.current == $slug][0] {
      ...,
      author -> {
      name,
      image
      },
      blogcategories[] -> {
      title,
      "slug": slug.current,
      },
      }
      `)

      const BLOG_CATEGORIES = defineQuery(
        `*[_type == "blog"]{
           blogcategories[]->{
          ...
          }
        }`
      );
      
      const OTHERS_BLOG_QUERY = defineQuery(`*[
        _type == "blog"
        && defined(slug.current)
        && slug.current != $slug
      ]|order(publishedAt desc)[0...$quantity]{
      ...
        publishedAt,
        title,
        mainImage,
        slug,
        author->{
          name,
          image,
        },
        categories[]->{
          title,
          "slug": slug.current,
        }
      }`);

export { BRAND_QUERY };
export { SINGLE_BLOG_QUERY };
export { LATEST_BLOG };
export { DEAL_PRODUCTS };
export { PRODUCT_BY_SLUG_QUERY };
export { SLUG_BRAND_QUERY };
export { ORDERS_QUERY };
export { OTHERS_BLOG_QUERY };
export { BLOG_CATEGORIES };
