//import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";

function ContractBtns() {
  const { state: { contract, accounts } } = useEth();
  //const [inputValue, setInputValue] = useState("");

 /*  const handleInputChange = e => {
    if (/^\d+$|^$/.test(e.target.value)) {
      setInputValue(e.target.value);
    }
  }; */

  const read = async () => {
    debugger;
    const value = await contract.methods.winningProposalID().call({ from: accounts[0] });
    alert(value);
   // setValue(value);
  };

  // const write = async e => {
  //   if (e.target.tagName === "INPUT") {
  //     return;
  //   }
  //   if (inputValue === "") {
  //     alert("Please enter a value to write.");
  //     return;
  //   }
  //   const newValue = parseInt(inputValue);
  //   await contract.methods.write(newValue).send({ from: accounts[0] });
  // };

  return (
    <div className="btns">

      <button onClick={read}>
        read()
      </button>

    </div>
  );
}

export default ContractBtns;
