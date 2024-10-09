'use client';
import Image from "next/image";
import styles from "../page.module.css";
import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {

    async function SendRomanNumber(e: any){
        e.preventDefault();
    
        const data = {
            String: (e.target.string.value)
        }

        if (!isNaN(data.String)) {
          alert("The data is not a string")  
        }else{
            toInteger(data.String.toUpperCase())
        }
        
      }
    
    function toInteger(data: any) {
        const romanNumerals = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000,
          };
          let result = 0;
          for (let i = 0; i < data.length; i++) {
            const currentSymbol = romanNumerals[data[i]];
            const nextSymbol = romanNumerals[data[i + 1]];
            if (nextSymbol && currentSymbol < nextSymbol) {
              result -= currentSymbol;
            } else {
              result += currentSymbol;
            }
          }
          alert(result);
    }

  return (
      <form onSubmit={SendRomanNumber} className="container col-6 text-center mt-4 bg-light">
        <div>
            <div className="form-group">
                <div className="form-group mb-3">
                    <label>Roman Number</label>
                    <input type="string" className="form-control" id="string" required aria-describedby="emailHelp " />
                </div>
            </div>
            <button type="submit" className="btn btn-primary mt-3 mb-3 mx-auto d-block">Send Roman Number</button>
        </div>
    </form>
  );
}
