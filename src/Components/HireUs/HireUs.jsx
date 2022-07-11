import stairs from "../Images/stairs.jpg";
import "./HireUs.css"

let imgData=[
    {
        id:1,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1hi3OPMdCym7kX3QNx3sNMEGGrqTQtEqdO9UrSeizFgb6qviTuBUbjtzthm6ST9DV0a4&usqp=CAU"
    },
    {
        id:2,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhYPAzA996VKSf488X8MGLBWVO5NDmtDvLigwgGXUbqDFqDylEqQt_405sMyCSNPj_-2I&usqp=CAU"
    },
    {
        id:3,
          img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAiT2IKXiNcJh3ImiCPADW_ZQxiu75HgeRZwgfoKyC31KMe8vW392s80eS-PfBlyGkF-0&usqp=CAU"
    },
    {
        id:4,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjlwe8D01Yul62wlvTy1O1-mQtV8naFmeQfTPJrIDR1WCPkwl9qskoaOmnBR8Pl-CxbuI&usqp=CAU"
    },
    {
        id:5,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1hi3OPMdCym7kX3QNx3sNMEGGrqTQtEqdO9UrSeizFgb6qviTuBUbjtzthm6ST9DV0a4&usqp=CAU"
    }
];



export const HireUs=()=>{ 

    return (
        <div className="hireUs overlays"    style={{ "backgroundImage": `url(${stairs})` }}>


            <div className="container"> 
      
            <p  style={{color:"rgba(255, 166, 1, 0.993)", marginBottom:"0"}}>get quick way</p>
            <h1>Why Hire Us?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolor maxime 
                quasi officia mollitia amet similique, ducimus debitis aliquid dolorem .</p>


            <div className="zoom-divs"> 
               {
                imgData.map((el)=>{
                   return <div key={el.id} className="zoom">
                        <img src={el.img} alt="" />
                    </div>
                })
               }
            </div>

            <button className="button" style={{position:"sticky"}}>click me</button>

            </div>
          
        </div>
    )
}