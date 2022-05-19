import { useEffect, useState } from "react";
import Layout from "../shared/Layout";
import axios from "axios"


export default function Home () {
const [recipe,setRecipe] = useState([])

const fetchData = async () => {
    try {
        const response = await axios('http://localhost:3000/api/recipes')

        console.log(response.data.recipes)

        setRecipe(response.data.recipes)

    }catch (err) {
        console.error(err)
    }
}
useEffect(()=>{
    fetchData()
},[])

    return(
        <Layout>
             <div>
            <h1 className=" pt-5 text-3xl font-bold flex justify-center">this is home page</h1>
            </div>

            <div className="p-10">
          <p > Lorem ipsum dolor sit amet, his ferri dicat saepe in. Mel dolore vivendo cu. Quot doming molestie quo an, et quis volutpat efficiendi duo. Accusam adolescens te pri, possit dictas contentiones an eam, nam ut eros ludus minimum. Dictas democritum cu eos, eu inimicus imperdiet cum.

Commodo discere his cu, ius ad quas oporteat. Cu modus phaedrum per. Populo luptatum pro ea. Vix ad eros accusata, te sea minimum iracundia. Mel officiis similique at, eu nostro pertinacia vis. Ne vix fuisset forensibus.

Quaeque imperdiet sed id, facer ponderum convenire an per. Ridens graeco efficiantur at nec. Case detraxit aliquando eos ad. Pro lorem fastidii definiebas id. No eos diam exerci splendide, animal integre vim eu. At delectus detraxit cum, et has copiosae verterem.

Usu tale natum facete ad, ornatus corpora sea eu, dicant nostrum te mei. Tamquam percipitur sit ut. Cum saperet deserunt in. Ius erat tantas neglegentur no, nec nibh graeci cu. Ei vel vidit audire inciderint, ea pro paulo exerci invidunt.

Primis mentitum mea te, eam no soluta accumsan instructior. Eam dictas timeam maiorum ne. In clita albucius sadipscing eos, sed eu tale postea essent, meliore persecuti necessitatibus nec et. Cibo partem ne per. At ipsum tamquam voluptua sed. Per enim feugiat vivendo et.
</p>
            </div>

        </Layout>
    )
}