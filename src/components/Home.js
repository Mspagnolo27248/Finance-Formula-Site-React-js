import Navbar from "./Navbar";


function Home() {

    return (
        <div>
         <Navbar/>
            <div>
                <h1>Welcome to  Finance Formulas</h1>
            </div>

            <div>
                <a href="/PresentValue"><h2>Present Value</h2></a>
            </div>


            <div>
                <a href="/FutureValue"><h2>Future Value</h2></a>
            </div>
            
            <div>
                <a href="/LoanPayment"><h2>Loan Payment</h2></a>
            </div>

        </div>
    )
}

export default Home;