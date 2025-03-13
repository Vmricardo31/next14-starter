import Link from "next/link";

const navBar = () => {
   return(
    <div>
        <div>Logo</div>
        <div>
            <Link href="/Home"></Link>
            <Link href="/contact"></Link>
            <Link href="/blog"></Link>

        </div>
    </div>
   )
 }

 export default navBar;
 