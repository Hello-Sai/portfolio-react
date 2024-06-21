import React from 'react'

export default function Resume() {
  return (
    // <button onClick={downloadresume} className='btn btn-danger'>
    //   Resume
    // </button>
    
    <button style={{}}><a style={{width:"fit-content",margin:"auto",position:'sticky'}} href='https://www.pythonanywhere.com/user/dagudusai/files/home/dagudusai/Authentcation/static/SaiKumarResumeU.pdf' download="Resume.pdf" >Resume</a></button>

  )
  function downloadresume(){
    // var resume = "https://carrer-sai.s3.ap-southeast-2.amazonaws.com/documents/SaiKumarResume.pdf"
    // const headers = new Headers();
    // headers.append('Content-Type', 'application/pdf');

    // fetch(resume,{
    //     method: 'GET',
    //     mode: 'no-cors',
    //     headers:headers
    // }) .then(response => response.blob())
    // .then(blob => {
    //   // Create a URL for the Blob object
    //   const url = URL.createObjectURL(blob);
      
    //   // Create a link element
    //   const link = document.createElement('a');
    //   link.href = url;
  
    //   // Specify the filename for the downloaded PDF
    //   link.setAttribute('download', 'document.pdf');
  
    //   // Append the link to the body
    //   document.body.appendChild(link);
  
    //   // Trigger the download
    //   link.click();
  
    //   // Clean up: remove the link and revoke the URL
    //   URL.revokeObjectURL(url);
    //   link.remove();
    // })
    // .catch(error => {
    //   console.error('Error:', error);
    // });
  }
}