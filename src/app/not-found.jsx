import Link from "next/link";

  const not_found = () => {
    return(
      <div>not-found
      <p>Sorry, page not found</p>
      <Link href="/">Go back to the homepage</Link>
      </div>
  )
   }
    
    export default not_found;