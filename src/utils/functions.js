export const fetchStrapi = async(slug,locale,component) => {
  const localhost=process.env.NEXT_PUBLIC_STRAPI_LOCAL_HOST
    const url= (component==='')
    ? `${localhost}/api/${slug}?populate=*&locale=${locale}`
    :`${localhost}/api/${slug}?populate[${component}][populate]=*&locale=${locale}`;

    const request = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`
      },
      cache: "no-store"
    })
    const response = await request.json()
    return response
  }
 
