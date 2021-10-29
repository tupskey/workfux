// import { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
// import queryString from 'query-string'


// const ConfirmVerify = ({verifyEmail}) => {

// const   
// EmailStatus = {
//     Verifying: 'Verifying',
//     Failed : 'Failed'
// }

// const history = useHistory();

// const [emailStatus, setEmailStatus] = useState(EmailStatus.Verifying)

// useEffect(()=> {
//     const token = queryString.parse(window.location.search)

//     history.replace(window.location.pathname);
     
//     verifyEmail(token)
//     .then(() => {
//         history.push('/join')
//     })
//     .catch(()=> {
//         setEmailStatus(EmailStatus.Failed);
//     })

// }, [EmailStatus.Failed, history, verifyEmail])

// function getBody () {
//     switch(emailStatus) {
//         case EmailStatus.Verifying:
//             return <div>Verifying........</div>
//         case EmailStatus.Failed:
//             return <div>Verificaion Failed</div>
//         default:
//             return;
//     }
// }

//     return (
//         <>
//             <main id="wt-main" className="wt-main wt-haslayout wt-innerbgcolor">
					
// 					<div className="wt-haslayout wt-main-section">
// 						<div className="container">
// 							<div className="row justify-content-md-center">
//                             <div className="col-xs-12 col-sm-12 col-md-10 push-md-1 col-lg-8 push-lg-2">
// 									<div className="wt-registerformhold">
// 										<div className="wt-registerformmain">
// 											<div className="wt-registerhead">
// 												<div className="wt-title">
//                                                     <h3>Verify Email
//                                                     </h3>
                                                    
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                             </div>
//                             </div>
//                         </div>
//                  </div>
//             </main>
//         </>
//     );
// }

// export default ConfirmVerify

const ConfirmVerify = ()=> {
    return(
        <>
        <p>We</p>
        </>
    )
}

export default ConfirmVerify