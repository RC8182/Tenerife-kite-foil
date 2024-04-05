export const fetchStrapi = async(slug,locale,component1,component2) => {
  const localhost=process.env.NEXT_PUBLIC_STRAPI_LOCAL_HOST
  const token= process.env.API_TOKEN
    const url= (component1==='')
    ? `${localhost}/api/${slug}?populate=*&locale=${locale}`
    :`${localhost}/api/${slug}?populate[${component1}][populate]=*&populate[${component2}][populate]=*&locale=${locale}`;

    const request = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      cache: "no-store"
    })
    const response = await request.json()
    return response
  }
 
