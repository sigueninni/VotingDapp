import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";
import Title from "./Title";
import Cta from "./Cta";
import Contract from "./Contract";
import ContractBtns from "./ContractBtns";
import Desc from "./Desc";
import NoticeNoArtifact from "./NoticeNoArtifact";
import NoticeWrongNetwork from "./NoticeWrongNetwork";

function Demo() {
  const { state } = useEth();
  const [winningProposalID, setWinningProposalID] = useState("?");

  const demo =
    <>
      <Cta />
      <div className="contract-container">
        <Contract winningProposalID={winningProposalID} />
        <ContractBtns  />
      </div>
      <Desc />
    </>;

  return (
    <div className="demo">
      <Title />
      {
     
            demo
      }
    </div>
  );
}

export default Demo;
